/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#2D9CDB',
          700: '#2F80ED'
        },
        gray: {
          100: '#F2F2F2',
          200: '#E1E1E6',
          300: '#E0E0E0',
          500: '#CCCCCC',
          600: '#828282',
          700: '#4F4F4F',
          800: '#323238'
        },
        green: {
          500: '#6FCF97',
          600: '#00B37E',
          800: '#219653'
        },
        purple: {
          400: '#81D8F7',
          500: '#D3A1DF',
          700: '#BB6BD9',
          800: '#9B51E0',
        },
        red: {
          500: '#F75A68',
        }
      },
      backgroundImage: {
        blur: 'url(/src/assets/blur.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
        'nunito': 'Nunito, sans-serif',
        'roboto': 'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}
