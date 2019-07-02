
let input = [];
let output = [];

input[0] = [];
input[0][0] = 6;
input[0][1] = [5, 10, 2, 3, 14, 5];
output[0] = 5;
input[1] = [];
input[1][0] = 2;
input[1][1] = [1, 100];
output[1] = 99;


for (let i=0; i<= 1; i++){
  describe('solution', function () {
    it(input[i] + ' - should return: ' + output[i], function () {
      chai.expect(solution(input[i][0], input[i][1])).to.equal(output[i]);
    });
  });
};
