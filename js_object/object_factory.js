function Person(name, first, secound, third) {
    this.name=name;
    this.first=first;
    this.secound=secound;
    this.third=third;
    this.sum = function() {
        return this.name, this.first + this.secound + this.third;
    }
};

const kim = new Person('kim', 10 ,20, 30)
const lee = new Person('lee', 20, 10, 10)

console.log("kim.sum()",kim.sum())
console.log("lee.sum()",lee.sum())

/* const d1 = new Date('2022-6-28')
console.log(d1.getFullYear())
console.log(d1.getMonth())
console.log(d1.getDate())
console.log(Date)
 */

console.log("person", Person())
console.log("person",new Person("lee",4,0,6).sum())