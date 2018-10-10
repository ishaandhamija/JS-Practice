var p = new Promise((resolve, reject)=>{

})

var r = Promise.resolve(3)
// console.log(r)
// console.log(typeof r)

var q = new Promise((resolve, reject)=>{
	// setTimeout(()=>{
	// 	resolve('ishaan')
	// }, 3000)
	resolve(3)
})
var z = q.then((val)=>{
	// console.log(val)
})

console.log(z)
console.log(typeof z)
