var lib = process.env.JSCOV ? require('../src-cov') : require('../src');

var expect = require('chai').expect;
describe('#add()', function () {
  it('should add numbers', function () {
    lib.add(2,2)
    expect(lib.add(2,2)).to.equal(4);
  });
});