
let input = [];
let output = [];

input[0] = 5;
output[0] = 1;
input[1] = 12;
output[1] = 3;
input[2] = 41;
output[2] = 9;
input[3] = 534204;
output[3] = 106841;


for (let i=0; i<= 3; i++){
  describe('solution', function () {
    it(input[i] + ' - should return: ' + output[i], function () {
      chai.expect(solution(input[i])).to.equal(output[i]);
    });
  });
};
