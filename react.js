module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  rules : {
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  }
}