<template>
  <div>
    <Nav></Nav>
    <div class="header">
      <div class="container por">
        <form class="main-form" @submit="submit">
          <h1>Login</h1>
          <hr>
          <div class="error-list" v-if="loginFailed">
            <span>invalid username</span>
          </div>
          <div class="input-control">
            <label for="username">username</label>
            <input autocomplete="off" id="username" type="text" v-model="current.$unique">

          </div>
          <div class="input-control">
            <label for="password">password</label>
            <input id="password" autocomplete="off" type="password" v-model="current.password">
          </div>
          <div class="input-control">
            <button type="submit" class=“btn-login”>登录</button>
          </div>
          <div class="input-control login-links">
            <router-link to="/forgetpwd">忘记密码</router-link>
            <router-link to="/signup">免费注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/login.css';
import Nav from '../components/Nav';
import validator from '../directive/validator.js';
import api from './../assets/js/api.js';

export default {
  directives: { validator },
  components: {
    Nav
  },
  data() {
    return {
      loginFailed: true,
      current: {}
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      let unique, password;

      if (!(unique = this.current.$unique) || !(password = this.current.password)) return;

      api('user/read', {
        where: {
          or: [['username', '=', unique], ['phone', '=', unique], ['mail', '=', unique]]
        }
      }).then(r => {
        let row;
        if (!(row = r.data[0]) || row.password !== password) {
          this.login_failed = true;
          return;
        }

        this.login_failed = false;
        delete row.password;
        localStorage.setItem('uinfo', JSON.stringify(row));
        alert('Yo.');
        this.$router.push('/');
      });
    }
  }
};
</script>

<style scoped>
.header {
  background-image: url('../assets/bg-login.jpg');
  background-size: cover;
  height: 680px;
}
</style>
