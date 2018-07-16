
<template>
  <div id="signup">
    <Nav></Nav>
    <div>
      <form class="main-form" @submit.prevent="signup">
        <h1>SignUp</h1>
        <div class="signup-type">
          <div class="row">
            <div @click="signup_by = 'phone'" :class="'col-lg-6 ' + (signup_by == 'phone' ? 'active': '')">
              <span>SignUp-By-Phone</span>
            </div>
            <div @click="signup_by = 'mail'" :class="'col-lg-6 ' + (signup_by == 'mail' ? 'active': '')">
              <span>SignUp-By-Mail</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="input-control" v-if="signup_by == 'phone'">
          <label for="cellphone">cellphone</label>
          <input id="cellphone" :key="1" autocomplete="off" v-validator="'required|isPhoneNumber'" error-el="#cellphone-error" type="text" v-model="current.phone">
          <div class="error-list">
            <div id="cellphone-error"></div>
          </div>
        </div>

        <div class="input-control" v-if="signup_by == 'mail'">
          <label for="email">email</label>
          <input id="email" :key="2" v-validator="'required|min_length:4|max_length:18|email'" autocomplete="off" error-el="#email-error" type="email" v-model="current.mail">
          <div class="error-list">
            <div id="email-error"></div>
          </div>
        </div>

        <div class="input-control">
          <label for="vcode">验证码</label>
          <div class="btn-group">
            <input style="width: 70%;" id="vcode" v-model="current.vcode" type="text" placeholder="verifyCode">
            <button @click="send_code" style="width: 30%;" type="button" :disabled="captcha.countdown != 0">
              <span v-if="captcha.countdown">{{captcha.countdown}}</span>
              <span v-else>发送验证码</span>
            </button>
          </div>
          <div class="error-list">
            <div v-if="invalid_code" id="vcode-error">验证码有误</div>
          </div>
        </div>
        <div class="input-control">
          <label for="password">password</label>
          <input id="password" v-validator="'required|min_length:4|max_length:8'" error-el="#password-error" type="password" v-model="current.password">
          <div class="error-list">
            <div id="password-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label for="confirm-password">confirm-password</label>
          <input id="confirm-password" v-validator="'required|min_length:4|max_length:8'" error-el="#confrim-password-error" type="password" v-model="current.confirmPassword">
          <div class="error-list">
            <div id="confrim-password-error"></div>
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
import api from './../assets/js/api.js';

export default {
  directives: {
    validator
  },
  components: {
    Nav
  },
  data() {
    return {
      current: {},
      code: '',
      invalid_code: false,
      signup_by: 'phone',
      captcha: {
        timer: 0,
        countdown: 0
      }
    };
  },
  methods: {
    signup() {
      this.invalid_code = this.current.vcode !== this.code;

      if (this.invalid_code) return;

      if (this.signup_by == 'mail') delete this.current.phone;
      else delete this.current.mail;

      // 如果没有用户名，就默认用已填的邮箱或手机号作为用户名
      !this.current.username && (this.current.username = this.current[this.signup_by]);

      api('user/create', this.current).then(() => {
        alert('注册成功!');
        this.$router.push('/');
      });
    },
    /**
     * 发送验证码
     */
    send_code() {
      if (this.captcha.countdown) return;

      let action, by_mail;

      this.captcha.countdown = 60;

      action = 'sms';

      if ((by_mail = this.signup_by == 'mail')) action = 'mail';

      if ((by_mail && !this.current.mail) || (!by_mail && !this.current.phone)) return;

      this.captcha.timer = setInterval(() => {
        if (this.captcha.countdown == 0) {
          clearInterval(this.captcha.timer);
          return;
        }

        this.$set(this.captcha, 'countdown', this.captcha.countdown - 1);
      }, 1000);

      api(`captcha/${action}`, { phone: this.current.phone, email: this.current.mail }).then(r => {
        this.code = atob(r.data.result);
      });
    }
  }
};
</script>

<style scoped>
/* #signup {
  overflow: auto;
} */

.signup-type {
  margin-top: 10px;
}

.signup-type span {
  cursor: pointer;
}

.signup-type .active {
  color: orange;
}

.signup-type .active span {
  border-bottom: 2px solid orange;
  padding: 5px 0;
}

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

.main-form button[type='submit'] {
  cursor: pointer;
}

.main-form .btn-group > * {
  display: inline-block;
  vertical-align: top;
  /* line-height: 1.1; */
}
</style>
