// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout'; // Usando el alias de ruta

// Importación de las páginas (asumiendo que existirán estos archivos)
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import AmenitiesPage from '@/pages/AmenitiesPage';
import GalleryPage from '@/pages/GalleryPage';
import NewsPage from '@/pages/NewsPage';
import DocumentsPage from '@/pages/DocumentsPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage'; // Página para rutas no encontradas

// Puedes crear archivos individuales para cada noticia si lo deseas,
// o un componente genérico que cargue datos según el slug/ID.
// import NewsDetailPage from '@/pages/NewsDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas que utilizan el MainLayout (con Header y Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="amenidades" element={<AmenitiesPage />} />
          <Route path="galeria" element={<GalleryPage />} />
          <Route path="noticias" element={<NewsPage />} />
          {/* <Route path="noticias/:slug" element={<NewsDetailPage />} />  // Ejemplo para detalle de noticia */}
          <Route path="documentos" element={<DocumentsPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>

        {/* Puedes tener rutas sin MainLayout aquí si es necesario,
            por ejemplo, para una página de login o una landing especial. */}

        {/* Ruta para páginas no encontradas (404) */}
        {/* Es importante que esta ruta esté al final si no está anidada */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
