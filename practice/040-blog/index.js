import article from './src/Api/article'
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
      // console.log('后');
      // console.log('route:', route);
    },
  }
};

router.init(config);