/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      fontFamily: {
        sans: ['MV Faseyha'],
        bold: ['var(--font-waheed)']
      },
      extend: {
        lineHeight:{
          '11': {
            lineHeight: '2.59rem'
          }
        },
        fontSize: {
          '2xl': ['1.625rem', {
            lineHeight: '2.59rem'
          }],
          'xl': ['1.375rem', {
            lineHeight: '1.875rem',
            letterSpacing: '3%'
          }],
        }
      },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
