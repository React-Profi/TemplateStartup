import { zCreateIdeaTrpcInput } from './input.js';
import { ideas } from '../../lib/ideas.js';
import { trpc } from '../../lib/trpc.js';

export const createIdeaTrpcRoute = trpc.procedure
	.input(zCreateIdeaTrpcInput)
	.mutation(({ input }) => {
		if (ideas.find(idea => idea.nick === input.nick)) {
			throw Error('Idea with this nick already exists');
		}
		ideas.unshift(input);
		return true;
	});
