//
const problemLink = 'https://codeforces.com/problemset/problem/785/A';
const submissionLink = 'https://codeforces.com/contest/785/submission/55402303';
/*
// Interface of codeforces.com
var data1 = readline().split(' ').map(function(x){return parseInt(x)});
var data2 = [];
for (i = 0; i<data1[0]; i++){
	data2.push(readline());
}

var result = solution(data1[0], data2);
print(result);

// End of interface
*/

	
function solution(n, s){
	var res = 0;
	for(var i = 0; i < n; i++){
			switch (s[i]) {
				case 'Tetrahedron':
					res = res + 4;
					break;
				case 'Cube':
					res = res + 6;
					break;
				case 'Octahedron':
					res = res + 8;
					break;
				case 'Dodecahedron':
					res = res + 12;
					break;
				case 'Icosahedron':
					res = res + 20;
					break;
			}
	}
	return res;
};
	