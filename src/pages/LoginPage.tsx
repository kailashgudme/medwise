import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, User, Stethoscope, Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'patient' | 'doctor' | 'admin'>('patient');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Implement authentication check against local storage
    if (role === 'patient') {
      const storedData = localStorage.getItem('currentPatient');
      if (storedData) {
        const patient = JSON.parse(storedData);
        if (patient.email === formData.email && patient.password === formData.password) {
          navigate('/patient/dashboard');
          return;
        }
      }
      alert('Invalid email or password');
    } else if (role === 'doctor') {
      const storedData = localStorage.getItem('currentDoctor');
      if (storedData) {
        const doctor = JSON.parse(storedData);
        if (doctor.email === formData.email && doctor.password === formData.password) {
          navigate('/doctor/dashboard');
          return;
        }
      }
      alert('Invalid email or password');
    } else if (role === 'admin') {
      // Mock admin login
      if (formData.email === 'admin@medwise.com' && formData.password === 'admin') {
         navigate('/');
         alert('Admin logged in! (Admin Dashboard pending)');
      } else {
         alert('Invalid admin credentials. Use admin@medwise.com / admin');
      }
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 p-6 text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-primary-100">Sign in to your account to continue</p>
          </div>

          <div className="p-8">
            {/* Role Selection */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-8">
              <button
                type="button"
                onClick={() => setRole('patient')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  role === 'patient' 
                    ? 'bg-white dark:bg-gray-600 text-primary-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                <User size={16} />
                <span>Patient</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('doctor')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  role === 'doctor' 
                    ? 'bg-white dark:bg-gray-600 text-primary-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                <Stethoscope size={16} />
                <span>Doctor</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  role === 'admin' 
                    ? 'bg-white dark:bg-gray-600 text-primary-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                <Shield size={16} />
                <span>Admin</span>
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
              >
                <span>Sign In</span>
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Registration Links */}
            {role !== 'admin' && (
              <div className="mt-8 text-center border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <Link 
                    to={`/${role}/register`} 
                    className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 transition-colors duration-200"
                  >
                    Register as {role === 'doctor' ? 'a Doctor' : 'a Patient'}
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
