module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        klp: {
          darkest: '#9900ff',
          dark: '#ae35ff',
          DEFAULT: '#cb7cff',
          light: '#ddaaff',
          lightest: '#eeccff',
        },
      },
    },
  },
  variants: {},
  plugins: [
          // ...
          require('@tailwindcss/forms'),
  ],
}
