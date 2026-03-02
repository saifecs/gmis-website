import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F5D3B",
        "primary-dark": "#123524",
        concrete: "#5A5A5A",
        sand: "#C8A96A",
        neutral: {
          50: "#F5F5F5",
          100: "#EAEAEA",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        "heading-ar": ["var(--font-cairo)", "sans-serif"],
        "body-ar": ["var(--font-ibm-plex-ar)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
