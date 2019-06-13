
const input1 = [4, 7];
const output1 = 2;



describe('solution', function () {
  it(input1 + ' - should return: ' + output1, function () {
    chai.expect(solution(input1[0], input1[1])).to.equal(output1);
  });
});


const input2 = [4, 9];
const output2 = 3;

describe('solution', function () {
  it(input2 + ' - should return: ' + output2, function () {
    chai.expect(solution(input2[0], input2[1])).to.equal(output2);
  });
});



const input3 = [1, 1];
const output3 = 1;

describe('solution', function () {
  it(input3 + ' - should return: ' + output3, function () {
    chai.expect(solution(input3[0], input3[1])).to.equal(output3);
  });
});