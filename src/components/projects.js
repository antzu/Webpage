import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Projects extends Component {

  componentWillMount(){
    this.props.fetchProjects();
  }


  render() {
    return (
      
      <div className="projects">
      	<div className="projects-title">
      		<h1>Projects</h1>
      	</div>
      	<div className="projects-contacts">
      		Here will be all the different social media contact glyphicons
      	</div>
      	<div className="projects-area">
            <div className="project">
              <div className="project-pic">
                pic here
              </div>
              <div className="project-content">
                <div className="project-title">
                  <h4>Project 1</h4>
                </div>
                <div className="project-text">
                  {console.log(this.props.projects)}
                </div>
              </div>
            </div>


            <div className="project">
              <div className="project-pic">
                pic here
              </div>
              <div className="project-content">
                <div className="project-title">
                  <h4>Project 2</h4>
                </div>
                <div className="project-text">
                  Description
                </div>
              </div>
            </div>
      	</div>
      	
      </div>
    );
  }
}

function mapStateToProps(state){
  return { projects: state.projects };
}

export default connect(mapStateToProps, actions)(Projects);