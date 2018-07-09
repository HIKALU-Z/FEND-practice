<template>
  <div>
    <div class="container" style="padding-top:20px">
      <!-- <Location :count='1'>
      </Location> -->
      <!-- <Location2 :onSelect="getId"></Location2> -->
      <Location :onSelect='getId'></Location>
    </div>

  </div>
</template>

<script>
// import Location from '../components/Location';
// import Location2 from '../components/Location2';
import Location from '../components/Location3';
export default {
  data() {
    return {
      vehicle: {
        name: 'vehicle',
        structure: {
          // 价格
          price: {
            type: 'float',
            nullable: true
          },
          title: {
            // 标题
            type: 'string',
            nullable: true
          },
          publish_reason: {
            // 卖车原因
            type: 'string',
            nullable: true
          },
          consumed_distance: {
            // 当前里程
            type: 'float',
            nullable: true
          },
          local: {
            // 是否当地车牌
            type: 'integer',
            nullable: true
          },
          exchange_times: {
            // 过户次数
            type: 'integer',
            nullable: true
          },
          birth_day: {
            // 初次上牌时间
            type: 'dateTime',
            nullable: true
          },
          deadline: {
            // 预期出售时间
            type: 'dateTime',
            nullable: true
          },
          condition: {
            // 车况
            type: 'float',
            nullable: true,
            positive: true
          },
          description: {
            // 描述
            type: 'text',
            nullable: true
          },
          on_sale: {
            // 是否特价
            type: 'integer',
            nullable: true
          },
          publisher_id: {
            // 发布人
            type: 'integer',
            nullable: true,
            positive: true
          },
          brand_id: {
            // 品牌
            type: 'integer',
            nullable: true,
            positive: true
          },
          model_id: {
            // 型号
            type: 'integer',
            nullable: true,
            positive: true
          },
          design_id: {
            // 车型
            type: 'integer',
            nullable: true,
            positive: true
          },
          location_id: {
            // 所在地
            type: 'integer',
            nullable: true,
            positive: true
          }
        }
      }
    };
  },
  methods: {
    getId(r) {
      // console.log(r.id);
      return r.id;
    }
  },
  components: {
    Location
  }
};
</script>

<style scoped>
</style>
