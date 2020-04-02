const path = require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test : /\.css$/,
        use:[
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode:"development",
  plugins : [
    new HtmlWebpackPlugin({
      template : "src/index.html",
      title: "TodoApp"
    })
  ]
};
