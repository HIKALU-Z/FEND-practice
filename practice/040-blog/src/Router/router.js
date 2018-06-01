class Router {
  constructor() {
    this.currentHash = this.parseHash(window.location.hash) || 'home';
    this.pageList = document.querySelectorAll('.page');
    this.detectClick();
    this.detectHash();
    this.render();
  }

  detectClick() {
    document.addEventListener('click', e => {
      let target = e.target;
      switch (target.nodeName) {
        case "A":
          this.go(target.href)
          break;
        default:
          break;
      }
    })
  }

  detectHash() {
    window.addEventListener('hashchange', e => {
      this.go(window.location.hash)
    })
  }

  go(hash) {
    let oldValue = this.currentHash;
    let newVlaue = this.parseHash(hash)
    if (oldValue == newVlaue) {
      return;
    }
    this.currentHash = newVlaue;
    this.render()
  }

  render(selector) {
    let content;
    selector = selector || this.currentHash
    this.clearPage();
    content = document.getElementById(selector);
    content.hidden = false;
  }

  clearPage() {
    this.pageList.forEach(element => {
      element.hidden = true;
    });
  }

  parseHash() {
    let hash = window.location.hash;
    hash = hash.split('/')
    return hash[hash.length - 1]
  }
}

// 单例模式实体类
let instance;

const init = () => {
  if (!instance) {
    instance = new Router()
  }
  return instance;
}

// init();

export default {
  init
};