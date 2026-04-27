/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fiverr: {
          green: '#1DBF73',
          greenHover: '#19A462',
        },
        slate: {
          navy: '#2D3E50',
          light: '#F7F7F7',
        },
        eonati: {
          bg: '#FFFFFF',
          alt: '#F7F7F7',
          text: '#2D3E50',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
