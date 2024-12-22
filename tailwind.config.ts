import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        orbitron: ["var(--font-orbitron)"],
      },
      fontSize: {
        title: ["45px", { lineHeight: "1.2", letterSpacing: "0" }],
        titleMobile: ["32px", { lineHeight: "1.2", letterSpacing: "0" }],
        subtitle: ["24px", { lineHeight: "1.3", letterSpacing: "0" }],
        subtitleMobile: ["22px", { lineHeight: "1.3", letterSpacing: "0" }],
        paragraph: ["20px", { lineHeight: "1.5", letterSpacing: "0" }],
        paragraphMobile: ["16px", { lineHeight: "1.5", letterSpacing: "0" }],
      },
      gridTemplateColumns: {
        "auto-fit-4": "repeat(4, minmax(0, max-content))",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        purpleDark: "#090823",
        pink: "#FE67C4",
        blue: "#3966BB",
      },
      margin: {
        "custom-y": "30px",
        "custom-x": "20px",
      },
      padding: {
        "custom-y": "20px",
        "custom-x": "30px",
      },
    },
  },
  plugins: [],
} satisfies Config;
