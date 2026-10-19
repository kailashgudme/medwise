import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Calendar, Phone, MapPin, Activity, Droplet, ArrowLeft, FileText } from 'lucide-react';

interface PatientData {
  type: string;
  id: string;
  name: string;
  age: string;
  gender: string;
  phone: string;
  dob: string;
  address: string;
  bloodGroup: string;
  medicalHistory: string;
}

const PatientInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const dataString = searchParams.get('data');
      
      if (dataString) {
        // Decode the base64 URL data
        const decodedString = decodeURIComponent(escape(atob(dataString)));
        const parsedData = JSON.parse(decodedString) as PatientData;
        
        if (parsedData.type !== 'patient') {
          throw new Error("Invalid QR Code Type");
        }
        
        setPatientData(parsedData);
        
        // Attempt to retrieve local profile photo if available
        const localPhoto = localStorage.getItem(`patient_photo_${parsedData.id}`);
        if (localPhoto) {
          setProfilePhoto(localPhoto);
        }
      } else {
        setError("No patient data found in the URL. Please scan a valid MedWise QR code.");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid or corrupted QR Code data.");
    }
  }, [location]);

  if (error) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center border-t-4 border-red-500">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Reading ID</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md font-medium transition duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (!patientData) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-100 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-blue-700 hover:text-blue-900 mb-6 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Header Banner */}
          <div className="bg-blue-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
              <Activity className="w-64 h-64" />
            </div>
            
            {/* Profile Photo */}
            <div className="relative z-10 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full p-1 shadow-2xl">
                {profilePhoto ? (
                  <img 
                    src={profilePhoto} 
                    alt={patientData.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-blue-300" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white shadow-sm" title="Active Patient"></div>
            </div>

            {/* Basic Info */}
            <div className="relative z-10 text-center md:text-left flex-grow">
              <div className="inline-block px-3 py-1 bg-blue-800 text-blue-100 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                Patient Identity Card
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{patientData.name}</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start text-blue-100 gap-4 mt-3">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" /> {patientData.age} yrs, {patientData.gender}
                </span>
                <span className="flex items-center">
                  <Droplet className="w-4 h-4 mr-1 text-red-400" /> {patientData.bloodGroup || 'Not Specified'}
                </span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Contact & Demographics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-700">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Date of Birth</p>
                  <p className="text-gray-900 font-semibold">{patientData.dob ? new Date(patientData.dob).toLocaleDateString() : 'N/A'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Phone Number</p>
                  <p className="text-gray-900 font-semibold">{patientData.phone || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-start md:col-span-2">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Address</p>
                  <p className="text-gray-900 font-semibold">{patientData.address || 'N/A'}</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Medical Profile</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-lg mr-4 text-red-600 flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">Medical History / Documents</p>
                  {patientData.medicalHistory ? (
                    <div className="bg-white p-4 rounded border border-gray-200 text-gray-800 text-sm">
                      {patientData.medicalHistory}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No medical history provided during registration.</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400">
                Patient ID: {patientData.id} • Authenticated by MedWise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfoPage;
