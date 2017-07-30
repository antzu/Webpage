import React, { Component } from 'react';


class Projects extends Component {
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
                  Description
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

export default Projects;