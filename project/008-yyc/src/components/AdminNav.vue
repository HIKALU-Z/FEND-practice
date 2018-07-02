<template>
  <div>
    <aside class="side-nav card" :style="{width:width}">
      <router-link class="nav-item" to="/admin/duplicate">用户管理</router-link>
      <router-link class="nav-item" to="/admin/vehicle">车辆管理</router-link>
      <router-link class="nav-item" to="/admin/other">车辆品牌</router-link>
      <router-link class="nav-item" to="/admin/other">质检管理</router-link>
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

.side-nav .router-link-active {
  /* background-color: */
  color: #fd521d;
  border-left: 2px solid #0680f185;
}
.side-nav .nav-item:hover {
  background-color: rgba(37, 153, 231, 0.2);
}
</style>
