<<<<<<< Updated upstream
/* 
let arr = Array(10001).fill(false);
let n = 1;
while (n<10000) {
    arr[n+(n+'').split('').reduce((a,c)=>a+ +c,0)]=true;
    n++;
}
let r = [];
arr.forEach((v,i) => {
    if (!v) r.push(i);
})
console.log(r.slice(1).join('\n'));
*/

function d(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
        result += number % 10;
        number = Math.floor(number / 10);
    }
    // 입력받은 수 와 result를 더하여 return
    return n + result;
}

const range = 50;
// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(range + 1).fill(true);
console.log('asd : ', selfNumbers[50])

for (let i = 0; i <= range; i++) {
    // 셀프넘버가 아니면 false로 변환.
    selfNumbers[d(i)] = false;
}

// true index만 출력
for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
        console.log(i);
    }
=======
const input = 2;

for(let i = 1; i <= 9; i++){
    console.log(input,' * ',i,' = ',input*i);
>>>>>>> Stashed changes
}