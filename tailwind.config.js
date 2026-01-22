module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // blue-600
        deepBlue: "#0c121d",  // deep blue near-black (updated per request)
        black: "#0b0b0b",
        secondary: "#1E40AF", // indigo-800
        accent: "#06B6D4",    // cyan-500
        muted: "#64748b",
        background: "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Helvetica", "Arial"],
        display: ["Poppins", "Inter", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "4rem"
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
