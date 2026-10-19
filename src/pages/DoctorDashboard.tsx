import React, { useState, useEffect } from 'react';
import { Calendar, Clock, FileText, Users, Phone, MapPin, Award } from 'lucide-react';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [doctorProfile, setDoctorProfile] = useState<any>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('currentDoctor');
    if (savedProfile) {
      setDoctorProfile(JSON.parse(savedProfile));
    }
  }, []);

  const appointments = [
    {
      id: 1,
      patientName: 'John Doe',
      time: '09:00 AM',
      type: 'General Checkup',
      status: 'Confirmed'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'Confirmed'
    },
    // Add more appointments as needed
  ];

  const reports = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-03-15',
      type: 'Blood Test',
      status: 'Completed'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2024-03-14',
      type: 'X-Ray',
      status: 'Pending'
    },
    // Add more reports as needed
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100 bg-gray-100 flex-shrink-0">
            {doctorProfile?.profilePhoto ? (
              <img src={doctorProfile.profilePhoto} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <svg className="h-full w-full text-gray-400 p-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Dr. {doctorProfile?.fullName || 'Smith'}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Award size={16} className="text-blue-700 mr-1" />
                {doctorProfile?.specialty || 'General Practitioner'}
              </div>
              <div className="flex items-center">
                <FileText size={16} className="text-blue-700 mr-1" />
                Reg No: {doctorProfile?.registrationNumber || 'MED-12345'}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-700">
                <Phone size={16} className="text-gray-400 mr-2" />
                {doctorProfile?.phone || '+1 (555) 123-4567'}
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin size={16} className="text-gray-400 mr-2" />
                {doctorProfile?.hospitalName || 'MedWise Central Hospital'}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Today's Appointments</h3>
              <Calendar className="text-blue-700" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-700">8</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Pending Reports</h3>
              <FileText className="text-blue-700" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-700">3</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Total Patients</h3>
              <Users className="text-blue-700" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-700">150</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
              <Clock className="text-blue-700" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-700">9:00 - 17:00</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'appointments'
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('appointments')}
              >
                Today's Appointments
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'reports'
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reports')}
              >
                Patient Reports
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'appointments' ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-700 hover:text-blue-900">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reports.map((report) => (
                      <tr key={report.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{report.patientName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{report.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{report.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              report.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-700 hover:text-blue-900">View Report</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;