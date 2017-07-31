import { combineReducers } from 'redux';
import projectsReducer from './project_reducer';

const rootReducer = combineReducers({
  projects: projectsReducer
});

export default rootReducer;
