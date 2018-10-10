var k = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('ishaan')
	}, 3000)
}).then((val)=>{
	console.log('hey ' + val)
	return this
}).then((val)=> {
	console.log(val)
	console.log(typeof val)
}) 

console.log(typeof k)
