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
            <input v-validator="'username|minlength:4|maxlength:6'"  autocomplete="off" id="username" type="text">
          </div>
          <div class="input-control">
            <label for="password">password</label>
            <input id="password"  autocomplete="off" type="text">
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

.por {
  position: relative;
}

.main-form {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  width: 270px;
  padding: 15px;
  box-shadow: 1px 2px 1px rgba(255, 0, 255, 0.7);
}

.main-form h1 {
  font-size: 1.5rem;
}

.main-form .error-list {
  background-color: rgba(180, 0, 15, 0.4);
  padding: 5px;
}

.main-form .input-control {
  margin-bottom: 12px;
}

.main-form .input-control input,
.main-form .input-control button {
  width: 100%;
  height: 30px;
}
.main-form .input-control button {
  background-color: teal;
  color: aliceblue;
}

.main-form .login-links {
  text-align: right;
}

.main-form .login-links > * {
  font-size: 10px;
  opacity: 0.8;
  margin-right: 10px;
  cursor: pointer;
}

.main-form .login-links > *:last-child {
  margin-right: 0;
}
</style>
