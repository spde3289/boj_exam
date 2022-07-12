let line = ['42','84', '252', '420', '42', '42', '42', '42', '42', '14'];
let input = line.map(el => Number(el))
let answer = [];
console.log(input);
for (let i = 0; i < 10; i++) {
    let num = input[i] % 42;
    answer.push(num);
}
console.log(answer);
console.log(new Set(answer).size)