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
