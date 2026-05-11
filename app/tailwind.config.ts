import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'sans-serif'],
      },
      colors: {
        samsung: {
          blue: '#005DA3', // Bleu Samsung subtil
          deepBlack: '#0A0A0A',
        },
        neutral: {
          white: '#FFFFFF',
        },
      },
      spacing: {
        '4': '1rem', // Échelle 4px-based (ajustable)
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '32px',
      },
      borderRadius: {
        'glass': '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
