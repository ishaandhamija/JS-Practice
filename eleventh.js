// const a = 20
// a = 22 // produces error : re assignment
// console.log(a)

const o = {
	a : 10,
	b : true,
	c : 'hi'
}

o.d = true
console.log(o)

delete o.a
console.log(o)
