/*eslint no-console: 0*/

// 引入外部模块
import Vue from 'vue';

// 设置全局变量
let lang = 'zh';

/**
 * 转换规则字符串为对象
 * @param {string} str validator 的规则
 */
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

/**
 * 设置验证规则函数
 */

const validFunction = {
  /**
   * 判断是否是电话号码
   * @param {number} val
   * @param {string} lang
   */
  isPhoneNumber(val, lang) {
    let reg = /^((1[3-8][0-9])+\d{8})$/;

    const lang_conf = {
      zh: '不合法的手机号',
      en: 'Invalid phone number'
    };

    if (!this.numeric(val, lang) || !reg.test(val)) throw lang_conf[lang];

    return true;
  },
  /**
   * 是否为正数
   * @param val
   * @param lang
   */
  positive(val, lang) {
    const lang_conf = {
      zh: '不合法的数字',
      en: 'Invalid number'
    };

    if (this.numeric(val) && parseFloat(val) < 0) throw lang_conf[lang];

    return true;
  },
  /**
   * 是否为数字
   * @param val
   * @param lang
   */
  numeric(val, lang) {
    const lang_conf = {
      zh: '不合法的数字',
      en: 'Invalid number'
    };

    if (parseFloat(val) != val) throw lang_conf[lang];

    return true;
  },

  /**
   * 判断用户名是否合法
   * @param {string} val 输入值
   */
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
  /**
   * 判断此项是否填写
   * @param {string} val 用户输入值
   */
  required(val, lang) {
    // console.log(val);
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
  /**
   * 判断最小长度
   * @param {number} val input
   * @param {number} min minval
   */
  min_length(val, lang, min) {
    let lang_conf = {
      zh: '别搞我,至少四个字',
      en: 'you have to input at least 4 character'
    };
    let isValid = val.length >= parseInt(min);
    if (!isValid) throw lang_conf[lang];
  },
  /**
   * 判断最大长度
   * @param {number} val input
   * @param {number} max maxval
   */
  max_length(val, lang, max) {
    let lang_conf = {
      zh: `最长长度为${max}个`,
      en: `you have to input at most ${max}word`
    };

    let isValid = val.length <= parseInt(max);
    if (!isValid) throw lang_conf[lang];
  },
  /**
   * 判断是否合法邮箱
   * @param {string} val 输入值
   */
  email(val, lang) {
    let lang_conf = {
      zh: '别搞我，至少来个@',
      en: 'you have to input correct email format'
    };
    let reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isValid = reg.test(val);
    if (!isValid) throw lang_conf[lang];
  }
};

/**
 * 初始化表单数据
 * @param {HTMLFormElement} form 表单
 * @param {string} lang zh or en
 */
function initFormState(form, lang) {
  let elSubmit = form.querySelector('[type=submit]');
  form.$state = {
    lang: lang,
    elSubmit: elSubmit,
    input_list: []
  };
}

/**
 * 将新增的 input 元素加入表单
 * @param {HTMLFormElement} form
 * @param {HTMLInputElement} input value
 */
function trackInput(form, input) {
  form.$state.input_list.push(input);
}

/**
 * 检查所有input是否合法（即有没有invalid属性）
 * @param input_list 当前表单所有已验证的input，通常在el_form.$state.input_list中
 * @param el_submit 提交按钮
 */
function validate_form(input_list, el_submit) {
  let invalid = false;

  input_list.forEach(input => {
    if (input.getAttribute('invalid') === 'true') {
      invalid = true;
    }
  });

  if (invalid) disable_submit(el_submit);
  else enable_submit(el_submit);
}

/**
 * 禁用提交按钮
 */
function disable_submit(el_submit) {
  el_submit.setAttribute('disabled', 'disabled');
}

/**
 * 启用提交按钮
 */
function enable_submit(el_submit) {
  el_submit.removeAttribute('disabled');
}

/**
 * 验证器
 * @param {HTMLFontElement} elForm
 * @param {HTMLInputElement} elInput
 * @param {HTMLDivElement} elError
 * @param {object} rule 规则
 */
const executeValidator = (elForm, elInput, elError, rule) => {
  let val = elInput.value;
  let invalid = false;
  let lang = elForm.$state.lang;
  let inner_msg = '';

  // 默认设置表单可用
  setInvalid(false);

  // 如果没有值且没有任何必要性验证那么久不需要执行另外的操作
  if (!val || !rule.required) return;
  // 如果有非空验证就先执行非空验证
  if (rule.required) {
    try {
      validFunction.required(val, lang);
    } catch (e) {
      setInvalid(true, e);
      return;
    }
  }
  // console.log(rule)
  for (let type in rule) {
    if (!rule.hasOwnProperty(type)) {
      continue;
    }
    // type是每一类验证规则如'required'或'username'
    let arg = rule[type]; // 获取传参，如'min_length:4'中的'4'
    let validator = validFunction[type].bind(validFunction); // 获取验证函数

    try {
      let args = [val, elForm.$state.lang].concat(arg);

      if (!invalid) {
        let result = validator(...args);
        console.log(...args);
        if (result instanceof Promise) {
          result
            .then(r => {
              if (r) setInvalid(false);
            })
            .catch(r => {
              // console.log(r);
              setInvalid(true, r);
            });
        }
      }
    } catch (e) {
      console.log(e);
      setInvalid(true, e);
    }
  }

  function setInvalid(invalid, e) {
    if (invalid) {
      inner_msg += `<div class="error">${e}</div>`;
      elInput.setAttribute('invalid', 'true');
    } else elInput.setAttribute('invalid', 'false');

    if (elInput.getAttribute('dirty') === 'true') {
      elError.innerHTML = inner_msg;
    }

    validate_form(elForm.$state.input_list, elForm.$state.elSubmit);
  }
};

export default Vue.directive('validator', {
  inserted: function(el, binding) {
    let debounceTimer;
    let rule = binding.value;
    let selector = el.getAttribute('error-el');
    let error_el = document.querySelector(selector);
    let elForm = el.closest('form');
    // let elSubmit = elForm.querySelector('[type=submit]');

    lang = document.querySelector('error-lang') || 'zh';

    // 初始化表单状态
    if (!elForm.$state) {
      let lang = el.getAttribute('error-lang') || 'zh'; // 错误信息的语言
      initFormState(elForm, lang);
    }

    // 将新的input追加到$state中
    trackInput(elForm, el);

    // 如果传入的是对象，那么不需要转化直接使用对象
    if (typeof binding.value == 'string') {
      rule = parseRule(binding.value);
    }
    el.placeholder = binding.value;
    // : why not using keypress here ?
    el.addEventListener('keyup', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        executeValidator(elForm, el, error_el, rule);
      }, 300);
    });

    el.addEventListener('focus', () => {
      el.setAttribute('dirty', 'true');
    });
  }
});
