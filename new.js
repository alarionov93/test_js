function echo() {
    var s = 'asdfg';
    console.log(s);
}
var tst;
tst = function (name) {
    var person;
    person = {
        firstName: 'Test',
        lastName: 'Person',
        toString: function () {
            return this.firstName + this.lastName;
        }
    };
    var tpl = ['test', person];
    console.log(person.toString());
    return "Hello " + name;
};
console.log(tst("test"));
