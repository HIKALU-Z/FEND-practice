<template>
  <div @mouseleave='showMenu = false'>
    <div class="dropdown">
      <div class="dropdown-title" @mouseenter="showMenu = true">{{selected[displayKey] || '请选择'}}</div>
      <div v-if="showMenu" class="menu">
        <div @click="select(row)" v-for="(row, index) in list" :key="index">
          {{row[displayKey]}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // props: ['displayKey', 'list', 'onSelect'],
  props: {
    displayKey: {
      default: 'name'
    },
    list: {},
    onSelect: {}
  },
  data() {
    return {
      // list: [{ name: 'whh', id: '1' }, { name: 'lbb', id: '2' }],
      showMenu: false,
      selected: {}
    };
  },
  methods: {
    select: function(row) {
      this.selected = row;
      if (this.onSelect) {
        this.onSelect(row);
      }
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: block;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
