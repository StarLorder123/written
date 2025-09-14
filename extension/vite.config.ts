import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // VSCode插件需要使用CommonJS格式
    lib: {
      entry: resolve(__dirname, 'src/extension.ts'),
      name: 'extension',
      fileName: 'extension',
      formats: ['cjs']
    },
    // 输出目录
    outDir: 'dist',
    // 生成sourcemap用于调试
    sourcemap: true,
    // 不要压缩代码，保持可读性
    minify: false,
    rollupOptions: {
      // 确保vscode模块被外部化，不会被打包进去
      external: ['vscode'],
      output: {
        // 确保输出格式为CommonJS
        format: 'cjs',
        entryFileNames: 'extension.js'
      }
    },
    // 目标环境为Node.js
    target: 'node16'
  },
  // 定义全局常量
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});
