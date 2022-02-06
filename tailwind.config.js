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
        colorPrimary: '#ff2e40',
        colorAccent: '#25090e',
        colorDark: '#000000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
