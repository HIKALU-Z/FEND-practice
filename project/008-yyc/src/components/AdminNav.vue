<template>
  <div>
    <aside class="side-nav" :style="{width:width}">
      <a class="is-active" href="#">用户管理</a>
      <a href="#">车辆管理</a>
      <a href="#">车辆品牌</a>
      <a href="#">质检管理</a>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: '100%'
    }
  }
};
</script>

<style scope>
.side-nav {
  background-color: white;
  /* height: 100vh; */
}
.side-nav a {
  display: block;
  padding: 10px 20px;
  color: black;
}
.side-nav a.is-active {
  /* background-color: */
  color: #fd521d;
}
.side-nav a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
