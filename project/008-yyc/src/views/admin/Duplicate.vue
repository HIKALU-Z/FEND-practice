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

            <!-- <form class="search-input" @submit.prevent="search">
              <input type="text" v-model="keyword" placeholder="搜标题/描述" autofocus />
              <button type="submit" hidden>搜</button>
            </form> -->

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
                    <th>title</th>
                    <th>price</th>
                    <th>sell_reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(vehicle, index) in list" :key="index">
                    <td>
                      {{vehicle.title}}
                    </td>
                    <td>
                      {{vehicle.price}}
                    </td>
                    <td>
                      {{vehicle.sell_reason}}
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
                <label for="title">title</label>
                <input name="title" autocomplete="off" type="text" v-model="current.title">
              </div>
              <div class="input-control">
                <label for="price">price</label>
                <input name="price" type="number" v-model="current.price">
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
            <!-- <div class="table-container">
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

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="vehicle in vehicles" :key="vehicle.id">
                    <td>{{vehicle.title}}</td>
                    <td>{{vehicle.price}}</td>
                    <td>{{vehicle.consumed_distance || '-'}}</td>
                    <td>{{vehicle.deadline || '-'}}</td>
                    <td>{{vehicle.condition ? vehicle.condition + '成新' : '-'}}</td>
                    <td>{{vehicle.exchange_times || '-'}}</td>
                    <td>{{vehicle.on_sale || '-'}}</td>
                    <td>
                      <button>remove</button>
                      <button>update</button>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div> -->

            <!-- <div class="tool-bar">
              <button class="btn" @click="showForm = true">创建二手车</button>
            </div>

            <form v-if="showForm" @submit.prevent="save()">
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
            </form> -->

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

// TODO:finish pagination
// DONE:123

<script>
import '../../assets/css/admin.css';
import Nav from '../../components/Nav';
import AdminNav from '../../components/AdminNav';
import api from '../../assets/js/api.js';
export default {
  components: { Nav, AdminNav },
  data() {
    return {
      list: [{ title: 'a brand new car', price: 122 }],
      current: {},
      last_page: 3,
      current_page: 1,
      vehicles: [],
      keyword: '',
      showForm: false,
      page: 1
    };
  },
  methods: {
    read(page = 1) {
      api('vehicle/read', { limit: 3, page: page }).then(r => {
        this.list = r.data;
        this.last_page = r.last_page;
        this.current_page = r.current_page;
      });
    },
    save() {
      let actions = this.current.id ? 'update' : 'create';
      let url = 'vehicle/' + actions;
      api(url, this.current).then(() => {
        this.current = {};
        this.read();
      });
    },
    // save() {
    //   let actions = this.current.id ? 'update' : 'create';
    //   api(`vehicle/${actions}`, this.current).then(r => {
    //     this.current = r;
    //     this.vehicles = r.data;
    //     // console.log(this.vehicles);
    //   });
    // },
    search() {
      api(`vehicle/search`, { limit: 3, or: { title: this.keyword, price: this.keyword } }).then(r => {
        this.list = r.data;
      });
    },
    getCurrentPageData(page) {
      this.current_page = page;
      this.read();
      // api(`vehicle/read`, { limit: 3, page: page }).then(r => {
      //   this.list = r.data;
      // });
    }
    // search() {
    //   let kwd = this.keyword;

    //   let param = {
    //     or: {
    //       title: kwd,
    //       description: kwd
    //     }
    //   };

    //   api('vehicle/search', param).then(r => {
    //     this.vehicles = r.data;
    //   });
    // }
  },
  mounted() {
    this.read();
  }
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
