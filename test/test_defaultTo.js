import defaultTo from '../src/defaultTo.js'
import chai from 'chai'
const expect = chai.expect

describe('DefaultTo.js', () => {
    const defaultValue = 10

    it('should return value when value is positive', () => {
        const value = 1;
        expect(defaultTo(value, defaultValue)).to.eql(value);
    });

    it('should return value when value is decimal', () => {
        const value = 5.5;
        expect(defaultTo(value, defaultValue)).to.eql(value);
    });

    it('should return value when value is negative', () => {
        const value = -5;
        expect(defaultTo(value, defaultValue)).to.eql(value);
    });

    it('should return value when value is 0', () => {
        const value = 0;
        expect(defaultTo(value, defaultValue)).to.eql(value);
    });

    it('should return default value when value is NaN', () => {
        expect(defaultTo(NaN, defaultValue)).to.eql(defaultValue);
    });

    it('should return default value when value is null', () => {
        expect(defaultTo(null, defaultValue)).to.eql(defaultValue);
    });

    it('should return default value when value is undefined', () => {
        expect(defaultTo(undefined, defaultValue)).to.eql(defaultValue);
    });

});