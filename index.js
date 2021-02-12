module.exports = {
  extends: [
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-console': 'error',
    'no-return-await': 'error',
    'no-unneeded-ternary': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'spaced-comment': ['error', 'always'],
  }
}