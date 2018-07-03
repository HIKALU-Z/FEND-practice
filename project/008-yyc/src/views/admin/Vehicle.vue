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
            <h2>车辆管理</h2>

            <form class="search-input" @submit.prevent="search">
              <input type="text" v-model="keyword" placeholder="搜标题/描述" autofocus />
              <button type="submit" hidden>搜</button>
            </form>

            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>标题</th>
                    <th>价格</th>
                    <th>里程</th>
                    <th>预期出售时间</th>
                    <th>车况</th>
                    <th>过户次数</th>
                    <th>特价</th>
                    <th>操作</th>
                    <!-- <th>第一次上牌时间</th>
                    <th>预期出售时间</th>
                    <th>车况</th>
                    <th>描述</th>
                    <th>促销</th>
                    <th>本地车牌</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="vehicle in list" :key="vehicle.id">
                    <td>{{vehicle.title}}</td>
                    <td>{{vehicle.price}}</td>
                    <td>{{vehicle.consumed_distance || '-'}}</td>
                    <td>{{vehicle.deadline || '-'}}</td>
                    <td>{{vehicle.condition ? vehicle.condition + '成新' : '-'}}</td>
                    <td>{{vehicle.exchange_times || '-'}}</td>
                    <td>{{vehicle.on_sale || '-'}}</td>
                    <td>
                      <button @click="save">update</button>
                      <button @click="remove(vehicle.id)">remove</button>
                    </td>
                    <!-- <td>{{vehicle.birthday}}</td>
                    <td>{{vehicle.deadline}}</td>
                    <td>{{vehicle.condition}}</td>
                    <td>{{vehicle.description}}</td>
                    <td>{{vehicle.on_sale}}</td>
                    <td>{{vehicle.local}}</td> -->
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- add pagination component -->
            <Pagination :totalItem="100" :itemPerpage="5" :onPageClick="onPageClick"></Pagination>

            <div class="tool-bar">
              <button class="btn" @click="showForm = true">创建二手车</button>
            </div>

            <form class="data-form" v-if="showForm" @submit.prevent="save">
              <h2>vehicle-form</h2>
              <div class="input-control">
                <label>标题</label>
                <input type="text" v-model="current.title">
              </div>
              <div class="input-control">
                <label>价格</label>
                <input type="number" v-model="current.price">
              </div>
              <div class="input-control">
                <label>卖车原因</label>
                <input type="text" v-model="current.publish_reason">
              </div>
              <div class="input-control">
                <label>当前里程</label>
                <input type="number" v-model="current.consumed_distance">
              </div>
              <div class="input-control">
                <label>过户次数</label>
                <input type="number" v-model="current.exchange_times">
              </div>
              <div class="input-control">
                <label>第一次上牌时间</label>
                <input type="datetime-local" v-model="current.birthday">
              </div>
              <div class="input-control">
                <label>预期出售时间</label>
                <input type="datetime-local" v-model="current.deadline">
              </div>
              <div class="input-control">
                <label>车况</label>
                <input type="number" v-model="current.condition">
              </div>
              <div class="input-control">
                <label>描述</label>
                <textarea v-model="current.description"></textarea>
              </div>
              <div class="input-control">
                <label class="dib">促销
                  <input type="checkbox" v-model="current.on_sale">
                </label>
                <label class="dib">本地车牌
                  <input type="checkbox" v-model="current.local">
                </label>
              </div>
              <div class="input-control">
                <button class="btn btn-primary" type="submit">提交</button>
                <button class="btn" @click="showForm=false" type="button">取消</button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

// TODO:finish pagination

<script>
// import Nav from '../../components/Nav';
// import AdminNav from '../../components/AdminNav';
// import Pagnation from '../../components/Pagnation';
import api from '../../assets/js/api.js';
// export default {
//   components: { Nav, AdminNav, Pagnation },
//   data() {
//     return {
//       current: {},
//       vehicles: [],
//       keyword: '',
//       showForm: false,
//       page: 1
//     };
//   },
//   methods: {
//     read() {
//       api('vehicle/read', { limit: 5, page: this.page }).then(r => {
//         // console.log(r.data);
//         this.vehicles = r.data;
//       });
//     },
//     save() {
//       let actions = this.current.id ? 'update' : 'create';
//       api(`vehicle/${actions}`, this.current).then(r => {
//         this.current = r;
//         this.vehicles = r.data;
//         // console.log(this.vehicles);
//       });
//     },
//     search() {
//       let kwd = this.keyword;

//       let param = {
//         or: {
//           title: kwd,
//           description: kwd
//         }
//       };

//       api('vehicle/search', param).then(r => {
//         this.vehicles = r.data;
//       });
//     }
//   },
//   created() {
//     this.read();
//   }
// };
// import '../../css/admin.css';
import AdminPage from '../../mixins/admin/Admin';

export default {
  data() {
    return {
      searchable: ['title', 'price', 'description'],
      model: 'vehicle'
    };
  },
  methods: {
    onPageClick(page) {
      api(`${this.model}/read`, { page }).then(r => {
        // console.log(r);
        return r;
      });
    }
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
