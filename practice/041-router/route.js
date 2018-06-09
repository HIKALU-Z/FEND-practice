class Route {
  constructor(config) {
    this.current = {}
    this.state = Object.assign({}, config)
    this.detectHashChange()
  }

  detectHashChange() {
    window.addEventListener('hashchange', (e) => {
      this.current.hash = location.hash;
      let routeName = this.parseCurrentHash()
      console.log('routeName:',routeName);

      go(routerName);
    })
  }

  parseCurrentHash() {
    return this.parseHash(this.current.hash);
  }

  parseHash(hash) {
    hash = trim(hash,'#/');
    let re = new RegExp('^#\/?' + hash + '\/?$')
    for (let key in this.state.route) {
      let item = this.state.route[key].path;
      if (re.test(item)) {
        return key;
      }
    }
  }

  go(routeName){
    
  }
}

const trim = (str, capList) => {
  let arr = capList.split('')
  arr.forEach(cap => {
    if (str.startsWith(cap)) {
      str = str.substring(1);
      trim(str,cap)
    }
    if (str.endsWith(cap)) {
      str = str.substring(0, str.length - 1)
      trim(str,cap)
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