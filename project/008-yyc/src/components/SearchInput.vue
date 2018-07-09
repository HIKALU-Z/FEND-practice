<template>
  <form class="search-area" @submit="submit">
    <input placeholder="二手车型" v-model="keyword" @keyup="change" type="search" autocomplete="off">
    <button type="submit">搜索</button>
  </form>
</template>

<script>
import '../assets/css/search-input.css';
export default {
  props: ['onChange', 'onSubmit'],
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
      if (this.onSubmit) this.onSubmit(this.keyword);
      this.changeRouter();
    },
    changeRouter() {
      this.$router.push({
        path: '/search',
        query: { keyword: this.keyword }
      });
    }
  }
};
</script>

<style scoped>
</style>
