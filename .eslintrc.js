module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    extends: [
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "react",
        "prettier"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    settings: {
        react: {
            version: "detect"
        },
    },
    env: {
        "browser": true,
        "es6": true
    },
    rules: {
    },
    overrides: []
};