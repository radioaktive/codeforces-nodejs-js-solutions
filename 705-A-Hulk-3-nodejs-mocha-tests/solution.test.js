
const input1 = 1;
const output1 = 'I hate it';

describe('solution', function () {
  it(input1 + ' - should return: ' + output1, function () {
    chai.expect(solution(input1)).to.equal(output1);
  });
});



const input2 = 2;
const output2 = "I hate that I love it";

describe('solution', function () {
  it(input2 + ' - should return: ' + output2, function () {
    chai.expect(solution(input2)).to.equal(output2);
  });
});



const input3 = 3;
const output3 = "I hate that I love that I hate it";

describe('solution', function () {
  it(input3 + ' - should return: ' + output3, function () {
    chai.expect(solution(input3)).to.equal(output3);
  });
});