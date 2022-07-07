let input = ["10 5","1 10 4 9 2 3 8 5 7 6"] ;
let answer = '';   

const N = Number(input[0].split(' ')[0]);
const X = Number(input[0].split(' ')[1]);
    let A = input[1].split(' ')
    answer =  A.filter(A => A < X)
console.log(answer);


