new Vue({
  el: '#root',
  data: {
    memoList: [],
    current: null
  },
  methods: {
    create() {
      this.current = {
        title: '新增的一条备忘'
      };
      this.memoList.push(this.current);
    },
    update() {

    },
    remove(index) {
      this.memoList.splice(index, 1)
    },
    sync_to(memoList) {
      localStorage.setItem('memoList', JSON.stringify(memoList));
    },
    sync_from() {
      this.memoList = JSON.parse(localStorage.getItem('memoList')) || [{
          title: 'title A',
          content: 'aaaa',
        },
        {
          title: 'title B',
          content: 'bbbb',
        },
        {
          title: 'title C',
          content: 'cccc',
        },
      ];
    }
  },
  watch: {
    memoList: {
      deep: true,
      handler: function (n) {
        this.sync_to(n);
      },
    },
  },
  created: function () {
    this.sync_from();
  },
});