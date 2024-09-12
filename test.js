let input = "   ".trim();
if (input === "") {
  console.log(0);
} else {
  const answer = input.trim().split(" ").length;
  console.log(answer);
}
