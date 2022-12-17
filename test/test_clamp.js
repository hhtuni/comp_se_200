import clamp from '../src/clamp.js'
import chai from 'chai'
const expect = chai.expect

describe('Clamp.js', () => {
    describe('should return upper bound when number to clamp is bigger than upper bound', () => {
        it('clamp(10, -5, 5)', () => {
            expect(clamp(10, -5, -1)).to.eql(-1);
        });
        it('clamp(10, -5, -1)', () => {
            expect(clamp(10, -5, -1)).to.eql(-1);
        });
        it('clamp(10.5, -5.5, -1.5)', () => {
            expect(clamp(10.5, -5.5, -1.5)).to.eql(-1.5);
        });
    });

    describe('should return lower bound when number to clamp is smaller than lower bound', () => {
        it('clamp(-10, -5, 5)', () => {
            expect(clamp(-10, -5, 5)).to.eql(-5);
        });
        it('clamp(-10, -5, -1)', () => {
            expect(clamp(-10, -5, -1)).to.eql(-5);
        });
        it('clamp(-10.5, -5.5, -1.5)', () => {
            expect(clamp(-10.5, -5.5, -1.5)).to.eql(-5.5);
        });
    });

    describe('should not clamp number when it is between lower and upper bound', () => {
        it('clamp(1, -5, 5)', () => {
            expect(clamp(1, -5, 5)).to.eql(1);
        });
        it('clamp(-5, -5, -4)', () => {
            expect(clamp(-5, -5, -4)).to.eql(-5);
        });
        it('clamp(5, 4, 5)', () => {
            expect(clamp(5, 4, 5)).to.eql(5);
        });
        it('clamp(5.5, 4.5, 5.5)', () => {
            expect(clamp(5.5, 4.5, 5.5)).to.eql(5.5);
        });
    });

    describe('should return value between lower and upper bound when called with falsey value', () => {
        it('clamp(NaN, -5, 5)', () => {
            expect(clamp(NaN, -5, 5)).to.be.within(-5,5);
        });
        it('clamp(null, -5, 5)', () => {
            expect(clamp(null, -5, 5)).to.be.within(-5,5);
        });
        it('clamp(undefined -5, 5)', () => {
            expect(clamp(undefined -5, 5)).to.be.within(-5,5);
        });
    });
}); 