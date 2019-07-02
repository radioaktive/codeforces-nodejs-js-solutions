//
const problemLink = 'https://codeforces.com/problemset/problem/617/A';
const submissionLink = 'https://codeforces.com/contest/617/submission/55832358';
/*
// Interface of codeforces.com
let stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on('data', function (data) {
    let input = data.split('\n');
    console.log(solution(input[0]));
});

// End of interface
*/

const solution = (n) => {
	let intQuotient = Math.floor(n/5);
	let reminder = n % 5;
	let res = intQuotient + (reminder ? 1 : 0);
	return res;
};
