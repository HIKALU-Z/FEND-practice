import axios from 'axios';

const APP_KEY = 'cb866c88d3579b59d5eb746fd01fa47420a2b8f8286fe1d06c79b650589865ae';
const BASE_API = 'http://mock.biaoyansu.com/api/';

const sign = (APP_KEY, timestamp) => {
  return btoa(APP_KEY + timestamp);
};

const api = (url, param) => {
  url = BASE_API + url;
  let timestamp = new Date().getTime();
  let signature = sign(APP_KEY, timestamp);
  let opt = {
    headers: {
      'biao-mock-app-key': APP_KEY,
      'biao-mock-timestamp': timestamp,
      'biao-mock-signature': signature
    }
  };
  return axios.post(url, param, opt).then(r => {
    return r.data;
  });
};
export default api;
