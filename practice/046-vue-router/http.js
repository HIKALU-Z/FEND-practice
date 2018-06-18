window.http = {
  post: function (url, data) {
    data = data || {};

    data.app_key = 'c306bc38a8a72adc566da0dd710f4101a25540806db0ec09dc64cad503528dec';
    data.timestamp = (new Date).getTime();
    data.signature = this.sign(data.app_key, data.timestamp);

    // let http = new XMLHttpRequest();
    // url = 'http://mock.biaoyansu.com/api/' + url
    // http.open('post', url)
    // http.setRequestHeader("Content-type", "application/json")
    // data = JSON.stringify(data)
    // // console.log(data);
    // http.send(data)
    // http.onload = function () {
    //   console.log(JSON.parse(http.responseText));
    // }

    return axios
      .post('http://mock.biaoyansu.com/api/' + url, data)
      .then(function (res) {
        return res;
      });
  },

  sign: function (app_key, timestamp) {
    return btoa(app_key + timestamp);
  },
};

let param = {

  name: 'article',
  structure: [{
      name: 'title',
      type: 'string',
      nullable: true,
    },
    {
      name: 'content',
      type: 'text',
      nullable: false,
    },
    {
      name: 'created_at',
      type: 'dateTime',
      nullable: true,
    },
  ],
};

// http.post('MODEL/READ', param);