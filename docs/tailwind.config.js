/*
 * @Description:
 * @version:
 * @Author: seehar
 * @Date: 2022-07-15 21:07:24
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './docs/**/*.{vue,js,ts,jsx,tsx}', './examples/**/*.{vue,js,ts,jsx,tsx}'],
    // corePlugins: {
    //   preflight: false,
    // },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#708fff'
            },
            boxShadow: {
                default: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }
        }
    },
    plugins: []
}
