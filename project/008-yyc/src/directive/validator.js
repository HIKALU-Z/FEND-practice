/*eslint no-console: 0*/
import Vue from 'vue';

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
  username() {},
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
  bind: function(el, binding) {
    let rule = binding.value;
    if (typeof binding.value == 'string') {
      rule = parseRule(binding.value);
    }

    // console.log(rules);
    el.placeholder = binding.value;
    el.addEventListener('keyup', () => {
      // console.log(el.value);
      let val = el.value;
      for (let r in rule) {
        let arg = rule[r];
        let validator = valid[r];

        if (validator && !validator(val, arg)) {
          // eslint-disable-line
          console.log(r + '不合法');
        } else {
          console.log(r + '合法');
        }
      }
    });
  }
});
