# Paso a paso para crear un proyecto con Webpack, React y React Router
## Links interesantes sobre este tema:
- Algunos videos interesantes:
[link](https://www.youtube.com/watch?v=eofpZPRUnP8&t=786s)
## 1. Ejecutar:
````
npm install --save react-router react-router-dom
````
## 2. Crear la siguiente estructura de carpetas dentro de /src/components/:
````
-views
--About
---index.jsx
--Contact
---index.jsx
--Home
---index.jsx
--Page404
---index.jsx
````
## 3. Editar los archivos index.jsx pertenecientes a las carpetas About, Contact, Home y Page404 creadas en el punto 2 (cambiar el título y clase en cada archivo):
````
// Dependencias
import React, { Component } from 'react';

class Page404 extends Component {
	render () {
		return (
			<div className="Page404">
				<h1>Page404 Page</h1>
			</div>
		);
	}
}

export default Page404;
````
## 4. Crear el archivo routes.jsx dentro de la carpeta /src/
````
// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/layout/App/index.jsx';
import About from './components/views/About/index.jsx';
import Contact from './components/views/Contact/index.jsx';
import Home from './components/views/Home/index.jsx';
import Page404 from './components/views/Page404/index.jsx';

const AppRoutes = () =>
	<App>
      <Switch>
      	<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/" component={Home} />
				<Route component={Page404} />
      </Switch>
    </App>

export default AppRoutes;
````
## 5. Editar el archivo /src/index.jsx:
````
// Dependencias
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppRoutes from './routes.jsx';

// Assets
//import './index.css';

render(
	<Router>
		<AppRoutes />
	</Router>,
	document.getElementById('app')
);
````
## 6. Editar el archivo /components/layout/App/index.jsx
````
// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from '../Content/index.jsx';

// Data


class App extends Component {
	static propTypes () {
    	children: PropTypes.object.isRequired
    };
	render() {
    	const { children } = this.props;
    	return(
        	<div className="Content">
        		<Content body={children} />
        	</div>
        );
    }
}

export default App;
````
## 7. Agregar carpeta y archivo: /src/components/layout/Content/index.jsx
````
// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from '../Content/index.jsx';

// Data


class App extends Component {
	static propTypes () {
    	children: PropTypes.object.isRequired
    };
	render() {
    	const { children } = this.props;
    	return(
        	<div className="Content">
        		<Content body={children} />
        	</div>
        );
    }
}

export default App;
````
## 8. Ejecutar:
````
npm run start
````
## 9. Probar las distintas rutas:
- http://desa.midulcedanna.com.ar:8081/
- http://desa.midulcedanna.com.ar:8081/about
- http://desa.midulcedanna.com.ar:8081/contact
- http://desa.midulcedanna.com.ar:8081/cualquierCosa -> Page404
