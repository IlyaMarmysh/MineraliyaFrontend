/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'mineral': "url('/mineral.png')",
    },
    colors: {
      'dark': '#121717',   // очень тёмный фон
      'soft-mint': '#668785',         // мягкий мятный
      'light-snow': '#E5E8EB',        // светлый снежный
      'teal-muted': '#f0f5f5',
      'white': '#fff',// приглушённый бирюзовый
    },
    fontFamily: {
      notoSerif: ['Noto Serif', 'ui-sans-serif', 'system-ui'],
    },
    plugins: [],
  }
}
