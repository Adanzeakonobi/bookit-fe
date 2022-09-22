const ADDVEHICLE = 'bookit/vehicles/ADDVEHICLE';

export default function reducer(state = {
  visible: [],
  all: [],
  current: {
    id: 1,
    price: 1,
    name: 'Perol',
    image: 'https://via.placeholder.com/150',
    visible: true,
  },
}, action = {}) {
  switch (action.type) {
    case ADDVEHICLE: {
      const vehicle = { ...action.payload, id: Date.now() };
      return {
        ...state,
        visible: [...state.visible, vehicle],
        all: [...state.all, vehicle],
      };
    }
    default:
      return state;
  }
}

export const addVehicle = (vehicle) => ({
  type: ADDVEHICLE,
  payload: vehicle,
});
