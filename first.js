let x = 10
function f() {
	// let x = 20
	x += 1
	console.log(x + " ye wala")
	if (true) {
		let x = 100
		x += 1
		console.log(x)
	}
}
f()
console.log(x)
