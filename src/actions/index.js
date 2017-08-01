import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  FETCH_PROJECTS
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function fetchProjects(){
	return function(dispatch) {
		axios.get(`${ROOT_URL}/projects`)
		.then(response => {
			dispatch({ 
				type: FETCH_PROJECTS,
				payload: response.data
			});

			browserHistory.push('/projects');
		})
		.catch(() => {
			console.log('Error on fetching Projects...');
		});
	}
}