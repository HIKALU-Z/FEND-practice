import article_api from './src/Api/article'
import article_ui from './src/Ui/article'
import router from './src/Router/router';

// router.hello();
// article();

let config = {
  routes: {
    home: {
      path: '/home',
      el: '#home',
    },
    about: {
      path: '/about',
      el: '#about',
    },
    article: {
      path: '/article/:author/:id', // ['article', ':author', ':id']
      el: '#article',
    },
    article_list: {
      path: '/article-list',
      el: '#article-list',
    },
    tag: {
      path: '/tag',
      el: '#tag',
    }
  },
  hook: {
    before: function () {
      // let he_is_admin = true;
      // if (!he_is_admin)
      //   return false;
      return true;
    },
    after: function (route) {
      /*先通过接口拿到数据*/
      article_api.read(data => {
        /*有了数据就可以渲染动态的内容了*/
        article_ui.render(data);
      });
    }
  }
};

router.init(config);