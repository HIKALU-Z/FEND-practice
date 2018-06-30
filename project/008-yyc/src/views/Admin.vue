<template>
  <div>
    <Nav :push-down="true"></Nav>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <AdminNav></AdminNav>
        </div>
        <div class="col-lg-9">
          <div class="content card">
            <h2>用户管理</h2>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>用户名</th>
                    <th>手机号</th>
                    <th>邮箱</th>
                    <th>近期卖车</th>
                    <th>近期买车</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>whh</td>
                    <td>18399998888</td>
                    <td>whh@yo.com</td>
                    <td>是</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>lsd</td>
                    <td>18399998888</td>
                    <td>lsd@yo.com</td>
                    <td>是</td>
                    <td>否</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav';
import AdminNav from '../components/AdminNav';
export default {
  components: { Nav, AdminNav }
};
</script>

<style scoped>
.table-container {
  overflow: auto;
}
</style>
