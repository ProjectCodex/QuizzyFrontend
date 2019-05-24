module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    parser: 'babel-eslint',
    extends: 'airbnb',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/jsx-filename-extension': 0,
    },
};
