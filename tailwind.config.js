/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      keyframes: {
        kiri: {
          "0%, 100%": { transform: "translateY(-20%)" },
          "50%": { transform: "rotate(-3deg)" },
        },
        kanan: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "rotate(0)" },
        },
        atas: {
          "0%, 100%": { transform: "translatey(-5%)" },
          "50%": { transform: "rotate(0)" },
        },
        bawah: {
          "0%, 100%": { transform: "translatey(5%)" },
          "50%": { transform: "rotate(0)" },
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        "bounce-1": "kanan 6s infinite",
        "bounce-2": "kiri 6s infinite",
        "bounce-3": "atas 3s infinite",
        "bounce-4": "bawah 3s infinite",
      },
      colors: {
        btn: "#231955",
        page: "#231955",
        page2: "#4a3f7f",
        page3: "#d6d6d6",
      },
    },
  },
  plugins: [require("daisyui")],
};
