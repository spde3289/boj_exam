let input = [5] ;
let answer = '';   
let star = '';
for(let i = 1; i <= input; i++){
    for(let j = 1; j <= input-i; j++){
        answer += ' ';
    };
    for(let k = 1; k <= i; k++){
        star += '*';
    };
    answer += star+"\n";
    star = '';
};

console.log(answer);