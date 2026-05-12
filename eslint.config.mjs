import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import jsonc from 'eslint-plugin-jsonc';
import markdown from 'eslint-plugin-markdown';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['**/*.d.ts', 'dist/**', 'node_modules/**'] },
	eslint.configs.recommended,
	...jsonc.configs['flat/recommended-with-jsonc'],
	...markdown.configs.recommended,
	{
		files: ['**/*.ts'],
		extends: [
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			globals: globals.node,
		},
		plugins: {
			import: importPlugin,
		},
		rules: {
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
				},
			],
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/explicit-member-accessibility': 'error',
			// Was @typescript-eslint/lines-between-class-members (removed; use core rule)
			'lines-between-class-members': 'warn',
			'@typescript-eslint/member-ordering': [
				'error',
				{
					default: {
						order: 'alphabetically',
					},
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'interface',
					format: ['PascalCase'],
					custom: {
						regex: '^I[A-Z]',
						match: false,
					},
				},
			],
			'@typescript-eslint/no-extraneous-class': [
				'error',
				{
					allowWithDecorator: true,
				},
			],
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/prefer-enum-initializers': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',
			'@typescript-eslint/return-await': 'error',
			'@typescript-eslint/sort-type-constituents': 'error',
			'@typescript-eslint/strict-boolean-expressions': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/unbound-method': [
				'error',
				{
					ignoreStatic: true,
				},
			],
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'warn',
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling']],
					'newlines-between': 'always',
				},
			],
		},
	},

	// Markdown fenced blocks are linted as virtual `*.md/line_col.ts` paths; they
	// are not part of tsconfig.json, so disable type-aware rules for those only.
	{
		files: ['**/*.md/**/*.{ts,mts,cts}'],
		...tseslint.configs.disableTypeChecked,
		rules: {
			...tseslint.configs.disableTypeChecked.rules,
			'@typescript-eslint/member-ordering': 'off',
		},
	},

	{
		files: ['**/*.spec.ts'],
		languageOptions: {
			...vitest.configs.env.languageOptions,
		},
		plugins: {
			vitest,
		},
		rules: {
			...vitest.configs.all.rules,
			'vitest/consistent-test-filename': [
				'error',
				{
					pattern: '.*\\.spec\\.ts',
				},
			],
			'vitest/no-hooks': 'off',
			'vitest/prefer-expect-assertions': 'off',
			'vitest/prefer-lowercase-title': 'off',
		},
	},

	eslintConfigPrettier,
);
