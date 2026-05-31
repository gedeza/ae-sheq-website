/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // AE SHEQ Brand Colors (extracted from logo)
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#1e5ba8',  // Main brand blue (from logo)
          600: '#1a4d8f',
          700: '#164076',
          800: '#12325d',
          900: '#0e2544',
          950: '#003d7a',  // Darker navy (from logo)
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(30, 91, 168, 0.1), 0 10px 20px -2px rgba(30, 91, 168, 0.05)',
        'medium': '0 4px 25px -5px rgba(30, 91, 168, 0.15), 0 10px 30px -5px rgba(30, 91, 168, 0.1)',
        'large': '0 10px 40px -10px rgba(30, 91, 168, 0.2), 0 20px 50px -10px rgba(30, 91, 168, 0.15)',
      },
    },
  },
  plugins: [],
}