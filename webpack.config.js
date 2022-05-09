const path = require("path");
const { postcss } = require("tailwindcss");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: {},
          },
          {
            loader: "postcss-loader",
            options: {},
          },
          // {
          //   loader: "sass-loader",
          //   options: {},
          // },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new webpack.ProvidePlugin({
      $: require.resolve("jquery"),
      jQuery: require.resolve("jquery"),
    }),
  ],
  watch: true,
};
