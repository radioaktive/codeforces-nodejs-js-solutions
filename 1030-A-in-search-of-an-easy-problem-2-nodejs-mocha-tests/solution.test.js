
const input1 = [3, [0, 0, 1]];
const output1 = 'HARD';


describe('solution', function () {
  it(input1 + ' - should return: ' + output1, function () {
    chai.expect(solution(input1[0], input1[1])).to.equal(output1);
  });
});


const input2 = [1, [0]];
const output2 = 'EASY';


describe('solution', function () {
  it(input2 + ' - should return: ' + output2, function () {
    chai.expect(solution(input2[0], input2[1])).to.equal(output2);
  });
});