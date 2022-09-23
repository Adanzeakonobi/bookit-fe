const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE';

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

const MockUserRegistration = (user) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (user.email
      && user.username
      && user.password
      && user.password === user.password_confirmation) {
      resolve({
        id: 1,
        username: user.username,
        email: user.email,
      });
    } else {
      reject(new Error('Invalid user data'));
    }
  }, 3000);
});


const userRegistrationRequest = () => ({
  type: USER_REGISTRATION_REQUEST,
});

const userRegistrationSuccess = (user) => ({
  type: USER_REGISTRATION_SUCCESS,
  payload: user,
});

const userRegistrationFailure = (error) => ({
  type: USER_REGISTRATION_FAILURE,
  payload: error,
});

export const userRegistration = (user) => async (dispatch) => {
  dispatch(userRegistrationRequest());
  try {
    const response = await MockUserRegistration(user);
    dispatch(userRegistrationSuccess(response.data));
  } catch (error) {
    dispatch(userRegistrationFailure(error.message));
  }
};

