// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    reactRefresh(),
    tailwindcss({
      config: './tailwind.config.js',
      jit: true,
      purge: ['./src/**/*.html', './src/**/*.tsx'],
      // add other options here as needed
    }),
  ],
});