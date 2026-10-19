import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, ChevronDown } from 'lucide-react';

const DoctorsPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiology',
      experience: '15+ years',
      education: 'MD, DM Cardiology',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Priya Sharma is a renowned cardiologist with expertise in interventional cardiology and cardiac imaging. She has performed over 2000 cardiac procedures and is known for her patient-centered approach.',
      languages: ['English', 'Hindi', 'Telugu']
    },
    {
      id: 2,
      name: 'Dr. Arun Kumar',
      specialty: 'Neurology',
      experience: '12+ years',
      education: 'MD, DM Neurology',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Arun Kumar specializes in neurological disorders, stroke management, and neuro-rehabilitation. He has published several research papers in international medical journals.',
      languages: ['English', 'Hindi', 'Tamil']
    },
    {
      id: 3,
      name: 'Dr. Meera Reddy',
      specialty: 'Orthopedics',
      experience: '18+ years',
      education: 'MS Orthopedics, Fellowship in Joint Replacement',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Meera Reddy is an orthopedic surgeon specializing in joint replacement surgery and sports injuries. She has treated numerous national-level athletes and is a pioneer in minimally invasive techniques.',
      languages: ['English', 'Telugu', 'Kannada']
    },
    {
      id: 4,
      name: 'Dr. Vikram Singh',
      specialty: 'Oncology',
      experience: '20+ years',
      education: 'MD, DM Medical Oncology',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Vikram Singh is a medical oncologist with extensive experience in treating various types of cancer. He specializes in personalized cancer treatment protocols and immunotherapy.',
      languages: ['English', 'Hindi', 'Punjabi']
    },
    {
      id: 5,
      name: 'Dr. Ananya Desai',
      specialty: 'Pediatrics',
      experience: '14+ years',
      education: 'MD Pediatrics, Fellowship in Neonatology',
      image: 'https://images.pexels.com/photos/5207109/pexels-photo-5207109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Ananya Desai is a pediatrician and neonatologist who specializes in newborn care and pediatric emergencies. She is known for her gentle approach with children and clear communication with parents.',
      languages: ['English', 'Hindi', 'Gujarati']
    },
    {
      id: 6,
      name: 'Dr. Rahul Menon',
      specialty: 'Gastroenterology',
      experience: '16+ years',
      education: 'MD, DM Gastroenterology',
      image: 'https://images.pexels.com/photos/5454040/pexels-photo-5454040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Rahul Menon is a gastroenterologist who specializes in advanced endoscopic procedures and liver diseases. He has been instrumental in developing minimally invasive techniques for gastrointestinal disorders.',
      languages: ['English', 'Malayalam', 'Tamil']
    },
    {
      id: 7,
      name: 'Dr. Nandini Patel',
      specialty: 'Dermatology',
      experience: '10+ years',
      education: 'MD Dermatology',
      image: 'https://images.pexels.com/photos/5215009/pexels-photo-5215009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Nandini Patel is a dermatologist specializing in cosmetic dermatology and skin disorders. She combines medical expertise with aesthetic sensibility to provide comprehensive skin care solutions.',
      languages: ['English', 'Hindi', 'Gujarati']
    },
    {
      id: 8,
      name: 'Dr. Karthik Subramaniam',
      specialty: 'Cardiology',
      experience: '22+ years',
      education: 'MD, DM Cardiology, Fellowship in Interventional Cardiology',
      image: 'https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Karthik Subramaniam is a senior interventional cardiologist with expertise in complex coronary interventions and structural heart disease. He has pioneered several techniques in cardiac care.',
      languages: ['English', 'Tamil', 'Telugu']
    }
  ];

  const specialties = [
    'all',
    ...Array.from(new Set(doctors.map(doctor => doctor.specialty)))
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Doctors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Specialist Doctors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Meet our team of experienced and dedicated doctors who provide exceptional care to our patients.
          </p>
          <Link
            to="/appointment"
            className="bg-white hover:bg-blue-50 text-blue-700 py-3 px-6 rounded-md font-medium transition duration-300 inline-flex items-center"
          >
            Book an Appointment
            <Calendar size={18} className="ml-2" />
          </Link>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search doctor or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {specialties.map((specialty, index) => (
                    <option key={index} value={specialty}>
                      {specialty === 'all' ? 'All Specialties' : specialty}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctors List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                      <p className="text-blue-700 font-medium mb-2">{doctor.specialty}</p>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <span className="mr-3">{doctor.experience} Experience</span>
                        <span>{doctor.education}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
                      <div className="flex justify-between items-center">
                        <Link
                          to={`/doctors/${doctor.id}`}
                          className="text-blue-700 hover:text-blue-800 font-medium text-sm"
                        >
                          View Profile
                        </Link>
                        <Link
                          to={`/appointment?doctor=${doctor.id}`}
                          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-300 flex items-center"
                        >
                          <Calendar size={14} className="mr-1" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No doctors found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Medical Team</h2>
              <p className="text-xl text-blue-100 mb-8">
                We are always looking for talented and dedicated medical professionals to join our team. If you are passionate about providing exceptional healthcare, we would love to hear from you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <span>Work with state-of-the-art medical technology</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <span>Opportunities for professional growth and development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <span>Collaborate with leading healthcare professionals</span>
                </li>
              </ul>
              <Link to="/careers" className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-md font-medium transition duration-300">
                Explore Careers
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Medical Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;