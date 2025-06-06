import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

/// <reference types="node" />

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const devProxyPath = env.VITE_API_URL;

  return {
    base: "/cultores",
    plugins: [react(), tailwindcss()],
    server: {
      proxy:
        mode === "development"
          ? {
              [devProxyPath]: {
                target: env.VITE_API_BASE_URL,
                changeOrigin: true,
                rewrite: (path) =>
                  path.replace(new RegExp(`^${devProxyPath}`), ""),
              },
            }
          : undefined,
    },
  };
});
