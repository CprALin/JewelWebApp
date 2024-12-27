/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily : {
         dmSans : ['DM Sans' , 'serif'],
      },
      colors: {
        primary: { 
          50: '#FFF5EB', 
          100: '#FFF0D5', 
          200: '#FFE0AA', 
          300: '#FFCF80', 
          400: '#FFBF55', 
          500: '#FFAF2B', 
          600: '#FF9F00',  
          700: '#CC7F00', 
          800: '#995F00', 
          900: '#663F00', 
        },
        accent: { 
          50: '#F6E0B3',
          100: '#E6D6A6',
          200: '#D6CC99', 
          300: '#C6C28C', 
          400: '#B6B87F', 
          500: '#A6AE72', 
          600: '#96A465', 
          700: '#76834C', 
          800: '#566233', 
          900: '#36411A', 
        }, 
        dark: { 
          50: '#EAEAEA', 
          100: '#D4D4D4', 
          200: '#BFBFBF', 
          300: '#AAAAAA', 
          400: '#949494', 
          500: '#7F7F7F', 
          600: '#6A6A6A', 
          700: '#555555', 
          800: '#404040', 
          900: '#2B2B2B', 
        },
      },
    },
  },
  plugins: [],
}

