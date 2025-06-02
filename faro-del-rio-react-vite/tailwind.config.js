/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Cubre todos los archivos relevantes en src
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores principal basada en tus requerimientos
        'brand-blue': {
          DEFAULT: '#0D2F4B', // Azul predominante (del manual)
          light: '#1E5A8C',   // Un azul secundario más claro si es necesario
        },
        'brand-green': {
          DEFAULT: '#58CC02', // Verde vivo profesional (tipo Duolingo)
          dark: '#4AA600',    // Un tono más oscuro para hovers o acentos
        },
        'brand-gray': {
          lightest: '#F7FAFC', // Para fondos muy claros
          light: '#E2E8F0',   // Gris claro
          DEFAULT: '#A0AEC0', // Gris medio
          dark: '#4A5568',    // Gris oscuro para texto
          darkest: '#2D3748',  // Para elementos muy oscuros
        },
        'accent-gold': '#F2A900', // Tomado del manual como un posible acento
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],      // Fuente para el cuerpo del texto
        heading: ['Montserrat', 'sans-serif'], // Fuente para encabezados
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // p-4
          sm: '2rem',    // sm:p-8
          lg: '4rem',    // lg:p-16
          xl: '5rem',    // xl:p-20
        },
      },
      // Animaciones personalizadas (ejemplo)
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      }
    },
  },
  plugins: [
    // Puedes añadir plugins de Tailwind si los necesitas más adelante
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}