import client from '../../utils/client';

const ADDRESERVATION_SUCCESS = 'bookit/reservations/ADDRESERVATION_SUCCESS';
const ADDRESERVATION_FAILURE = 'bookit/reservations/ADDRESERVATION_FAILURE';

export default function reducer(state = { reservations: [], error: undefined }, action = {}) {
  switch (action.type) {
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

export const addReservation = (reservation) => ({
  type: ADDRESERVATION,
  payload: reservation,
});
