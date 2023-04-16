import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
    "@storybook/addon-mdx-gfm",
  ],
  "docs": {
    "autodocs": true,
  },
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
};
export default config;
