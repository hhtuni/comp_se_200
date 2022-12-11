import clamp from '../src/clamp.js'
import chai from 'chai'
const expect = chai.expect
/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */
describe('Clamp.js', () => {

    it('should return upper bound when number to clamp is bigger than upper bound', () => {
        expect(clamp(10, -5, 5)).to.eql(5);
        expect(clamp(10, -5, -1)).to.eql(-1);
    });

    it('should return lower bound when number to clamp is smaller than lower bound', () => {
        expect(clamp(-10, -5, 5)).to.eql(-5);
        expect(clamp(-10, -5, -1)).to.eql(-5);
    });

    it('should not clamp number when it is between lower and upper bound', () => {
        expect(clamp(1, -5, 5)).to.eql(1);
        expect(clamp(-5, -5, -4)).to.eql(-5);
        expect(clamp(5, 4, 5)).to.eql(5);
    });

    it('should not clamp number when it is between lower and upper bound', () => {
        expect(clamp(NaN, -5, 5)).to.eql(NaN);
        expect(clamp(null, -5, 5)).to.eql(-5);
        expect(clamp(undefined -5, 5)).to.eql(-5);
    });
    

}); 