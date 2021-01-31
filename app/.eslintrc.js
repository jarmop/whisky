module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: '16.0', // React version, default to the latest React stable release
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    // this stupid import checker fails to detect whether import is correct or not, so let's disable it
    'import/no-unresolved': 0,
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-extra-boolean-cast': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'react/prop-types': 0,
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-first-prop-new-line': 0,
    'prettier/prettier': 'error',
    'object-curly-newline': 'off',
  },
}
