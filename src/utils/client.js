/* eslint-disable no-param-reassign */
import axios from 'axios';
import TokenManager from './tokenManger';

const BASEURL = 'https://bookit-api-be.herokuapp.com/';

const client = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
});

client.interceptors.request.use(
  (config) => {
    if (TokenManager.hasToken()) {
      config.headers.Authorization = `Bearer ${TokenManager.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
