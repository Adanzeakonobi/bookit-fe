import client from '../../utils/client';

const ADDRESERVATION_SUCCESS = 'bookit/reservations/ADDRESERVATION_SUCCESS';
const ADDRESERVATION_FAILURE = 'bookit/reservations/ADDRESERVATION_FAILURE';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADDRESERVATION: {
      const reservation = { ...action.payload, id: Date.now() };
      return [...state, reservation];
    }
    default:
      return state;
  }
}

export const addReservation = (reservation) => ({
  type: ADDRESERVATION,
  payload: reservation,
});
