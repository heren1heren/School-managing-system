// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default [
  // Fast mode: no type-checking
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['dist', 'build', 'coverage', 'node_modules'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked.filter(
        // Remove typed rules for speed
        r => !r.meta?.docs?.requiresTypeChecking
      ),
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
  },
];