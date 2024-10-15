import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	base: "/Genders_Stereotypes/",
	build: {
		rollupOptions: {
			input: {
				main: './index.html',
				quiz: './quiz.html',
			}
		}
	}
});
