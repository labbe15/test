/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50:'#f7f3ee',100:'#efe6dc',200:'#e0ccb8',300:'#d0b394',400:'#c19970',500:'#b17f4c',600:'#8e663d',700:'#6a4c2e',800:'#47331f',900:'#24190f',
        },
        brand: {
          primary: '#1d1d1f',
          accent: '#c8a96a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
