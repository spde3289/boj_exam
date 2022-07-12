let line = ['150','266', '427'];
let input = line.map(el => Number(el))
let answer = '';

const A = input[0];
const B = input[1];
const C = input[2];

const product = A*B*C;

let abc = product.toString().split('').map(el => Number(el));

for(let i = 0; i < 10; i++){
    let num = abc.filter(num => num === i);
    answer += num.length + '\n';
};

console.log(abc)

console.log(answer)