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
            <h2>设计管理</h2>
            <!-- add a search form  -->
            <form class="search-input" @submit.prevent="search">
              <input type="text" placeholder="search" v-model="keyword">
              <button hidden type="submit">search</button>
            </form>

            <!-- add a table display vehicle content -->
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>设计类型</th>
                    <th>操作</th>
                    <!-- <th>密码</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(design, index) in list" :key="index">
                    <td>
                      {{ design.name || '-' }}
                    </td>
                    <td>
                      <button @click="setCurrent(design)">update</button>
                      <button @click="remove(design.id)">remove</button>
                    </td>
                    <!-- <td>123</td> -->
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- add a button to switch the form -->
            <div class="tool-bar">
              <button type="button" @click="showForm = true">open</button>
            </div>

            <!-- add a form to push content totable -->
            <form v-if="showForm" @submit.prevent="save">
              <div class="input-control">
                <label for="name">name</label>
                <input name="name" autocomplete="off" type="text" v-model="current.name">
              </div>
              <div class="input-control">
                <button type="submit">submit</button>
                <button type="button" @click="showForm = false">cancle</button>
              </div>
            </form>

            <!-- add pagnation tool -->
            <div class="pagnation">
              <div class="btn-group">
                <button @click='read(1)'>
                  first
                </button>
                &nbsp;
                <button v-if="Math.abs(current_page-page) < 3" v-for="page in last_page" class="btn-page" @click="read(page)" :key="page">
                  {{ page }}
                </button>
                &nbsp;
                <button @click="read(last_page)">
                  last
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminPage from '../../mixins/admin/Admin';
export default {
  data() {
    return {
      model: 'design',
      searchable: ['name']
    };
  },
  mixins: [AdminPage]
};
</script>

<style scoped>
.table-container {
  max-height: 300px;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.table-container th {
  min-width: 60px;
}

.table-container tbody tr:hover {
  background: rgba(0, 20, 125, 0.2);
}

.table-container button {
  cursor: pointer;
}

.search-input input {
  width: 100%;
  height: 30px !important;
  margin-bottom: 10px;
}
</style>
