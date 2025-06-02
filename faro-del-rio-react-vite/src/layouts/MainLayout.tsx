// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header'; // Lo crearemos a continuación
import Footer from '@/components/Footer'; // Lo crearemos a continuación
import ScrollToTop from '@/components/common/ScrollToTop'; // Componente útil

const MainLayout: React.FC = () => {
  const location = useLocation();

  // Lógica para determinar si se debe mostrar el Header/Footer
  // Por ejemplo, podrías querer ocultarlos en ciertas páginas
  // const hideHeaderFooter = location.pathname === '/alguna-ruta-especial';

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> {/* Asegura que se haga scroll al top al cambiar de ruta */}
      {/* {!hideHeaderFooter && <Header />} */}
      <Header />
      <main className="flex-grow">
        {/* Outlet renderizará el componente de la ruta hija actual */}
        <Outlet />
      </main>
      {/* {!hideHeaderFooter && <Footer />} */}
      <Footer />
    </div>
  );
};

export default MainLayout;
