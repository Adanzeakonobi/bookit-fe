import { toast } from 'react-toastify';
import client from '../../utils/client';

const UPLOADCARE_PUB_KEY = '1e97b9a419c0477cb399';

const AUTH_SUCCESS = 'bookit/uploadcare/LOAD_SUCCESS';
const AUTH_FALURE = 'bookit/uploadcare/LOAD_FALURE';
const UPLOAD = 'bookit/uploadcare/UPLOAD';
const UPLOAD_SUCCESS = 'bookit/uploadcare/UPLOAD_SUCCESS';
const UPLOAD_FAILURE = 'bookit/uploadcare/UPLOAD_FAILURE';

export default function reducer(state = {
  auth: {},
  error: undefined,
  id: undefined,
  url: undefined,
}, action = {}) {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return { ...state, auth: action.payload, error: undefined };
    }
    case AUTH_FALURE: {
      return { ...state, auth: undefined, error: action.payload };
    }
    case UPLOAD: {
      return {
        ...state,
        id: undefined,
        url: undefined,
      };
    }
    case UPLOAD_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case UPLOAD_FAILURE: {
      return {
        ...state,
        id: undefined,
        url: undefined,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export const getAuth = () => ((dispatch) => client
  .get('/uploadcare/auth_params').then(
    (response) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: response.data,
      });
    },
    (error) => {
      const errors = error.response?.data.error.split('. ') || [error.messsage];
      errors?.forEach((error) => toast.error(error));
      dispatch({
        type: AUTH_FALURE,
        payload: errors,
      });
    },
  ));

export const uploadFile = (auth, file) => ((dispatch) => {
  dispatch({
    type: UPLOAD,
  });
  const baseData = { ...auth, UPLOADCARE_PUB_KEY, UPLOADCARE_STORE: 1 };
  const data = new FormData();
  Object.keys(baseData).forEach((key) => {
    data.append(key, baseData[key]);
  });
  data.append('filename', file, file.name);
  return fetch('https://upload.uploadcare.com/base/', {
    method: 'POST',
    body: data,
  }).then(
    (response) => response.json().then((body) => {
      const id = body.filename;
      dispatch({
        type: UPLOAD_SUCCESS,
        payload: {
          id,
          url: `https://ucarecdn.com/${id}/${file.name.replace(' ', '_')}`,
        },
      });
    }),
    (error) => {
      const errors = [error.message];
      errors?.forEach((error) => toast.error(error));
      dispatch({
        type: UPLOAD_FAILURE,
        payload: errors,
      });
    },
  );
});
