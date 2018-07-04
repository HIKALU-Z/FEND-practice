/*eslint no-console: 0*/
import Vue from 'vue';
let lang = 'zh';
const parseRule = str => {
  let rule = {};

  str.split('|').forEach(r => {
    let arr = r.split(':');
    let key = arr[0]; // 例子：'min_length:4'，那么key就等于min_length
    let val = arr[1]; // 例子：'min_length:4'，那么val就等于4

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
    if (typeof val === 'number') return true;

    return !!val;
  },
  min_length(val, min) {
    return val.length >= parseInt(min);
  },
  max_length(val, max) {
    return val.length <= parseInt(max);
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
    lang = document.querySelector('error-lang') || 'zh';

    if (typeof binding.value == 'string') {
      rule = parseRule(binding.value);
    }
    el.placeholder = binding.value;
    // FIXME: why not using keypress here ?
    el.addEventListener('keyup', () => {
      let val = el.value;
      for (let type in rule) {
        if (!rule.hasOwnProperty(type)) {
          continue;
        }
        let arg = rule[type]; // e.g:rule[minlength] == 4
        let validator = valid[type];
        try {
          validator(val, arg);
        } catch (error) {
          inner_msg += `<div class="error">${error}</div>`;
        }
        error_el.innerHTML = inner_msg;
      }
    });
  }
});
