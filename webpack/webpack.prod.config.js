const BASE_CONFIG = require("./webpack.base.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");

const CONFIG = {
  mode: "production",
  target: "web",
  entry: {
    app: "./src/client/client.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template:
        "!!raw-loader!" + path.resolve(__dirname, "../src/views/index.ejs"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../public"),
        to: path.resolve(__dirname, "../dist/static"),
      },
    ]),
  ],
};

module.exports = merge(BASE_CONFIG, CONFIG);
