import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), WindiCSS()],
    server: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                rewrite: (path) => path.replace(new RegExp('/api'), '/api'),
            },
        },
    },
});
