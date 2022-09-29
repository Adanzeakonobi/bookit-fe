import { toast } from 'react-toastify';
import client from '../../utils/client';

const SIGNUP_REQUEST = 'bookit/userRegistrations/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'bookit/userRegistrations/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'bookit/userRegistrations/SIGNUP_FAILURE';

const initialUser = {
  id: null,
  username: null,
  email: null,
  role: null,
};

const defaultState = {
  loading: false,
  error: null,
  user: initialUser,
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (userData, navigate) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const user = userData;
    user.role = 'user';
    const payload = { user };
    const response = await client.post('users', payload);
    const { data } = response.data;
    dispatch(signupSuccess(data));
    navigate('/');
    toast.success('Signup successful');
  } catch (error) {
    dispatch(signupFailure(error.response.data.message));
    toast.error(`Signup failed: ${error.response?.data.message || error.response.data || error.messsage}`);
  }
};

export const setErrors = (error) => async (dispatch) => {
  dispatch(signupFailure(error));
  toast.error(error[0]);
};
