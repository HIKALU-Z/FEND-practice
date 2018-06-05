const ok = true;
const data = {
  list: {
    article: [{
        'id': 1,
        'title': '叫我王花花',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\n',
      },
      {
        'id': 2,
        'title': '叫我李拴蛋',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\n',
      }
    ],
    tag: [{
        'id': 1,
        'name': 'HTML',
      },
      {
        'id': 2,
        'name': '生活',
      },
      {
        'id': 3,
        'name': 'CSS',
      },
    ],
  },
};

const output = {
  get,
};

/**
 * 利用 get 方法传参
 * @param {String} url 请求的地址
 * @param {Function} success_hook 请求成功后的回调函数
 * @param {Function} fail_hook 请求失败后的回调函数
 */
function get(url, success_hook, fail_hook) {
  var model = url.split('/')[2];

  if (ok)
    if (success_hook)
      success_hook(data.list[model]);
    else {
      if (fail_hook)
        fail_hook({
          ok: false,
          message: 'invalid page',
        });
    }
}

export default output;