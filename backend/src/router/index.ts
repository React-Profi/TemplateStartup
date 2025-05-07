// @index('./**/index.ts', f => {const folder = f.path.split('/').slice(0, -1).pop();return `import { ${folder}TrpcRoute } from './${folder}/index.js'`;})
import { createIdeaTrpcRoute } from './createIdea/index.js';
import { getIdeaTrpcRoute } from './getIdea/index.js';
import { getIdeasTrpcRoute } from './getIdeas/index.js';
// @endindex
import { trpc } from '../lib/trpc.js';

export const trpcRouter = trpc.router({
	// @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
	createIdea: createIdeaTrpcRoute,
	getIdea: getIdeaTrpcRoute,
	getIdeas: getIdeasTrpcRoute
	// @endindex
});

export type TrpcRouter = typeof trpcRouter;
