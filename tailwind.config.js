/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.{vue,js,ts,md}',
    './.vitepress/**/*.{vue,js,ts}'
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
};
