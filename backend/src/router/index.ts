import { getIdeaTrpcRoute } from './getIdea/index.js';
import { getIdeasTrpcRoute } from './getIdeas/index.js';
import { trpc } from '../lib/trpc.js';
export const trpcRouter = trpc.router({
	getIdea: getIdeaTrpcRoute,
	getIdeas: getIdeasTrpcRoute
});

export type TrpcRouter = typeof trpcRouter;
