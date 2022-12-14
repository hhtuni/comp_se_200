import compact from '../src/compact.js'
import chai from 'chai'
const expect = chai.expect

describe('Compact.js', () => {
    
    it('should return the same array when there are no values to be filtered', () => {
        const array = [1, 2, 3];
        expect(compact(array)).to.equal(array);
    });

    it('should return array with the value "false" removed', () => {
        const array = [1, 2, false, 3];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return array with the value "null" removed', () => {
        const array = [1, 2, null, 3];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return array with the value "undefined" removed', () => {
        const array = [1, 2, 3, undefined];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return array with the value "NaN" removed', () => {
        const array = [NaN, 1, 2, 3];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return array with the value "" removed', () => {
        const array = [1, "", 2, 3];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return array with the value 0 removed', () => {
        const array = [1, 2, 3, 0];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return array with all falsey values removed', () => {
        const array = [1, 2, 0, 3, 0, null, false];
        expect(compact(array)).to.eql([1, 2, 3]);
    });

    it('should return empty array when all values are falsey', () => {
        const array = [false, 0];
        expect(compact(array)).to.be.an('array').that.is.empty;;
    });


});