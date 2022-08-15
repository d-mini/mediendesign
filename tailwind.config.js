/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#181818',
        'main-light': '#D9B596',
        'primary': '#022601',
        'primary-light': '#067302',
        'secondary': '#8C1B1B',
        'secondary-light': '#BF3415',
      },
    },
  },
  plugins: [],
}
