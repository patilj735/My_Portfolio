/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#08090B',
          surface: '#0E1013',
          raised: '#14171B',
          border: '#1F232A',
          borderHover: '#2C3139',
        },
        ink: {
          primary: '#F3F4F6',
          secondary: '#A0A5AD',
          muted: '#6B7078',
        },
        accent: {
          violet: '#7C6CF5',
          blue: '#4F7BFF',
          cyan: '#34D8E0',
        },
      },
      fontFamily: {
        display: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'aurora-gradient':
          'radial-gradient(40% 40% at 20% 20%, rgba(124,108,245,0.28) 0%, transparent 60%), radial-gradient(35% 35% at 80% 30%, rgba(79,123,255,0.22) 0%, transparent 60%), radial-gradient(45% 45% at 50% 90%, rgba(52,216,224,0.14) 0%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,108,245,0.15), 0 8px 40px -8px rgba(124,108,245,0.35)',
        'glow-sm': '0 0 0 1px rgba(124,108,245,0.12), 0 4px 20px -6px rgba(124,108,245,0.3)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1.5s infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
