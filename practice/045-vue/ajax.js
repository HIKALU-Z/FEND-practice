function send(url, data, success_hook) {
  // console.log(data);
  // return ;
  let http = new XMLHttpRequest();
  http.open('post', url)
  http.setRequestHeader("Content-type", "application/json")
  data = JSON.stringify(data)
  http.send(data)
  http.onload = function () {
    if (success_hook) {
      // console.log(JSON.parse(http.responseText));
      // console.log(this.current);
      success_hook(JSON.parse(http.responseText))
    }
  }
}

function sign(key, time) {
  return btoa(key + time)
}

let data = {
  app_key: 'f04095e1231b2fa3edcd1c026e67f6f6da7f9fd471aa31ee6b87e4374a6da969',
  timestamp: (new Date).getTime(),
  name: 'memoList',
  // signature: sign.call(this, this.app_key, this.timestamp),

  structure: [{
      name: 'title',
      type: 'string',
      nullable: false
    },
    {
      name: 'content',
      type: 'string',
      nullable: false
    }
  ]
}
data.signature = sign(data.app_key, data.timestamp);

// send('http://mock.biaoyansu.com/api/MODEL/READ', data)

window.http = {
  send,
  sign
}

// axios.post('http: //mock.biaoyansu.com/api/MODEL/CREATE', data)



// window.http = {
//   post: function (url, data) {
//     data = data || {};

//     data.app_key = 'a4ab27061a42e9975188dfc75da4eb0303a664c6dd82fdab791e23255da6926f';
//     data.timestamp = (new Date).getTime();
//     data.signature = this.sign(data.app_key, data.timestamp);

//     let http = new XMLHttpRequest();
//     url = 'http://mock.biaoyansu.com/api/' + url
//     http.open('post', url)
//     http.setRequestHeader("Content-type", "application/json")
//     data = JSON.stringify(data)
//     // console.log(data);
//     http.send(data)
//     http.onload = function () {
//       console.log(JSON.parse(http.responseText));
//     }

//     // return axios
//     //   .post('http://mock.biaoyansu.com/api/' + url, data)
//     //   .then(function (res) {
//     //     return res;
//     //   });
//   },

//   sign: function (app_key, timestamp) {
//     return btoa(app_key + timestamp);
//   },
// };

// let param = {
//   timestamp: (new Date).getTime(),
//   app_key: 'a4ab27061a42e9975188dfc75da4eb0303a664c6dd82fdab791e23255da6926f',

//   name: 'memo',
//   structure: [{
//       name: 'title',
//       type: 'string',
//       nullable: true,
//     },
//     {
//       name: 'content',
//       type: 'text',
//       nullable: false,
//     },
//     {
//       name: 'created_at',
//       type: 'dateTime',
//       nullable: true,
//     },
//   ],
// };

// param.signature = http.sign(param.app_key, param.timestamp);
// http.post('MODEL/READ', param);