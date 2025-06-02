// src/components/common/Footer.tsx (o src/components/Footer.tsx si prefieres)
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
// const logoPath = '/img/logo.svg'; // Si quieres el logo en el footer también

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const adminWhatsappNumber = "573146693984"; // Solo números, sin + o espacios para el link wa.me

  const quickLinks = [
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/amenidades', label: 'Amenidades' },
    { path: '/galeria', label: 'Galería' },
    { path: '/noticias', label: 'Noticias'},
  ];

  const infoLinks = [
    { path: '/documentos#reglamento-ph', label: 'Reglamento P.H.' },
    { path: '/documentos#actas-asamblea', label: 'Actas de Asamblea' },
    { path: 'https://faro-manual.vercel.app', label: 'Manual de Convivencia', external: true },
    // { path: '/politica-privacidad', label: 'Política de Privacidad' }, // Si la tienes
  ];

  return (
    <footer className="bg-brand-blue text-brand-gray-light pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 px-4">
          {/* Columna Información de Contacto */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-2">
              <img src="/img/logo.svg" alt="Faro del Río Logo" className="h-12 opacity-90" />
            </Link>
            <p className="text-sm">
              Calle 65 No. 56 A 60<br />
              Medellín, Antioquia, Colombia
            </p>
            <p className="text-sm">
              <strong>Portería:</strong> <a href="tel:+573183580529" className="hover:text-accent-gold">+57 318 358 0529</a>
            </p>
            <p className="text-sm">
              <strong>Email:</strong> <a href="mailto:administracion@farodelrio.com" className="hover:text-accent-gold">administracion@farodelrio.com</a>
            </p>
            <div className="text-sm">
              <p><strong>Atención Administración:</strong></p>
              <p>Lunes, Miércoles y Viernes</p>
              <p>(Presencial y WhatsApp)</p>
              {/* Si tienes el horario específico, añádelo aquí */}
            </div>
          </div>

          {/* Columna Enlaces Rápidos */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Explorar</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Información / Documentos */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Información Útil</h4>
            <ul className="space-y-2.5 text-sm">
              {infoLinks.map(link => (
                <li key={link.label}>
                  {link.external ? (
                     <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">
                       {link.label}
                     </a>
                  ) : (
                    <Link to={link.path} className="hover:text-accent-gold transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
               <li><Link to="/contacto" className="hover:text-accent-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna Redes y WhatsApp */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Conéctate</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/tu_usuario_instagram" // Reemplaza con tu Instagram real
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Faro del Río"
                className="text-2xl hover:text-accent-gold transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={`https://wa.me/${adminWhatsappNumber}?text=${encodeURIComponent("Hola, estoy interesado en obtener más información sobre Faro del Río.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Administración Faro del Río"
                className="text-2xl hover:text-accent-gold transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
            <p className="text-xs italic text-brand-gray-DEFAULT">
                * Horario de atención WhatsApp Administración: L, M, V.
            </p>
          </div>
        </div>

        <hr className="border-t border-brand-gray-dark/30 my-8" />

        <div className="text-center text-sm">
          <p>© {currentYear} Conjunto Residencial Faro del Río. Todos los derechos reservados.</p>
          <p className="mt-1 text-brand-gray-DEFAULT text-xs">
            Developed by <a href="https://www.linkedin.com/in/josejorgemm/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold font-medium">Jose Jorge M.M</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
