const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const htmlFiles = glob.sync("./src/*.html");
console.log("Detected HTML files:", htmlFiles);

module.exports = {
  entry: "./src/index.ts", // Entry point file
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"), // Output directory
    clean: true,
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
  plugins: [
    // Loop over all HTML files in src and create corresponding HTML files in dist
    ...glob.sync("./src/*.html").map((file) => {
      return new HtmlWebpackPlugin({
        template: file, // Source HTML file (e.g., src/todolist.html)
        filename: path.basename(file), // Output file in dist (e.g., todolist.html)
      });
    }),
  ],

  mode: "development", // Development mode (can also be 'production')

  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    compress: true,
    port: 9000,
    hot: false,
    historyApiFallback: true, // Fix client-side routing for SPA
    // devMiddleware: {
    //   writeToDisk: true, // Force writing to disk
    // },
  },
};
