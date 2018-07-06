  <template>
  <div>
    <div class="pagnation">
      <div class="btn-group">
        <!--  <button @click='read(1)'>
          first
        </button>
        &nbsp; -->
        <!-- {{ totalPage }} -->

        <button @click="onBtnClick(page)" v-if="Math.abs(currentPage-page)<3" v-for="page in totalPage" :key="page">
          {{page}}
        </button>
        <!--  <button v-if="Math.abs(current_page-page) < 3" v-for="page in last_page" class="btn-page" @click="read(page)" :key="page">
          {{ page }}
        </button> -->
        <!--   &nbsp;
        <button @click="read(last_page)">
          last
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import api from '../../assets/js/api';
export default {
  props: {
    totalItem: {
      default: function() {
        return 10;
      }
    },
    itemPerPage: {
      default: function() {
        return 5;
      }
    },
    onPageClick: {
      default: function() {
        return function() {
          return 5;
        };
      }
    }
  },
  data() {
    return {
      // totalPage: 10,
      currentPage: 1
    };
  },
  methods: {
    onBtnClick(page) {
      if (this.onPageClick) {
        this.onPageClick(page);
      }
      this.currentPage = page;
      // this.read(page);
    },
    read() {
      return 1;
    }
  },
  computed: {
    totalPage() {
      if (!this.totalItem || !this.itemPerPage) {
        return 0;
      }
      return Math.ceil(this.totalItem / this.itemPerPage);
    }
  }
};
</script>

<style scoped>
.pagnation {
  text-align: center;
}
</style>
