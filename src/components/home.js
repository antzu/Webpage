import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {
  render() {
    return (
      

      <div className="home">

      	<div className="home-title">
      		<h1>Welcome to Andres Aava personal portfolio site!</h1>
      	</div>

      	<div className="home-txt">
      		<h3>If you want webapp for yourself or your company, contact me!</h3>
      	</div>

      	<div className="home-btn">
      		<Link to="/contactme"><button className="btn btn-primary">Contact me!</button></Link>
      		<Link to="/projects"><button className="btn btn-priary">See projects!</button></Link>
      	</div>

      </div>
    );
  }
}

export default Home;