<template>
  <div class="location">
    <div class="search">
      <input type="text" v-model="keyword">
    </div>
    <div class="area-list">
      <!-- {{ locationData }} -->
      <div class="area" v-if="locationData.state.length">
        <div :class="{active:location.id ===current.state,item:true}" v-for="location in locationData.state" @click="select(location,'state')" :key="location.name">
          {{ location.name }}
        </div>
      </div>

      <div class="area" v-if="locationData.city.length">
        <div :class="{active:location.id ===current.city,item:true}" v-for="location in locationData.city" @click="select(location,'city')" :key="location.name">
          {{ location.name }}
        </div>
      </div>

      <div class="area" v-if="locationData.region.length">
        <div :class="{active:location.id ===current.region,item:true}" v-for="location in locationData.region" @click="select(location,'region')" :key="location.name">
          {{ location.name }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from './../assets/js/api.js';
const CHINAID = 1;
export default {
  props: {
    onSelect: {
      default: function() {
        // console.log(1);
        return 1;
      }
    }
  },
  data() {
    return {
      locationData: {
        state: [],
        city: [],
        region: []
      },
      current: {
        state: [{ name: 'china' }],
        city: [{ name: 'china' }],
        region: [{ name: 'china' }]
      },
      parent_id: 1,
      keyword: ''
    };
  },
  methods: {
    /**
     * 列出地址
     * @param parent_id
     * @param type
     * @return {*}
     */
    read(parent_id, type) {
      this.parent_id = parent_id;
      return api('location/read', {
        where: {
          and: {
            parent_id: parent_id
          }
        }
      }).then(r => {
        let data = r.data;
        // console.log(data);
        this.locationData[type] = data;
        return data;
      });
    },
    /**
     * 选择地址
     * @param row
     * @param type
     */
    select(row, type) {
      let child_type;
      this.current[type] = row.id;

      switch (type) {
        case 'state':
          child_type = 'city';
          break;
        case 'city':
          child_type = 'region';
          break;
      }

      // 选中后开始获取其子地址
      this.read_children_and_select(row, child_type);
    },
    /**
     * 获取子地址，如果没有子地址就说明最精确的地址找到了
     * @param parent
     * @param type
     */
    read_children_and_select(parent, type) {
      this.read(parent.id, type).then(data => {
        if (!data.length || parent.type == 'city') {
          // console.log(this.onSelect);
          if (this.onSelect) {
            this.onSelect(parent);
          }
          // this.onSelect(parent);
        }
      });
    },
    resetLocation() {
      this.locationData = {
        state: [],
        city: [],
        region: []
      };
    },
    /**
     * 通过name搜索地址
     */
    search() {
      this.resetLocation();
      if (this.keyword == '') {
        this.read(CHINAID, 'state');
        return;
      }
      api('location/search', {
        or: {
          name: this.keyword
        }
      }).then(r => {
        this.group(r.data);
      });
    },
    /**
     * 将搜索结果分类存放
     * @param list
     */
    group(list) {
      list.forEach(row => {
        let sub = this.locationData[row.type];
        sub.push(row);
      });
    }
  },
  mounted() {
    this.read(CHINAID, 'state');
  },
  watch: {
    keyword() {
      this.search();
    }
  }
};
</script>

<style scoped>
.location {
  /* padding: 20px; */
  margin-top: 20px;
}

.location .search {
  margin: 0 auto;
  max-width: 600px;
}

.location .search input {
  width: 100%;
}

.area-list {
  max-height: 320px;
  overflow: auto;
  margin: 0 auto;
  max-width: 600px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.area-list .area {
  display: inline-block;
  width: 33%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

.area-list .area .item {
  padding: 5px 10px;
}
</style>
