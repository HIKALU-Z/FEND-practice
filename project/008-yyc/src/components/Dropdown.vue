

<template>
  <div @mouseleave='showMenu = false'>
    <div class="dropdown">
      <input @keyup="showMenu=true" @focus="showMenu=true" v-model="keyword" placeholder="请选择" type="text">
      <!-- <div class="dropdown-title" @mouseenter="showMenu = true">{{selected[displayKey] || '请选择'}}</div> -->
      <div v-if="showMenu" class="menu">
        <div class="menu-item" @click="select(row)" v-for="row in result" :key="row.name">
          {{row[displayKey]}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from '../assets/js/api.js';
export default {
  props: {
    api: {}, // {string|object} 如果是异步搜索，就要传入接口配置，不然组件不知道怎么搜
    list: {
      // {Array} 如果不需要异步搜索，就需要传入静态数据，通常是数组：[{name: whh, id: 1}, ...]
      default() {
        return [];
      }
    },
    default: {}, // {mixed} 默认选中项的主键（通常是id）
    onSelect: {}, // {Function} 当选中了某一项如何通知父级组件
    primaryKey: {
      // {string} 用于定位每一项的主键是什么
      default: 'id'
    },
    displayKey: {
      // {string} 每一项在菜单中显示哪个属性，默认为name
      default: 'name'
    }
  },
  data() {
    return {
      // list: [{ name: 'whh', id: '1' }, { name: 'lbb', id: '2' }],
      showMenu: false,
      selected: {},
      keyword: '',
      result: []
    };
  },
  methods: {
    /**
     * 动态获取数据
     */
    select: function(row) {
      this.showMenu = false;
      this.selected = row;
      this.keyword = row[this.displayKey];
      if (this.onSelect) {
        this.onSelect(row);
      }
    },
    /**
     *
     * 过滤静态数据（同步）
     * 相当于静态数据的search
     */
    filter() {
      this.result = Object.assign([], this.list);
      this.result = this.result.filter(row => {
        return row[this.displayKey].indexOf(this.keyword) !== -1;
      });
    },
    /**
     * 设置默认选中项
     */
    set_default() {
      let key = this.default;
      if (!key) {
        this.reset();
        return;
      }

      let def = this.list.find(row => {
        return row[this.primaryKey] == key;
      });
      this.select(def);
    },
    /**
     * 重置组件
     */
    reset() {
      this.keyword = '';
      this.selected = {};
    },
    /**
     * 解析props.api为更好处理的对象类型
     * @return {object}
     */
    parse_api() {
      let api_prop = this.api;

      if (typeof api_prop != 'string') return Object.assign({}, api);

      api_prop = api_prop.split('.');
      let model = api_prop[0];
      let property = api_prop[1];
      property = property.split(',');

      return {
        model,
        property
      };
    },
    /**
     * 搜索（异步）
     * 通过api获取动态数据
     */
    search() {
      let condition = {};

      let property = this.api_conf.property;

      if (!property) return;

      property.forEach(prop => {
        condition[prop] = this.keyword;
      });

      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        api(`${this.api_conf.model}/search`, { or: condition }).then(r => {
          this.result = r.data;
        });
      }, 300);
    }
  },
  mounted() {
    this.set_default(); // 如果传了props.default，就应该默认选中那一项
    this.api_conf = this.parse_api(); // 如果props.api是字符串，就应该将其解析为更好处理的对象类型
    let list = this.list;
    list && (this.result = Object.assign([], this.list)); // 如果传了静态数据，就应该将静态数据拷一份，否则就会导致越搜索越少
  },
  watch: {
    /**
     * 当关键词改变时，如果是动态数据就搜索，否则就过滤已有的静态数据
     */
    keyword() {
      if (this.api) this.search();
      else this.filter();
    },
    /**
     * 设置默认选中项
     */
    default() {
      this.set_default();
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: block;
  background: #fff;
  /*
  border: 1px solid rgba(0, 0, 0, 0.1); */
}

.dropdown input {
  width: 100%;
}

.dropdown .dropdown-title {
  padding: 2px 5px;
}

.selected,
.menu > * {
  display: block;
  padding: 2px 5px;
}

.menu {
  background: #fff;
  z-index: 1;
  width: 100%;
  position: absolute;
}
</style>
