//킹, 퀸, 룩, 비숍, 나이트, 폰
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let answer = "";
rl.on("line", (line) => {
  input = line.split(" ").map((el) => Number(el));
}).on("close", () => {
  const arr = [1, 1, 2, 2, 2, 8];
  for (let i = 0; i < arr.length; i++) {
    input[i];
    answer += arr[i] - input[i] + " ";
  }
  console.log(answer);
});