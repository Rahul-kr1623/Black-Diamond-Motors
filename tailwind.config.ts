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
        bd: {
          red: "#d11329",      // Brand Red
          dark: "#050505",     // Deep Black
          gray: "#1a1a1a",     // Steel Grey
        }
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        roboto: ['var(--font-roboto)'],
      },
      keyframes: {
        'snake-top': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'snake-right': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'snake-bottom': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'snake-left': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      },
      animation: {
        'snake-top': 'snake-top 1s linear infinite',
        'snake-right': 'snake-right 1s linear infinite',
        'snake-bottom': 'snake-bottom 1s linear infinite',
        'snake-left': 'snake-left 1s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;