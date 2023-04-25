/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
  ],
  theme: {
      extend: {
        colors: {
          green: "#60a5fa",
          blue: "#ddd6fe",
          transparent: "#000000b1"
        },
        screens: {
          'sm': {'min': '320px', 'max': '767px'}, 
        
          "md": {'min': '768px', 'max': '1535px'},
          // => @media (min-width: 768px) { ... }
    
          "xl": '1536px',
          // => @media (min-width: 1536px) { ... }
        }
      }
  },
  variants: {},
  plugins: []
}
