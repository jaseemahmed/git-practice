export default {
  '*.{css,md,json}': 'prettier --write',
  '*.html': ['prettier --write', 'html-validate'],
  '*.js': ['eslint --fix', 'prettier --write'],
};
