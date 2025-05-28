import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AwellaSpa-react/', // ✅ 加上這一行（根據你的 repo 名稱）
  plugins: [react()],
})
