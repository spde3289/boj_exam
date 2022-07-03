let input = 6;
let answer = '';

function a(){
    for (var i = 1; i <= input; ){
        answer += input +"\n";
        console.log(input);
        --input;
    }
};
a()



console.log(answer);