module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "md": "760px",
      "lg": "1200px"
    },
    maxHeight: {
      '120': '28rem',
     },
    maxWidth: {
      "half": "50%",
      "1200": "1200px"
    },
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {},
  },
  plugins: [],
}
