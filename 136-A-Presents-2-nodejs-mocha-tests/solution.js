//
const problemLink = 'https://codeforces.com/problemset/problem/136/A';
const submissionLink = 'https://codeforces.com/contest/136/submission/56038518';
/*
// Interface of codeforces.com
const readline = require('readline');
let inputs = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', lineInput => {
    inputs.push(lineInput)
})

rl.on('close', () => {
		const n = inputs[0].split(' ').map(function (a) { return parseInt(a); });
    const k = inputs[1].split(' ').map(function (a) { return parseInt(a); });
    console.log(solution(n, k));

})

// End of interface
*/

const solution = (n, presentsArray) => {
	let resArray = [];
	for (let j = 1; j<=n; j++){
		resArray.push(presentsArray.indexOf(j) + 1);
	};
	return resArray.join(' ');
};
