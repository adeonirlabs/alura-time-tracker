import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mango: {
          50: '#fff9eb',
          100: '#feeec7',
          200: '#fddb8a',
          300: '#fcc34f',
          400: '#fbab24',
          500: '#f5880b',
          600: '#d96306',
          700: '#b44309',
          800: '#92330e',
          900: '#782b0f',
          950: '#451403',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
