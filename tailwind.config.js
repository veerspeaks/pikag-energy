/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3eba85',   // Darker teal for better contrast
        secondary: '#5225e0', // Darker purple for better contrast  
        accent: '#ffb41d',    // Warmer yellow for better visibility
        dark: '#1a1a2e',      // Dark shade for text
        light: '#f7f9fc'      // Light background color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
      }
    },
  },
  plugins: [],
}