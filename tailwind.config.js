/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#228B22"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: "340px", // Smallest screen size (for very small mobile devices)
        sm: "640px", // Small mobile devices and above
        md: "768px", // Tablets and small laptops
        lg: "1024px", // Laptops and larger tablets
        xl: "1280px", // Desktops
        "2xl": "1536px", // Larger screens (e.g., wide desktop monitors)
      },
    },
  },
  plugins: [],
}