<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SearchInput :keyvalue="searchParam.keyword" :onSubmit="search"></SearchInput>
          <!-- <h1>Search</h1> -->
          <!-- <Dropdown displayKey="type" :list="vehicleTypeList" :onSelect='dropDownSelect'></Dropdown> -->
        </div>
      </div>

    </div>
    <div class="container">
      <div class="filter-list">
        <div class="filter">
          <div class="col-lg-1 prop">品牌</div>
          <div class="col-lg-10 range">
            <span :class="{active: !searchParam.brand_id}" @click="remove_query('brand_id')">不限</span>
            <span :class="{active:searchParam.brand_id == row.id}" @click="set_query_where('brand_id',row.id)" v-for="row in list.brand" :key="row.id">{{ row.name }}
            </span>
          </div>
          <div class="col-lg-1 right">
            <button>all</button>
          </div>
        </div>
        <div class="filter">
          <div class="col-lg-1 prop">设计</div>
          <div class="col-lg-10 range">
            <span :class="{active: !searchParam.design_id}" @click="remove_query('design_id')">不限</span>
            <span :class="{active:searchParam.design_id == row.id}" @click="set_query_where('design_id',row.id)" v-for="row in list.design" :key="row.id">{{ row.name }}
            </span>
          </div>
          <div class="col-lg-1 right">
            <button>all</button>
          </div>
        </div>
        <div class="filter">
          <div class="col-lg-1 prop">价格</div>
          <div class="col-lg-10 range">
            <span :class="{active:searchParam.price_max==price.max}" v-for="price in priceRange" :key="price.id" @click="set_query_price_range(price.min,price.max)">
              {{ price.name }}
            </span>
          </div>
        </div>
        <div class="filter">
          <div class="col-lg-1 prop">更多</div>
          <div class="col-lg-10 range">
            <div class="row">
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
            </div>
          </div>
        </div>
      </div>
      <div class="filter-list">
        <div class="filter">
          <div class="range">
            <span>默认排序</span>
            <span class="anchor" @click="toggle_sort_by('id')">时间
              <i :class="{fas: true, 'fa-caret-up': is_sort('id', 'up'),
                        'fa-caret-down': is_sort('id', 'down')}"></i>
            </span>
            <span class="anchor" @click="toggle_sort_by('price')">价格
              <i :class="{fas: true, 'fa-caret-up': is_sort('price', 'up'),'fa-caret-down': is_sort('price',
                        'down')}"></i>
            </span>
            <span>车龄 v</span>
            <span>历程 v</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row vehicle-list">
        <!-- <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div> -->
        <div class="col-lg-3" v-for="(vehicle, index) in vehicleList" :key="index">
          <div class="card">
            <div class="thumbnail">
              <img :src="get_main_cover_url(vehicle)">
            </div>
            <div class="detail">
              <div class="title">{{vehicle.title || '-'}}</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">{{vehicle.price || '-'}}万</span>
                <span>首付3.5万</span>
                <router-link :to="'/detail/'+vehicle.id" class="btn btn-primary buy">购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination :totalCount="total" :itemPerPage="limit" :onPageClick="on_page_change" :currentPage="searchParam.page" />
    </div>
  </div>
</template>

<script>
import '../assets/css/vehicle-list.css';
import Nav from '../components/Nav';
import SearchInput from '../components/SearchInput';
import Dropdown from '../components/Dropdown';
import VehicleListVue from '../mixins/VehicleList.vue';
import api from './../assets/js/api.js';
import ReaderVue from '../mixins/Reader.vue';
import { clone } from '../assets/js/helper.js';
import Pagination from '../components/Pagination';

export default {
  mixins: [VehicleListVue, ReaderVue],
  components: {
    Dropdown,
    Nav,
    SearchInput,
    Pagination
  },
  data() {
    return {
      vehicleTypeList: [{ type: 'SUV', id: '1' }, { type: 'MPV', id: '2' }],
      vehicleList: [],
      searchParam: {},
      limit: 3,
      total: 0,
      priceRange: [
        {
          id: 0,
          name: '不限'
        },
        {
          id: 1,
          name: '3 万元',
          min: 0,
          max: 3
        },
        {
          id: 2,
          name: '3-5 万元',
          min: 3,
          max: 5
        },
        {
          id: 3,
          name: '5-10 万元',
          min: 5,
          max: 10
        },
        {
          id: 4,
          name: '10-15 万元',
          min: 10,
          max: 15
        },
        {
          id: 5,
          name: '15-30 万元',
          min: 15,
          max: 30
        }
      ]
    };
  },
  methods: {
    dropDownSelect: function(row) {
      return row;
    },

    set_query_price_range(min, max) {
      let query = this.parse_route_query();
      if (!min && !max) {
        delete query.price_min;
        delete query.price_max;
      } else {
        let condition = {
          price_min: min,
          price_max: max
        };

        query = Object.assign({}, query, condition);
      }

      this.$router.replace({ query });
    },

    remove_query(type) {
      let query = this.parse_route_query();
      delete query[type];
      this.$router.replace({ query });
    },

    set_condition(type, value) {
      let query = clone(this.$route.query);

      switch (type) {
        case 'sort_by':
          query.sort_by = value;
          break;
        case 'page':
          query.page = value;
          break;
      }

      this.$router.replace({ query });
      this.search();
    },

    search() {
      let p = this.searchParam;

      if (p.keyword == undefined) {
        p.keyword = '';
      }

      let brand_query = '',
        design_query = '',
        price_min_query = '',
        price_max_query = '';

      p.brand_id && (brand_query = `and "brand_id" = ${p.brand_id}`);
      p.design_id && (design_query = `and "design_id" = ${p.design_id}`);
      p.price_min && (price_min_query = `and "price" >= ${p.price_min}`);
      p.price_max && (price_max_query = `and "price" <= ${p.price_max}`);

      let query = `where("title" contains "${
        p.keyword
      }" ${brand_query} ${design_query} ${price_min_query} ${price_max_query})`;

      // console.log('query:', query);

      api('vehicle/read', { query: query, sort_by: p.sort_by, limit: this.limit, page: p.page }).then(r => {
        this.vehicleList = r.data;
        this.total = r.total;
      });
    },

    toggle_sort_by(property) {
      let query = this.parse_route_query();

      let sort_prop = query.sort_by[0]; // price
      let direction = query.sort_by[1];

      // 是不是上次排序的属性，如果是，就倒置排序
      if (sort_prop == property) {
        query.sort_by[1] = direction == 'up' ? 'down' : 'up';
      } else {
        // 否则使用指定的属性排序，默认使用降序排序
        query.sort_by[0] = property;
        query.sort_by[1] = 'down';
      }

      query.sort_by = query.sort_by.toString();

      // this.$router.replace({});
      this.$router.replace({ query });
    },

    is_sort(property, direction) {
      let p = this.searchParam;

      if (!p.sort_by) return false;

      return p.sort_by[0] == property && p.sort_by[1] == direction;
    },

    prepare_search_param() {
      let query = this.parse_route_query();
      this.searchParam = query;
    },

    parse_route_query() {
      let query = clone(this.$route.query);

      if (!query.sort_by) query.sort_by = ['id', 'down'];

      if (typeof query.sort_by == 'string') query.sort_by = query.sort_by.split(',');

      return query;
    },

    set_query_where(type, value) {
      let condition = {};
      condition[type] = value;

      let o = this.searchParam;
      let n = Object.assign({}, o, condition);
      this.$router.replace({ query: n });
    },
    on_page_change(page) {
      this.set_condition('page', page);
    }
  },
  watch: {
    '$route.query': {
      deep: true,
      handler() {
        this.prepare_search_param();
        this.search();
      }
    }
  },
  mounted() {
    this.prepare_search_param();
    this.search();
    this.read('brand');
    this.read('design');
    // router.go('/');
    // console.log(router)
  }
};
</script>

<style scoped>
.filter-list {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  /*padding: 5px;*/
}

.filter {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 5px;
  padding-bottom: 5px;
}

.filter:first-child {
  border-top: 0;
}

.filter > * {
  vertical-align: middle;
}

.filter .prop,
.filter .range > * {
  padding: 5px 10px;
  cursor: pointer;
}

.filter .range > * {
  margin-right: 2px;
}

.filter .range > .active {
  background: #fd521d;
  color: #fff;
}

.filter .others button {
  background: transparent;
  border: 0;
}

.filter .others button,
.filter .dropdown {
  padding: 2px 5px;
}


</style>
