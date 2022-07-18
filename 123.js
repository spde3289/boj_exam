const line = ['5',
    'OOXXOXXOOO',
    'OOXXOOXXOO',
    'OXOXOXOXOXOXOX',
    'OOOOOOOOOO',
    'OOOOXOOOOXOOOOX'];
const input = line.map( el => el.split(''));

const N = input[0];
for (let i = 1; i <= N; i++){
    let answer = 0;
    let k = 1;
    
    for(let j = 0;j < input[i].length; j++){
        if(input[i][j] === 'O'){
            answer += Number(k);
            k++;
        }else{
            k = 1;
        };
    };
    console.log(answer);
    
};


