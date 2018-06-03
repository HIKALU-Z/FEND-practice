import article from './src/Api/article'
import router from './src/Router/router';

// router.hello();
article();

let config = {
  hook : {
    before : function () {
      let he_is_admin = true;
      if (!he_is_admin)
        return false;
      return true;
    },
    after  : function (route) {
      console.log('后');
      console.log('route:', route);
    },
  },
};
router.init(config);
