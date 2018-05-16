/**
 * 工厂函数
 * @param {String} name
 * @param {*} age
 */
function makeUser(name, age) {
  return {
    name: name,
    age: age
  }
}
let user1 = makeUser('lsd', 17)
let user2 = makeUser('whh', 18)

console.log(user1, user2);

/**
 * Xxx 构造函数
 */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let user3 = new User('whh', 18);
let user4 = new User('lss', 28)

console.log(user3, user4);