<template>
  <div>
    <Nav></Nav>
    <div class="slider">
      <img src="../assets/home/slider1.webp">
    </div>
    <div class="query-area">
      <div class="container">
        <div class="col-lg-8">
          <div class="col-lg-3 huge-text">买</div>
          <div class="col-lg-9">
            <div>
              <span class="tag">大众</span>
              <span class="tag">别克</span>
              <span class="tag">雪佛兰</span>
              <span class="tag">福特</span>
              <span class="tag">五菱</span>
              <span class="tag">大众</span>
              <span class="tag">别克</span>
              <span class="tag">雪佛兰</span>
              <span class="tag">福特</span>
              <span class="tag">五菱</span>
            </div>
            <div>
              <span class="tag">3万以下</span>
              <span class="tag">10万以下</span>
              <span class="tag">20万以下</span>
              <span class="tag">20万以下</span>
            </div>
            <div>
              <span class="tag">大众</span>
              <span class="tag">别克</span>
              <span class="tag">雪佛兰</span>
              <span class="tag">福特</span>
              <span class="tag">五菱</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="col-lg-3 huge-text">卖</div>
          <div class="col-lg-9 right">
            <a style="margin-top: 15px; display: inline-block;" class="btn btn-primary btn-fat">极速卖车</a>
          </div>
        </div>
        <SearchInput></SearchInput>
      </div>
    </div>
    <div class="guarantee">
      <div class="row container">
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="vehicle-nav">
        <div class="container">
          <div @click="read_main('on_sale')" class="item">特价好车</div>
          <div @click="read_main('under_5')" class="item">5万以下</div>
          <div @click="read_main('between_5_10')" class="item">5-10万</div>
          <div @click="read_main('suv')" class="item">超值SUV</div>
          <div @click="read_main('urgent')" class="item">急售降价车</div>
          <router-link to="/search_result" class="item">更多</router-link>
        </div>
      </div>

      <div class="container">
        <div class="vehicle-list row">
          <div v-for="row in mainList" :key="row.id" class="col-lg-3">
            <div class="card">
              <div class="thumbnail">
                <img :src="get_main_cover_url(row)">
              </div>
              <div class="detail">
                <div class="title">{{row.title}}</div>
                <div class="desc">2015年02月 / 3.07万公里</div>
                <div class="others">
                  <span class="price">{{row.price}}</span>
                  <span>首付3.5万</span>
                  <a class="btn btn-primary buy">购买</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="footer">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur beatae debitis deleniti doloribus, earum esse excepturi fugit impedit ipsum maxime, nulla optio porro quam quibusdam, sint tempora unde vel?
    </div>
  </div>
</template>

<script>
import '../assets/css/vehicle-list.css';
import Nav from '../components/Nav';
import SearchInput from '../components/SearchInput';
import api from '../assets/js/api.js';
import VehicleListVue from '../mixins/VehicleList.vue';
export default {
  components: {
    Nav,
    SearchInput
  },
  mixnins: [VehicleListVue],
  mounted() {
    this.read_main('on_sale');
    this.find_design('suv');
    this.read('brand');
    this.read('design');
  },
  data() {
    return {
      mainList: [],
      designList: [],
      brandList: [],
      design: {}
    };
  },
  methods: {
    read(model) {
      api(model + '/read', { key_by: 'name' }).then(r => {
        this[model + 'List'] = r.data;
      });
    },
    read_main(type) {
      let condition = {};

      switch (type) {
        case 'on_sale':
          condition = {
            where: {
              and: {
                on_sale: true
              }
            }
          };
          break;
        case 'under_5':
          condition = {
            where: {
              and: [['price', '<', 5]]
            }
          };
          break;
        case 'between_5_10':
          condition = {
            where: {
              and: [['price', '>', 5], ['price', '<', 10]]
            }
          };
          break;
        case 'suv':
          condition = {
            where: {
              and: {
                design_id: this.design.suv.id
              }
            }
          };
          break;
        case 'urgent':
          var date = new Date();
          date.setDate(date.getDate() + 3);
          date = date.toISOString().split('T')[0];
          condition = { query: `where("deadline" <= "${date}")` };
          break;
      }

      api('vehicle/read', condition).then(r => {
        this['mainList'] = r.data;
      });
    },
    find_design(name) {
      api('design/search', { or: { name: name } }).then(r => {
        this.design[name] = r.data[0];
      });
    }
  }
};
</script>

<style scoped>
.slider {
  height: 350px;
}

.query-area {
  padding: 15px;
  background: #fff;
}

.tag {
  display: inline-block;
  font-size: 0.7rem;
  padding: 5px;
  cursor: pointer;
}

.huge-text {
  position: relative;
  top: 5px;
  left: 20px;
  color: #fd521d;
}

.guarantee .col-lg-3 {
  padding: 20px;
}

.guarantee .card {
  padding: 15px;
  background: #fff;
}

.guarantee .title {
  margin-bottom: 10px;
}

.guarantee .desc {
  font-size: 0.7rem;
  color: #999;
}

.vehicle-nav .item {
  display: inline-block;
  width: 16.66666666666%;
  text-align: center;
  background: #fff;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left-width: 0;
}

.vehicle-nav .item:first-child {
  border-left-width: 1px;
}
</style>
