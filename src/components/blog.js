import React, { Component } from 'react';


class Blog extends Component {
  render() {
    return (
      
      <div className="blog">


      	<div className="blog-contacts">
      		Contacts of social media
      	</div>


      	<div className="blog-area">
      		<div className="blog-title">
      			<h3>Title of my post</h3>
      		</div>
      		<div className="blog-txt">
      			Some text here
      		</div>
      		<div className="blog-nav">
      			<button className="btn btn-primary">Previous</button>
      			<button className="btn btn-primary">Next</button>
      		</div>
      	</div>


      	<div className="blog-search">
      		Searchbar here with searchtree and tags
      	</div>


      </div>
    );
  }
}

export default Blog;