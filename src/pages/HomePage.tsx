import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Stethoscope, Building, Calendar } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      icon: 'heart',
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Neurology',
      description: 'Expert care for disorders of the brain, spine, and nervous system.',
      icon: 'brain',
      image: 'https://images.pexels.com/photos/8376345/pexels-photo-8376345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, ligaments, tendons, and muscles.',
      icon: 'bone',
      image: 'https://images.pexels.com/photos/4506165/pexels-photo-4506165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Oncology',
      description: 'Comprehensive cancer care with cutting-edge treatments and therapies.',
      icon: 'activity',
      image: 'https://images.pexels.com/photos/3952240/pexels-photo-3952240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiology',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Dr. Arun Kumar',
      specialty: 'Neurology',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Dr. Meera Reddy',
      specialty: 'Orthopedics',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Patel',
      content: 'The care I received at Apollo Hospitals was exceptional. The doctors were knowledgeable and the staff was caring and attentive.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Sunita Gupta',
      content: 'Apollo Hospitals provided me with world-class treatment. The facilities are state-of-the-art and the medical team is excellent.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Vijay Reddy',
      content: 'I had a complicated surgery at Apollo and the outcome was amazing. The surgeons are highly skilled and the post-operative care was outstanding.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <div className="text-blue-700 mb-2 flex justify-center">
                <Building size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <div className="text-blue-700 mb-2 flex justify-center">
                <Stethoscope size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">500+</h3>
              <p className="text-gray-600">Specialist Doctors</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <div className="text-blue-700 mb-2 flex justify-center">
                <Users size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">100K+</h3>
              <p className="text-gray-600">Satisfied Patients</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <div className="text-blue-700 mb-2 flex justify-center">
                <Award size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">50+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Offers a wide range of healthcare services with cutting-edge technology and expert medical professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium">
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Appointment Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book an Appointment</h2>
              <p className="mb-8 text-blue-100">
                Schedule an appointment with our specialist doctors. Our team of experts is ready to provide you with the best healthcare services.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <span>Choose from our team of specialist doctors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <span>Convenient appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <span>Quick confirmation and reminders</span>
                </li>
              </ul>
              <Link to="/appointment" className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-md font-medium transition duration-300">
                <Calendar size={18} className="mr-2" />
                Book Now
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request an Appointment</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="department" className="block text-gray-700 mb-2">Department</label>
                  <select 
                    id="department" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="oncology">Oncology</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Additional information..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium transition duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialist Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced and dedicated doctors who provide exceptional care to our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/doctors" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium">
              View All Doctors
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Diagnostic Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI Diagnostic" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">AI Diagnostic Assistant</h2>
              <p className="text-gray-600 mb-6">
                Our cutting-edge AI Diagnostic Assistant helps analyze your medical reports and provides preliminary insights. Simply upload your reports and get instant analysis.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <div className="text-blue-700">✓</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quick Analysis</h4>
                    <p className="text-gray-600">Get preliminary insights within minutes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <div className="text-blue-700">✓</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Secure & Confidential</h4>
                    <p className="text-gray-600">Your medical data is kept secure and private</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <div className="text-blue-700">✓</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Expert Verification</h4>
                    <p className="text-gray-600">AI insights are verified by our medical experts</p>
                  </div>
                </li>
              </ul>
              <Link to="/ai-diagnostic" className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium transition duration-300">
                Try AI Diagnostic
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our patients have to say about their experience at Apollo Hospitals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;