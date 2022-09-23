const ADDVEHICLE_SUCCESS = 'bookit/vehicles/ADDVEHICLE_SUCCESS';
const ADDVEHICLE_FALURE = 'bookit/vehicles/ADDVEHICLE_FALURE';

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
  notice: undefined,
}, action = {}) {
  switch (action.type) {
    case ADDVEHICLE_SUCCESS: {
      return {
        ...state,
        notice: action.payload,
      };
    }
    case ADDVEHICLE_FALURE: {
      return {
        ...state,
        notice: undefined,
      };
    }
    default:
      return state;
  }
}

export const addVehicle = (vehicle) => ((dispatch) => client
  .post('/vehicles', vehicle).then(
    (response) => {
      dispatch({
        type: ADDVEHICLE_SUCCESS,
        payload: response.data.messsage,
      });
    },
    (error) => {
      dispatch({
        type: ADDVEHICLE_FALURE,
        payload: error.response?.data.error || error.messsage,
      });
    },
  ));
