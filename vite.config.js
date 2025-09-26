import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // base: '/smithcollege2016/', // MUST match your GitHub repo name exactly
    plugins: [react()],
});
// This is needed for GitHub Pages to find your JS and CSS files in the right place.
