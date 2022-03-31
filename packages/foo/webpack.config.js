const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: {
    foo: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devServer: {
    port: 9000,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "foo",
      remotes: {
        bar: `bar@http://localhost:9001/bar.${process.env.BAR_VERSION}.js`,
      },
    }),
  ],
};
