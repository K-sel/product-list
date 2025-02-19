import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    build: {
        target: "modules",
        outDir: "./dist",
        emptyOutDir: true,
    },
    plugins: [react()]
})
