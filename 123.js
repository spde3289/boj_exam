const line = ['4','1 100 100 100'];
const input = line.map( el => el.split(' '));
const M = Math.max(...input[1]);
for(let i = 0; i < input[0]; i++){
    input[1].splice(i,1,(input[1][i]/M*100));
};
