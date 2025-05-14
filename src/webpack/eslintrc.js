module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // Add other presets like 'plugin:react/recommended' if needed
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Your custom rules here
    'no-unused-vars': 'warn',
  },
};
