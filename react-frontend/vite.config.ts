import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true, 
    reporters: [ 'default', 'html'],
    outputFile: {
      html: './_test-reports/unit-tests/index.html'
    },
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
      reportsDirectory: './_test-reports/coverage',
      clean: true,

      include: [
          'src/**/*.js',
          'src/**/*.ts',
          'src/**/*.tsx'
      ],
      exclude: [
        'src/main.tsx', 
        'src/vite-env.d.ts', 
        'src/**/*.spec.tsx',
        'src/**/*.test.tsx'
      ],

      thresholds: {
        global: {
          lines: 70,
          functions: 70,
          branches: 70,
          statements: 70
        }
      },
    },
  }
})
