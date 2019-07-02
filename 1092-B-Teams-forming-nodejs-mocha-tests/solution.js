//
const problemLink = 'https://codeforces.com/problemset/problem/1092/B';
const submissionLink = 'https://codeforces.com/contest/1092/submission/56434092';
/*
// Interface of codeforces.com
let stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on('data', function (data) {
    let input = data.split('\n');
    let n = input[0].split(' ').map(function (a) { return parseInt(a); });
    let k = input[1].split(' ').map(function (a) { return parseInt(a); });
    let result = solution(n, k);
    console.log(result);
});

// End of interface
*/

const solution = (n, studentsArray) => {
	let res = 0;
	studentsArray.sort(function(a, b){return a-b});
	for (let i = 0; i<n-1; i=i+2){
		res = res + (studentsArray[i+1]-studentsArray[i]);
	}
	return res;
};
