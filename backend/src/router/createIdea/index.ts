import { zCreateIdeaTrpcInput } from './input.js';
import { trpc } from '../../lib/trpc.js';

export const createIdeaTrpcRoute = trpc.procedure
	.input(zCreateIdeaTrpcInput)
	.mutation(async ({ input, ctx }) => {
		const exIdea = await ctx.prisma.idea.findUnique({
			where: {
				nick: input.nick
			}
		});
		if (exIdea) {
			throw Error('Idea with this nick already exists');
		}
		await ctx.prisma.idea.create({
			data: input
		});
		return true;
	});
