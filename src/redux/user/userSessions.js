const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_ERROR = 'LOGOUT_ERROR';

const initialUser = {
  id: null,
  username: null,
  email: null,
};

const defaultState = {
  loading: false,
  error: null,
  user: initialUser,
};

const MockLogin = (user) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (user.email === 'user@gmail.com' && user.password === 'password') {
      resolve({
        id: 1,
        username: 'test_user',
        email: 'user@gmail.com',
      });
    } else {
      reject(new Error('Invalid email or password'));
    }
  }, 3000);
});

const MockLogout = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, payload: userData });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const logoutRequest = () => ({ type: LOGOUT_REQUEST });
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
const logoutError = (error) => ({ type: LOGOUT_ERROR, payload: error });

export const login = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const userData = await MockLogin(user);
    dispatch(loginSuccess(userData));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await MockLogout();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};
