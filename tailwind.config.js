/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_1000,
      colors: {
        'imlab-default': '#C84637',
        'imlab-default-light': '#DE9087',
        'imlab-background': '#323232',
        'imlab-background-light': '#DADADA',
        'imlab-text-default': '#1A1A1A',
        'imlab-text-default-light': '#666666',
        'imlab-voucher-default': '#BF4737',
        'imlab-voucher-default-dark': '#1C1C1B',
        'imlab-voucher-text': '#3C3C3B',
        'imlab-voucher-footer-text': '#575756',
      },
      boxShadow: {
        'imlab-card-shadow': '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
