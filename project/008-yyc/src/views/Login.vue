<template>
  <div>
    <Nav></Nav>
    <div class="header">
      <div class="container por">
        <form class="main-form">
          <h1>Login</h1>
          <hr>
          <div class="error-list">
            <span>invalid username</span>
          </div>
          <div class="input-control">
            <label for="username">username</label>
            <input v-validator="'username|minlength:4|maxlength:6'" autocomplete="off" id="username" type="text">
          </div>
          <div class="input-control">
            <label for="password">password</label>
            <input id="password" autocomplete="off" type="text">
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

export default {
  directives: { validator },
  components: {
    Nav
  }
};
</script>

<style scoped>
.header {
  background-image: url('../assets/bg-login.jpg');
  background-size: cover;
  height: 480px;
}
</style>
