# Paso a paso para crear un proyecto con Webpack y React básico
## Links interesantes sobre este tema:
- Video que explica paso a paso como configurar webpack. Además tiene un ejemplo de una aplicación con React [link](https://www.youtube.com/watch?v=wv7hXgNC2AQ)
## 1. Crear un directorio para el proyecto
## 2. Ejecutar: ````npm init````
## 3. Ejecutar: ````npm install babel-core babel-loader babel-preset-react babel-preset-es2015 webpack-dev-server html-webpack-plugin````
## 4. Ejecutar: ````npm install react react-dom lodash -S````
## 5. Ejecutar: ````npm i webpack --save-dev````
## 6. Crear el archivo webpack.config.js:
````

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
````
## 7. Crear el archivo .babelrc en la ruta básica del proyecto:
````
{
  "presets": ["es2015", "react"]
}
````
## 8. Crear la siguiente estructura:
```
src
-index.jsx
-index.html
-components
--layout
---App
----index.jsx
-css
-img
-js
```
## 9. Archivo src/index.html:
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ReactJS Basics</title>

</head>
<body>
  <div id="app"></div>
</body>
</html>
```
## 10. Archivo src/index.jsx:
```
import React from "react";
import { render } from "react-dom";

// Components
import App from './components/layout/App/index.jsx';

// Routes

// Assets

render(
	<App />,
	document.getElementById('app')
);
```
## 11. Archivo src/components/layout/App/index.jsx:
```
// Dependencias
import React, { Component } from 'react';

// Components

// Data

class App extends Component {
	constructor(props){
			super(props)
		}

	render() {
    	return(
            <div>
              	<h1>Webpack + React Básico</h1>
						</div>
        );
    }
}

export default App;
```
