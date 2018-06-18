const Home = Vue.component("home", {
  template: `
  <div>
    <div v-for="article in articleList" :key="article.id">
      <router-link :to="'/article/'+article.id">{{article.title}}</router-link>
    </div>
    <router-link to="/zgl">ZGL</router-link>
  </div>
  `,
  data: function () {
    return {
      articleList: []
    };
  },
  mounted: function () {
    this.readAllArticle()
  },
  methods: {
    readAllArticle() {
      http.post('article/read', {
          only: ['title', 'id']
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.data)
          this.articleList = res.data.data
        })
    }
  }
})

const ArticleDetail = Vue.component("article-detail", {
  template: `
    <div>
      {{$route.params.id}}
      <h2>{{article.title}}</h2>
      <p>{{article.content}}</p>
    </div>
  `,
  data: function () {
    return {
      article: {}
    }
  },
  methods: {
    findArticle() {
      http.post('article/find', {
          id: this.$route.params.id
        })
        .then((res) => {
          this.article = res.data.data
        })
    }
  },
  mounted:function () {
    this.findArticle()
  }
})

const NewArticle = Vue.component("new-article", {
  template: `
  <div>
    <form @submit="create($event)">
      <input type="text" placeholder="title" v-model="current.title">
      <input type="text" placeholder="content" v-model="current.content">
      <input type="text" placeholder="author" v-model="current.author">
      <button type="submit">submit</button>
    </form>
  </div>
  `,
  methods: {
    create(e) {
      e.preventDefault();
      console.log(this.current);
      http.post('article/create', this.current)
    }
  },
  data: function () {
    return {
      current: {

      }
    };
  }
})



const Zgl = Vue.component('zgl', {
  template: `
    <div>
      <h1>{{name}} is a {{gender}}</h1>
    </div>
  `,
  data: function () {
    return {
      name: 'zgl',
      gender: 'male'
    };
  }
})


const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/article/create',
  component: NewArticle
}, {
  path: '/zgl',
  component: Zgl
}, {
  path: '/article/:id',
  component: ArticleDetail
}]

const router = new VueRouter({
  routes
})


new Vue({
  el: '#root',
  router
})

