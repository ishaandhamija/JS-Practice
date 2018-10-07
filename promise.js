function f1 () {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('A')
			resolve()
			// reject(new Error('error aaya bhai'))
		}, 3000)
	})
	// .then(function() {
	// 	console.log('B')
	// })
}

let x = f1()

setTimeout(function() {
	x.then(function() {
		console.log('B')
	})
	// x.catch(function(err) {
	// 	console.err(err)
	// })
}, 5000)
