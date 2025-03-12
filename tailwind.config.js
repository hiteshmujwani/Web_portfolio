// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color (blue-800)
        secondary: "#F59E0B", // Custom secondary color (amber-500)
        accent: {
          light: "#D1FAE5",
          DEFAULT: "#10B981", // Default accent color
          dark: "#047857",
        },
      },
    },
  },
  plugins: [],
};
