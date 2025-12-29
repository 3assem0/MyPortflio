tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff', // Clean white
          dark: '#02040a', // Deep navy/black like the image
        },
        surface: {
          light: '#f8f9fa',
          dark: '#0d1117', // GitHub-like dark panel
        },
        border: {
          light: '#eaeaea',
          dark: '#30363d', // Subtle dark border
        },
        card: {
            light: '#ffffff',
            dark: '#161b22', // Slightly lighter than bg
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
      },
      backgroundImage: {
         // Subtle gradients for that "sheen"
         'sheen-dark': 'linear-gradient(45deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
      },
      animation: {
          'fade-in': 'fadeIn 0.6s ease-out forwards',
          'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
          fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
          },
          slideUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
          }
      }
    }
  }
}
