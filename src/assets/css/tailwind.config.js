/*
 * @Description:
 * @version:
 * @Author: seehar
 * @Date: 2022-07-15 21:07:24
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './packages/**/*.{vue,js,ts,jsx,tsx}'],
    // corePlugins: {
    //   preflight: false,
    // },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#ca8b4a',
                bk: {
                    60: 'rgba(0, 0, 0, 0.06)',
                    100: 'rgba(0, 0, 0, 0.1)',
                    200: 'rgba(0, 0, 0, 0.2)',
                    300: 'rgba(0, 0, 0, 0.3)',
                    400: 'rgba(0, 0, 0, 0.4)',
                    500: 'rgba(0, 0, 0, 0.5)',
                    600: 'rgba(0, 0, 0, 0.6)',
                    700: 'rgba(0, 0, 0, 0.7)',
                    800: 'rgba(0, 0, 0, 0.8)',
                    900: 'rgba(0, 0, 0, 0.9)'
                },
                wt: {
                    100: 'rgba(255, 255, 255, 0.1)',
                    200: 'rgba(255, 255, 255, 0.2)',
                    300: 'rgba(255, 255, 255, 0.3)',
                    400: 'rgba(255, 255, 255, 0.4)',
                    500: 'rgba(255, 255, 255, 0.5)',
                    600: 'rgba(255, 255, 255, 0.6)',
                    700: 'rgba(255, 255, 255, 0.7)',
                    800: 'rgba(255, 255, 255, 0.8)',
                    900: 'rgba(255, 255, 255, 0.9)'
                }
            },
            boxShadow: {
                default: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }
        }
    },
    plugins: []
}
