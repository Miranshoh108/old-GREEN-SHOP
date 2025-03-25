/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(70, 163, 88, 0.1) 0%, rgba(70, 163, 88, 0.03) 100%)",
      },
    },
  },
  plugins: [],
};
