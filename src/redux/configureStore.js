/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userSessions from './userSessions/userSessions';
import userRegistrations from './userRegistrations/userRegistrations';
import reservations from './reservations/reservations';
import vehicles from './vehicles/vehicles';
import uploadcare from './uploadcare/uploadcare';

const reducer = combineReducers({
  userSessions,
  userRegistrations,
  vehicles,
  reservations,
  uploadcare,
});

const store = createStore(
  reducer,
  applyMiddleware(
    // add midelwheres
    thunk,
    logger,
  ),
);

export default store;
