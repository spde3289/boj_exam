let input = ["10 5","1 10 4 9 2 3 8 5 7 6"] ;
let answer = '';   

const N = Number(input[0].split(' ')[0]);
const X = Number(input[0].split(' ')[1]);
for(let i = 0; i <= N; i++){
    let A = Number(input[1].split(' ')[i]);
    if(A < X) {
        answer += A + " "; 
    };
};
console.log(answer);


