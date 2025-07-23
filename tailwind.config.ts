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
        primaryBlack: "rgba(0, 9, 41, 1)",
        primaryLight: "rgba(0, 9, 41, 0.6)",
        lightGray: "rgba(230, 230, 234, 1)",
        darkGray: "rgba(138, 142, 157, 1)",
        primaryGray: "rgba(84, 90, 112, 1)",
        disableGray: 'rgba(176, 179, 189, 1)',
        primaryBlue: "rgba(52, 33, 107, 1)",
        borderGray: "rgba(0, 0, 0, 0.1)",
        primaryGrayDark: "rgba(230, 230, 234, 0.4)",
        green: '#01A669',
        secondaryGreen: 'rgba(1, 166, 105, 1)',
      },
      lineHeight: {
        'extra-tight': '100%',
      },
      screens: {
        mobile: { min: "320px", max: "480px" },
        tablet: { min: "768px", max: "991px" },
        laptop: { min: "991px", max: "1024px" },
        // largeDesktop: { min: "1536px" , max: "1919px" },
      },
    
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
      },
      animation: {
        fadeInScale: 'fadeInScale 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
