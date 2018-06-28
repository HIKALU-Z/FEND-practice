<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      {{item.id}}
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
