/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0D0D0D',
          secondary: '#111111',
          card: '#141414',
          panel: 'rgba(17, 17, 17, 0.75)',
        },
        green: {
          dark: '#0B2112',
          deep: '#07140B',
          ambient: '#0e2b17',
          surface: '#112217',
        },
        lime: {
          neon: '#C7FF2F',
          secondary: '#A8FF00',
          muted: '#8cb81a',
          tint: 'rgba(199, 255, 47, 0.08)',
          glow: 'rgba(199, 255, 47, 0.25)',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A5A5A5',
          muted: '#6B6B6B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          hover: 'rgba(199, 255, 47, 0.35)',
          green: 'rgba(11, 33, 18, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(199, 255, 47, 0.25)',
        'glow-lime-lg': '0 0 45px -10px rgba(199, 255, 47, 0.35)',
        'glow-green': '0 0 35px -5px rgba(11, 33, 18, 0.6)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
