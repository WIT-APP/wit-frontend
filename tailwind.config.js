/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "green": "#009966",
      "blue": "#517bbd",
      "yellow": "#f4b40e",
      "lightgray": "#eeeeee",
      "gray": "#c3c5c7",
      "darkgray": "#767676",
      "white": "#ffffff",
      "black": "#000000",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]

    },
    extend: {
      backgroundColor: {
        'grey-transparent': 'rgba(207, 211, 212, 0.72)',
        'black': '#1E1E1E'
      },
      borderRadius: {
        'radius-050': '0.5rem',
        'radius-075': '0.75rem',
      },
      backgroundImage: {
        'hero': "url('form-images.jpg')",
      }
    },
  },
  plugins: [
    
  ],
}

