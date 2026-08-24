import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/frontend-lead-plan/" : "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5556,
    open: true,
  },
}));
