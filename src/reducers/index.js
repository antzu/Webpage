import { combineReducers } from 'redux';
import projectsReducer from './project_reducer';

const rootReducer = combineReducers({
  contents: projectsReducer
});

export default rootReducer;
