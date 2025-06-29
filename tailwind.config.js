module.exports = {
  safelist: [
    'bg-black-base',
    'text-black-base',
    'bg-green',
    'text-green',
    'text-h1',
    'text-h1-medium',
    'text-h1-regular',
    'text-h2-medium',
    'text-h2-regular',
    'text-h3-medium',
    'text-h3-regular',
    'text-h4-medium',
    'text-h4-regular',
    'text-h5-medium',
    'text-h5-regular',
    'text-h6-medium',
    'text-h6-regular',
    'text-h7-medium',
    'text-h7-regular',
    'text-description-medium',
    'text-description-regular',
    'text-caption-medium',
    'text-caption-regular',
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-base': '#181818',
        'black-light': '#757575',
        'black-lighter': '#8D8D8D',
        'grey-bg': '#E5E5E5',
        'grey-line': '#E7E7E7',
        'white': '#ffffff',
        'green': '#25C923',
      },
      fontFamily: {
        'power-grotesk': ['Power Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Power Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // H1 variants
        'h1-regular': ['100px', {
          lineHeight: '90px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }],
        'h1-medium': ['100px', {
          lineHeight: '90px',
          letterSpacing: '-1px',
          fontWeight: '500',
        }],
        // H2 variants
        'h2-regular': ['92px', {
          lineHeight: '92px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }],
        'h2-medium': ['92px', {
          lineHeight: '92px',
          letterSpacing: '-1px',
          fontWeight: '500',
        }],
        // H3 variants
        'h3-regular': ['86px', {
          lineHeight: '100px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }],
        'h3-medium': ['86px', {
          lineHeight: '100px',
          letterSpacing: '-0.5px',
          fontWeight: '500',
        }],
        // H4 variants
        'h4-regular': ['64px', {
          lineHeight: '80px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }],
        'h4-medium': ['64px', {
          lineHeight: '80px',
          letterSpacing: '-0.5px',
          fontWeight: '500',
        }],
        // H5 variants
        'h5-regular': ['40px', {
          lineHeight: '52px',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'h5-medium': ['40px', {
          lineHeight: '52px',
          letterSpacing: '0px',
          fontWeight: '500',
        }],
        // H6 variants
        'h6-regular': ['24px', {
          lineHeight: '36px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'h6-medium': ['24px', {
          lineHeight: '36px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        }],
        // H7 variants
        'h7-regular': ['20px', {
          lineHeight: '32px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'h7-medium': ['20px', {
          lineHeight: '32px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        }],
        // Description variants
        'description-regular': ['18px', {
          lineHeight: '28px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'description-medium': ['18px', {
          lineHeight: '28px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        }],
        // Caption variants
        'caption-regular': ['16px', {
          lineHeight: '28px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'caption-medium': ['16px', {
          lineHeight: '28px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        }],
        // Legacy classes (keeping for backward compatibility)
        'h1': ['100px', {
          lineHeight: '90px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }],
        'h2': ['92px', {
          lineHeight: '92px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }],
        'h3': ['86px', {
          lineHeight: '100px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }],
        'h4': ['64px', {
          lineHeight: '80px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }],
        'h5': ['40px', {
          lineHeight: '52px',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'h6': ['24px', {
          lineHeight: '36px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'h7': ['20px', {
          lineHeight: '32px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'description': ['18px', {
          lineHeight: '28px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
        'caption': ['16px', {
          lineHeight: '28px',
          letterSpacing: '0.2px',
          fontWeight: '400',
        }],
      },
    },
  },
  plugins: [],
}; 