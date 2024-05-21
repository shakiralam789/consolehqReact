/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E4D57',
        'secondary': '#FF6C3E',
        'default-green': '#27AE60',
        'gray-dark': '#082020',
        'gray-light': '#64676D',
        'gray-medium' : '#D5E0E0',
         'blue2' : '#2D9CDB',
         'red1': '#EB5757',
         'gray-3' : '#F0F0F0',
         'sky-light': '#EFF4F4',
         'gray-4':'#F2F4F5',
         'default-yellow' : '#FFAF36'
      },
      screens:{
        'xs' : '400px'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}