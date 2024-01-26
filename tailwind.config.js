/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./pages/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Modak: ["Modak"],
        Unlock: ["Unlock"]
      },
      colors: {
        'custom-yellow':'#FAC05E',
        'custom-red':'#EE6352',
        'custom-blue':'#3FA7D6',
        'custom-orange':'#F79D84',
        'custom-green':'#59CD90',
        'custom-purple': '#C59FC9',
    },
  },
  plugins: [],
}
}
