import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './components/app';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Blog from './components/blog';
import ContactMe from './components/contactme';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home} />
  			<Route path="aboutme" component={AboutMe} />
  			<Route path="projects" component={Projects} />
  			<Route path="blog" component={Blog} />
  			<Route path="aboutme" component={AboutMe} />
  			<Route path="contactme" component={ContactMe} />
  			
  		</Route>
    
    </Router>
  </Provider>
  , document.querySelector('.appcontainer'));
