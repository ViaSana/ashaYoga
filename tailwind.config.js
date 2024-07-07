/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './_includes/**/*.{html,js,md}',
      './_layouts/**/*.{html,js,md}',
      './_*/*.{html,js,md}',
      './*.{html,js,md}'
    ],
    theme: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Oranienbaum', 'serif'],
      },     

      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        aspectRatio: {
          'landscape': '2 / 1 ',
          'portrait': '3 / 4',
          'portrait-tall': '3 / 5',
        },
        minHeight:{
          '100': '100vh',
          '90': '90vh',
          '80': '80vh',
          '70': '70vh',
          '60': '60vh',
          '50': '50vh',
        },
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#76867A",    // Misty Moss, Shade: #5B6563, Tint: #C4CDCB
            "secondary": "#846B87",  // Lavender Shadow, Shade: #67505A, Tint: #A897A4
            "base-100": "#EDEEF1",   // Ethereal Mist Tint
            "base-200": "#E6E3EE",   // Ethereal Mist
            "base-300": "#B3B1B8",   // Ethereal Mist Shade
            "neutral": "#314641",    // Forest Depths, Shade: #1D2D2B, Tint: #5A6D6B
            "accent": "#DAA520",     // Goldenrod, Shade: #B78A1D, Tint: #EDC857
          },
        },
      ],
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('daisyui'),
    ],
  }