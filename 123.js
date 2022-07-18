const line = ['3','40 80 60'];
const input = line.map( el => el.split(' '));
console.log(input[1]);
const M = Math.max(...input[1]);
console.log(M)
/* let i = 0;
while(true){
    input[1].splice(i,1,(input[1][i]/M*100));
    i++
    console.log(input[1].length);
    if(i === input[1].length){
        break;
    }
}; */


for(let i = 0; i < input[0]; i++){
    input[1].splice(i,1,(input[1][i]/M*100));
}; 
console.log(input[1])
let average = input[1].reduce((a,b) => a+b);
console.log(average/input[0])



