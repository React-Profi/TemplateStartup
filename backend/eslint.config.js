import path from 'path';
import { fileURLToPath } from 'url';

import baseConfig from '../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
	...baseConfig,
	{
		files: ['src/**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parserOptions: {
				project: [path.resolve(__dirname, './tsconfig.json')],
				tsconfigRootDir: __dirname
			}
		}
	}
];
