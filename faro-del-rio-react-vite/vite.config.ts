import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Necesario para los alias de ruta

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configura el alias @ para apuntar a src
    },
  },
  // Opcional: Configuración del servidor de desarrollo
  // server: {
  //   port: 3000, // Puedes cambiar el puerto si lo deseas
  //   open: true,   // Abrir automáticamente el navegador al iniciar
  // },
  // Opcional: Configuración para el build
  // build: {
  //   outDir: 'dist', // Directorio de salida para el build
  // }
})
