import React, { Component } from 'react';
import Header from './header';

var bg1 = '../img/background-lamp.jpeg';
var bg2 = '../img/brick.jpg';
var bg3 = '../img/background-wooden.jpeg';


export default class App extends Component {


	renderBack(page, displayName) {

		switch(page) {
			case "Home":
				return bg1;
			case "AboutMe":
				return bg2;
		}

		if (displayName === "Connect(Projects)"){
			
		}
		
	}
	

	render() {

  		const { name, displayName } = this.props.children.type;

    	return (


	    	<div className='app' style={{backgroundImage: `url(${this.renderBack(name, displayName)})`}}>
	      		<Header />
	      		{this.props.children}

	      		
	      		
	      	</div>
    	);
  	}	
}
