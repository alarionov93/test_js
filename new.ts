function echo() {
	let s: string = 'asdfg';
	console.log(s);
}

let tst : (name: string) => string;

tst = function(name: string) {

	let person: {
	    firstName: string;
	    lastName: string;
	    toString: () => string;
	};
	person = {
		firstName: 'Test',
	    lastName: 'Person',
	    toString: function() {
	    	return this.firstName + this.lastName;
	    }
	}
	let tpl: [string, object] = ['test', person];
	console.log(person.toString());

	return `Hello ${name}`;
}

console.log(tst("test"));
