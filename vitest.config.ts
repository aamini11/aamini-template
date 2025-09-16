// @ts-check
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	// @ts-ignore
	plugins: [tsconfigPaths()],
	test: {
		projects: [
			{
				test: {
					name: 'node',
					include: ['src/**/*.test.ts'],
					environment: 'node',
					testTimeout: 30_000,
				},
			},
			{
				test: {
					globals: true,
					name: 'ui',
					include: ['src/**/*.test.tsx'],
					environment: 'jsdom',
					setupFiles: [
						'./__mocks__/setup-http.ts',
						'./__mocks__/setup-jest-dom.ts',
					],
				},
			},
		],
	},
})
