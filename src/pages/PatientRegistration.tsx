import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';

const PatientRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    gender: 'male',
    phone: '',
    dateOfBirth: '',
    address: '',
    bloodGroup: '',
    medicalHistory: '',
    profilePhoto: '',
  });
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const patientId = uuidv4();
    const qrData = JSON.stringify({
      type: 'patient',
      id: patientId,
      name: formData.fullName,
      age: formData.age,
      gender: formData.gender,
      phone: formData.phone,
      dob: formData.dateOfBirth,
      address: formData.address,
      bloodGroup: formData.bloodGroup,
      medicalHistory: formData.medicalHistory
    });
    
    if (formData.profilePhoto) {
      localStorage.setItem(`patient_photo_${patientId}`, formData.profilePhoto);
    }
    
    const encodedData = btoa(unescape(encodeURIComponent(qrData)));
    const qrUrl = `${window.location.origin}/patient/info?data=${encodedData}`;
    setQrCode(qrUrl);
    
    // Save to localStorage for profile visualization
    localStorage.setItem('currentPatient', JSON.stringify({
      ...formData,
      id: patientId,
      profilePhoto: formData.profilePhoto || undefined
    }));
    
    // Small delay to allow user to see QR code if they want, but usually redirect
    setTimeout(() => {
      navigate('/patient/dashboard');
    }, 1500);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Patient Registration</h1>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex items-center mb-2">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300 flex-shrink-0 flex justify-center items-center">
                  {formData.profilePhoto ? (
                    <img src={formData.profilePhoto} alt="Profile" className="h-full w-full object-cover" />
                  ) : (
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <div className="ml-5">
                  <label className="block text-gray-700 font-medium mb-1">Profile Photo (Optional)</label>
                  <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-1.5 px-3 rounded-md text-sm font-medium transition duration-300 shadow-sm inline-block">
                    <span>Upload Photo</span>
                    <input 
                      type="file" 
                      className="sr-only" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData({...formData, profilePhoto: reader.result as string});
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Blood Group</label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Medical History Report (Optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors bg-gray-50 group cursor-pointer" onClick={() => document.getElementById('file-upload')?.click()}>
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 group-hover:text-blue-500 transition-colors"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <div className="relative bg-transparent rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.txt"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFormData({...formData, medicalHistory: e.target.files[0].name});
                            }
                          }}
                        />
                      </div>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, TXT, DOCX, PNG, JPG up to 10MB</p>
                    {formData.medicalHistory && (
                      <p className="text-sm text-blue-600 font-medium mt-2 bg-blue-50 inline-block px-3 py-1 rounded-full">
                        Selected: {formData.medicalHistory}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="mt-6 w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Register
            </button>
          </form>

          {qrCode && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your QR Code</h2>
              <div className="flex justify-center mb-4">
                <QRCodeSVG value={qrCode} size={200} />
              </div>
              <p className="text-gray-600">
                Save this QR code for quick access to your medical records and appointments.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;