<template>
  <div>
    <Nav :push-down="true"></Nav>
    <div class="container row">
      <SideNav class="col-lg-3"></SideNav>
      <div class="col-lg-9 content">
        <div class="row">
          <div class="col-lg-3 left">
            <h1>基础信息</h1>
          </div>
          <div class="col-lg-9 tool-bar right">
            <button @click="editMode=true">修改</button>
          </div>
        </div>

        <form v-if="editMode" class="col-lg-6 editor-form">
          <div class="input-control">
            <label>昵称</label>
            <input type="text">
          </div>
          <div class="input-control">
            <label>真实姓名</label>
            <input type="text">
          </div>
          <div class="input-control">
            <button class="btn-primary" type="submit">提交</button>
            <button @click="editMode=false" type="button">取消</button>
          </div>
        </form>
        <div v-else>
          <div class="row prop-item">
            <div class="col-lg-3 key">昵称</div>
            <div class="col-lg-9 value">yo</div>
          </div>
          <div class="row prop-item">
            <div class="col-lg-3 key">真实姓名</div>
            <div class="col-lg-9 value">王花花</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/auth.css';
import SideNav from '../../components/SideNav';
import Nav from '../../components/Nav';
export default {
  components: {
    SideNav,
    Nav
  },
  data() {
    return {
      editMode: false
    };
  }
};
</script>

<style scoped>
.content {
  background: white;
  padding: 15px;
}
.tool-bar button {
  padding: 5px;
  background-color: #f2f2f2;
  /* border: 1px solid rgba(0, 0, 0, 0.7); */
  cursor: pointer;
}
.prop-item {
  padding-top: 5px;
  padding-bottom: 5px;
}

.prop-item .key {
  opacity: 0.6;
}
.editor-form .input-control {
  margin-bottom: 10px;
}
.editor-form .input-control button {
  padding: 5px;
  display: inline-block;
  vertical-align: top;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
}
.editor-form .input-control label {
  display: inline-block;
  width: 30%;
}
</style>
