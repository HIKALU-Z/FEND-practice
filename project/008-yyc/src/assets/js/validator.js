import Vue from 'vue';

const valid = {
  maxlength: function(val, args) {
    return val.length < args;
  },
  minlength: function(val, args) {
    return val.length > args;
  },
  required: function(val){
    if (val != undefined) return true;
    return false;
  }
};

Vue.directive('validator', {
  bind: function(el, binding) {
    let result = {};
    let rule = binding.value; // maxlength:4 | required
    rule.split('|').forEach(element => {
      let key = element.split(':')[0];
      let val = element.split(':')[1];
      if(val == undefined){
        val = true
      }
      result[key] = val;
    });

    el.addEventListener('keyup', function() {
      let val = el.value;
      for (let r in result) {
        let args = result[r];
        let validator = valid[r];
        if (validator) {
          let isPass = validator(val, args);
          console.log(isPass)
        }
      }
    });
  }
});
