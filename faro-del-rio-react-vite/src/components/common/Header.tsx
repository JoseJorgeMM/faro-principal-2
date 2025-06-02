// src/components/common/Header.tsx (o src/components/Header.tsx si prefieres)
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Iconos para el menú móvil
// import Logo from '@/assets/logo.svg'; // Si decides importar el SVG como componente React
// O usar la ruta pública
const logoPath = '/img/logo.svg';

interface NavItem {
  path: string;
  label: string;
  isButton?: boolean;
  buttonType?: 'primary' | 'secondary';
}

const navItems: NavItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/amenidades', label: 'Amenidades' },
  { path: '/galeria', label: 'Galería' },
  { path: '/noticias', label: 'Noticias' },
  { path: '/documentos', label: 'Documentos', isButton: true, buttonType: 'primary' },
  { path: '/contacto', label: 'Contacto', isButton: true, buttonType: 'secondary' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);


  const linkClasses = "hover:text-accent-gold transition-colors duration-300 py-2";
  const activeLinkClasses = "text-accent-gold font-semibold"; // Clase para NavLink activo

  const buttonBaseClasses = "font-semibold py-2.5 px-5 rounded-md text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryButtonClasses = `${buttonBaseClasses} bg-accent-gold text-brand-blue hover:bg-opacity-90 focus:ring-accent-gold`;
  const secondaryButtonClasses = `${buttonBaseClasses} bg-brand-green text-white hover:bg-brand-green-dark focus:ring-brand-green`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-brand-blue shadow-lg py-3' : 'bg-brand-blue/80 backdrop-blur-sm py-4'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoPath} alt="Faro del Río Logo" className="h-10 md:h-12" />
          {/* Si quieres añadir texto al lado del logo: */}
          {/* <span className="ml-3 text-xl md:text-2xl font-heading font-bold text-white">Faro del Río</span> */}
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-white text-[15px]">
          {navItems.map((item) =>
            item.isButton ? (
              <Link
                key={item.path}
                to={item.path}
                className={item.buttonType === 'primary' ? primaryButtonClasses : secondaryButtonClasses}
              >
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeLinkClasses : ''}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Botón de Menú Móvil */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
            className="text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-blue shadow-xl animate-fade-in-down">
          <nav className="flex flex-col px-5 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
                className={({ isActive }) =>
                  `block py-3 px-3 rounded-md text-white hover:bg-brand-blue-light/20 transition-colors duration-300
                   ${item.isButton ? (item.buttonType === 'primary' ? 'bg-accent-gold text-brand-blue hover:bg-opacity-90 my-1 text-center' : 'bg-brand-green text-white hover:bg-brand-green-dark my-1 text-center') : ''}
                   ${isActive && !item.isButton ? activeLinkClasses + ' bg-brand-blue-light/10' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
