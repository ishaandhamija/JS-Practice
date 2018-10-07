function download() {
	return new Promise (function(resolve, reject) {
		console.log('A')
		setTimeout(function() {
			console.log('B')
			resolve()
		}, 3000)
	})
}

let d = download()

setTimeout(function() {
	d.then(function() {
		console.log('C')
	}, 5000)
})
