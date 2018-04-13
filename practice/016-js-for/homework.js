/* 练习1 */

;(function p1() {
  var array = [1, 2, 3, 4, 5, 6, 213, 7, 8, 9]
  var sum = 0
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    sum = sum + element
  }
  console.log(sum)
})()
console.log('---------------------')
;(function p2() {
  var array = [1, 2, 3, 4, 5, 6, 213, 7, 8, 9]
  var sum = 0
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    sum = sum + element
  }
  console.log(sum)
})()
console.log('---------------------')
;(function p4() {
  var array = []
  for (let index = 0; index < 6; index++) {
    array.push(index + 1)
  }
  console.log(array)
})()
console.log('---------------------')
;(function p5() {
  var array = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3']
  for (let index = 0; index < 6; index++) {
    array.push(index + 1)
  }
  console.log(array)
})()

console.log('---------------------')
;(function p6() {
  var array = [
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

  var result = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (element.salary >= 200) {
      result.push(element)
    }
  }
  console.log(result)
})()

console.log('---------------------')
;(function p7() {
  var array = [
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

  var result = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (!element.name.startsWith('王')) continue
    result.push(element)
  }
  console.log(result)
})()

console.log('---------------------')
;(function p8() {
  var array = [
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

  function search(keyword) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      const playing = array[i].playing
      const name = array[i].name
      if (playing.indexOf(keyword) !== -1) {
        result.push(name)
      }
    }
    console.log(result)
  }

  search('CS') // ["王花花", "李拴蛋"]
  search('吃鸡') // ["李拴蛋", "牛备备"]
  search('红警') // ["王花花", "牛备备"]
  search('守望屁股') // ["李拴蛋"]
})()

console.log('---------------------')
;(function p9() {
  var array = [
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

  var keyword1 = ['CS', '红警']
  var keyword2 = ['吃鸡']
  var keyword3 = ['守望屁股', '吃鸡', 'CS']

  function search(keyword) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      const playing = array[i].playing
      const name = array[i].name
      for (var j = 0; j < keyword.length; j++) {
        if (playing.indexOf(keyword[j])) {
          if (result.length > 0) {
            for (var k = 0; k < result.length; k++) {
              if (result.indexOf(name)) {
                continue
              } else {
                result.push(name)
              }
            }
          }
        }
      }
    }
    console.log(result)
  }

  search(keyword1)
  search(keyword2)
  search(keyword3)
})()
