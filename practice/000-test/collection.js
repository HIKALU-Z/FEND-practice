function isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}



function get_integer_interval(number_a, number_b) {
    let result = [];
    if (number_a < number_b) {
        for (var i = number_a; i <= number_b; i++) {
            result.push(i);
        }
    } else if (number_a > number_b) {
        for (var i = number_a; i >= number_b; i--) {
            result.push(i);
        }
    } else if (number_a == number_b) {
        result.push(number_a);
    }
    return result;
}
let a=5,b=5;
var r = get_integer_interval(a,b)
console.log(r);