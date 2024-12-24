const path = require("path");

module.exports = {
  entry: "./src/index.ts", // Entry point file
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"), // Output directory
  },
  resolve: {
    extensions: [".ts"], // Handle .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development", // Development mode (can also be 'production')
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    compress: true,
    port: 9000,
    hot: false,
    historyApiFallback: true, // Fix client-side routing for SPA
  },
};
