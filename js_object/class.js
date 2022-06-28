class Person {
    constructor(name, first, second) {
        console.log("constructor123")
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return 'prototype : ' + (this.first + this.second);
    }
};

class PersonPlus extends Person {
    avg() {
        return  (this.first + this.second)/2 ;
    }
}
//Person.prototype.sum = function() {
//    return 'prototype : '+(this.first + this.secound);
//}

console.log('lee', Person)

const kim = new PersonPlus('kim', 10, 10)
const lee = new Person('lee', 20, 10)
lee.sum = function () {
    return 'lee : ' + (this.first + this.second);
}
console.log("kim.sum()", kim.name, kim.avg())
console.log("lee.sum()", lee.sum())