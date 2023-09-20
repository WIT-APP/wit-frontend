/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "green": "#009966",
      "superlightgreen": "#eaf7f2",
      "lightgreen": "#D6EFE6",
      "blue": "#517bbd",
      "yellow": "#f4b40e",
      "lightgray": "#eeeeee",
      "gray": "#c3c5c7",
      'black': '#1E1E1E',
      "white":"#ffffff",
      "darkgray": "#767676"
      
    },
    
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]

    },
    extend: {
      backgroundColor: {
        'grey-transparent': 'rgba(207, 211, 212, 0.72)',
        'black': '#1E1E1E',
        'black-transparent': '#0b0b048b'
      },
      borderRadius: {
        'radius-050': '0.5rem',
        'radius-075': '0.75rem',
      },
      width: {
        '128': '1000px',
        '129': '500px'
      },
      height: {
        '128':'500px',
        '150': '150px'
      },
      padding: {
        '15': '3.75rem', 
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px', 
        'lg': '18px',
        'xl': '20px',
        '2xl': '40px',       
      },
      borderColor: {
        'gray-300': '#c3c5c7',
      },
      backgroundImage: {
        'hero': "url('desktop.jpg')"
      },
      margin: {
        "150":"800px"
      }
    },
  },
  plugins: [
    
  ],
}

