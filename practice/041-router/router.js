/*

                       ┌─────────────────┐
                       │init(constructor)│
                       └─────────────────┘
                                │
         ┌──────────────────────┼────────────────────┐
         │                      │                    │
┌────────▼───────┐ ┌────────────▼───────┐ ┌──────────▼─────────┐
│初始化this.current │ │ 拷设置，初始化this.state  │ │       监听地址变化       │
└────────────────┘ └────────────────────┘ └────────────────────┘
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
 * @property {object} state 保存着路由的大部分重要信息
 */
class Route {
  /**
   * 当对象出生时立即执行
   * @param {object} config 举例：
   *    {
   *      // -----------------------
   *      // 所有的路由规则
   *      // -----------------------
   *      routes: {
   *        home: { // 其中一条规则（定义了首页地址和相对应的模板）
   *          path: '/home', // 地址栏地址
   *          template_url: './template/home.html' // 模板地址
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

      this.parse_current_hash();
    });
  }

  parse_current_hash() {
    this.parse_hash(this.current.hash);
  }

  parse_hash(hash) {
    // ...
    return 'home';
  }
}

let o = {};
let route = new Route(o);
route.current;