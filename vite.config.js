import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    build: {
        target: "modules",
        outDir: "../build",
        emptyOutDir: true,
    },
    plugins: [react()]
})
