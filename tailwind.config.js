/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", // <<< Ini adalah lokasi file HTML/JS Anda
  ],
  theme: {
    extend: {
      boxShadow: {
        chunky:
          "3px 3px 0 0 var(--color-base-300), 6px 6px 0 0 var(--color-base-200)",
        "chunky-sm": "2px 2px 0 0 var(--color-base-300)",
        "chunky-btn":
          "2px 2px 0 0 var(--color-primary), 4px 4px 0 0 var(--color-primary-content)", // Contoh untuk tombol
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["light", "dark", "cupcake", "luxury", "retro", "dracula"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
