/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#080609',
          dark: '#110A1A',
          'dark-purple': '#18002B',
          purple: '#5700A8',
          'vibrant-purple': '#7900E8',
          'light-purple': '#9B30FF',
          yellow: '#FFD500',
          'yellow-hover': '#FFDE33',
          grey: '#B8B3C0',
          'grey-light': '#DCD9E1',
          'grey-dark': '#6C6577',
          surface: '#12091F',
          'surface-card': '#160B26',
          'surface-elevated': '#1F0F35',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(121, 0, 232, 0.35)',
        'glow-purple-lg': '0 0 60px rgba(121, 0, 232, 0.45)',
        'glow-yellow': '0 0 25px rgba(255, 213, 0, 0.4)',
        'glow-yellow-sm': '0 0 12px rgba(255, 213, 0, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(30px)' },
          '100%': { opacity: '0.8', filter: 'blur(45px)' },
        },
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 50% 20%, rgba(121, 0, 232, 0.25) 0%, rgba(24, 0, 43, 0.5) 45%, rgba(8, 6, 9, 1) 85%)',
        'purple-gradient': 'linear-gradient(135deg, #18002B 0%, #5700A8 50%, #7900E8 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(24, 0, 43, 0.7) 0%, rgba(17, 10, 26, 0.95) 100%)',
      },
    },
  },
  plugins: [],
};
