module.exports = {
  root: true,
  extends: ['@forgedev-br/eslint-config/vue'],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 4,
        },
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        baseIndent: 1,
      },
    ],
  },
}
