import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface DoctorProps {
  doctor: {
    id: number;
    name: string;
    specialty: string;
    image: string;
  };
}

const DoctorCard: React.FC<DoctorProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl group">
      <div className="h-64 overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-blue-700 mb-4">{doctor.specialty}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/doctors/${doctor.id}`} 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            View Profile
            <ArrowRight size={16} className="ml-2 transition duration-300 group-hover:translate-x-1" />
          </Link>
          <Link 
            to={`/appointment?doctor=${doctor.id}`} 
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-300"
          >
            <Calendar size={14} className="mr-1" />
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;