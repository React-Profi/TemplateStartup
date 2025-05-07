import { zCreateIdeaTrpcInput } from './input.js';
import { ideas } from '../../lib/ideas.js';
import { trpc } from '../../lib/trpc.js';

export const createIdeaTrpcRoute = trpc.procedure
	.input(zCreateIdeaTrpcInput)
	.mutation(({ input }) => {
		ideas.unshift(input);
		return true;
	});
