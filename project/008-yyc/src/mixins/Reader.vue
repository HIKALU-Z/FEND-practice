<script>
import api from '../assets/js/api.js';
export default {
  methods: {
    read(model) {
      api(model + '/read', { key_by: 'name' }).then(r => {
        this.$set(this.list, model, r.data);
      });
    }
  },
  data() {
    return {
      list: {}
    };
  }
};
</script>
