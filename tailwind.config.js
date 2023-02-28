/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'oswald': ['Oswald']
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-textshadow'),
    require('tw-elements/dist/plugin')
  ],
}