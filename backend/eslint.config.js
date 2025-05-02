import path from 'path';

import baseConfig from '../eslint.config.mjs';

export default [
	...baseConfig,
	{
		languageOptions: {
			parserOptions: {
				project: [path.resolve(__dirname, './tsconfig.json')],
				tsconfigRootDir: __dirname
			}
		}
	}
];
