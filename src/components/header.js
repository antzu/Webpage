import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Header extends Component {

	renderLinks() {
	    
	      return [
	        <li className="" key={1}>
	          <Link className="" to="/">Home</Link>
	        </li>,
	        <li className="" key={2}>
	          <Link className="" to="/aboutme">About me</Link>
	        </li>,
	        <li className="" key={3}>
	          <Link className="" to="/projects">Projects</Link>
	        </li>,
	        <li className="" key={4}>
	          <Link className="" to="/blog">Blog</Link>
	        </li>,
	        <li className="" key={5}>
	          <Link className="" to="/contactme">Contact me</Link>
	        </li>,
	      ];

	    }
	  

	render() {
		return (
				<nav className="header">
					<Link to="/" className="header-logo">AAAva</Link>
					<ul className="header-navigation">
						{this.renderLinks()}
					</ul>
				</nav>
			);
	}
}
