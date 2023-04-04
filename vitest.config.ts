import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: true,
      include: ["src/{components,features}/**/*.{ts,tsx}"],
    },
    environment: "jsdom",
    globals: true,
  },
});
