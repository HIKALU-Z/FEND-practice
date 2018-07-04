/*eslint no-console: 0*/
import Vue from 'vue';
let lang = 'zh';
const parseRule = str => {
  let rule = {};

  str.split('|').forEach(r => {
    // let arr = r.split(':');
    // let key = arr[0]; // 例子：'min_length:4'，那么key就等于min_length
    // let val = arr[1]; // 例子：'min_length:4'，那么val就等于4
    let [key, val] = r.split(':');
    if (val) {
      val = val.split(',');
    }

    // 如果只有键没有值，例子：'required'，那么val就等于true
    val = val === undefined ? true : val;

    rule[key] = val;
  });

  return rule;
};

const valid = {
  username(val) {
    const lang_conf = {
      zh: '用户名不合法，只能包含字母和数字',
      en: 'Invalid username'
    };

    const reg = /^[a-zA-Z0-9]*$/;
    let r = reg.test(val);

    if (!r) throw lang_conf[lang];

    return r;
  },
  required(val) {
    console.log(val);
    const lang_conf = {
      zh: '此项为必填项',
      en: 'this item was required'
    };
    // if (typeof val === 'number') return true;
    if (!val) {
      throw lang_conf[lang];
    }
    return !!val;
  },
  min_length(val, min) {
    let lang_conf = {
      zh: '别搞我,至少四个字',
      en: 'you have to input at least 4 character'
    };
    let isValid = val.length >= parseInt(min);
    if (!isValid) throw lang_conf[lang];
  },
  max_length(val, max) {
    let lang_conf = {
      zh: 'zhongwen',
      en: 'you have to input at ...'
    };

    let isValid = val.length <= parseInt(max);
    if (!isValid) throw lang_conf[lang];
  },
  email(val) {
    let lang_conf = {
      zh: '别搞我，至少来个@',
      en: 'you have to input correct email format'
    };
    let reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isValid = reg.test(val);
    if (!isValid) throw lang_conf[lang];
  }
};

export default Vue.directive('validator', {
  inserted: function(el, binding) {
    let rule = binding.value;
    let selector = el.getAttribute('error-el');
    console.log(selector);
    let error_el = document.querySelector(selector);
    console.log(error_el);
    let inner_msg = '';
    let elForm = el.closest('form');
    let elSubmit = elForm.querySelector('[type=submit]');

    lang = document.querySelector('error-lang') || 'zh';

    if (typeof binding.value == 'string') {
      rule = parseRule(binding.value);
    }
    el.placeholder = binding.value;
    // : why not using keypress here ?
    el.addEventListener('keyup', () => {
      let val = el.value;
      let formValid = true;
      inner_msg = '';
      for (let type in rule) {
        if (!rule.hasOwnProperty(type)) {
          continue;
        }
        let arg = rule[type]; // e.g:rule[minlength] == 4
        let validator = valid[type];
        try {
          validator(val, arg);
        } catch (error) {
          formValid = false;
          inner_msg += `<div class="error">${error}</div>`;
        }
        error_el.innerHTML = inner_msg;
      }
      if (!formValid) {
        elSubmit.setAttribute('disabled', 'disabled');
      } else {
        let hasDisabled = elSubmit.getAttribute('disabled');
        if (hasDisabled) {
          elSubmit.removeAttribute('disabled');
        }
      }
    });
  }
});
