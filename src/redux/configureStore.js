import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userSessions from './userSessions/userSessions';
import userRegistrations from './userRegistrations/userRegistrations';
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
