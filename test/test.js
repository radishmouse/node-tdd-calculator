const assert = require('assert');
const maths = require('../index');
const add = maths.add;
const sub = maths.sub;

describe('Subtracting numbers', () => {
  describe('simple subtraction', () => {
    it('should equal 0 when subtracting 1 and 1', () => {
      assert.equal(sub(1, 1), 0);
    });
  });
});


describe('Adding numbers', () => {
  describe('simple addition', () => {
    it('should return 2 when the values are 1 and 1', () => {
      // let value = add(1, 1);
      // assert.equal(value, 2);
      assert.equal(add(1, 1), 2);
    });
  });
  describe('adding decimal numbers', () => {
    it('should equal .... to 5 decimal places', () => {
      assert.equal(10.0 + 10.0, 20.0);
    });
  });
});
