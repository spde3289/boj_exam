// 진법 변환2
//https://www.acmicpc.net/problem/11005
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  const [N, B] = input;

  function convertToBase(N, B) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    while (N > 0) {
      result = digits[N % B] + result;
      N = Math.floor(N / B);
    }

    return result;
  }

  console.log(convertToBase(N, B));
});
