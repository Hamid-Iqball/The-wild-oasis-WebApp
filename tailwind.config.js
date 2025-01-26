/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundColor: {
        'backdrop-color': '#ffff',
      },
      backdropBlur: {
        'custom': '4px',
      },
      colors:{
       customOrange:{
         50:'#FFF7ED',
         100:'#FFF7ED',
         200:'#FFD7A8',
         300:'#FFB86A',
         400:'#FF8904',
         500:'#FF6900',
         600:'#F54A00',
         700:'#CA3500',
         800:"#9F2D00",
         900:'#7E2A0C',
         950:'#441306'
       },
       customGreen:{
         100:'#DCFCE7',
         dark:'#16A381',
       },
       customBlue:{
          dark:'#2563EE',
          light:'#DBEAFE'
       },
       customGray:{
        50:'#F9FAFB',
        100:'#F3F4F6',
        200:'#E5E7EB',
        300:'#D4D4D8',
        400:'#99A1AF',
        500:'#6A7282',
        600:'#4A5565',
        700:'#364153',
        800:'#1E2939',
        900:'#101828',
        950:'#030712'

       }
      }


  },
  plugins: [],
}

}