# @yadagency/eslint-config

## Usage

**Install**

```shell
yarn add -D @yadagency/eslint-config
```

**`.eslintrc.js`**:
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@yadagency',
    '@yadagency/eslint-config/typescript',
    '@yadagency/eslint-config/react',
    '@yadagency/eslint-config/react-native',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
}
```