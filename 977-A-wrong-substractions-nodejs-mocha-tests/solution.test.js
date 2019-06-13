
const input1 = [512, 4];
const output1 = 50;

describe('solution', function () {
  it(input1 + ' - should return: ' + output1, function () {
    chai.expect(solution(input1[0], input1[1])).to.equal(output1);
  });
});




const input2 = [1000000000, 9];
const output2 = 1;

describe('solution', function () {
  it(input2 + ' - should return: ' + output2, function () {
    chai.expect(solution(input2[0], input2[1])).to.equal(output2);
  });
});
