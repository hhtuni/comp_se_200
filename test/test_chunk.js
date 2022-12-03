import chunk from '../src/chunk.js'
import chai from 'chai'
const expect = chai.expect

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

describe('Chunk.js', () => {
    const numericArray = Array(0, 1, 2);
    const charArray = Array('a', 'b', 'c', 'd', 'e', 'f');
    const emptyArray = Array();
    const undefinedArray = Array(undefined);

    it('should return array with chunk length of 1 when size parameter is 1', () => {
        const chunkArray = chunk(numericArray, 1);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.have.lengthOf(3);
        expect(chunkArray[0]).to.equal([numericArray[0]]);
        expect(chunkArray[1]).to.equal([numericArray[1]]);
        expect(chunkArray[2]).to.equal([numericArray[2]]);
    });

    it('should return array with default chunk length of 1 when size parameter is not given', () => {
        const chunkArray = chunk(numericArray);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.have.lengthOf(3);
        expect(chunkArray[0]).to.equal([numericArray[0]]);
        expect(chunkArray[1]).to.equal([numericArray[1]]);
        expect(chunkArray[2]).to.equal([numericArray[2]]);
    });
    
    it('should return empty array when the array to process is empty', () => {
        const chunkArray = chunk(emptyArray);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.be.empty;
    });

    it('should return empty array when the array to process is undefined', () => {
        const chunkArray = chunk(undefined);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.be.empty;
    });

    it('should return empty array when the array to process is null', () => {
        const chunkArray = chunk(null);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.be.empty;
    });


    it('should return empty array when the size parameter is null', () => {
        const chunkArray = chunk(charArray, null);
        
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.be.empty;
    });

    it('should return empty array when the size parameter is negative value', () => {
        const chunkArray = chunk(charArray, -3);
        
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.be.empty;
    });

});