let input = ["1 1","2 3",'3 4','9 8','5 2','0 0'];
let answer = '';   
for(let i = 0; i <= answer.length; i++){
    let A = Number(input[i].split(' ')[0]);
    let B = Number(input[i].split(' ')[1]);
    if(A+B === 0){
        break;
    };
    answer += A+B + '\n';
}
console.log(answer);