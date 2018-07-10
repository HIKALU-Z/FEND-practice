<template>
  <form class="search-area" @submit="submit">
    <input placeholder="二手车型" v-model="keyword" @keyup="change" type="search" autocomplete="off">
    <button type="submit">搜索</button>
  </form>
</template>

<script>
import '../assets/css/search-input.css';
export default {
  props: ['onChange', 'onSubmit', 'keyvalue'],
  data() {
    return {
      keyword: ''
    };
  },
  methods: {
    change() {
      if (this.onChange) this.onChange(this.keyword);
    },
    submit() {
      // console.log(this.keyword);
      if (this.onSubmit) this.onSubmit(this.keyword);
      this.changeRouter();
    },
    changeRouter() {
      this.$router.push({
        path: '/search',
        query: { keyword: this.keyword }
      });
    }
  },
  watch: {
    /**
     * @param newV
     * @param oldV
     */
    keyvalue(newvalue) {
      this.keyword = newvalue;
    }
  }
};
</script>

<style scoped>
</style>
