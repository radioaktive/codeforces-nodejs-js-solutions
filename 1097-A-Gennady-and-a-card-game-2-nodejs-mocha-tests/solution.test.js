
const input1 = ['AS', '2H 4C TH JH AD'];
const output1 = 'YES';


describe('solution', function () {
  it(input1 + ' - should return: ' + output1, function () {
    chai.expect(solution(input1[0], input1[1])).to.equal(output1);
  });
});


const input2 = ['2H', '3D 4C AC KD AS'];
const output2 = 'NO';


describe('solution', function () {
  it(input2 + ' - should return: ' + output2, function () {
    chai.expect(solution(input2[0], input2[1])).to.equal(output2);
  });
});


const input3 = ['4D', 'AS AC AD AH 5H'];
const output3 = 'YES';

describe('solution', function () {
  it(input3 + ' - should return: ' + output3, function () {
    chai.expect(solution(input3[0], input3[1])).to.equal(output3);
  });
});