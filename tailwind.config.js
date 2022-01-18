module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        colorPrimary: '#fd4654',
        colorAccent: '#2C1E28',
        colorDark: '#0E1822'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
