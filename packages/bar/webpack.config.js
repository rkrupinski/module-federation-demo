const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: {
    bar: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devServer: {
    port: 9001,
    hot: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "bar",
      filename: `[name].${process.env.BAR_VERSION}.js`,
      exposes: {
        ".": "./src",
      },
    }),
  ],
};
