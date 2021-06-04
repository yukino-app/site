const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./index.html", "./src/**/*{vue,css,js}"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: "Poppins, sans-serif",
        },
        extend: {
            colors: {
                indigo: colors.indigo,
                gray: colors.coolGray,
                orange: colors.orange,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
