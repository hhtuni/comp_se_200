import castArray from '../src/castArray.js'
import chai from 'chai'
const expect = chai.expect

/**
 * Casts `value` as an array if it's not one.
 *
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */

describe('CastArray.js', () => {
    const number = 123e5;
    const negativeNumber = -123e5;
    const char = '1';
    const string = 'abc';
    const object = { 'a': 1 };
    const array = [1, 2, 3];

    it('should cast positive number to an array', () => {
        const numberArray = castArray(number);
        expect(numberArray).to.be.an('array');
        expect(numberArray).to.eql([12300000]);
    });

    it('should cast negative number to an array', () => {
        const negativeNumberArray = castArray(negativeNumber);
        expect(negativeNumberArray).to.be.an('array');
        expect(negativeNumberArray).to.eql([-12300000]);
    });

    it('should cast char to an array', () => {
        const charArray = castArray(char);
        expect(charArray).to.be.an('array');
        expect(charArray).to.eql(['1']);
    });

    it('should cast string to an array', () => {
        const stringArray = castArray(string);
        expect(stringArray).to.be.an('array');
        expect(stringArray).to.eql(['abc']);
    });

    it('should cast object to an array', () => {
        const objectArray = castArray(object);
        expect(objectArray).to.be.an('array');
        expect(objectArray).to.eql([{ 'a': 1 }]);
    });

    it('should cast undefined to an array', () => {
        const objectArray = castArray(undefined);
        expect(objectArray).to.be.an('array');
        expect(objectArray).to.eql([undefined]);
    });

    it('should cast null to an array', () => {
        const objectArray = castArray(null);
        expect(objectArray).to.be.an('array');
        expect(objectArray).to.eql([null]);
    });

    it('should not cast an array to an array', () => {
        const objectArray = castArray(array);
        expect(objectArray).to.be.an('array');
        expect(objectArray).to.equal(array);
    });

});