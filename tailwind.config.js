/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {    
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        green2: "#009966",
        lightgreen2: "#D6EFE6",
        superlightgreen2: "#eaf7f2",
        purpleblue2: "#6d7dcd",
        blue2: "#517bbd",
        yellow2: "#f4b40e",   
        lightgray2: "#eeeeee",
        gray2: "#c3c5c7",
        black2: '#1E1E1E',
        white2:"#ffffff",
        darkgray2: "#767676", 
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        }, destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
      },
    },
      backgroundColor: {
        'grey-transparent': 'rgba(207, 211, 212, 0.72)',
        'black': '#1E1E1E',
        'black-transparent': '#0b0b048b'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
        'hero': "url('/Desktop (3).jpg')"
      },
      margin: {
        "150":"800px"
      },
      width: {
        '128': '1000px',
        '129': '500px'
      },
      height: {
        '128':'500px',
        '150': '150px'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate")
  ],
}