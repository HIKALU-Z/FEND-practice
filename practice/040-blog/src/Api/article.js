import send from './../Util/send'

const read = () => {
  let url = '/api/article/read'
  send.get(url, data=>{
    console.log(data);
  }, ()=>{
    throw "error"
  })
}

const output = {
  read
}

export default read