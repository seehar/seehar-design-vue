/*
 * @Description:
 * @version:
 * @Author: seehar
 * @Date: 2022-07-15 21:07:24
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/index.html',
    './docs/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--theme-primary), <alpha-value>)',
        secondary: 'rgba(var(--theme-secondary), <alpha-value>)'
      }
    }
  },
  plugins: []
}
