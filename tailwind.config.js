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
         100:'#FFF7ED',
         200:'#FFD7A8',
         300:'#FFB86A',
         400:'#FF8904',
         500:'#FF6900',
         600:'#F54A00',
         700:'#CA3500',
         800:"#9F2D00",
       },
       customGreen:{
         light:'#DCFCE7',
         dark:'#16A381',
       },
       customBlur:{
          dark:'#2563EE',
          light:'#DBEAFE'
       },
       customGray:{
        light:'#F3F4F6',
        dark:'#4A5565'
       }
      }


  },
  plugins: [],
}

}