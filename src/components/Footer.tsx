import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">Med</span>
              <span className="text-2xl font-bold text-teal-400">wise</span>
            </div>
            <p className="text-gray-300 mb-4">
              Medwise is a premier multi-specialty healthcare provider offering comprehensive services with cutting-edge technology and expert medical professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-white transition duration-300">Doctors</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
              <li><Link to="/ai-diagnostic" className="text-gray-300 hover:text-white transition duration-300">AI Diagnostic</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/cardiology" className="text-gray-300 hover:text-white transition duration-300">Cardiology</Link></li>
              <li><Link to="/services/neurology" className="text-gray-300 hover:text-white transition duration-300">Neurology</Link></li>
              <li><Link to="/services/orthopedics" className="text-gray-300 hover:text-white transition duration-300">Orthopedics</Link></li>
              <li><Link to="/services/oncology" className="text-gray-300 hover:text-white transition duration-300">Oncology</Link></li>
              <li><Link to="/services/pediatrics" className="text-gray-300 hover:text-white transition duration-300">Pediatrics</Link></li>
              <li><Link to="/services/diagnostics" className="text-gray-300 hover:text-white transition duration-300">Diagnostics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Guru Nanak Dev Engineering College, Bidar, Karnataka 585403</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">9036890740</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">medwise@email.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Medwise. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition duration-300">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition duration-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;