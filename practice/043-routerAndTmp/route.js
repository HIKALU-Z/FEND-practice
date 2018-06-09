class Route {
  constructor(config) {
    this.current = {}
    this.state = Object.assign({}, config)
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
    return this.parseHash(this.current.hash);
  }

  parseHash(hash) {
    hash = trim(hash, '#/');
    let re = new RegExp('^#\/?' + hash + '\/?$')
    for (let key in this.state.route) {
      let item = this.state.route[key].path;
      if (re.test(item)) {
        return key;
      }
    }
  }

  go(routeName) {
    let route = this.state.route[routeName]
    this.previous = this.current
    this.current = route
    this.removePrevious()
    this.renderCurrent()
  }

  removePrevious() {
    let el = document.querySelector(this.previous.el)
    if (!el) {
      return;
    }
    el.innerHTML = '';
  }

  /**
   *
   * @param {string} keys 如：'user.child.name'
   * @param {*} value 如：'whh'
   */
  set_data(route_name, keys, value) {
    let layers = keys.split('.'); // ['user', 'child', 'name']
    let layer_count = layers.length;

    // 1. 更新数据

    // 获取当前路由的数据
    let data = this.state.route[route_name].data;
    if (!data)
      data = this.state.route[route_name].data = {};

    for (let i = 0; i < layer_count; i++) {
      let key = layers[i];
      let is_last = i + 1 == layer_count;
      let nest = data;

      if (is_last) {
        nest[key] = value;
      } else {
        if (!nest[key])
          nest[key] = {};
        nest = nest[key];
      }
    }

    // 2. 更新视图
    this.compile(this.state.route[route_name]);
  }

  renderCurrent() {
    this.render(this.current)
  }

  render(route) {
    let element = document.querySelector(route.el)
    let cache = route.$template;
    if (cache) {
      element.innerHTML = cache;
      return;
    }
    this.getTemplate(route.template_url, tpl => {
      route.$template = tpl;
      this.compile(route);
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
  compile(route) {
    let element = document.querySelector(route.el);
    element.innerHTML = parse(route.$template, route.data);
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

let about_data = {
  name: 'whh'
}

let userConfig = {
  default: 'home',
  route: {
    home: {
      path: '#/home/',
      el: '#home',
      template_url: './tpl/home.html',
      data: {
        login: {
          name: 'whh',
          password: 'goodluck',
        }
      }
    },
    about: {
      path: '#/about',
      el: '#about',
      template_url: './tpl/about.html',
      data: about_data
    }
  },
};


let route = new Route(userConfig);
let count = 1;
setInterval(function () {
  // about_data.name = '李拴蛋';
  route.set_data('about', 'name', count);
  count++;
}, 1000);