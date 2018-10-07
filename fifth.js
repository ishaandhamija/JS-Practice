let a = [1,4,9,16,25]

let b = a.map(Math.sqrt)

console.log(b)

console.log(a)

let c = a.filter(function(item) {
	return (item % 2 === 0)
})

console.log(c)

console.log(a)
