import client from '../../utils/client';

const LOAD_SUCCESS = 'bookit/vehicles/LOAD_SUCCESS';
const LOAD_FALURE = 'bookit/vehicles/LOAD_FALURE';
const SHOW_SUCCESS = 'bookit/vehicles/SHOW_SUCCESS';
const SHOW_FALURE = 'bookit/vehicles/SHOW_FALURE';
const ADDVEHICLE = 'bookit/vehicles/ADDVEHICLE';
const DELETEVEHICLE = 'bookit/vehicles/DELETEVEHICLE';

export default function reducer(state = {
  visible: [],
  all: [],
  current: undefined,
  errors: [],
}, action = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        all: action.payload,
        visible: action.payload.filter((vehicle) => vehicle.visible),
        errors: [],
      };
    }
    case LOAD_FALURE: {
      return {
        ...state,
        visible: [],
        all: [],
        errors: [action.payload],
      };
    }
    case SHOW_SUCCESS: {
      return {
        ...state,
        current: action.payload,
        errors: [],
      };
    }
    case SHOW_FALURE: {
      return {
        ...state,
        current: undefined,
        errors: [action.payload],
      };
    }
    case ADDVEHICLE: {
      const vehicle = { ...action.payload, id: Date.now() };
      return {
        ...state,
        visible: [...state.visible, vehicle],
        all: [...state.all, vehicle],
        errors: [],
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

export const loadVehicles = () => ((dispatch) => client
  .get('/vehicles').then(
    (response) => {
      dispatch({
        type: LOAD_SUCCESS,
        payload: response.data.vehicles,
      });
    },
    (error) => {
      dispatch({
        type: LOAD_FALURE,
        payload: error.response?.data || error.messsage,
      });
    },
  ));

export const showVehicle = (vehicleId) => ((dispatch) => client
  .get(`/vehicles/${vehicleId}`).then(
    (response) => {
      dispatch({
        type: SHOW_SUCCESS,
        payload: response.data,
      });
    },
    (error) => {
      dispatch({
        type: SHOW_FALURE,
        payload: error.response?.data || error.messsage,
      });
    },
  ));

export const addVehicle = (vehicle) => ({
  type: ADDVEHICLE,
  payload: vehicle,
});

export const deleteVehicle = (vehicleId) => ({
  type: DELETEVEHICLE,
  payload: vehicleId,
});
