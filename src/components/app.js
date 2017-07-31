import React, { Component } from 'react';
import Header from './header';

var bg1 = '../img/background-lamp.jpeg';
var bg2 = '../img/brick.jpg';


export default class App extends Component {


	renderBack(page) {

		switch(page) {
			case "Home":
				return bg1;
			case "AboutMe":
				return bg2;
		}
		
	}
	

	render() {

  		const { name } = this.props.children.type;

    	return (


	    	<div className='app' style={{backgroundImage: `url(${this.renderBack(name)})`}}>
	      		<Header />
	      		{this.props.children}
	      		{console.log(this.props.children.type.name)}
	      		
	      	</div>
    	);
  	}	
}
