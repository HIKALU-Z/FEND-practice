/*

                       ┌─────────────────┐
                       │init(constructor)│
                       └─────────────────┘
                                │
         ┌──────────────────────┼────────────────────┐
         │                      │                    │
┌────────▼────  ───┐ ┌────────────▼    ───────┐ ┌──────────▼─────────┐
│初始化this.current │ │ 拷设置，初始化this.state  │ │       监听地址变化       │
└─────────────  ───┘ └─────────────    ───────┘ └────────────────────┘
                                                     │
                                                     │
                    ┌────────────────────────────────┤
                    │                                │
           ┌────────▼────────────┐      ┌────────────▼────────┐
           │      记录当前hash       │      │     判断当前页归哪个路由管     │
           └─────────────────────┘      └─────────────────────┘

*/
/**
 * @property {object} current 当前路由信息：{hash: '#/home'}
 * @property {object} state 保存着路由的大部分重要信息，由拷贝config得到
 */
class Route {
  /**
   * 当对象出生时立即执行
   * @param {object} config 举例：
   *    {
   *      // -----------------------
   *      // 所有的路由规则
   *      // -----------------------
   *      route: {
   *        home: { // 其中一条规则（定义了首页地址和相对应的模板）
   *          path: '/home', // 地址栏地址
   *          template_url: './template/home.html' // 模板地址
   *          el: '#home',
   *          hook: { // 局部钩子，仅会在当前路由执行
   *            before: function() {},
   *            after: function() {},
   *          }
   *        },
   *        about: { // 另一条规则
   *          ...
   *        }
   *        ...
   *      },
   *      // -----------------------
   *      // 全局钩子
   *      // -----------------------
   *      //
   *      // 访问任何一页都会经过以下几个步骤：
   *      //    before：已加载设置，地址未发生变化，但是未渲染
   *      //    after：已加载设置，地址未发生变化，已渲染
   *      // 你可以将自己的逻辑通过这些插槽（钩子）传进来，当路由执行到
   *      // 对应的位置时就会触发你的函数。
   *
   *      hook: {
   *        before: function() {},
   *        after: function() {}
   *      }
   *    }
   */
  constructor(config) {
    // 初始化this.current，确保以后this.current.xxx不报错
    this.current = {};

    // 将传进来的设置拷一份，绑到当前对象上
    this.state = Object.assign({}, config);

    // 如果用户直接访问了某个路由，默认情况下页面不会渲染，
    // 因为没有触发hashchange事件，所以就不会调用go()，更不会渲染
    this.init_page();

    // 监听浏览器地址变化
    this.detect_hash_change();
  }

  /**
   * 监听hash的变化
   *
   * 当浏览器地址发生变化是应该干什么
   */
  detect_hash_change() {
    window.addEventListener('hashchange', () => {
      // 将当前页面的原始hash记录在current中，方便后续使用
      this.current.hash = location.hash;

      // 获取当前hash对应的路由
      let route_name = this.parse_current_hash();

      console.log('route_name:', route_name);

      this.go(route_name);
    });
  }

  /**
   * 切换路由
   * @param {string} route_name 路由名this.state.route.xxx
   */
  go(route_name) {
    // 通过 routerName 获得具体的路由规则
    let route = this.state.route[route_name];

    // 保存上一条历史路由
    this.previous = this.current;

    // 保存当前路由
    this.current = route;

    // 删除之前的页面（之前的页面不应该继续显示）
    this.remove_previous_tpl();

    // 渲染当前页面
    this.render_current();
  }

  /**
   * 清空前一页
   */
  remove_previous_tpl() {
    // 拿到前一页的模板床
    let element = document.querySelector(this.previous.el);

    if (!element)
      return;

    // 清空模板床
    element.innerHTML = '';
  }

  init_page() {
    // if (!location.hash)
    //   return;
    let route_name = this.parse_hash(location.hash);
    if (!route_name)
      route_name = this.state.default;

    this.go(route_name);
  }

  /**
   * 渲染当前页
   */
  render_current() {
    this.render(this.current);
  }

  /**
   * 通过路由对象渲染页面
   * @param {object} route
   */
  render(route) {
    let element = document.querySelector(route.el),
      cache;

    // 如果已经缓存该模板就直接使用
    if (cache = route.$template) {
      element.innerHTML = cache;
      return;
    }

    // 如果没有缓存则执行以下步骤
    // 因为路由对象中配置了模板地址，所以可以根据地址取到真实的模板代码（HTML代码）
    this.get_template(route.template_url, function (tpl) {
      // 取到模板后将其插到模板床中，同时将其缓存至路由对象中
      route.$template = element.innerHTML = tpl;
    });
  }

  /**
   * 解析当前路由的快捷方式（省的给parse_hash()专门传参）
   * @return {string} 当前地址的路由名
   */
  parse_current_hash() {
    return this.parse_hash(this.current.hash);
  }

  /**
   * 通过原始hash（如："#/home"）解析得到其对应的路由名
   * @param hash 原始hash
   * @return {string} 路由名，对应着this.state.route.xxx
   */
  parse_hash(hash) {
    hash = trim(hash, '#/');
    // 正则中 ^ 代表以某个字符串开头 $ 代表以某个字符串结尾。 ？ 代表匹配前方字符串一次或 0 次
    let re = new RegExp('^#?\/?' + hash + '\/?$');
    for (let key in this.state.route) {
      let item = this.state.route[key];
      if (re.test(item.path))
        return key;
    }
  }

  /**
   * 通过url获取模板代码（一般为HTML代码）
   * @param url
   * @param on_succeed
   */
  get_template(url, on_succeed) {

    const http = new XMLHttpRequest();
    http.open('get', url);
    http.send();

    http.addEventListener('load', () => {
      on_succeed(http.responseText);
    });
  }
}

/**
 * 修剪字符串方法
 * - 先将需要修剪的字符串转化为数组 arr
 * - 循环新的数组
 * - 判断所需修剪的字符串是否以 特殊字符开头或结尾
 * - 如果是以特殊字符开头，那么保留 index 1 以后的字符串，并递归调用 trim 本身，直到修剪完成
 * - 如果是以特殊字符结尾，那么保留最后一位之外的字符串，并递归调用 trim 本身，直到修剪完成
 *
 * @param {String} str 需要修剪的字符串
 * @param {String} cap_list 修剪哪些字符
 */
function trim(str, cap_list) {
  let arr = cap_list.split('');

  arr.forEach(function (cap) {
    if (str.startsWith(cap)) {
      str = str.substring(1);
      str = trim(str, cap);
    }

    if (str.endsWith(cap)) {
      str = str.substring(0, str.length - 1);
      str = trim(str, cap);
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


// const trim2 = (str,capList)=>{
//   let arr = capList.split('')
//   arr.forEach(cap => {
//     if(str.startsWith(cap)){
//       str = str.substring(1);
//       trim2(str)
//     }
//     if (str.endsWith(cap)) {
//       str = str.substring(0,str.length-1)
//       trim2(str)
//     }
//   });
//   return str;
// }

// let result = trim2('#/home./#','#/')
// console.log(result);