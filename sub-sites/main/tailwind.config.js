const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Poppins, sans-serif",
                cursive: "Great Vibes, cursive",
            },
            colors: {
                primary: colors.indigo,
                secondary: colors.purple,
            },
        },
    },
    plugins: [],
};
