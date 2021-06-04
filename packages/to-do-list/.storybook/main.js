module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    '@storybook/addon-essentials',
    "@storybook/addon-knobs/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
  }
};
