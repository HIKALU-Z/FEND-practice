window.send = send;

function send(url, method, on_succeed, on_error) {
  method = method || 'get';

  let res;
  let article_list = [{
      id: 1,
      title: 'A',
      content: 'A, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque, doloribus earum id magnam numquam quas quibusdam. Aut, beatae delectus doloribus eum inventore magnam necessitatibus, placeat, qui rerum saepe temporibus!',
    },
    {
      id: 2,
      title: 'B',
      content: 'B, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque, doloribus earum id magnam numquam quas quibusdam. Aut, beatae delectus doloribus eum inventore magnam necessitatibus, placeat, qui rerum saepe temporibus!',
    },
    {
      id: 3,
      title: 'C',
      content: 'C, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque, doloribus earum id magnam numquam quas quibusdam. Aut, beatae delectus doloribus eum inventore magnam necessitatibus, placeat, qui rerum saepe temporibus!',
    },
  ];
  let comment_list = [{
      id: 1,
      content: 'A, Lorem ipsum dolor sit amets doloribus eum inventore magnam necus!',
    },
    {
      id: 2,
      content: 'B, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque, doloribus earum id magnam numquam quas quibusdam. Aut, beatae delectus doloribus eum inventore magnam necessitatibus, placeat, qui rerum saepe temporibus!',
    },
    {
      id: 3,
      content: 'C, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque, doloribus earum id magnam numquam quas quibusdam. Aut, beatae delectus doloribus eum inventore magnam necessitatibus, placeat, qui rerum saepe temporibus!',
    },
  ]

  switch (url) {
    case '/api/article/read': // 获取文章列表
      res = {
        succeed: true,
        data: article_list,
      };
      break;
    case '/api/article/find': // 获取文章详情
      res = {
        succeed: true,
        data: article_list[0]
      };
      break;
    case '/api/article/create': // 获取文章详情
    case '/api/article/update': // 获取文章详情
      res = {
        succeed: true,
        data: {
          id: 1,
          title: '...',
          content: '...'
        },
      };
      break;
    case '/api/article/delete': // 获取文章详情
      res = {
        succeed: true,
        data: {
          id: 1
        },
      };
      break;
    case '/api/comment/read': // 获取文章详情
      res = {
        succeed: true,
        data: comment_list,
      };
      break;
  }

  on_succeed(res);
}
