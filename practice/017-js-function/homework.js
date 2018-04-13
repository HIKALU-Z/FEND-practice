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
