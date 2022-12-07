import chunk from '../src/chunk.js'
import chai from 'chai'
const expect = chai.expect

describe('Chunk.js', () => {
    const numericArray = Array(0, 1, 2, 3, 4);
    const charArray = Array('a', 'b', 'c', 'd', 'e', 'f');
    const emptyArray = Array();
    
    it('should return array with default chunk length of 1 when size parameter is not given', () => {
        const chunkArray = chunk(numericArray);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.eql([[0], [1], [2], [3], [4]]);
    });

    it('should return array with chunk length of 2 when size parameter is 2', () => {
        const chunkArray = chunk(charArray, 3);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.eql([['a', 'b', 'c'], ['d', 'e', 'f']]);
    });

    it("should return array with the final chunk containing the remaining elements when the input array can't be split evenly", () => {
        const chunkArray = chunk(numericArray, 2);
        expect(chunkArray).to.be.an('array');
        expect(chunkArray).to.eql([[0, 1], [2, 3], [4]]);
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