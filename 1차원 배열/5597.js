//과제 안 내신분..?
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(Number(line.toString()));
}).on('close', () => {
    let arr = [];
    for (let i = 1; i <= 30; i++) {
		if (!input.includes(i)) arr.push(i);
	};
	console.log(arr.join("\n"));
	process.exit();
});