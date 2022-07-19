const input = [
    '5',
    '5 50 50 70 80 100',
    '7 100 95 90 80 70 60 50',
    '3 70 90 80',
    '3 70 90 81',
    '9 100 99 98 97 96 95 94 93 91'
];

const C = input[0];
for (let i = 1; i <= C; i++) {
    const Score = input[i].split(' ').map(el => Number(el));
    const N = input[i][0];
    let average = 0;
    let sum = 0;
    for (let j = 1; j <= N; j++) {
        sum += Score[j];
    };
    average = sum / N;
    let aaa = Score.filter(el => el > average);
     
    console.log((aaa.length/N*100).toFixed(3)+  '%' );
}; 
/* let N = 5
for (let i = 1; i <= N; i++){
    

    console.log(i);
}; */