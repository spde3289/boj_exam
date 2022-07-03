const kim = {name:'kim', first:10, second:20};
let lee = {name:'lee', first:10, second:10};

function sum(n){
    return n + (this.first + this.second);
};

//sum.call(kim);
console.log(sum.call(lee," => "));

let kimSum = sum.bind(kim, ' => ');
console.log(sum.call(kim, 3)); //apply
console.log(kimSum()); 
//console.log(sum.bind(lee," => "));

