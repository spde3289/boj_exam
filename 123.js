let input = `5\n
1 1\n
2 2\n 
3 3\n 
4 4\n 
5 5\n
`


let answer;
    for(let i=1; i <= input[0]; i++){
        let a = +input[i][0];
        let b = +input[i][1];
        answer += `${a} + ${b} \n`;
    };
    console.log(answer);
    console.log(input[3].split(' ')[1]);