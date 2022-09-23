/* eslint-disable no-param-reassign */
import axios from 'axios';
// import TokenManager from './tokenManger';

const BASEURL = 'https://bookit-api-be.herokuapp.com/';

const client = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
});

client.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMCIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY2MzkzODIyNiwiZXhwIjoxNjY0ODAyMjI2LCJqdGkiOiIzOGE2YzdjZi0xMjg0LTRmYzgtYjZhOS1iNWRiZTQxZGU2NTgifQ.FYXeZPtuacjt1IQWL9aBMp6ZGl48fsq1NMLgAMKoJ-U';
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
