/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-standard'
  ],
  rules: {
    'import/no-unresolved': 'error'
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`
    })
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
