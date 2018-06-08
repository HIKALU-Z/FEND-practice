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
      template_url: './src/template/home.html'
    },
    article: {
      path: '/about',
      el: '#about',
      template_url: './src/template/about.html'
    },
    article: {
      path: '/article/:author/:id', // ['article', ':author', ':id']
      el: '#article',
      template_url: './src/template/article.html'
    },
    article_list: {
      path: '/article-list',
      el: '#article-list',
      template_url: './src/template/article-list.html'
    },
    tag: {
      path: '/tag',
      el: '#tag',
    }
  },
  hook: {

  }
};

// router.init(config);