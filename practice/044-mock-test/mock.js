;
(function () {
  'use strict';
  const send = (method, url, data, success_hook, fail_hook) => {
    let http = new XMLHttpRequest();
    http.open(method, url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(JSON.stringify(data))

    http.addEventListener('load', () => {
      if (success_hook) {
        success_hook(http.responseText)
      }
    })
  }

  const getSign = (key, timestamp) => {
    return btoa(key + timestamp);
  }

  const createModel = () => {
    let param = {
      app_key: 'a293e84101a9ccf254d42c925fdf39329399ef15f57e02aa2c5abc69fbdf70d0',
      timestamp: (new Date).getTime(),
      name: "comment", // 模型名称
      structure: [ // 模型结构
        {
          name: "title", // 属性名称：标题
          type: "string", // 属性数据类型：字符串（最大长度255）
          nullable: false, // 可否为空：不可为空
        },
        {
          name: "content", // 属性名称：内容
          type: "text", // 属性数据类型：文本 （最大长度65535）
          nullable: false, // 可否为空：不可为空
        },
        {
          name: "created_at", // 属性名称：创建时间
          type: "dateTime", // 属性数据类型：日期 （2020-10-01 12:30:10）
          nullable: true,
        },
      ],
    };

    param.signature = getSign(param.app_key, param.timestamp);

    send('post', 'http://mock.biaoyansu.com/api/MODEL/CREATE', param)

  }

  const createRow = () => {
    let param = {
      app_key: 'dc0d71536b48e49c6b64cfc750aeb925e6b11296af2f538ecd4f224bfa1b91c7',
      timestamp: (new Date).getTime(),
      title: '我叫王花花4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci aut deserunt doloribus, eaque esse incidunt inventore modi necessitatibus quae quibusdam repellendus suscipit vero vitae voluptates. Cupiditate inventore iure nostrum.',
      created_at: (new Date).getTime()
    };

    param.signature = getSign(param.app_key, param.timestamp);

    send('post', 'http://mock.biaoyansu.com/api/comment/create', param);
  }

  const readModel = () => {
    let param = {
      app_key: 'a293e84101a9ccf254d42c925fdf39329399ef15f57e02aa2c5abc69fbdf70d0',
      timestamp: (new Date).getTime(),
    }
    param.signature = getSign(param.app_key, param.timestamp);
    send('post', 'http://mock.biaoyansu.com/api/comment/read', param)
  }

  const findRow = () => {
    let param = {
      app_key: 'dc0d71536b48e49c6b64cfc750aeb925e6b11296af2f538ecd4f224bfa1b91c7',
      timestamp: (new Date).getTime(),
      id: 1,
    };

    param.signature = getSign(param.app_key, param.timestamp);
    send('post', 'http://mock.biaoyansu.com/api/comment/find', param)
  }

  const deleteRow = ()=>{
     let param = {
       app_key: 'dc0d71536b48e49c6b64cfc750aeb925e6b11296af2f538ecd4f224bfa1b91c7',
       timestamp: (new Date).getTime(),

       id: 1,
     };

     param.signature = getSign(param.app_key, param.timestamp);
     send('post', 'http://mock.biaoyansu.com/api/comment/delete',param)
  }

  deleteRow();
  createRow();
  readModel();
  findRow();
  // createModel();
}());