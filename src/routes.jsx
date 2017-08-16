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
