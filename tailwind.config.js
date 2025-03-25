/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Para App Router (Next.js 13+)
      "./pages/**/*.{js,ts,jsx,tsx}", // Para Pages Router (Next.js 12 ou anterior)
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  