import { defineConfig } from "vite";
import path from "path";
import {createVitePlugins} from './build/plugins'

// https://vite.dev/config/
export default defineConfig({
  plugins:createVitePlugins(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "/"),
    },
  },
});
