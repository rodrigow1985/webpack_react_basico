// Dependencias
import React, { Component } from 'react';
//import PropTypes from 'prop-types';

// Components


// Data


class App extends Component {
	constructor(props){
			super(props)

		}

	render() {

    	return(
				<div className="container">
				  <h2>Simple Collapsible</h2>
				  <p>Click on the button to toggle between showing and hiding content.</p>
				  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
				  <div id="demo" className="collapse in">
				    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
				    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				  </div>
				</div>
        );
    }
}

export default App;
