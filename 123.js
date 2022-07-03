let input = [5,"1 1","2 2","3 3","9 8","5 10"] ;
let answer = '';


    for(let i = 1; i <= input[0]; i++){
        let a = input[i].split(' ')[0];
        let b = input[i].split(' ')[1];
        answer += `Case #${i}: ` + (Number(a)+Number(b)) + "\n";
    }




console.log(answer);
console.log(typeof(input[0]));