import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: './docs',
        emptyOutDir: true,
    },
    plugins: [
        vue(),
        tailwindcss()
    ],
})