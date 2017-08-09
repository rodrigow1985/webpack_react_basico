var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC_DIR +'/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
    entry: SRC_DIR + "/index.jsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        //publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /.jsx$/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
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
      	disableHostCheck: true
	  },
    plugins: [HtmlWebpackPluginConfig],
    devtool: 'source-map'
};

module.exports = config;
