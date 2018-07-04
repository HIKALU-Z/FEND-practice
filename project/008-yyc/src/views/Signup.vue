
<template>
  <div id="signup">
    <Nav></Nav>
    <div>
      <form class="main-form">
        <h1>SignUp</h1>
        <hr>
        <div class="error-list" hidden>
          <span>invalid username</span>
        </div>
        <div class="input-control">
          <label for="username">username</label>
          <input id="username" autocomplete="off" v-validator="'required|username|min_length:4|max_length:6'" error-el="#username-error" type="text">
          <div class="error-list">
            <div id="username-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label for="password">password</label>
          <input id="password" v-validator="'required|min_length:4|max_length:8'" error-el="#password-error" type="password">
          <div class="error-list">
            <div id="password-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label for="confirm-password">confirm-password</label>
          <input id="confirm-password" v-validator="'required|min_length:4|max_length:8'" error-el="#confrim-password-error" type="password">
          <div class="error-list">
            <div id="confrim-password-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label for="email">email</label>
          <input id="email" v-validator="'required|min_length:4|max_length:18|email'" autocomplete="off" error-el="#email-error" type="email">
          <div class="error-list">
            <div id="email-error"></div>
          </div>
        </div>

        <div class="input-control">
          <button type="submit" class=“btn-login”>注册</button>
        </div>
        <div class="input-control login-links">
          <span class="muted">
            已有账户？
            <router-link to="/login">点此登录</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import '../assets/css/login.css';
import Nav from '../components/Nav';
import validator from '../directive/validator.js';

export default {
  directives: {
    validator
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
/* #signup {
  overflow: auto;
} */
.main-form {
  position: relative;
  background-color: white;
  margin: 30px auto;
  width: 320px;
  padding: 15px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  /* border-bottom-right-radius: 8px; */
}

.main-form .login-links {
  text-align: left;
}
</style>
