//
const problemLink = 'https://codeforces.com/problemset/problem/705/A';
const submissionLink = 'https://codeforces.com/contest/705/submission/55304346';
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
  const output = solution(input[0])
  console.log(output)
})

rl.on('close', () => {
  // console.log(input)
})

// End of interface
*/

const solution = function(n){
    let resStr = 'I hate';
    for (let i = 1; i < n; i++){
      if (i % 2 === 0){
        resStr = resStr + ' that I hate';
      } else {
        resStr = resStr + ' that I love';
      };
    };
    resStr = resStr + ' it';
    return resStr;
};


