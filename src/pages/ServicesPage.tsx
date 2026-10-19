import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Bone, Activity, Microscope, Baby, Stethoscope, Eye } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      icon: <Heart className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Non-invasive cardiac testing',
        'Interventional procedures',
        'Cardiac rehabilitation',
        'Heart failure management'
      ]
    },
    {
      id: 2,
      title: 'Neurology',
      description: 'Expert care for disorders of the brain, spine, and nervous system.',
      icon: <Brain className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/8376345/pexels-photo-8376345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Neurological diagnostics',
        'Stroke management',
        'Movement disorders treatment',
        'Neuro-rehabilitation'
      ]
    },
    {
      id: 3,
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, ligaments, tendons, and muscles.',
      icon: <Bone className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/4506165/pexels-photo-4506165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Joint replacement surgery',
        'Sports injuries treatment',
        'Spine surgery',
        'Orthopedic rehabilitation'
      ]
    },
    {
      id: 4,
      title: 'Oncology',
      description: 'Comprehensive cancer care with cutting-edge treatments and therapies.',
      icon: <Activity className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/3952240/pexels-photo-3952240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Medical oncology',
        'Radiation therapy',
        'Surgical oncology',
        'Cancer rehabilitation'
      ]
    },
    {
      id: 5,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      icon: <Baby className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Neonatal care',
        'Pediatric emergency care',
        'Child development services',
        'Pediatric subspecialties'
      ]
    },
    {
      id: 6,
      title: 'Diagnostics',
      description: 'State-of-the-art diagnostic services for accurate and quick results.',
      icon: <Microscope className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Advanced imaging (MRI, CT, PET)',
        'Laboratory services',
        'Molecular diagnostics',
        'Cardiac diagnostics'
      ]
    },
    {
      id: 7,
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare services for all age groups.',
      icon: <Stethoscope className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Preventive health checkups',
        'Chronic disease management',
        'Travel medicine',
        'Geriatric care'
      ]
    },
    {
      id: 8,
      title: 'Ophthalmology',
      description: 'Specialized care for eye disorders and vision correction.',
      icon: <Eye className="h-10 w-10 text-blue-700" />,
      image: 'https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Cataract surgery',
        'Refractive surgery',
        'Corneal treatments',
        'Retinal procedures'
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Apollo Hospitals offers a comprehensive range of healthcare services with state-of-the-art technology and expert medical professionals.
          </p>
          <Link
            to="/appointment"
            className="bg-white hover:bg-blue-50 text-blue-700 py-3 px-6 rounded-md font-medium transition duration-300 inline-flex items-center"
          >
            Book an Appointment
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-blue-50 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="text-blue-700 mr-2">✓</div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 transition duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Health Packages */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Packages</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive health check packages designed for preventive care and early detection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-800">
              <div className="bg-blue-100 p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-800">Basic Health Check</h3>
                <p className="text-blue-700 text-lg mt-1">₹4,999</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Complete Blood Count
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Diabetes Screening
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Kidney Function Test
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Lipid Profile
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Chest X-Ray
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Doctor Consultation
                  </li>
                </ul>
                <Link
                  to="/appointment?package=basic"
                  className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium transition duration-300"
                >
                  Book Package
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-800 transform scale-105 z-10">
              <div className="bg-blue-600 p-4 text-center text-white">
                <div className="inline-block bg-yellow-400 text-blue-800 text-xs font-bold py-1 px-2 rounded-full mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold">Comprehensive Check</h3>
                <p className="text-blue-100 text-lg mt-1">₹9,999</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    All Basic Health Check Tests
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Thyroid Profile
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Vitamin Deficiency Panel
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    ECG
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Ultrasonography (Abdomen)
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Specialist Consultation
                  </li>
                </ul>
                <Link
                  to="/appointment?package=comprehensive"
                  className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium transition duration-300"
                >
                  Book Package
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-800">
              <div className="bg-blue-100 p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-800">Executive Health Check</h3>
                <p className="text-blue-700 text-lg mt-1">₹19,999</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    All Comprehensive Check Tests
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Cardiac Stress Test
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Pulmonary Function Test
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Bone Density Scan
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    CT Scan (as recommended)
                  </li>
                  <li className="flex items-center">
                    <div className="text-blue-700 mr-2">✓</div>
                    Multiple Specialist Consultations
                  </li>
                </ul>
                <Link
                  to="/appointment?package=executive"
                  className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium transition duration-300"
                >
                  Book Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Apollo Hospitals</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional healthcare services with a patient-centered approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Patient Safety</h3>
              <p className="text-gray-600">
                We prioritize patient safety with stringent protocols and continuous monitoring.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                We utilize cutting-edge medical technology for accurate diagnosis and effective treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced doctors, nurses, and healthcare professionals provide exceptional care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Care</h3>
              <p className="text-gray-600">
                We provide round-the-clock emergency services and continuous care for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;