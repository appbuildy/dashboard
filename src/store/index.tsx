import { combineReducers } from 'redux';
import dashboard from '../dashboard/reducer';
import application from '../application/reducer';

const rootReducer = combineReducers({
  dashboard,
  application,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
