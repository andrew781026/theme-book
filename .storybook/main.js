// https://github.com/storybookjs/storybook/issues/14197
module.exports = {
  babel: async (options) => ({
    ...options,
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  }),
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack4",
  },
};
