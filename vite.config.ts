import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.spec.tsx'],
    coverage: {
      all: true,
      exclude: [
        '.storybook',
        'src/fetchs',
        'src/**/**.stories.tsx',
        'src/assets',
        'src/@types',
        'src/**/global.ts',
      ],
    },
  },
} as UserConfig)
