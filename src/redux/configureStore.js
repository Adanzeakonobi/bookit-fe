import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userSessions from './user/userSessions';
import userRegistrations from './user/userRegistrations';
import reservations from './reservations/reservations';
import vehicles from './vehicles/vehicles';

const reducer = combineReducers({
  userSessions,
  userRegistrations,
  vehicles,
  reservations,
});

const store = createStore(
  reducer,
  applyMiddleware(
    // add midelwheres here
    thunk,
    logger,
  ),
);

export default store;
