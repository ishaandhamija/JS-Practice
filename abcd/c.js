// var p1 = Promise.resolve(3)
// console.log(p1)
// var p2 = new Promise((resolve, reject)=>{
// 	resolve(3)
// })
// console.log(p2)
// console.log(typeof p1)
// console.log(typeof p2)

var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000, 'foo');
});

console.log(promise1)
console.log(typeof promise1)
console.log(promise2)
console.log(typeof promise2)
console.log(promise3)
console.log(typeof promise3)

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
