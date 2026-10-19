import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Bone, Activity } from 'lucide-react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="h-6 w-6 text-blue-700" />;
      case 'brain':
        return <Brain className="h-6 w-6 text-blue-700" />;
      case 'bone':
        return <Bone className="h-6 w-6 text-blue-700" />;
      case 'activity':
        return <Activity className="h-6 w-6 text-blue-700" />;
      default:
        return <Activity className="h-6 w-6 text-blue-700" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl group">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg">
          {getIcon(service.icon)}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link 
          to={`/services/${service.id}`} 
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 transition duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;