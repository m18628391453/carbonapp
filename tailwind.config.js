module.exports = {
    theme: {
      extend: {
        animation: {
          'in': 'fadeIn 0.3s ease-out',
          'slide-in-from-bottom': 'slideInFromBottom 0.3s ease-out',
          'slide-in-from-bottom-2': 'slideInFromBottom 0.2s ease-out',
          'slide-in-from-bottom-4': 'slideInFromBottom 0.4s ease-out',
        },
        keyframes: {
          fadeIn: {
            'from': { opacity: '0', transform: 'translateY(10px)' },
            'to': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInFromBottom: {
            'from': { transform: 'translateY(100%)', opacity: '0' },
            'to': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }