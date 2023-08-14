/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],  
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        // indigo:colors.indigo,
        indigo :  {
          50: '#fcf3f9',
          100: '#fae9f5',
          200: '#f7d3ed',
          300: '#f2afdd',
          400: '#e97dc6',
          500: '#de56ad',
          600: '#cc368f',
          700: '#b02673',
          800: '#92225f',
          900: '#731f4d',
        },
  
        yellow: colors.yellow,
        primary: {
          50: '#fcf3f9',
          100: '#fae9f5',
          200: '#f7d3ed',
          300: '#f2afdd',
          400: '#e97dc6',
          500: '#de56ad',
          600: '#cc368f',
          700: '#b02673',
          800: '#92225f',
          900: '#731f4d',
        },
        greenWatt: {
          50: '#f2f9f8',
          100: '#e6f3f1',
          200: '#c0e0df',
          300: '#9bcfcd',
          400: '#51a9a8',
          500: '#25D366',
          600: '#1E9C4F',
          700: '#197847',
          800: '#13623F',
          900: '#0D3A28',
        },
  secondary: {
    '50': '#f3edf7', 
    '100': '#e9dcf2', 
    '200': '#c7afde', 
    '300': '#a385c9', 
    '400': '#6041a3', 
    '500': '#26117a', 
    '600': '#200e6e', 
    '700': '#18095c', 
    '800': '#11064a', 
    '900': '#0b0338', 
    '950': '#060124'
}
      },
    },

  },
  plugins: [],
}

