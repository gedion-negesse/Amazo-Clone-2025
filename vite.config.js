import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Amazo-Clone-2025",
  plugins: [react()],

  css: {
    modules: {
      scopeBehaviour: "local", // Enforces local scoping
      generateScopedName: "[name]__[local]___[hash:base64:5]", // Custom class names
    },
  },
});
