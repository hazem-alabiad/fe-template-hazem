import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      all: true,
      include: ["src/{components,features}/**/*.{ts,tsx}"],
    },
  },
});
