// eslint.config.js
import js from '@eslint/js';
import pluginTS from '@typescript-eslint/eslint-plugin';
import parserTS from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		ignores: ['node_modules', 'dist'],
		languageOptions: {
			parser: parserTS,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				console: 'readonly',
				module: 'readonly',
				require: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				window: 'readonly',
				document: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': pluginTS,
			import: pluginImport,
			'jsx-a11y': pluginA11y,
			react: pluginReact
		},
		rules: {
			'import/order': [
				'error',
				{
					alphabetize: { order: 'asc', caseInsensitive: false },
					'newlines-between': 'always',
					groups: [
						['builtin', 'external'],
						'internal',
						['parent', 'sibling', 'index']
					]
				}
			],
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: [
								'@templatesrartup/backend/**',
								'!@templatesrartup/backend/**/',
								'!@templatesrartup/backend/**/input'
							],
							allowTypeImports: true,
							message:
								'Only types and input schemas are allowed to be imported from backend workspace'
						}
					]
				}
			],
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/triple-slash-reference': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/consistent-type-assertions': 'off',
			'jsx-a11y/anchor-is-valid': 'off',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			curly: ['error', 'all'],
			'no-irregular-whitespace': [
				'error',
				{ skipTemplates: true, skipStrings: true }
			],
			'no-console': ['error', { allow: ['info', 'error', 'warn'] }]
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];
