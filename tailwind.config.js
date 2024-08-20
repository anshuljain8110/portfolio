/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    
    extend: {
      colors:{
        orangePrimary:"#E3651D",
        blackPrimary:"#191919",
        yellowPrimary:"#BED754",
        purplePrimary:{
          100:"#8E05C2",
          200:"#700B97",
          300:"#3E065F",
        },
        maroonPrimary:"#750E21",
        // light theme colors
        cyanPrimary:"#91DDCF",
        textPrimary:"#F7F9F2",
        pinkPrimary:"#F19ED2"
      },
      keyframes: {
        anim: {
          '0%': { left: '620px' },
          '100%': { left: '-500px' },
        },
      },
    },
  },
  plugins: [],
}