import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.spec.tsx'],
  },
} as UserConfig)
