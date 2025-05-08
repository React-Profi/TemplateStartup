import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { TrpcRouter } from '@templatesrartup/backend/src/router';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import React from 'react';
import superjson from 'superjson';

// Создаём tRPC instance
export const trpc = createTRPCReact<TrpcRouter>();

// Создаём queryClient для React Query
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false
		}
	}
});

// Создаём tRPC клиент по новому стандарту (v11+)
const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: 'http://localhost:3000/trpc',
			transformer: superjson // теперь указывается внутри httpBatchLink
		})
	]
});

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
};
