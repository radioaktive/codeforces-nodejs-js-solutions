//
const problemLink = 'https://codeforces.com/contest/1030/problem/A';
const submissionLink = 'https://codeforces.com/contest/1030/submission/55016401';
/*
let stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on('data', function (data) {
    let input = data.split('\n');
    //let n = input[0].split(' ').map(function (a) { return parseInt(a); });
    let k = input[1].split(' ').map(function (a) { return parseInt(a); });
    let result = solution(undefined, k);
    console.log(result);
});

// End of interface
*/

const solution = function(n, k){
  let res = 'EASY';
  for(let i = 0; i<k.length; i++){
    if (k[i] === 1) {
      res ='HARD';
    }
  }
  return res;
};