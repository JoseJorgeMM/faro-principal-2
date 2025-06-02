// src/components/AmenityCard.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface AmenityCardProps {
  title: string;
  description: string;
  icon: IconType;
  image: string; // URL de la imagen para la amenidad
}

const AmenityCard: React.FC<AmenityCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={`Imagen de ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-brand-blue/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full text-brand-green group-hover:text-accent-gold transition-colors duration-300">
          <Icon size={28} />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-lg font-semibold text-brand-blue mb-2 group-hover:text-brand-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-brand-gray-dark text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AmenityCard;
