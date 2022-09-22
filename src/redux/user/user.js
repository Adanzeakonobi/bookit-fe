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
