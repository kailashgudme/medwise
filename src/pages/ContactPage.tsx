import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help. Reach out to us for any queries or to schedule an appointment.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">
                GURU NANAK DEV ENGINEERING COLLEGE<br />
                Bidar, KARNATAKA 585403
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Phone size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">
                Emergency: 108<br />
                Appointments: 9036890740
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                medwise@gmail.com<br />
                kailashgudme7878@gmail.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Emergency: 24/7<br />
                OPD: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or need more information? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
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
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Appointment Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-medium transition duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
              <p className="text-gray-600 mb-6">
                One of the prime areas of the city, making it easily accessible from all parts of Bidar.
              </p>
              
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3036679571844!2d78.40953017508961!3d17.440338902788385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b250000001%3A0x6e4cdaf2b30fcc7c!2sApollo%20Hospitals%2C%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1704628756076!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BIDAR Map"
                ></iframe>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Getting Here</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="text-blue-700 mr-2 mt-1">•</div>
                    <span>From Airport: 30-40 minutes drive (approx. 22 km)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-700 mr-2 mt-1">•</div>
                    <span>From Railway Station: 20-25 minutes drive (approx. 12 km)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-700 mr-2 mt-1">•</div>
                    <span>Public Transport: Bus routes 5K, 158, 127K stop nearby</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our services and facilities.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                  <span>What are the visiting hours?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="bg-gray-50 px-4 pb-4">
                  <p className="text-gray-600">
                    General visiting hours are from 4:00 PM to 6:00 PM daily. ICU visiting hours are from 5:00 PM to 5:30 PM. We request visitors to respect these timings to ensure patient rest and recovery.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                  <span>How can I schedule an appointment?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="bg-gray-50 px-4 pb-4">
                  <p className="text-gray-600">
                    You can schedule an appointment through our website, by calling our appointment desk at 1860-500-1066, or by visiting the hospital in person. We recommend booking appointments in advance to minimize waiting time.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                  <span>What insurance plans do you accept?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="bg-gray-50 px-4 pb-4">
                  <p className="text-gray-600">
                    We accept most major insurance plans including Mediclaim, CGHS, ECHS, and corporate insurance policies. Please contact our insurance desk at +91-40-23607777 for specific information about your insurance coverage.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                  <span>What should I bring for my first appointment?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="bg-gray-50 px-4 pb-4">
                  <p className="text-gray-600">
                    For your first appointment, please bring your ID proof, insurance card (if applicable), referral letter (if any), previous medical records, list of current medications, and any recent test reports or imaging studies.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                  <span>Is parking available at the hospital?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="bg-gray-50 px-4 pb-4">
                  <p className="text-gray-600">
                    Yes, we have ample parking space available for patients and visitors. There is a nominal fee for parking, and valet parking service is also available at the main entrance.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;