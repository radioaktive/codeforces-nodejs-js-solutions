//
const problemLink = 'https://codeforces.com/problemset/problem/791/A';
const submissionLink = 'https://codeforces.com/contest/791/submission/55493817';
/*
// Interface of codefoces.com
let stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on('data', function (data) {
    let input = data.split('\n');
    let n = input[0].split(' ').map(function (a) { return parseInt(a); });
    let result = solution(n[0], n[1]);
    console.log(result);
});

// End of interface
*/

const solution = function(a, b){
	let i = 0;
	while (a <= b) {
		a = a * 3; 
		b = b * 2; 
		i++;
	}
	return i;
};