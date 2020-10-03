import { createReducer, createAction } from 'redux-act';

export const setUser = createAction('APPLICATION_SET_USER', (x) => x);

const initialState = {
  user: {
    airtable_api_key: null,
    created_at: null,
    email: null,
    encrypted_password: null,
    fb_id: 0,
    id: 0,
    jwt: null,
    last_name: null,
    remember_created_at: null,
    reset_password_sent_at: null,
    reset_password_token: null,
    updated_at: null,
  },
};

export default createReducer({
  [setUser.getType()]: (state, payload) => ({
    ...state,
    user: payload,
  })
}, initialState);
