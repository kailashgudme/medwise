import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Search, 
  UserPlus, 
  User, 
  LogIn, 
  AlertTriangle,
  Sun,
  Moon,
  Stethoscope,
  Home,
  HeartPulse,
  MessageSquare,
  FileText
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white dark:bg-gray-800 shadow-md py-2' 
          : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <div>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Med</span>
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">wise</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <Home size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Home</span>
            </Link>
            <Link to="/services" className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <HeartPulse size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Services</span>
            </Link>
            <Link to="/doctors" className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <User size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Doctors</span>
            </Link>
            <Link to="/contact" className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <MessageSquare size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Contact</span>
            </Link>
            <Link to="/ai-diagnostic" className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <FileText size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">AI Diagnostic</span>
            </Link>
            
            {/* Login */}
            <Link to="/login" className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <LogIn size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Login</span>
            </Link>
            
            {/* Registration Dropdown */}
            <div className="relative">
              <button 
                className="group relative p-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
              >
                <UserPlus size={20} />
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Register</span>
              </button>
              {isAuthMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 animate-fade-in">
                  <Link 
                    to="/doctor/register" 
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700"
                    onClick={() => setIsAuthMenuOpen(false)}
                  >
                    <Stethoscope size={16} />
                    <span>Doctor Registration</span>
                  </Link>
                  <Link 
                    to="/patient/register" 
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700"
                    onClick={() => setIsAuthMenuOpen(false)}
                  >
                    <User size={16} />
                    <span>Patient Registration</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? (
                <>
                  <Sun size={20} className="text-gray-200" />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={20} className="text-gray-800" />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Dark Mode</span>
                </>
              )}
            </button>

            {/* Emergency Button */}
            <button className="group relative p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300">
              <AlertTriangle size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Emergency</span>
            </button>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="group relative p-2 text-gray-800 dark:text-gray-200">
              <Phone size={20} className="text-primary-600 dark:text-primary-400" />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">9036890740</span>
            </div>
            <Link 
              to="/appointment" 
              className="group relative p-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-full transition duration-300"
            >
              <Calendar size={20} />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Book Appointment</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 mt-4 rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link to="/services" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                <HeartPulse size={18} />
                <span>Services</span>
              </Link>
              <Link to="/doctors" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                <User size={18} />
                <span>Doctors</span>
              </Link>
              <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                <MessageSquare size={18} />
                <span>Contact</span>
              </Link>
              <Link to="/ai-diagnostic" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                <FileText size={18} />
                <span>AI Diagnostic</span>
              </Link>
              
              <Link to="/login" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                <LogIn size={18} />
                <span>Login</span>
              </Link>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Registration</h3>
                <Link to="/doctor/register" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                  <Stethoscope size={18} />
                  <span>Doctor Registration</span>
                </Link>
                <Link to="/patient/register" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 flex items-center space-x-2">
                  <User size={18} />
                  <span>Patient Registration</span>
                </Link>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full text-left py-2 flex items-center space-x-2 text-gray-800 dark:text-gray-200"
                >
                  {isDarkMode ? (
                    <>
                      <Sun size={18} />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={18} />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center space-x-2">
                  <AlertTriangle size={18} />
                  <span>Emergency</span>
                </button>
              </div>
              
              <Link to="/appointment" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2 px-4 rounded-md transition duration-300 flex items-center justify-center space-x-2">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;