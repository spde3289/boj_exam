let input = ['6','20', '10', '55', '30', '7'];
//answer = a.map(Math.max(a)) + ' ' + a.map(Math.max(a))
const a = Math.max(...input);
    let i = 0;
    while(true){
        const b = input[i];
        i++;
        if(+a === +b){
            break;
        };
    };
console.log(a,i);