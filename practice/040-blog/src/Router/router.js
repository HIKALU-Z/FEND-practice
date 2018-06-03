/**
 * @author HIKALU
 * @since 2018年06月01日
 * @version 1.0
 */

class Router {
  /**
   * @property `currentHash` 当前 hash 地址
   * - 默认指向 home 页面，如果 hash 不为空，则指向 hash 所在页面
   * @property `pageList` 当前路由管理下的所有页面
   * @method `detectClick` 监听点击事件，点击 Anchor 以后链接跳转
   * @method `detectHashChange` 监听 window.hash 如果 hash 发生变化链接跳转
   */
  constructor() {
    this.currentHash = this.parseHash(window.location.hash) || 'home';
    this.pageList = document.querySelectorAll('.page');
    this.detectClick();
    this.detectHashChange();
    this.go(window.location.hash, {
      force: true
    });
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
   * - `hook` 事件回调钩子函数
   * - `force` 是否强制跳转，以防第一次进入页面时 hash 值未变化不会触发跳转事件
   */
  go(hash, config = null) {
    hash = hash || 'home'
    let defaultConfig = {
      force: false,
    };
    config = Object.assign({}, defaultConfig, config);
    let oldValue = this.currentHash;
    let newVlaue = this.parseHash(hash);
    this.currentHash = newVlaue;

    if (!config.force && oldValue == newVlaue) {
      return;
    }

    let hasThisPage = this.checkPageExist(this.currentHash);
    if (!hasThisPage) {
      this.go('#/not-fount')
      return;
    }

    this.currentHash = newVlaue;
    this.render();
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
    selector = selector || this.currentHash;
    this.clearPage();
    content = document.getElementById(selector);
    if (!content) {
      return;
    }
    this.showPage(content);
  }

  clearPage() {
    this.pageList.forEach(element => {
      element.hidden = true;
    });
  }
  // 显示页面
  showPage(content) {
    content.hidden = false;
  }

/**
 * 转化 hash 编码
 * @param {String} hash
 */
  parseHash(hash) {
    let hashArr = hash.split('/');
    return hashArr[hashArr.length - 1];
  }
}

// 单例模式实体类
let instance;

const init = () => {
  if (!instance) {
    instance = new Router();
  }
  return instance;
};

// init();

export default {
  init
};

// 实现重定向