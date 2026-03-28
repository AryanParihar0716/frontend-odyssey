/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dev-bg': '#0a0a0a',     // Deep Terminal Black
        'dev-green': '#00FF41',  // Classic Matrix/Terminal Green
        'game-neon': '#00F0FF',  // Cyan for the "Gaming" phase
        'panic-red': '#FF3131',  // Red for the "Deadline" phase
      },
      // Adding these ensures your typography hits that "Awwwards" high-end feel
      letterSpacing: {
        tighter: '-0.05em',
      },
    },
  },
  plugins: [],
};