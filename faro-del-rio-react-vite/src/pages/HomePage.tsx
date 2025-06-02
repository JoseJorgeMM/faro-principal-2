// src/pages/HomePage.tsx
import React from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '@/components/Hero'; // Si decides crear un componente Hero separado
import TowerInfo from '@/components/TowerInfo';
import AmenityCard from '@/components/AmenityCard'; // Crearemos este componente
import NewsCard from '@/components/NewsCard';     // Crearemos este componente
import Button from '@/components/common/Button';
import { FaArrowRight, FaBuilding, FaCar, FaUsers, FaNewspaper, FaMapMarkerAlt, FaFileAlt, FaEye } from 'react-icons/fa'; // Iconos de ejemplo
import { GiFamilyHouse, GiSprout } from 'react-icons/gi'; // Iconos para Amenidades
import { MdOutlineRealEstateAgent, MdBusinessCenter } from "react-icons/md";


// Datos simulados para la sección de Torres (podrían venir de un CMS o API)
const towerData = [
  {
    id: 1,
    name: 'Torre Residencial Principal',
    description: 'Diseñada para el confort familiar y un estilo de vida moderno.',
    details: '27 pisos | 106 apartamentos',
    image: '/img/tower-1-exterior.jpg', // Reemplazar con tu imagen real
    icon: FaBuilding,
    linkTo: '/apartamentos/torre-1', // Ejemplo de ruta
    aosDelay: "0",
  },
  {
    id: 2,
    name: 'Torre de Apartaestudios',
    description: 'Espacios optimizados y funcionales, ideales para jóvenes profesionales o parejas.',
    details: '4 pisos | 6 apartaestudios',
    image: '/img/tower-2-apartaestudio.jpg', // Reemplazar con tu imagen real
    icon: MdOutlineRealEstateAgent,
    linkTo: '/apartaestudios/torre-2', // Ejemplo de ruta
    aosDelay: "200",
  },
  {
    id: 3,
    name: 'Locales Comerciales',
    description: 'Oportunidades de negocio en una ubicación estratégica con alto flujo peatonal.',
    details: '26 locales en el exterior',
    image: '/img/commercial-locals.jpg', // Reemplazar con tu imagen real
    icon: MdBusinessCenter,
    linkTo: '/locales-comerciales', // Ejemplo de ruta
    aosDelay: "400",
  },
];

// Datos simulados para Amenidades
const amenitiesData = [
  {
    id: 'salon',
    title: 'Salón Social Elegante',
    description: 'Un espacio versátil y moderno para tus eventos, celebraciones y reuniones sociales con familiares y amigos.',
    icon: FaUsers, // O un icono más específico como GiPartyPopper
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', // Imagen de ejemplo
  },
  {
    id: 'parqueadero',
    title: 'Parqueadero Común Rotativo',
    description: 'Comodidad y seguridad para tu vehículo con nuestro sistema de parqueadero común, optimizando el espacio disponible.',
    icon: FaCar,
    image: 'https://images.unsplash.com/photo-1590674899474-DX8c9735935a?q=80&w=2070&auto=format&fit=crop', // Imagen de ejemplo
  },
  {
    id: 'zonas-comunes',
    title: 'Amplias Zonas Comunes',
    description: 'Disfruta de espacios abiertos, senderos y áreas verdes diseñadas para el esparcimiento, el ejercicio y la conexión con la naturaleza.',
    icon: GiSprout, // O FaTree, FaLeaf
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop', // Imagen de ejemplo
  },
   {
    id: 'seguridad',
    title: 'Seguridad Integral 24/7',
    description: 'Vive con tranquilidad gracias a nuestro sistema de vigilancia continua, personal capacitado y control de acceso.',
    icon: FaBuilding, // O FaShieldAlt
    image: 'https://images.unsplash.com/photo-1558002038-105550931WER?q=80&w=1974&auto=format&fit=crop', // Imagen de ejemplo (cámara de seguridad)
  },
];


// Datos simulados para Noticias (deberían venir de una API o CMS)
const newsData = [
  {
    id: 'noticia-1',
    title: '¡Gran Apertura de la Torre 2 de Apartaestudios!',
    summary: 'Estamos emocionados de anunciar la finalización y entrega de nuestra moderna Torre 2, ofreciendo apartaestudios con diseño innovador.',
    date: '2024-03-10',
    category: 'Novedades',
    image: '/img/news/news1.jpg', // Reemplazar con imagen real
    link: '/noticias/apertura-torre-2',
  },
  {
    id: 'noticia-2',
    title: 'Jornada de Mantenimiento Programado en Zonas Comunes',
    summary: 'Informamos a nuestros residentes sobre las próximas labores de mantenimiento para asegurar el óptimo estado de nuestras amenidades.',
    date: '2024-03-05',
    category: 'Administración',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop', // Imagen de ejemplo
    link: '/noticias/mantenimiento-zonas-comunes',
  },
  {
    id: 'noticia-3',
    title: 'Nuevo Local Comercial se une a Faro del Río: "Café del Alba"',
    summary: 'Damos la bienvenida a "Café del Alba", una nueva opción gastronómica que enriquecerá la oferta comercial de nuestro conjunto.',
    date: '2024-02-28',
    category: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2084&auto=format&fit=crop', // Imagen de ejemplo
    link: '/noticias/nuevo-local-cafe-del-alba',
  },
];


const HomePage: React.FC = () => {
  return (
    <>
      {/* Sección Hero */}
      <section 
        id="hero" 
        className="relative bg-brand-blue text-white min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 ease-in-out scale-100 hover:scale-105" 
          style={{ backgroundImage: `url('/img/hero-background.jpg')` }} // Reemplazar con tu imagen de alta calidad
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Overlay oscuro */}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight">
            Bienvenido a <span className="text-accent-gold">Faro del Río</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light text-brand-gray-lightest">
            Donde el diseño moderno se encuentra con el confort y un estilo de vida vibrante.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-6">
            <Button as="link" to="/galeria" variant="secondary" size="lg" leftIcon={FaEye}>
              Explorar Galería
            </Button>
            <Button as="link" to="/contacto" variant="outline-secondary" size="lg" className="text-white border-white hover:bg-white/10">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Información de Torres */}
      <section id="towers-info" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nuestras Estructuras</h2>
          <p className="section-subtitle">
            Faro del Río se compone de espacios residenciales y comerciales diseñados para tu bienestar y conveniencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {towerData.map((tower) => (
              <TowerInfo
                key={tower.id}
                name={tower.name}
                description={tower.description}
                details={tower.details}
                image={tower.image}
                icon={tower.icon as IconType} // Aseguramos el tipo para el componente
                aosDelay={tower.aosDelay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Amenidades */}
      <section id="amenities" className="section-padding bg-brand-gray-lightest">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Amenidades Exclusivas</h2>
          <p className="section-subtitle">
            Disfruta de instalaciones de primer nivel pensadas para enriquecer tu estilo de vida.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {amenitiesData.map((amenity) => (
              <AmenityCard
                key={amenity.id}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon as IconType}
                image={amenity.image}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button as="link" to="/amenidades" variant="primary" size="lg" rightIcon={FaArrowRight}>
              Ver Todas las Amenidades
            </Button>
          </div>
        </div>
      </section>
      
      {/* Sección Noticias Recientes */}
      <section id="recent-news" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Últimas Noticias</h2>
          <p className="section-subtitle">
            Mantente al día con los acontecimientos y novedades de la comunidad Faro del Río.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((newsItem) => ( // Muestra solo las primeras 3
              <NewsCard
                key={newsItem.id}
                title={newsItem.title}
                summary={newsItem.summary}
                date={newsItem.date}
                category={newsItem.category}
                image={newsItem.image}
                link={newsItem.link}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button as="link" to="/noticias" variant="outline-primary" size="lg" rightIcon={FaNewspaper}>
              Ver Todas las Noticias
            </Button>
          </div>
        </div>
      </section>

      {/* Sección CTA Documentos */}
      <section id="documents-cta" className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <FaFileAlt className="text-5xl text-accent-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Documentos Importantes</h2>
          <p className="text-lg text-brand-gray-lightest max-w-xl mx-auto mb-10">
            Accede fácilmente al Manual de Convivencia, Reglamento P.H. y más.
          </p>
          <Button as="link" to="/documentos" variant="secondary" size="lg">
            Ir a Documentos
          </Button>
        </div>
      </section>

       {/* Sección Ubicación y Contacto Rápido */}
      <section id="location-cta" className="section-padding bg-brand-gray-lightest">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">Visítanos o Contáctanos</h2>
              <p className="text-lg text-brand-gray-dark mb-6">
                Estamos ubicados en un punto estratégico de la ciudad. ¡Será un placer atenderte!
              </p>
              <div className="space-y-3 mb-8 text-brand-gray-dark">
                <p className="flex items-center"><FaMapMarkerAlt className="mr-3 text-brand-green text-xl" /> Calle 65 No. 56 A 60, Medellín</p>
                {/* <p className="flex items-center"><FaPhoneAlt className="mr-3 text-brand-green text-xl" /> Portería: +57 318 358 0529</p> */}
                {/* <p className="flex items-center"><FaEnvelope className="mr-3 text-brand-green text-xl" /> administracion@farodelrio.com</p> */}
              </div>
              <Button as="link" to="/contacto" variant="primary" size="lg" rightIcon={FaArrowRight}>
                Ver Detalles de Contacto
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.089090980696!2d-75.57785068573416!3d6.252009428075758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429049c170feb%3A0x99a08a52b0977ea8!2sCra.%2056a%20%2365-60%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1678886098743!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border:0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Faro del Río"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
