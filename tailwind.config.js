module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#1e1f21',
      green: '#a2e3c4',
      yellow: '#fffbdc',
      white: '#fdfdfd'
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
    },
    fontWeight: {
      'normal': 400,
      'medium': 500
    },
    borderWidth: {
      DEFAULT: '30px'
    },
    fontSize: {
      'base': '21px',
      'lg': '28px',
      'xl': '34px',
      '2xl': '46px',
      '3xl': '52px'
    },
    extend: {
      screens: {
        'sm': { 'raw': '(min-width: 640px) and (min-aspect-ratio: 16/9)' }
      }
    }
  },
  plugins: [],
}
