<template>
  <div class="main-nav" :style="{marginBottom: this.pushDown ? '10px': 0,}">
    <div class="container">
      <div class="row">
        <div class="col left">
          <a class="logo"></a>
          <a href="#" class="nav-item">Item</a>
          <a href="#" class="nav-item">Item</a>
          <a href="#" class="nav-item">Item</a>
          <a href="#" class="nav-item">Item</a>
        </div>
        <div class="col right">
          <a href="#" class="nav-item">Item</a>
          <a href="#" class="nav-item">Item</a>
          <a href="#" class="nav-item tel">400-6666-666</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pushDown: {
      default: false
    }
  }
};
</script>

<style scoped>
.main-nav {
  background: #fff;
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.logo {
  display: inline-block;
  width: 130px;
  height: 45px;
  background: #fd521d;
  vertical-align: top;
}

.left {
  left: 130px;
  width: 60%;
}

.right {
  width: 40%;
}

.nav-item {
  display: inline-block;
  padding: 10px;
}

.nav-item {
  color: #555;
  text-decoration: none;
}

.tel {
  font-weight: bold;
  color: #fd521d;
}
</style>
