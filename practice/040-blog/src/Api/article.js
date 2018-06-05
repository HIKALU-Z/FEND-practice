import send from './../Util/send'

const read = (success_hook,fail_hook) => {
  let url = '/api/article/read'
  send.get(url,success_hook,fail_hook)
}

const output = {
  read
}

export default output