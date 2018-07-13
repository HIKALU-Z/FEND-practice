<template>
  <div>
    <aside class="side-nav card" :style="{width:width}">
      <router-link class="nav-item" to="/admin/user">用户管理</router-link>
      <router-link class="nav-item" to="/admin/vehicle">车辆管理</router-link>
      <router-link class="nav-item" to="/admin/brand">品牌管理</router-link>
      <router-link class="nav-item" to="/admin/model">车系管理</router-link>
      <router-link class="nav-item" to="/admin/design">设计管理</router-link>
      <router-link class="nav-item" to="/admin/location">地址管理</router-link>
      <!-- <router-link class="nav-item" to="/admin/duplicate">车辆品牌</router-link> -->
      <router-link class="nav-item" to="/admin/report">质检管理</router-link>
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
