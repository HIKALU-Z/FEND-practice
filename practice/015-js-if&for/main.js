newFunction()

function newFunction() {
  var ageElement = document.querySelector('#age')
  var nameElement = document.querySelector('#name')
  var phoneElement = document.querySelector('#phone')

  ageElement.addEventListener('blur', function () {
    var age = ageElement.value
    age = parseInt(age)
    if (age.isNaN ==false) {
      alert('你输入的不是数字')
    } else if (!age && age !== 0) {
      console.log('age不能为空')
    } else {
      if (age < 1) {
        console.log('你逗我呢')
      } else if (age == 18) {
        console.log('刚成年')
      } else if (age > 18 && age < 40) {
        console.log('青年')
      } else {
        console.log('yo')
      }
      alert('你输入的年龄为' + age)
    }
  })

  nameElement.addEventListener('blur', function () {
    var name = nameElement.value.trim()
    if (!name) {
      console.log('无名氏，请输入姓名')
    } else {
      console.log(name + '，雷猴啊')
    }
  })

  phoneElement.addEventListener('blur', function () {
    var phone = phoneElement.value.trim()
    if (!phone) {
      console.log('号码为必填项');
    } else if (!(/^1(35|89|51)\d{8}$/.test(phone))) {
      console.log('号码格式有误');
    } else {
      console.log('yo');
    }
  })
}