const color = require('tailwindcss/colors')
const defaultFont = ["'Libre Franklin'", 'sans-serif']

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: defaultFont,
            mono: defaultFont,
            display: defaultFont,
            body: defaultFont,
        },
        colors: {
            transaparent: 'transparent',
            black: color.black,
            white: color.white,
            custom: {
                1: '#FFFAF2',
                2: '#F5D6AB',
                3: '#C66C49',
                4: '#8B4136',
                5: '#33333',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
