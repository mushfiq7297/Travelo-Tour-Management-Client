/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
       'cerdaville': ["Cedarville Cursive", "cursive"],
       'stack': [ "Short Stack", "cursive"]
     }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "night"],
  },
}

