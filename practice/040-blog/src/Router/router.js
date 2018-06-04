/**
 * @author HIKALU
 * @since 2018年06月01日
 * @version 1.0
 */

import helper from '../Util/helper';

class Router {
  /**
   * @property `currentHash` 当前 hash 地址
   * - 默认指向 home 页面，如果 hash 不为空，则指向 hash 所在页面
   * @property `pageList` 当前路由管理下的所有页面
   * @method `detectClick` 监听点击事件，点击 Anchor 以后链接跳转
   * @method `detectHashChange` 监听 window.hash 如果 hash 发生变化链接跳转
   * @property `config`
   * - `config.routes` 记录所有路由状态和设置
   * - `config.before` 切换前执行的回调函数（ 使用者的自定义代码）
   * - `config.after`切换后执行的回调函数
   */
  constructor(config) {
    this.param = {};
    this.load_config(config)
    // this.currentHash = this.parseHash(window.location.hash) || 'home';
    this.pageList = document.querySelectorAll('.page');
    this.detectClick();
    this.detectHashChange();
    this.go(window.location.hash, {
      force: true
    });
  }

  /**
   * 加载所有配置
   */
  load_config(config) {
    this.def = {
      hook: {}
    };
    this.config = Object.assign({}, this.def, config);
    this.load_route_config();
  }

  /**
   * 加载路由配置
   */
  load_route_config() {
    let route_list = this.config.routes;

    for (let name in route_list) {
      let route = route_list[name];
      let path = this.trim_hash(route.path);
      let path_arr = path.split('/');
      route.param = {};
      route.name = name;

      path_arr.forEach((segment, index) => {
        let is_param = segment.startsWith(':');
        let key = is_param ? segment.substring(1, segment.length) : segment;

        route.$segment = route.$segment || {};
        route.$segment[index] = {
          name: key,
          position: index,
          is_param: is_param,
        };
      });
    }

    console.log('this.config:', this.config);
  }



  /**
   * 监听点击事件
   * - 如果点击源为 A 类型的 node 那么继续
   * - 如果点击源含有 host 信息，说明为外站链接，不进行任何其他操作
   * - 如果为站内链接，那么跳转至其 hash 所在位置
   */
  detectClick() {
    document.addEventListener('click', e => {
      let target = e.target;
      switch (target.nodeName) {
        case 'A':
          // 如果有 host 属性，则证明是站外链接
          if (target.host) {
            return;
          }
          this.go(target.hash);
          break;
        default:
          break;
      }
    });
  }

  /**
   * 监听 hash 变化
   * - 通过 hashchange 事件，监听 hash 变化，只要发生变化，就跳转至新 hash 所在位置
   */
  detectHashChange() {
    window.addEventListener('hashchange', e => {
      this.go(window.location.hash);
    });
  }

  /**
   * 链接跳转
   * @main
   * @param {String} hash 路由器通过 hash 控制页面的节点显示
   * @param {Object} config 链接跳转方法的可选参数对象，包含以下参数
   * - `force` 是否强制跳转，以防第一次进入页面时 hash 值未变化不会触发跳转事件
   *
   * @event
   *  - before: this.config.hook.before
   *  - after: this.config.hook.after
   *
   */
  go(hash, config = null) {
    this.hide('#not-found');
    // 每次执行前，判断是否有 before 的钩子函数，如果有且执行结果为 false，则退出
    if (this.config.hook.before) {
      if (!this.config.hook.before())
        return;
    }

    hash = hash || 'home'
    let defaultConfig = {
      force: false,
    };
    config = Object.assign({}, defaultConfig, config);

    let oldValue = this.currentHash;
    let newVlaue = this.parseHash(hash);

    this.previous = oldValue;

    if (!newVlaue) {
      if (this.config.hook.notFount) {
        this.config.hook.notFount();
      }
      this.render('#not-found');
      return;
    }

    this.currentHash = newVlaue;

    if (!this.currentHash.el)
      throw new ReferenceError(`Please config route ${this.currentHash.name} el`);

    this.render();

    // 在每次执行结果的最后，判断是否有 after 的钩子函数，如果有则执行，且参数为 currenHash
    if (this.config.hook.after)
      this.config.hook.after(this.currentHash);
  }

  /**
   * 暂时不知道干嘛的函数
   * @param {object} route
   */
  compile(route) {
    route = route || this.currentHash;

    if (!route)
      return;

    let el = document.querySelector(route.el);
    if (!el || !route.param) return;
    let old = document.querySelectorAll('.compiled');
    old.forEach(item => item.remove());
    el.insertAdjacentHTML('afterbegin', `<p class="compiled">我的ID是${route.param.id}</p>`);
  }

  /**
   * 判断页面是否存在
   * @param {String} page
   */
  checkPageExist(page) {
    return !!document.getElementById(page);
  }

  /**
   * 渲染
   * @param {String} selector 被选中的容器
   */
  render(selector) {
    let content;
    selector = selector || this.currentHash.el;

    /*先隐藏所有页面*/
    this.hide_previous();

    this.hidePage();
    content = document.querySelector(selector);
    if (!content) {
      return;
    }

    this.compile(this.currentHash);
    this.showPage(content);
  }

  /**
   * 隐藏页面
   */
  hidePage() {
    this.pageList.forEach(element => {
      element.hidden = true;
    });
  }

  hide(el) {
    var el = document.querySelector(el);
    if (!el)
      return;
    el.hidden = true;
  }

  // 显示页面
  showPage(content) {
    content.hidden = false;
  }

  /**
   * 隐藏先前存在的页面
   */
  hide_previous() {
    if (!this.previous)
      return;
    document.querySelector(this.previous.el).hidden = true;
  }

  /**
   * 裁剪 hash
   * @param {String} hash
   */
  trim_hash(hash) {
    return helper.trim(hash, '#/');
  }

  /**
   * 转化 hash 编码
   * @param {String} hash
   * @returns {Object} {path: '/article', param: {id: 1}}
   */
  parseHash(hash) {
    hash = this.trim_hash(hash);
    let hash_arr = hash.split('/');
    let routes = this.config.routes;

    for (var name in routes) {
      let route = routes[name];
      let $segment = route.$segment;
      let matched = true;

      if (Object.keys($segment).length != hash_arr.length) {
        matched = false;
        continue;
      }

      hash_arr.forEach(function (segment, index) {
        let $segment = route.$segment[index];
        let $name = $segment.name;

        if (!$segment) {
          matched = false;
          return;
        }

        if ($segment.is_param) {
          route.param[$name] = segment;
        } else {
          if ($name != segment) {
            matched = false;
            return;
          }
        }
      });

      if (matched)
        return route;
    }
    // return hashArr[hashArr.length - 1];
  }
}

// 单例模式实体类
let instance;

const init = (config) => {
  if (!instance) {
    instance = new Router(config);
  }
  return instance;
};

// init();

export default {
  init
};

// 实现重定向