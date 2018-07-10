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
            <h2>车系管理</h2>
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
                    <th>车系名</th>
                    <th>品牌名</th>
                    <th>设计风格</th>
                    <th>操作</th>
                    <!-- <th>密码</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(model, index) in list" :key="index">
                    <td>
                      {{model.name}}
                    </td>
                    <td>
                      {{model.brand_id}}
                    </td>
                    <td>
                      {{model.design_id}}
                    </td>
                    <td>
                      <button @click="setCurrent(model)">editor</button>
                      <button @click="remove(model.id)">remove</button>
                    </td>
                    <!-- <td>123</td> -->
                  </tr>
                </tbody>
              </table>
            </div>

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
                <label type="submit">brandList</label>
                <Dropdown :list="brandList" :onSelect="setBrandId"></Dropdown>
              </div>
              <div class="input-control">
                <label type="submit">designList</label>
                <Dropdown :list="designList" :onSelect="setDesignId"></Dropdown>
              </div>
              <div class="input-control">
                <button type="submit">submit</button>
                <button type="button" @click="showForm = false">cancle</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminPage from '../../mixins/admin/Admin';
import api from '../../assets/js/api.js';
export default {
  data() {
    return {
      model: 'model',
      searchable: ['name', 'design_id', 'brand_id'],
      brandList: [],
      designList: []
    };
  },
  methods: {
    readBrandList() {
      api('brand/read').then(r => {
        // console.log(r.data);
        this.brandList = r.data;
      });
    },
    readDesignList() {
      api('design/read').then(r => {
        // console.log(r.data);
        this.designList = r.data;
      });
    },
    setBrandId(row) {
      this.$set(this.current, 'brand_id', row.id);
    },
    setDesignId(row) {
      this.$set(this.current, 'design_id', row.id);
    }
  },
  mounted() {
    this.readBrandList();
    this.readDesignList();
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
