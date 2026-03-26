import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(eslint.configs.recommended, tseslint.configs.recommended, {
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'prefer-const': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
});
