<template>
  <div class="location">
    <Location :count="count+1" v-if="count<3">
    </Location>
    <div>
      <h2>{{ condition[count] }}</h2>
      <div class="location-item" v-for="item in locationData[condition[count]]" :key="item" @click="onClick(count)">
        {{ item.name }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      locationData: {
        state: [{ name: 'China' }],
        city: [{ name: 'Chengdu' }],
        county: [{ name: 'China' }]
      },
      condition: {
        1: 'county',
        2: 'city',
        3: 'state'
      }
    };
  },
  methods: {
    onClick() {
      console.log(this.condition[this.count]);
    }
  }
};
</script>

<style scoped>
.location {
  border-bottom: 1px solid teal;
}
.location-item {
  display: block;
  padding: 5px 10px;
}
</style>
