const ADDRESERVATION = 'bookit/reservations/ADDRESERVATION';

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
