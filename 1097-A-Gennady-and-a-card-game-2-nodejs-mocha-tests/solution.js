//shortest solution size for 2019.06.13:  https://twitter.com/rad1oaktive/status/1139057711243497472
const problemLink = 'https://codeforces.com/problemset/problem/1097/A';
const submissionLink = 'https://codeforces.com/contest/1097/submission/55517087';
/*
// Interface of codeforces.com
let stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on('data', function (data) {
    let input = data.split('\n');
    console.log(solution(input[0], input[1]));
});

// End of interface
*/

const solution = (cardOnTable, cardsInHand) => {
  if (cardsInHand.indexOf(cardOnTable[0]) >= 0 || cardsInHand.indexOf(cardOnTable[1]) >= 0){
	return "YES";
  } else {
	return "NO";
  }
};


