module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'react/jsx-filename-extension': [
            2,
            {
              extensions: ['.tsx']
            }
        ],
        // prohibit extensions in imports (2 = triggers error)
        // 'import/extensions': [
        //     2,
        //     'never',
        // ],
        // don't care about extensions
        'import/extensions': 0,
        // this stupid import checker fails to detect whether import is correct or not, so let's disable it
        'import/no-unresolved': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        'react/state-in-constructor': 0,
        'consistent-return': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'no-prototype-builtins': 0,
    },
    settings: {
        react: {
          version: 'detect',
        }
      },
    ignorePatterns: ["serviceWorker.js"],
};