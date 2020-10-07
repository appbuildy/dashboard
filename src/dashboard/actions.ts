import { Dispatch } from 'redux';
import * as services from './services';
import { setProjects } from './reducer';

export const getProjects = () => (dispatch: Dispatch) => {
  services
    .getProjects()
    .then((projectsArr) => dispatch(setProjects(projectsArr)));
}
