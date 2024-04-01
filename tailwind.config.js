/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'   
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'rum-swizzle': {
          '50': '#f8f6e3',
          '100': '#f4f1cd',
          '200': '#eae19e',
          '300': '#deca66',
          '400': '#d2b33d',
          '500': '#c39e2f',
          '600': '#a87d26',
          '700': '#865d22',
          '800': '#704c23',
          '900': '#614022',
          '950': '#382110',
      },
      }
    },
  },
  plugins: [],
}

