const ok = true;
const list = [{
  id: '1',
  content: 'hello',
  desc: 'my name is mu!'
}]
const get = (url, success_hook, fail_hook) => {
  if (ok) {
    console.log(url);
    success_hook(list)
  } else {
    fail_hook()
  }
}

const output = {
  get
}


export default output;