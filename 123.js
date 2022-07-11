let input = ['6','20 10 35 30 7'];
let answer = '';
let a = input[1].split(' ').map( el => Number(el));
//answer = a.map(Math.max(a)) + ' ' + a.map(Math.max(a))
answer = Math.min.apply(Math, a) + ' ' + Math.max.apply(Math, a);
console.log(answer);