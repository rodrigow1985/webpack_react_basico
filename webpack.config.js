var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/index.jsx",
  output: {
      path: DIST_DIR,
      filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /.jsx$/,
              include: SRC_DIR,
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                  presets: ["react", "es2015", "stage-2"]
              }
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          }
    ],
    rules: [
      {
        test: /.jsx$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },

devServer: {
    proxy: {
      "/api": "desa.midulcedanna.com.ar:8081"
    },
    host: "0.0.0.0",
    port: "8081",
    //public: "desa.midulcedanna.com.ar",
    inline: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Project Demo',
          // minify: {
          //     collapseWhitespace: true
          // },
          hash: true,
          chunksSortMode: 'dependency',
          template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
      }),
      new ExtractTextPlugin({
          filename: 'app.css',
          disable: false,
          allChunks: true
      })
  ],
  devtool: 'source-map'
}
