import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VueDevTools(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'My Vue App',
				short_name: 'VueApp',
				description: 'My Vue 3 Application',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'favicon.svg',
						sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
						type: 'image/svg+xml',
						purpose: 'any',
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
