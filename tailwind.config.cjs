module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "sea-blue": "#043c63",
        teal: "#0c738b",
        "bluish-gray": "#bac7d1",
        "dull-blue": "#527791",
        "dull-blue-light": "#7494a6",
      },
    },
  },
  plugins: [],
};
