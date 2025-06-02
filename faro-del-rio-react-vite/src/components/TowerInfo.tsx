// src/components/TowerInfo.tsx
import React from 'react';
import { IconType } from 'react-icons';
// import { Link } from 'react-router-dom'; // Descomentar si 'linkTo' se usa para navegación interna
// import Button from '@/components/common/Button'; // Descomentar si se añade un botón

interface TowerInfoProps {
  name: string;
  description: string;
  details: string;
  image: string;
  icon: IconType;
  // linkTo?: string; // Opcional: para un enlace a una página de detalles
  aosDelay?: string; // Para animaciones escalonadas si se usa una librería como AOS
}

const TowerInfo: React.FC<TowerInfoProps> = ({
  name,
  description,
  details,
  image,
  icon: Icon,
  // linkTo,
  aosDelay = "0",
}) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      data-aos="fade-up" // Ejemplo si usaras Animate On Scroll (AOS)
      data-aos-delay={aosDelay}
    >
      <div className="relative h-56 sm:h-64 w-full">
        <img
          src={image}
          alt={`Imagen de ${name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div> {/* Overlay sutil */}
        <div className="absolute bottom-4 left-4 p-2 bg-brand-blue/80 backdrop-blur-sm rounded-full text-white">
          <Icon size={28} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-blue mb-2">
          {name}
        </h3>
        <p className="text-brand-gray-dark text-sm mb-3 flex-grow">
          {description}
        </p>
        <p className="text-brand-green font-semibold text-base mb-4">
          {details}
        </p>
        {/* {linkTo && (
          <div className="mt-auto pt-3">
            <Button as="link" to={linkTo} variant="outline-primary" size="sm" fullWidth>
              Más Detalles
            </Button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TowerInfo;
