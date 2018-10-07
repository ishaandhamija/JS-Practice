let o = {
	a : 10,
	b : true,
	c : function() {
		console.log(this.a)
	}
}

o.c()
