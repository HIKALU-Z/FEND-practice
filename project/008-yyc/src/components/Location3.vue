<template>
  <div>
    <div class="area-list">
      <div class="area" v-if="locationData.state.length">
        <div v-for="state in locationData.state" @click="select(state,'state')" :key="state.name">
          {{state.name}}
        </div>
      </div>
      <div class="area" v-if="locationData.city.length">
        <div v-for="city in locationData.city" :key="city.name">
          {{city.name}}
        </div>
      </div>
      <div class="area" v-if="locationData.region.length">
        <div v-for="region in locationData.region" :key="region.name">
          {{region.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './../assets/js/api.js';
const CHINAID = 1;
// const SICHUAN = 2287;
export default {
  data() {
    return {
      locationData: {
        state: [{ name: '西安' }, { name: '西宁' }, { name: '武汉' }, { name: '上海' }],
        city: [{ name: '西安' }, { name: '西宁' }, { name: '武汉' }, { name: '上海' }],
        region: [{ name: '长安' }, { name: '未央' }, { name: '碑林' }, { name: '韩城' }]
      }
    };
  },
  methods: {
    read(theAreaId, theAreaLeavel) {
      api('location/read', {
        where: {
          and: {
            parent_id: theAreaId
          }
        }
      }).then(r => {
        this.locationData[theAreaLeavel] = r.data;
      });
    },
    select(row, level) {
      let childLevel;
      if (level == 'state') {
        childLevel = 'city';
      }
      this.read(row.id, childLevel);
    }
  },
  mounted() {
    this.read(CHINAID, 'state');
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
