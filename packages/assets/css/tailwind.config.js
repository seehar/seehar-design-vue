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
                // primary: '#409EFF',
                primary: 'var(--theme-primary)',
                secondary: 'var(--theme-secondary)'
            },
            boxShadow: {
                default: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }
        }
    },
    plugins: []
}
