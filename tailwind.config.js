/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {

    colors: {
      white: "#FFFFFF",
      primary: {
        beige: "#F7F3E5",
        DEFAULT: "#4C352A",
      },
      secondary: "#F5BAC5",
      gray: {
        400: "#F2F2F2",
        500: "#E5E5E5",
        600: "#B2B2B2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",

      }
    },
    fontSize: {
      '8xl': [
        '80px', 
        {
          lineHeight: '80px',
          fontWeight: '600',
        },
      ],
      '7xl': [
        '72px', 
        {
          lineHeight: '72px',
          fontWeight: '600',
        },
      ],
      '6xl': [
        '55px', 
        {
          lineHeight: '55px',
          fontWeight: '500',
        },
      ],
      '5xl': [
        '48px', 
        {
          lineHeight: '48px',
          fontWeight: '500',
        },
      ],
      '4xl': [
        '36px', 
        {
          lineHeight: '36px',
          fontWeight: '500',
        },
      ],
      '3xl': [
        '28px', 
        {
          lineHeight: '28px',
          fontWeight: '500',
        },
      ],
      '2xl': [
        '21px', 
        {
          lineHeight: '21px',
          fontWeight: '600',
        },
      ],
      'xl': [
        '24px', 
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'lg': [
        '20px', 
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'base': [
        '16px', 
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'sm': [
        '15px', 
        {
          lineHeight: '15px',
          fontWeight: '400',
        },
      ],
      'caption1': [
        '20px', 
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'caption2': [
        '18px', 
        {
          lineHeight: '18px',
          fontWeight: '400',
        },
      ],
      'caption3': [
        '16px', 
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'caption4': [
        '13px', 
        {
          lineHeight: '13px',
          fontWeight: '400',
        },
      ],
    },
    borderRadius: {
      DEFAULT: '10px',
    },
    extend: {},
  },
  plugins: [],
}

