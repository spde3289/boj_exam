// 행렬 덧셈
// https://www.acmicpc.net/problem/2738
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map((item) => +item);

  let newMatrixA = [];
  let newMatrixB = [];

  for (let i = 1; i < input.length; i++) {
    let newArr = input[i].split(" ");

    newArr = newArr.map((item) => Number(item));

    if (i <= n) {
      newMatrixA.push(newArr);
    } else {
      newMatrixB.push(newArr);
    }
  }

  function solution(n, m, newMatrixA, newMatrixB) {
    const answerMatrix = [];

    for (let i = 0; i < n; i++) {
      answerMatrix.push([]);
      for (let j = 0; j < m; j++) {
        answerMatrix[i].push(newMatrixA[i][j] + newMatrixB[i][j]);
      }
    }

    return answerMatrix;
  }

  let answerStr = "";
  let answerMatrix = solution(n, m, newMatrixA, newMatrixB);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answerStr += `${answerMatrix[i][j]} `;
    }
    answerStr += `\n`;
  }

  console.log(answerStr);
});