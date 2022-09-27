import client from '../../utils/client';

const LOAD_SUCCESS = 'bookit/reservations/LOAD_SUCCESS';
const LOAD_FALURE = 'bookit/reservations/LOAD_FALURE';

const ADDRESERVATION_SUCCESS = 'bookit/reservations/ADDRESERVATION_SUCCESS';
const ADDRESERVATION_FAILURE = 'bookit/reservations/ADDRESERVATION_FAILURE';

export default function reducer(state = { reservations: [], error: undefined }, action = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return { ...state, reservations: [...action.payload], error: undefined };
    }
    case LOAD_FALURE: {
      return { ...state, reservations: [], error: action.payload };
    }
    case ADDRESERVATION_SUCCESS: {
      const {
        city, date, vehicle_id: vehicleId,
      } = action.payload;
      const reservation = {
        id: Date.now,
        city,
        date,
        vehicle_id: vehicleId,
      };
      return { reservations: [...state.reservations, reservation] };
    }
    case ADDRESERVATION_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export const loadReservations = () => ((dispatch) => client
  .get('/reservations').then(
    (response) => {
      dispatch({
        type: LOAD_SUCCESS,
        payload: response.data.reservations,
      });
    },
    (error) => {
      dispatch({
        type: LOAD_FALURE,
        payload: error.response?.data || error.messsage,
      });
    },
  ));

export const addReservation = (reservation) => ((dispatch) => client
  .post('/reservations', reservation).then(
    () => {
      dispatch({
        type: ADDRESERVATION_SUCCESS,
        payload: reservation,
      });
    },
    (error) => {
      dispatch({
        type: ADDRESERVATION_FAILURE,
        payload: error?.message,
      });
    },
  ));
