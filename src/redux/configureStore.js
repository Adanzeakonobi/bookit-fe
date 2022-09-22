import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import user from './user/user';
import reservations from './reservations/reservations';
import vehicles from './vehicles/vehicles';

const reducer = combineReducers({ user, vehicles, reservations });

const store = createStore(
  reducer,
  applyMiddleware(
    // add midelwheres here
    logger,
  ),
);

export default store;
