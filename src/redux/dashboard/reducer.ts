import { createReducer, createAction } from 'redux-act';

export const setProjects = createAction('PROJECTS_SET', (x) => x);

const initialState = {
  projects: [],
};

export default createReducer({
  [setProjects.getType()]: (state, payload) => ({
      ...state,
      projects: payload,
    })
}, initialState);
