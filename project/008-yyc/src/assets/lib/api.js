window.api = api;

const APP_KEY = 'cb866c88d3579b59d5eb746fd01fa47420a2b8f8286fe1d06c79b650589865ae';
const BASE_API = 'http://mock.biaoyansu.com/api/';

function sign(app_key, timestamp) {
  return btoa(app_key + timestamp);
}

function api(url, params) {
  let timestamp = new Date().getTime();
  let signature = sign(APP_KEY, timestamp);

  let opt = {
    headers: {
      'biao-mock-app-key': APP_KEY,
      'biao-mock-timestamp': timestamp,
      'biao-mock-signature': signature
    }
  };

  url = BASE_API + url;
  return axios.post(url, params, opt).then(r => {
    return r.data;
  });
}
