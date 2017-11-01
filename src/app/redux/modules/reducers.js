// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import { reducer as formReducer } from 'redux-form';
import views                from './views';
import fakeModuleWithFetch  from './fakeModuleWithFetch';
import userAuth             from './userAuth';

export const reducers = {
  views,
  fakeModuleWithFetch,
  userAuth
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer
});
