/* eslint-disable no-param-reassign */
import axios from 'axios';
import TokenManager from './tokenManger';

const BASEURL = 'https://bookit-api-be.herokuapp.com/';

const client = axios.create({
  baseURL: BASEURL,
});

client.interceptors.request.use(
  (config) => {
    if (TokenManager.hasToken()) {
      config.headers.Authorization = `${TokenManager.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
