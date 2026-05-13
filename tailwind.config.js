/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0f1a',
          elevated: '#111827',
          card: 'rgba(17, 24, 39, 0.65)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        blob: 'blob 12s ease-in-out infinite',
        'blob-slow': 'blob 18s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        orbit: 'orbit 20s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(28px, -42px) scale(1.06)' },
          '66%': { transform: 'translate(-22px, 24px) scale(0.94)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(56, 189, 248, 0.45)',
        'glow-purple': '0 0 36px -6px rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
}
