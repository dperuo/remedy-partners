// 1. Use "each" lambda-style function instead of "for" statement:

var sum = 0,
    arr = [ 41, 12, 32, 344, 15 ];

(function(array) {
  array.forEach(function(value, index, array) {
    sum += array[index];
  })
})(arr)

console.log(sum); // 444
