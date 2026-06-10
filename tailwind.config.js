/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Space Mono', 'monospace'],
      },
      colors: {
        brand: {
          primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-brand-secondary) / <alpha-value>)',
          accent: 'rgb(var(--color-brand-accent) / <alpha-value>)',
          success: 'rgb(var(--color-brand-success) / <alpha-value>)',
          warning: 'rgb(var(--color-brand-warning) / <alpha-value>)',
          danger: 'rgb(var(--color-brand-danger) / <alpha-value>)',
          bg: 'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          text: 'rgb(var(--color-text) / <alpha-value>)',
          'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
        },
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(5px, -10px) rotate(1deg)' },
          '66%': { transform: 'translate(-5px, -5px) rotate(-1deg)' },
        }
      },
    },
  },
  plugins: [],
}
