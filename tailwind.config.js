/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Asegúrate de que esta ruta incluya tus archivos de componentes
  ],
  theme: {
    extend: {
      colors: {
        viajar: {
          1: '#2D4B73',
          2: '#253C59',
          3: '#99B4BF',
          4: '#D9B70D',
          5: '#BF8D30',
        },
      },
    },
  },
  plugins: [],
}
