import vuetify from 'eslint-config-vuetify';
import vue from 'eslint-plugin-vue';
import pvuetify from 'eslint-plugin-vuetify';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  [
    ...vue.configs['flat/recommended'],
    ...(await vuetify({ 'perfectionist': false })),
    {

      plugins: {
        pvuetify,
      },
      rules: {
        'vue/script-indent': ['error', 2, { baseIndent: 0 }],
        'vue/attributes-order': 'off',
        '@stylistic/no-mixed-operators': 'warn',
        '@stylistic/quote-props': 'off',
        '@perfectionist/sort-imports': 'off',
        '@stylistic/semi': 'off',
        '@/semi': 'error',
        '@stylistic/no-trailing-spaces': ['warn', {
          'skipBlankLines': true,
          'ignoreComments': true,
        }],
        'import/no-duplicates': 'warn',
      },
    },
    
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ]);
