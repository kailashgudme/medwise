import React, { useState, useEffect } from 'react';
import { Calendar, FileText, Clock, Plus, Phone, MapPin, Droplet } from 'lucide-react';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [patientProfile, setPatientProfile] = useState<any>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('currentPatient');
    if (savedProfile) {
      setPatientProfile(JSON.parse(savedProfile));
    }
  }, []);

  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Smith',
      specialty: 'Cardiology',
      date: '2024-03-20',
      time: '09:00 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctorName: 'Dr. Johnson',
      specialty: 'Neurology',
      date: '2024-03-25',
      time: '02:30 PM',
      status: 'Pending'
    }
  ];

  const reports = [
    {
      id: 1,
      type: 'Blood Test',
      date: '2024-03-15',
      doctor: 'Dr. Smith',
      status: 'Available'
    },
    {
      id: 2,
      type: 'X-Ray',
      date: '2024-03-10',
      doctor: 'Dr. Johnson',
      status: 'Available'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative">
          <div className="absolute top-6 right-6">
            <button className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 flex items-center shadow-sm">
              <Plus size={18} className="mr-2" />
              Book Appointment
            </button>
          </div>

          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100 bg-gray-100 flex-shrink-0 mt-12 md:mt-0">
            {patientProfile?.profilePhoto ? (
              <img src={patientProfile.profilePhoto} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <svg className="h-full w-full text-gray-400 p-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
          
          <div className="flex-grow text-center md:text-left pt-2 md:pt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {patientProfile?.fullName || 'John Doe'}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <span className="font-medium mr-1">Age:</span> {patientProfile?.age || '32'} yrs
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1">Gender:</span> <span className="capitalize">{patientProfile?.gender || 'Male'}</span>
              </div>
              <div className="flex items-center text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded-full">
                <Droplet size={14} className="mr-1" />
                {patientProfile?.bloodGroup || 'O+'}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-700">
                <Phone size={16} className="text-gray-400 mr-2" />
                {patientProfile?.phone || '+1 (555) 987-6543'}
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin size={16} className="text-gray-400 mr-2" />
                {patientProfile?.address || '123 Medical Way, Health City, HC 12345'}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h3>
              <Calendar className="text-blue-700" size={24}/>
            </div>
            <p className="text-3xl font-bold text-blue-700">2</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Reports</h3>
              <FileText className="text-blue-700" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-700">5</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Next Appointment</h3>
              <Clock className="text-blue-700" size={24} />
            </div>
            <p className="text-lg font-medium text-blue-700">Mar 20, 09:00 AM</p>
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
                My Appointments
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'reports'
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reports')}
              >
                Medical Reports
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
                        Doctor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Specialty
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
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
                          <div className="text-sm font-medium text-gray-900">{appointment.doctorName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.specialty}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              appointment.status === 'Confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
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
                        Report Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doctor
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
                          <div className="text-sm font-medium text-gray-900">{report.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{report.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{report.doctor}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-700 hover:text-blue-900">Download</button>
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

export default PatientDashboard;