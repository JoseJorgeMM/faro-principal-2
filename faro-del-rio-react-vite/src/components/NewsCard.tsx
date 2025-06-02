// src/components/NewsCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';

interface NewsCardProps {
  title: string;
  summary: string;
  date: string; // Podrías usar un tipo Date y formatearlo
  category: string;
  image: string;
  link: string; // Enlace a la página de detalle de la noticia
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  date,
  category,
  image,
  link,
}) => {
  // Formatear la fecha (opcional, podrías hacerlo con una librería como date-fns)
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <Link to={link} className="block relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={`Imagen de: ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 text-xs text-brand-gray-DEFAULT flex items-center">
          <FaCalendarAlt className="mr-1.5 text-brand-green" />
          <span>{formattedDate}</span>
          {/* <FaTag className="ml-3 mr-1.5 text-brand-green" />
          <span>{category}</span> */}
        </div>
        <h3 className="font-heading text-lg font-semibold text-brand-blue mb-2">
          <Link to={link} className="hover:text-brand-green transition-colors duration-300">
            {title}
          </Link>
        </h3>
        <p className="text-brand-gray-dark text-sm leading-relaxed mb-4 flex-grow">
          {summary}
        </p>
        <div className="mt-auto pt-2">
          <Link
            to={link}
            className="inline-flex items-center text-brand-green font-semibold text-sm hover:underline group/link"
          >
            Leer Más
            <FaArrowRight className="ml-1.5 h-3 w-3 transform transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
