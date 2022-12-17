import castArray from '../src/castArray.js'
import chai from 'chai'
const expect = chai.expect

describe('CastArray.js', () => {
    const number = 123e5;
    const negativeNumber = -123e5;
    const char = '1';
    const string = 'abc';
    const object = { 'a': 1 };
    const array = [1, 2, 3];

    it('should cast positive number to an array', () => {
        const numberArray = castArray(number);
        expect(numberArray).to.eql([12300000]);
    });

    it('should cast negative number to an array', () => {
        const negativeNumberArray = castArray(negativeNumber);
        expect(negativeNumberArray).to.eql([-12300000]);
    });

    it('should cast char to an array', () => {
        const charArray = castArray(char);
        expect(charArray).to.eql(['1']);
    });

    it('should cast string to an array', () => {
        const stringArray = castArray(string);
        expect(stringArray).to.eql(['abc']);
    });

    it('should cast object to an array', () => {
        const objectArray = castArray(object);
        expect(objectArray).to.eql([{ 'a': 1 }]);
    });

    it('should cast undefined to an array', () => {
        const objectArray = castArray(undefined);
        expect(objectArray).to.eql([undefined]);
    });

    it('should cast null to an array', () => {
        const objectArray = castArray(null);
        expect(objectArray).to.eql([null]);
    });

    it('should return the same array when called with array', () => {
        const objectArray = castArray(array);
        expect(objectArray).to.equal(array);
    });

});