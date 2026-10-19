import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, User, Star } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiology',
    experience: '15+ years',
    education: 'MD, DM Cardiology',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Renowned cardiologist with expertise in interventional cardiology and cardiac imaging. Performed over 2000 procedures.',
  },
  {
    id: 2,
    name: 'Dr. Arun Kumar',
    specialty: 'Neurology',
    experience: '12+ years',
    education: 'MD, DM Neurology',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Specializes in neurological disorders, stroke management, and neuro-rehabilitation.',
  },
  {
    id: 3,
    name: 'Dr. Meera Reddy',
    specialty: 'Orthopedics',
    experience: '18+ years',
    education: 'MS Orthopedics, Fellowship in Joint Replacement',
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Orthopedic surgeon specializing in joint replacement surgery and sports injuries. Treats national-level athletes.',
  },
  {
    id: 4,
    name: 'Dr. Vikram Singh',
    specialty: 'Oncology',
    experience: '20+ years',
    education: 'MD, DM Medical Oncology',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Extensive experience in treating various types of cancer. Specializes in personalized protocols and immunotherapy.',
  },
  {
    id: 5,
    name: 'Dr. Ananya Desai',
    specialty: 'Pediatrics',
    experience: '14+ years',
    education: 'MD Pediatrics, Fellowship in Neonatology',
    image: 'https://images.pexels.com/photos/5207109/pexels-photo-5207109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Pediatrician and neonatologist who specializes in newborn care and pediatric emergencies.',
  },
  {
    id: 6,
    name: 'Dr. Rahul Menon',
    specialty: 'Gastroenterology',
    experience: '16+ years',
    education: 'MD, DM Gastroenterology',
    image: 'https://images.pexels.com/photos/5454040/pexels-photo-5454040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Specializes in advanced endoscopic procedures and liver diseases. Develops minimally invasive techniques.',
  },
  {
    id: 7,
    name: 'Dr. Nandini Patel',
    specialty: 'Dermatology',
    experience: '10+ years',
    education: 'MD Dermatology',
    image: 'https://images.pexels.com/photos/5215009/pexels-photo-5215009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Specializing in cosmetic dermatology and skin disorders. Combines medical expertise with aesthetic sensibility.',
  },
  {
    id: 8,
    name: 'Dr. Karthik Subramaniam',
    specialty: 'Cardiology',
    experience: '22+ years',
    education: 'MD, DM Cardiology',
    image: 'https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Senior interventional cardiologist with expertise in complex coronary interventions and structural heart disease.',
  }
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", 
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

const AppointmentPage = () => {
  const location = useLocation();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if a doctor ID was passed in the URL (e.g. ?doctor=2)
    const searchParams = new URLSearchParams(location.search);
    const doctorId = searchParams.get('doctor');
    if (doctorId) {
      setSelectedDoctor(Number(doctorId));
      // Scroll to booking section smoothly
      setTimeout(() => {
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor || !appointmentDate || !appointmentTime) return;
    
    setIsSubmitted(true);
    // In a real app, you would send this to your backend here
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const selectedDoctorDetails = doctors.find(d => d.id === selectedDoctor);

  if (isSubmitted && selectedDoctorDetails) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg text-center transform transition-all animate-fade-in">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Your appointment with <span className="font-semibold">{selectedDoctorDetails.name}</span> is successfully scheduled.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-8 text-left border border-blue-100">
            <div className="flex items-center mb-3">
              <Calendar className="w-5 h-5 text-blue-700 mr-3" />
              <span className="text-gray-800 font-medium">Date: {new Date(appointmentDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-700 mr-3" />
              <span className="text-gray-800 font-medium">Time: {appointmentTime}</span>
            </div>
          </div>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setSelectedDoctor(null);
              setAppointmentDate('');
              setAppointmentTime('');
            }}
            className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg')] bg-cover bg-center" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Select from our world-class specialists and schedule a time that works best for you.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 mt-12">
        {/* Step 1: Select Doctor */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Select a Specialist
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map(doctor => (
              <div 
                key={doctor.id} 
                onClick={() => {
                  setSelectedDoctor(doctor.id);
                  setTimeout(() => {
                    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  selectedDoctor === doctor.id 
                    ? 'ring-4 ring-blue-500 shadow-xl' 
                    : 'shadow-md border border-gray-100'
                }`}
              >
                <div className="relative h-48">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  {selectedDoctor === doctor.id && (
                    <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-white bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-blue-800 shadow">
                    {doctor.specialty}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 truncate">{doctor.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                    <span>{doctor.experience}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">{doctor.bio}</p>
                </div>
                <div className={`p-3 text-center font-medium text-sm transition-colors ${
                  selectedDoctor === doctor.id ? 'bg-blue-700 text-white' : 'bg-gray-50 text-blue-700 hover:bg-blue-100'
                }`}>
                  {selectedDoctor === doctor.id ? 'Selected' : 'Select Doctor'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Date and Time (Only visible if doctor is selected) */}
        <div id="booking-section" className={`transition-all duration-700 ease-in-out ${selectedDoctor ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none hidden'}`}>
          <hr className="border-gray-200 mb-12" />
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              {/* Selected Doctor Summary */}
              {selectedDoctorDetails && (
                <div className="bg-blue-50 p-8 md:w-1/3 border-r border-blue-100 flex flex-col justify-center items-center text-center">
                  <img src={selectedDoctorDetails.image} alt={selectedDoctorDetails.name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800">{selectedDoctorDetails.name}</h3>
                  <p className="text-blue-700 font-medium text-lg mt-1">{selectedDoctorDetails.specialty}</p>
                  <p className="text-gray-500 text-sm mt-2">{selectedDoctorDetails.education}</p>
                </div>
              )}
              
              {/* Booking Form */}
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Choose Date & Time
                </h2>
                
                <form onSubmit={handleBooking}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Date Picker */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> Appointment Date
                      </label>
                      <input 
                        type="date" 
                        required
                        value={appointmentDate}
                        min={new Date().toISOString().split('T')[0]} // Cannot book in the past
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
                      />
                    </div>
                    
                    {/* Patient Name (Mock field for UI completeness) */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 flex items-center">
                        <User className="w-4 h-4 mr-2" /> Patient Name
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Full Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-semibold mb-4 flex items-center">
                      <Clock className="w-4 h-4 mr-2" /> Select Time Slot
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setAppointmentTime(time)}
                          className={`py-3 px-2 text-sm rounded-lg border font-medium transition-all ${
                            appointmentTime === time 
                              ? 'bg-blue-700 text-white border-blue-700 shadow-md transform scale-105' 
                              : 'bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:text-blue-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={!appointmentDate || !appointmentTime}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-md flex justify-center items-center ${
                      (!appointmentDate || !appointmentTime) 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg'
                    }`}
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AppointmentPage;
