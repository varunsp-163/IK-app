/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'base-white': 'var(--base-white, #FFF)',
      },
      fontFamily: {
        'inspiration': ['Inspiration', 'sans'],
        'inter': ['Inter', 'sans'],
      },
      boxShadow: {
        'nav': '0px 4px 40px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
