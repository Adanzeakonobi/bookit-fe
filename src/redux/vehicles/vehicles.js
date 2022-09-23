const ADDVEHICLE = 'bookit/vehicles/ADDVEHICLE';
const DELETEVEHICLE = 'bookit/vehicles/DELETEVEHICLE';

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
    case DELETEVEHICLE: {
      const newAll = state.all.map(
        (vehicle) => {
          const tempVehicle = { ...vehicle };
          if (vehicle.id === action.payload) { tempVehicle.visible = false; }
          return tempVehicle;
        },
      );
      const newVisible = state.visible.filter(
        (vehicle) => vehicle.id !== action.payload,
      );
      return { ...state, all: newAll, visible: newVisible };
    }
    default:
      return state;
  }
}

export const addVehicle = (vehicle) => ({
  type: ADDVEHICLE,
  payload: vehicle,
});

export const deleteVehicle = (vehicleId) => ({
  type: DELETEVEHICLE,
  payload: vehicleId,
});
