import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Providing Quality Healthcare for a Better Life
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Offers world-class healthcare services with cutting-edge technology and expert medical professionals.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/appointment"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition duration-300 flex items-center justify-center"
            >
              <Calendar size={18} className="mr-2" />
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-blue-50 text-blue-700 py-3 px-6 rounded-md font-medium transition duration-300 flex items-center justify-center"
            >
              Our Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="container mx-auto px-4 relative z-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition duration-300">
            <div className="text-blue-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">State-of-the-Art Facilities</h3>
            <p className="text-gray-600">
              Experience healthcare in our modern facilities equipped with the latest medical technology.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition duration-300">
            <div className="text-blue-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Doctors</h3>
            <p className="text-gray-600">
              Our team of highly qualified and experienced doctors provide the best care to our patients.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition duration-300">
            <div className="text-blue-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Care</h3>
            <p className="text-gray-600">
              From preventive care to complex treatments, we offer a wide range of healthcare services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;