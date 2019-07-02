//
const problemLink = 'https://codeforces.com/problemset/problem/136/A';
const submissionLink = 'https://codeforces.com/contest/136/submission/56035562';
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

const solution = (n, presentsArray) => {
	let res = '';
	let presentsArrayOfObjects = [];
	for (let j = 0; j<n; j++){
		presentsArrayOfObjects.push({p:presentsArray[j], i:j+1})
	}
	let presentsAOOsortedByP = 	presentsArrayOfObjects.sort(function(obj1, obj2){ return obj1.p - obj2.p})
	let resArray =[];
	for (let k =0; k<n; k++){
		resArray.push(presentsAOOsortedByP[k].i)
	}
	res = resArray.join(' ');
	return res;
};
