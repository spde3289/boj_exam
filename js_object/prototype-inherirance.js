const superObj = {superVal:'super'};
//const subObj = {subVal:'sub'};
//subObj.__proto__ = superObj;
const subObj = Object.create(superObj);
subObj.subVal = 'sub';

debugger;

console.log(subObj.subVal);
console.log(subObj.superVal);
console.log(superObj.superVal);
console.log(superObj.subVal);

const kim = {
    name: 'Kim',
    first:10, second:20,
    sum: function(){return this.first+this.second;}
};
let lee = Object.create(kim);
lee.name = 'Lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
    return (this.first+this.second)/2
}
/* lee = {
    name: 'lee',
    first:10, second:10, 
    avg:function() { 
        return (this.first+this.second)/2
    }
} */
//lee.__proto__ = kim;

console.log('lee.sum() => ', lee.sum());