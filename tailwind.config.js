/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
      },
    },
    extend: {
      colors: {
        tamie: {
          green: '#7FB77E',
          beige: '#F5EBDD',
          lilac: '#E8DFF6'
        }
      },
      fontFamily: {
        // utility classes: font-title, font-body, font-handwritten
        'title': ["Caveat", "ui-sans-serif", "system-ui", "-apple-system", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial"],
        'body': ["ui-sans-serif", "system-ui", "-apple-system", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial"],
        'handwritten': ["Indie Flower", "Caveat", "ui-sans-serif", "system-ui", "-apple-system", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial"]
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    }
  },
  plugins: [],
}
