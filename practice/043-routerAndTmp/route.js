class Route {
  constructor(config) {
    this.current = {}
    this.state = Object.assign({}, config)
    this.root = document.querySelector('#root')
    this.initPage()
    this.detectHashChange()
  }

  initPage() {
    let routeName = this.parseHash(location.hash);
    if (!routeName) {
      routeName = this.state.default;
    }
    this.go(routeName)
  }

  detectHashChange() {
    window.addEventListener('hashchange', (e) => {
      this.current.hash = location.hash;
      let routeName = this.parseCurrentHash()
      console.log('routeName:', routeName);

      this.go(routeName);
    })
  }

  parseCurrentHash() {
    // console.log(this.current.hash);
    if (this.current.hash.includes('?')) {
      return this.parseHashHasParam(this.current.hash)
    } else {
      return this.parseHash(this.current.hash);
      // return console.log('false');
    }
  }

  parseHashHasParam(hash) {

    let hashArr = hash.split('?')
    let key = this.parseHash(hashArr[0])
    // console.log(this.state.route[key].data);
    // return ;
    this.execHashParam(hashArr[1],key)
    return key
  }

  /**
   * to exec the param from hash
   * @param {string} arr the arr need to be exec
   * @param {string} key router name
   */
  execHashParam(arr,key) {
    let result = {};
    arr = arr.split('&')
    arr.forEach(ele => {
      let arr = ele.split('=');
      result[arr[0]] = arr[1];
    })
    // console.log(result);
    let route = this.state.route[key];
    route.$param = result;
    // console.log(route);
  }

  /**
   * 匹配 config 中相符的 path
   * 返回 route 的键值
   * @param {String} hash 当前 hash 路径
   * @returns {String} key 符合正则验证的 path
   */
  parseHash(hash) {
    hash = trim(hash, '#/');
    let re = new RegExp('^#\/?' + hash + '\/?$');
    for (let key in this.state.route) {
      let item = this.state.route[key].path;
      if (re.test(item)) {
        return key;
      }
    }
  }

  go(routeName) {
    let route = this.state.route[routeName]
    if (!route)
      return;
    // 如果当前路由有前置钩子，那么在切换本路由前就应该叫一下这个钩子，
    // 如果钩子返回false就停止执行（也就是不切换页面）
    if (route.hook && route.hook.before && route.hook.before() === false)
      return;
    this.previous = this.current
    this.current = route
    this.removePrevious()

    route.hook && route.hook.renderBefore && route.hook.renderBefore(this.current)

    this.renderCurrent(() => {
      // 如果当前路由有后置钩子，那么在切换本路由后就应该叫一下这个钩子
      if (route.hook && route.hook.after) {
        return route.hook.after();
      }
      // 上述函数等价于 route.hook && route.hook.after && route.hook.after();
    });
    // 如果想要传入一个外部函数，那么在调用这个外部函数时，需要用 bind 方法
    // 类似
    // this.renderCurrent(this.useOutFun.bind(this))
  }

  removePrevious() {
    this.root.innerHTML = '';
  }

  // /**
  //  *
  //  * @param {string} keys 如：'user.child.name'
  //  * @param {*} value 如：'whh'
  //  */
  // set_data(route_name, keys, value) {
  //   let layers = keys.split('.'); // ['user', 'child', 'name']
  //   let layer_count = layers.length;

  //   // 1. 更新数据

  //   // 获取当前路由的数据
  //   let data = this.state.route[route_name].data;
  //   if (!data)
  //     data = this.state.route[route_name].data = {};

  //   for (let i = 0; i < layer_count; i++) {
  //     let key = layers[i];
  //     let is_last = i + 1 == layer_count;
  //     let nest = data;

  //     if (is_last) {
  //       nest[key] = value;
  //     } else {
  //       if (!nest[key])
  //         nest[key] = {};
  //       nest = nest[key];
  //     }
  //   }

  //   // 2. 更新视图
  //   this.compile(this.state.route[route_name]);
  // }

  renderCurrent(on_render_finish) {
    this.render(this.current, on_render_finish)
  }

  render(route, on_render_finish) {
    /*    let element = document.querySelector(route.el)
       let cache = route.$template; */
    if (route.$template) {
      this.compile(route, on_render_finish);
      return;
    }

    this.getTemplate(route.template_url, tpl => {
      route.$template = tpl;
      this.compile(route, on_render_finish);
    })
  }

  getTemplate(url, successHook) {
    const http = new XMLHttpRequest();
    http.open("get", url)
    http.send();
    http.addEventListener('load', () => {
      successHook(http.responseText)
    })
  }

  /**
   * 通过路由对象的$template和data生成最后的视图
   * @param route 路由对象
   */
  compile(route, on_compile_finish) {
    this.root.innerHTML = parse(route.$template, route.data);
    if (on_compile_finish)
      on_compile_finish();
  }
}



const trim = (str, capList) => {
  let arr = capList.split('')
  arr.forEach(cap => {
    if (str.startsWith(cap)) {
      str = str.substring(1);
      trim(str, cap)
    }
    if (str.endsWith(cap)) {
      str = str.substring(0, str.length - 1)
      trim(str, cap)
    }
  });
  return str;
}

// let about_data = {
//   name: 'whh'
// }

// let userConfig = {
//   default: 'home',
//   route: {
//     home: {
//       path: '#/home/',
//       el: '#home',
//       template_url: './tpl/home.html',
//       data: {
//         login: {
//           name: 'whh',
//           password: 'goodluck',
//         }
//       }
//     },
//     about: {
//       path: '#/about',
//       el: '#about',
//       template_url: './tpl/about.html',
//       data: about_data
//     }
//   },
// };


// let route = new Route(userConfig);