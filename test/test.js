import add from '../src/add.js'
import chai from 'chai'

it('should add numbers', function () {
  chai.expect(add(2,2)).to.equal(4);
});