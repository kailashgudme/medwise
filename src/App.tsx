import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import EmergencyButton from './components/EmergencyButton';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import DiagnosticChatPage from './pages/DiagnosticChatPage';
import DoctorRegistration from './pages/DoctorRegistration';
import PatientRegistration from './pages/PatientRegistration';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import AppointmentPage from './pages/AppointmentPage';
import PatientInfoPage from './pages/PatientInfoPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen transition-colors duration-200 bg-white dark:bg-gray-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ai-diagnostic" element={<DiagnosticChatPage />} />
              <Route path="/doctor/register" element={<DoctorRegistration />} />
              <Route path="/patient/register" element={<PatientRegistration />} />
              <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
              <Route path="/patient/dashboard" element={<PatientDashboard />} />
              <Route path="/appointment" element={<AppointmentPage />} />
              <Route path="/patient/info" element={<PatientInfoPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <EmergencyButton />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;