
const input1 = ['4', ['Icosahedron', 'Cube', 'Tetrahedron', 'Dodecahedron']]; 
const output1 = 42;

describe('solution', function () {
  it(input1 + ' - should return: ' + output1, function () {
    chai.expect(solution(input1[0], input1[1])).to.equal(output1);
  });
});



const input2 = ['3', ['Dodecahedron', 'Octahedron', 'Octahedron']];
const output2 = 28;

describe('solution', function () {
  it(input2 + ' - should return: ' + output2, function () {
    chai.expect(solution(input2[0], input2[1])).to.equal(output2);
  });
});