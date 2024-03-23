const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input= [];

rl.on("line", (line) => {
  input.push(+line)
}).on("close", () => {
  const coin = [25, 10, 5, 1]
  let answer = ""

  for (let i = 1; i <= input[0]; i++) {
    input[i] / coin[0]
    const qua = Math.floor(input[i] / coin[0]);
    let a = input[i] % coin[0]
    const dim = Math.floor(a / coin[1])
    let b = a % coin[1]
    const nic = Math.floor(b / coin[2])
    let c = b % coin[2]
    const pen = Math.floor(c / coin[3])

    answer += `${qua} ${dim} ${nic} ${pen} \n`
  }

  console.log(answer)
});
