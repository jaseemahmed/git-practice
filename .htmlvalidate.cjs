module.exports = {
  extends: ['html-validate:recommended'],
  rules: {
    // Prettier controls code style, so match its output
    'doctype-style': ['error', { style: 'lowercase' }],
    'void-style': ['error', { style: 'selfclose' }],
  },
};
