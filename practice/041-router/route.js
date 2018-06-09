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
      route.$template = element.innerHTML = tpl
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

let userConfig = {
  default: 'home',
  route: {
    home: {
      path: '#/home/',
      el: '#home',
      template_url: './tpl/home.html',
    },
    about: {
      path: '#/about',
      el: '#about',
      template_url: './tpl/about.html',
    },
  },
};

let route = new Route(userConfig);