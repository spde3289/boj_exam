

const kim = {
    name:'kim',
    first:10,
    secound:20,
    sum: function() {
        return this.first + this.secound;
    }
};
console.log(kim.sum(kim.first, kim.secound));
console.log(kim.sum());
