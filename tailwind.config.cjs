/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      // heading: [],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
      },
      spacing: {
        180: '32rem',
      },
      // colors: {
      //   prim: {
      //     200: '#2c89ac',
      //     300: '#4496b5',
      //     400: '#26bba4',
      //     500: '#116382',
      //     600: '#0d4a62',
      //   },
      //   sec: '#818fff',
      //   txt: {
      //     dark: '#212529',
      //     light: '#666',
      //   },
      // },
    },
  },
  plugins: [],
};
