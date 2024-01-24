/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors : {
          'gym' : {
            'black' : {
              '50': '#161A1D',
              '100': '#0B090A'
            }, 
            'red' : {
              '50': '#E5383B',
              '100': '#BA181B',
              '150': '#A4161A',
              '200': '#660708'
            },
            'gray' : {
              '50': '#FFFFFF',
              '100': '#F5F3F4',
              '150': '#D3D3D3',
              '200': '#B1A7A6'
            }
          },
        },
      },
    },
    plugins: [
      require("daisyui"),
    ],
}