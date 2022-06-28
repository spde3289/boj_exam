function Person(name, first, second, third) {
    this.name=name;
    this.first=first;
    this.secound=second;
    this.third=third;
};

const kim = new Person('kim', 10 ,20, 30)
const lee = new Person('lee', 20, 10, 10)

Person.prototype.sum = function() {
    return 'prototype : '+(this.first + this.second);
}
lee.sum = function() {
    return 'lee : '+(this.first + this.second + this.third);
}

console.log("kim.sum()",kim.sum())
console.log("lee.sum()",lee.sum())


//const d1 = new Date(2011-11-11)
//console.log(d1.getFullYear())
//console.log(d1.getMonth()+1)
//console.log(d1.getDate())
//console.log(Date)


//console.log("person", Person())
//console.log("person",new Person("lee",4,0,6).sum()) 