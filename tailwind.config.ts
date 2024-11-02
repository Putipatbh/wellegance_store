import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading1-bold": [
        "50px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        'white-1': '#FBF0F3',
  			"white-cream": "#FAF9F6",
  			'grey-1': '#616161',
  			'grey-2': '#E5E7EB',
        'grey-3': '#C7C8D1',
        'grey-4': '#8F91A3',
        "grey-font": "#5C5E70",
  			'pink-1': '#F7C6C7',
  			'pink-2': '#F7D8D9',
  			'pink-3': '#D4A5A5',
  			'red-1': '#e80000',
        "pink-brown": "#B27474",
        "blue-1": "#005EBE",
        "blue-2": "#E9F5FE",
        "blue-3": "#F5F7F9",
      },
      boxShadow: {
        'pink-custom': '0px 10px 20px 5px rgba(247, 198, 199, 0.5)', // เงาสีชมพู #F7C6C7
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;