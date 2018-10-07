// function getFirstName(fullName) {
// 	return fullName.split(" ")[0]
// }

// function greeter(findName, fullName) {
// 	console.log("Hello " + findName(fullName))
// }

greeter(getFirstName, "Ishaan Dhamija")

function greeter(findName, fullName) {
	console.log("Hello " + findName(fullName))
}

function getFirstName(fullName) {
	return fullName.split(" ")[0]
}
