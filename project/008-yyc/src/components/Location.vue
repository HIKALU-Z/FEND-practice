<template>
  <div class="location">
    <div class="search">
      <input type="search" v-model="keyword" placeholder="输入城市名称搜索">
    </div>
    <div class="step-list">
      <div v-if="location.state.length" class="step">
        <div :class="{active: lo.id == current.state, item:true}" @click="select(lo, 'state')" :key="lo.name" v-for="lo in location.state">{{lo.name}}
        </div>
      </div>
      <div v-if="location.city.length" class="step">
        <div :class="{active: lo.id == current.city, item:true}" @click="select(lo, 'city')" :key="lo.name" v-for="lo in location.city">{{lo.name}}
        </div>
      </div>
      <div v-if="location.region.length" class="step">
        <div :class="{active: lo.id == current.region, item:true}" @click="select(lo, 'region')" :key="lo.name" v-for="lo in location.region">{{lo.name}}
        </div>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos praesentium dolores atque laborum nostrum optio, omnis cupiditate et ipsa asperiores facere mollitia iure eos enim? Nisi vitae nobis rem.
    </p>
  </div>
</template>

<script>
/*eslint no-console: 0*/
const CHINA_ID = 1;

import api from '../assets/js/api.js';

export default {
  props: {
    onSelect: {}
  },

  mounted() {
    this.read(CHINA_ID, 'state');
  },

  data() {
    return {
      keyword: '',
      parent_id: null,
      location: {
        state: [],
        city: [],
        region: []
      },
      current: {
        state: null,
        city: null,
        region: null
      }
    };
  },

  methods: {
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

      this.read_and_select(row, child_type);
    },

    reset_location() {
      this.location = {
        state: [],
        city: [],
        region: []
      };
    },

    read_and_select(parent, type) {
      this.read(parent.id, type).then(data => {
        if (!data.length || parent.type == 'city') {
          this.onSelect(parent);
        }
      });
    },
    read(parent_id, type) {
      this.parent_id = parent_id;
      return api('location/read', {
        where: {
          and: { parent_id }
        }
      }).then(r => {
        let data = r.data;
        this.location[type] = data;
        return data;
      });
    },
    search() {
      this.reset_location();
      api('location/search', {
        or: {
          name: this.keyword
        }
      }).then(r => {
        this.sort(r.data);
      });
    },
    sort(list) {
      list.forEach(row => {
        let sub = this.location[row.type];
        console.log('row.type:', row.type);
        sub.push(row);
      });

      console.log('this.location:', this.location);
    }
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
  max-width: 400px;
}

.step-list {
  border: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 0;
}

.location .step {
  line-height: 1.7;
  display: inline-block;
  width: 33.333333333%;
  max-height: 200px;
  overflow: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.location .step:last-child {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.location .item {
  cursor: pointer;
  padding: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.location .item.active {
  background: #fd521d;
  color: #fff;
}
</style>
