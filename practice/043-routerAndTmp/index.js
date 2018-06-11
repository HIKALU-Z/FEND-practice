let app_data = {
  article: {
    list: [{
        id: 1,
        title: 'ABC',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa dicta dolorem doloribus eveniet fuga, illum iste labore modi neque nisi, nostrum odit placeat quasi quos reprehenderit tempore ullam vel?',
      },
      {
        id: 2,
        title: 'DEF',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa dicta dolorem doloribus eveniet fuga, illum iste labore modi neque nisi, nostrum odit placeat quasi quos reprehenderit tempore ullam vel?',
      },
    ],
  },
};

let o = {
  default: 'home',
  route: {
    home: {
      path: '#/home/',
      template_url: './tpl/home.html',
      data: {
        name: "HIKALU",
      },
      hook: {
        after: function () {
          let list = app_data.article.list;
          let el_list = document.getElementById('article-list');

          list.forEach(row => {
            let el_item = document.createElement('div');
            el_item.innerHTML = `
              <a href="#/article?id=${row.id}">${row.title}</a>
            `;

            el_list.appendChild(el_item);
          });
        },
      },
    },
    about: {
      path: '#/about',
      template_url: './tpl/about.html',
      data: {
        name: '王花花',
        age: 10,
      },
    },
    create: {
      path: '#/create',
      template_url: './tpl/create.html',
      data: {},
      hook: {
        after: () => { // 当路由切换完毕时执行
          // 选中提交表单
          let form = document.getElementById('create-article');
          // 监听表单提交事件
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            // 初始化数据
            let row = {};
            row.title = form.querySelector('[name=title]').value; // 获取标题的值
            row.content = form.querySelector('[name=content]').value; // 获取内容的值

            // 插入数据（新增一条,类似于api.add()）
            app_data.article.list.unshift(row);

            // 重置表单
            form.reset();
          });
        },
      },
    },
    article: {
      path: '#/article',
      template_url: './tpl/article.html',
      data: {},
      hook: {
        renderBefore: (current) => {
          current.data = current.$param;
          router.render(current);
          // console.log(current);
        }
      }
    }
  },
  hook: {
    before: function () {},
    after: function () {},
  },
};

let router = new Route(o);