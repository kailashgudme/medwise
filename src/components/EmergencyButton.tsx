import React, { useState } from 'react';
import { Phone, MapPin, AlertTriangle, X } from 'lucide-react';

const EmergencyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  const handleEmergency = () => {
    setIsModalOpen(true);
    if (navigator.geolocation) {
      setIsSharing(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsSharing(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsSharing(false);
        }
      );
    }
  };

  const callAmbulance = () => {
    // In a real application, this would connect to an emergency service API
    window.location.href = `tel:108`;
  };

  return (
    <>
      <button
        onClick={handleEmergency}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-50 flex items-center justify-center"
        aria-label="Emergency"
      >
        <AlertTriangle size={24} />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-600 flex items-center">
                <AlertTriangle size={24} className="mr-2" />
                Emergency Services
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">Emergency Contacts</h3>
                <div className="space-y-2">
                  <button
                    onClick={callAmbulance}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300"
                  >
                    <Phone size={20} className="mr-2" />
                    Call Ambulance (108)
                  </button>
                  <a
                    href="tel:112"
                    className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300"
                  >
                    Police Emergency (112)
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Your Location</h3>
                {isSharing ? (
                  <div className="text-gray-600 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-700 mr-2"></div>
                    Getting your location...
                  </div>
                ) : location ? (
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={20} className="mr-2" />
                      Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                    </div>
                    <a
                      href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition duration-300"
                    >
                      Open in Maps
                    </a>
                  </div>
                ) : (
                  <p className="text-gray-600">Location access required for emergency services</p>
                )}
              </div>

              <div className="text-sm text-gray-500">
                Your location will be shared with emergency services to provide faster assistance.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyButton;