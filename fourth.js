let a = [3,2,1,5,14,26]
// console.log(a.sort())
a.sort()
console.log(a)

function comp(a, b) {
	return a - b
}

// function comp2(a, b) {
// 	return (a % 10) - (b % 10)
// }

a.sort(comp2)
console.log(a)

function comp2(a, b) {
	return (a % 10) - (b % 10)
}
