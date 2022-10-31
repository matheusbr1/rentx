import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all: true,
      exclude: [
        '.storybook',
        'src/fetchs',
        'src/**/**.stories.tsx',
        'src/assets',
        'src/@types',
        '**/*.spec.tsx',
        'src/**/global.ts',
        '**/*.config.ts',
        'src/services/api.ts',
      ],
    },
  },
} as UserConfig)
