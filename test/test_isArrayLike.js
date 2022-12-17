import isArrayLike from '../src/isArrayLike.js'
import chai from 'chai'
const expect = chai.expect

describe('IsArrayLike.js', () => {
    const arrayLikeObject = { 0 : "a", 1 : "b", 2 : "c", length: 3 };
    const simpleArray = [ "a", "b", "c" ];
    function func () {};

    it('should return true when called with simple array', () => {
        expect(isArrayLike(simpleArray)).to.be.true;
    });

    it('should return true when called with string', () => {
        expect(isArrayLike("abc")).to.be.true;
    });

    it('should return true when called with array-like object', () => {
        expect(isArrayLike(arrayLikeObject)).to.be.true;
    });
    
    it('should return true when called with arguments object', () => {
        function f () {
            expect(isArrayLike(arguments)).to.be.true;
        };
        f();
    });

    it('should return false when called without parameter', () => {
        expect(isArrayLike()).to.be.false;
    });

    it('should return false when called with null', () => {
        expect(isArrayLike(null)).to.be.false;
    });

    it('should return false when called with undefined', () => {
        expect(isArrayLike(undefined)).to.be.false;
    });

    it('should return false when called with NaN', () => {
        expect(isArrayLike(NaN)).to.be.false;
    });

    it('should return false when called with boolean', () => {
        expect(isArrayLike(true)).to.be.false;
        expect(isArrayLike(false)).to.be.false;
    });

    it('should return false when called with object without length property', () => {
        delete arrayLikeObject.length;
        expect(isArrayLike(arrayLikeObject)).to.be.false;
        arrayLikeObject.length = 3;
    });

    it('should return false when called with function', () => {
        expect(isArrayLike(func)).to.be.false;
    });

    it('should return true when called with array-like object with length of zero', () => {
        arrayLikeObject.length = -0;
        expect(isArrayLike(arrayLikeObject)).to.be.true;
        arrayLikeObject.length = 3;
    });

    it('should return false when called with array-like object with negative length', () => {
        arrayLikeObject.length = -1;
        expect(isArrayLike(arrayLikeObject)).to.be.false;
        arrayLikeObject.length = 3;
    });

    it('should return false when called with array-like object with bigger than `Number.MAX_SAFE_INTEGER` length', () => {
        const x = Number.MAX_SAFE_INTEGER + 1;
        arrayLikeObject.length = x;
        expect(isArrayLike(arrayLikeObject)).to.be.false;
        arrayLikeObject.length = 3;
    });

});