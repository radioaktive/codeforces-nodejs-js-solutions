//
const problemLink = 'https://codeforces.com/problemset/problem/935/A';
const submissionLink = 'https://codeforces.com/contest/935/submission/55551067';
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
	let res = 0;
	for (let i=1; i<n; i++){
		if (n % i === 0){
			res++;
		}
	}
	return res;
};


