<template>
  <div class="report-panel">
    <div class="title">{{title || '检测报告'}}</div>
    <div>
      <div v-for="(ok, key) in report" :key="key" v-if="(conf = reportStructure[key]) && conf.cat == cat" :class="'col-lg-4 report-item ' + ( !ok ? 'muted' : '')">
        <span v-if="ok" class="fa fa-check"></span>
        <span v-else class="fa fa-minus"></span> {{conf.display_name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['reportStructure', 'report', 'title', 'cat']
};
</script>

<style scoped>
.report-panel {
  padding: 0;
  border: 1px solid mediumseagreen;
}

.report-item {
  padding: 10px;
  /*border-bottom: 1px solid #ccc;*/
  color: mediumseagreen;
  /*font-size: .75rem;*/
}

.report-item.muted {
  color: #aaa;
}

.title {
  background: mediumseagreen;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
