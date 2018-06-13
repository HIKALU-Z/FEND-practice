new Vue({
  el: '#root',
  data: {
    memoList: [
      {
        title: 'title A',
        content: 'AAAAA'
      },
      {
        title: 'title B',
        content: 'BBBBB'
      },
      {
        title: 'title C',
        content: 'CCCCCC'
      }
    ],
    current: {}
  },
  methods: {
    create() {
      this.current = {};
      this.memoList.push(this.current);
    },
    onMemoClick() {}
  }
});
