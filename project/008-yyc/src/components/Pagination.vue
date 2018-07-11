  <template>
  <div>
    <div class="pagnation">
      <div class="btn-group">
        <!--  <button @click='read(1)'>
          first
        </button>
        &nbsp; -->
        <!-- {{ totalPage }} -->

        <button @click="onBtnClick(page)" :class="{active: current_page == page}" v-if="Math.abs(current_page-page)<3" v-for="page in totalPage" :key="page">
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
    },
    currentPage: {
      default: 1
    }
  },

  mounted() {
    this.current_page = this.currentPage;
  },

  data() {
    return {
      // totalPage: 10,
      current_page: 1
    };
  },
  methods: {
    onBtnClick(page) {
      if (this.onPageClick) {
        this.onPageClick(page);
      }
      this.current_page = page;
    }
    // read() {
    //   return 1;
    // }
  },
  computed: {
    totalPage() {
      if (!this.totalItem || !this.itemPerPage) {
        return 0;
      }
      // console.log(this.totalItem,this.itemPerPage)
      return Math.ceil(this.totalItem / this.itemPerPage);
    }
  },
  watch: {
    currentPage(n) {
      this.current_page = n;
    }
  }
};
</script>

<style scoped>
.pagnation {
  text-align: center;
}

.pagnation button {
  outline: none;
  padding: 5px 10px;
  background: #ffffff;
  border: none;
  border-right: 1px solid rgba(56, 117, 197, 0.3);
}
.pagnation button:last-child {
  border-right: 0;
}

.pagnation .active {
  background: rgba(56, 117, 197, 0.3);
}
</style>
