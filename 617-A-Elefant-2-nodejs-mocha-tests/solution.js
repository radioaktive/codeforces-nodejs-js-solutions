//
const problemLink = 'https://codeforces.com/problemset/problem/617/A';
const submissionLink = '';
/*
// Interface of codeforces.com
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', line => {
  input = line.split(' ').map(x => parseInt(x))
  const output = solution(input[0], input[1])
  console.log(output)
})

rl.on('close', () => {
  // console.log(input)
})

///end of interface
*/

const solution = (n) => {
	let intQuotient = Math.floor(n/5);
	let reminder = n % 5;
	let res = intQuotient + (reminder ? 1 : 0);
	return res;
};
