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
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="vehicle in list" :key="vehicle.id">
                    <td>{{vehicle.title|| '-'}}</td>
                    <td>{{vehicle.price|| '-'}}</td>
                    <td>{{vehicle.consumed_distance || '-'}}</td>
                    <td>{{vehicle.deadline || '-'}}</td>
                    <td>{{vehicle.condition ? vehicle.condition + '成新' : '-'}}</td>
                    <td>{{vehicle.exchange_times || '-'}}</td>
                    <td>{{vehicle.on_sale || '-'}}</td>
                    <td>
                      <button @click="save">update</button>
                      <button @click="remove(vehicle.id)">remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- add pagination component -->
            <Pagination :totalItem="totalItem" :itemPerpage="5" :onPageClick="onPageClick"></Pagination>

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
                <label>封面地址</label>
                <div style="margin-bottom: 5px;">
                  <div v-for="(p, i) in current.preview" :key="p.url" class="input-group-3">
                    <input type="text" placeholder="部位" v-model="p.name">
                    <input type="url" placeholder="图片地址" v-model="p.url">
                    <button @click="current.preview.splice(i, 1)" type="button">-</button>
                  </div>
                </div>
                <button @click="current.preview.push({})" type="button">+</button>
              </div>
              <div class="input-control">
                <label>过户次数</label>
                <input type="number" v-model="current.exchange_times">
              </div>
              <div class="input-control">
                <label>第一次上牌时间</label>
                <input type="date" v-model="current.birthday">
              </div>
              <div class="input-control">
                <label>预期出售时间</label>
                <input type="date" v-model="current.deadline">
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
                <label>发布人</label>
                <Dropdown :api="'user.username,realname'" displayKey="username" :onSelect="set_publisher_id" />
              </div>
              <div class="input-control">
                <label>品牌名</label>
                <Dropdown :list="brandList" displayKey="name" :onSelect="setBrandId" />
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
import api from '../../assets/js/api.js';
import AdminPage from '../../mixins/admin/Admin';

export default {
  mounted() {
    this.getBrandList();
  },
  data() {
    return {
      searchable: ['title', 'price', 'description'],
      model: 'vehicle',
      current: {
        preview: []
      }
    };
  },
  methods: {
    onPageClick(page) {
      this.read(page);
    },
    getBrandList() {
      api('brand/read').then(r => {
        this.brandList = r.data;
      });
    },
    set_publisher_id(row) {
      this.$set(this.current, 'publisher_id', row.id);
    },
    setBrandId(row) {
      this.$set(this.current, 'brand_id', row.id);
    },
    after_set_current() {
      this.current.preview = this.current.preview || [];
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
