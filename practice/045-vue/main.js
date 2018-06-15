let root = new Vue({
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
      let id = this.memoList[index].id
      // console.log(id);
      // return ;
      // console.log(current);
      // return ;
      let data = {
        app_key: 'f04095e1231b2fa3edcd1c026e67f6f6da7f9fd471aa31ee6b87e4374a6da969',
        timestamp: (new Date).getTime()
      }
      data.signature = http.sign(data.app_key, data.timestamp)
      data.id = id
      http.send('http://mock.biaoyansu.com/api/memoList/delete', data, (res) => {
        // this.memoList = res.data;
        console.log(res);
        if (res.succeed) {
          this.memoList.splice(index, 1)
        }
      })
    },
    submit(obj) {
      console.log(obj);
      let status = '';
      let data = {};
      if (obj.id) {
        status = 'update';
        data = {
          app_key: 'f04095e1231b2fa3edcd1c026e67f6f6da7f9fd471aa31ee6b87e4374a6da969',
          timestamp: (new Date).getTime(),
          id: obj.id,
          title: obj.title,
          content: obj.content
        }
      } else {
        status = 'create';
        data = {
          app_key: 'f04095e1231b2fa3edcd1c026e67f6f6da7f9fd471aa31ee6b87e4374a6da969',
          timestamp: (new Date).getTime(),
          title: obj.title,
          content: obj.content
        }
      }

      data.signature = http.sign(data.app_key, data.timestamp)
      let url = 'http://mock.biaoyansu.com/api/memoList/' + status

      // let data = {
      //   app_key: 'f04095e1231b2fa3edcd1c026e67f6f6da7f9fd471aa31ee6b87e4374a6da969',
      //   timestamp: (new Date).getTime(),
      //   title: obj.title,
      //   content: obj.content
      // }
      http.send(url, data, (res) => {
        console.log(res.data);
        // console.log(this.current);
        this.current = res.data;

      })
      // memoList.push(obj)
    },
    // sync_to(memoList) {
    //   localStorage.setItem('memoList', JSON.stringify(memoList));
    // },
    // sync_from() {
    //   this.memoList = JSON.parse(localStorage.getItem('memoList')) || [{
    //       title: 'title A',
    //       content: 'aaaa',
    //     },
    //     {
    //       title: 'title B',
    //       content: 'bbbb',
    //     },
    //     {
    //       title: 'title C',
    //       content: 'cccc',
    //     },
    //   ];
    // }
  },
  // watch: {
  //   memoList: {
  //     deep: true,
  //     handler: function (n) {
  //       this.sync_to(n);
  //     },
  //   },
  // },
  created: function () {
    let data = {
      app_key: 'f04095e1231b2fa3edcd1c026e67f6f6da7f9fd471aa31ee6b87e4374a6da969',
      timestamp: (new Date).getTime()
    }
    data.signature = http.sign(data.app_key, data.timestamp)
    http.send('http://mock.biaoyansu.com/api/memoList/read', data, (res) => {
      this.memoList = res.data;
      // console.log(res);
    })
  }
});