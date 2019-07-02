
let input = [];
let output = [];

/*
input[0] = [];
input[0][0] = 4;
input[0][1] = [2, 3, 4, 1];
output[0] = [4, 1, 2, 3];
input[1] = [];
input[1][0] = 3;
input[1][1] = [1, 3, 2];
output[1] = [1, 3, 2];
input[2] = [];
input[2][0] = [2];
input[2][1] = [1, 2];
output[2] = [1, 2];
*/

input[0] = [];
input[0][0] = 4;
input[0][1] = [2, 3, 4, 1];
output[0] = '4 1 2 3';
input[1] = [];
input[1][0] = 3;
input[1][1] = [1, 3, 2];
output[1] = '1 3 2';
input[2] = [];
input[2][0] = [2];
input[2][1] = [1, 2];
output[2] = '1 2';



for (let i=0; i<= 2; i++){
  describe('solution', function () {
    it(input[i] + ' - should return: ' + output[i], function () {
      chai.expect(solution(input[i][0], input[i][1])).to.equal(output[i]);
    });
  });
};
