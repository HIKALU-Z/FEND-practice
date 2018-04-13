let wtfArr = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3']

const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'
const spread = (arr, queue) => queue.push(...arr)
const wtfBFS = (arr, rule, callback) => {
  const queue = []
  const result = []
  let resIndex = 0

  queue.push(...arr)
  let tmpLenIndex = queue.length - 1

  for (let i = 0; i < queue.length; i += 1) {
    let curr = queue[i]

    if (rule(curr)) {
      callback(curr, queue)
      continue
    }

    if (result[resIndex] !== undefined) {
      // 好烦 每次都要判断 ?
      result[resIndex].push(curr)
    } else {
      result[resIndex] = [curr]
    }

    if (i === tmpLenIndex) {
      resIndex += 1
      tmpLenIndex = queue.length - 1
    }
  }
  return result
}

let tmp = wtfBFS(wtfArr, isArray, spread)
let result = arr => {
  let obj = {}
  for (let i = 0, len = arr.length; i < len; i += 1) {
    obj['第' + (i + 1) + '级: '] = arr[i].join(', ')
  }
  return JSON.stringify(obj, null, 2)
}

console.log(result(tmp))

roster = [
  {
    name: '王花花',
    salary: 100
  },
  {
    name: '李拴蛋',
    salary: 200
  },
  {
    name: '牛备备',
    salary: 300
  }
]

result = []

for (let i = 0, len = roster.length; i < len; i += 1) {
  let person = roster[i]
  let salary = person.salary
  if (salary > 100) {
    result.push(person.name)
  }
}

console.log(result)

result = []
roster = [
  {
    name: '王花花'
  },
  {
    name: '王拴蛋'
  },
  {
    name: '牛备备'
  }
]

for (let i = 0, len = roster.length; i < len; i += 1) {
  let person = roster[i]
  let firstName = person.name.split('')[0]

  if (firstName === '王') {
    result.push(person.name)
  }
}

console.log(result)

// 完成一个搜索函数
roster = [
  {
    name: '王花花',
    playing: ['CS', '红警']
  },
  {
    name: '李拴蛋',
    playing: ['守望屁股', '吃鸡', 'CS']
  },
  {
    name: '牛备备',
    playing: ['红警', '吃鸡']
  }
]

/*
  *  array [
  *    {                              {
  *       tag: string       ------->    item: tag1, tag2, etc..
  *       listKey: [item...]          }
  *    }
  *  ]
  * */
const initList = (arr, tag, listKey) => {
  const rList = {}

  for (let i = 0, len = arr.length; i < len; i += 1) {
    let key = arr[i],
      itemList = key[listKey]

    itemList.forEach(item => {
      if (rList[item] === undefined) {
        rList[item] = [key[tag]]
      } else {
        rList[item].push(key[tag])
      }
    })
  }
  return rList
}

let gameList = initList(roster, 'name', 'playing')
let search = (name, list = gameList) => list[name]

console.log(search('CS')) // ["王花花", "李拴蛋"]
console.log(search('吃鸡')) // ["李拴蛋", "牛备备"]
console.log(search('红警')) // ["王花花", "牛备备"]
console.log(search('守望屁股')) // ["李拴蛋"]

roster = [
  {
    name: '王花花',
    playing: ['CS', '红警']
  },
  {
    name: '李拴蛋',
    playing: ['守望屁股', '吃鸡', 'CS']
  },
  {
    name: '牛备备',
    playing: ['红警', '吃鸡']
  },
  {
    name: '木哈哈',
    playing: ['红警', 'CS', '吃鸡']
  }
]

const intersection = (arr1, arr2) => arr1.filter(i => arr2.indexOf(i) !== -1)

gameList = initList(roster, 'name', 'playing')
search = (searchList, list = gameList) => {
  if (searchList.length !== 0) {
    let base = gameList[searchList[0]]
    let playerList = []

    for (let i = 1, len = searchList.length; i < len; i += 1) {
      let players = gameList[searchList[i]]
      playerList.push(players)
    }

    return playerList.reduce((p, c) => intersection(p, c), base)
  }
}

console.log(search(['CS', '红警'])) // ["王花花", "木哈哈"]
console.log(search(['吃鸡'])) // ["李拴蛋", "牛备备", "木哈哈"]
console.log(search(['守望屁股', '吃鸡', 'CS'])) // ["李拴蛋"]
