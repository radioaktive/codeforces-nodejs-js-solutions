//
const problemLink = 'https://codeforces.com/problemset/problem/977/A';
const submissionLink = 'https://codeforces.com/contest/977/submission/54947982';
/*
// Interface of codefoces.com
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

// End of interface
*/

const solution = function(n, k){
  let res = n;
  const getLastDigit = function(d){
    let last = d%10;
    return +last;
  };

  for (let i = 0; i < k; i++){
    let lastDigit = getLastDigit(res);
    //if the last digit of the number is non-zero, she decreases the number by one;
    // the last digit of the number is zero, she divides the number by 10 (i.e. removes the last digit).
    if (lastDigit !== 0) {
      res--;
    } else {
      res = res/10;
    }
  }
  return res;
}
