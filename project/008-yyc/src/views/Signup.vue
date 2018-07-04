
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
          <input id="password" type="password">
        </div>
        <div class="input-control">
          <label for="confirm-password">confirm-password</label>
          <input id="confirm-password" type="password">
        </div>
        <div class="input-control">
          <label for="email">email</label>
          <input id="email" type="email">
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
// import '../assets/css/login.css';
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
/*
.main-form h1 {
  font-size: 1.5rem;
} */

/* .main-form .error-list {
  background-color: rgba(180, 0, 15, 0.3);
  padding: 5px;
} */

/* .main-form .input-control {
  margin-bottom: 12px;
} */

/* .main-form .input-control input,
.main-form .input-control button {
  width: 100%;
  height: 30px;
} */
/* .main-form .input-control button {
  background-color: teal;
  color: aliceblue;
  outline: none;
  border: none;
} */

.main-form .login-links {
  text-align: left;
}

/* .main-form .login-links > * {
  font-size: 10px;
  margin-right: 10px;
  cursor: pointer;
} */

/* .main-form .login-links > *:last-child {
  margin-right: 0;
} */
</style>
