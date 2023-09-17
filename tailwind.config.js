/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif']
            },
            colors: {
                'light-gray': 'hsl(212, 45%, 89%)',
                'gray-blue': 'hsl(220, 15%, 55%)'
            }
        }
    },
    plugins: [],
}

