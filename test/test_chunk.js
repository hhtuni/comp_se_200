import chunk from '../src/chunk.js'
import chai from 'chai'
const expect = chai.expect

describe('Chunk.js', () => {
    const numericArray = Array(0, 1, 2, 3, 4);
    const charArray = Array('a', 'b', 'c', 'd', 'e', 'f');
    const emptyArray = Array();
    
    it('should return array with default chunk length of 1 when size parameter is not given', () => {
        const chunkArray = chunk(numericArray);
        expect(chunkArray).to.eql([[0], [1], [2], [3], [4]]);
    });

    it('should return array with chunk length of 2 when size parameter is 2', () => {
        const chunkArray = chunk(charArray, 3);
        expect(chunkArray).to.eql([['a', 'b', 'c'], ['d', 'e', 'f']]);
    });

    it('should return array with chunk length defined by a function', () => {
        function size() {
            return 1;
        }
        const chunkArray = chunk(numericArray, size());
        expect(chunkArray).to.eql([[0], [1], [2], [3], [4]]);
    });

    it('should return array with chunk length defined by an object', () => {
        function MyNumber(n) {
            this.value = n;
        }
        MyNumber.prototype.valueOf = function() {
            return this.value;
        };
        const number = new MyNumber(1);
        const chunkArray = chunk(numericArray, number);
        expect(chunkArray).to.eql([[0], [1], [2], [3], [4]]);
    });

    it("should return array with the final chunk containing the remaining elements when the input array can't be split evenly", () => {
        const chunkArray = chunk(numericArray, 2);
        expect(chunkArray).to.eql([[0, 1], [2, 3], [4]]);
    });
    
    it('should return empty array when the array to process is empty', () => {
        const chunkArray = chunk(emptyArray);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the array to process is undefined', () => {
        const chunkArray = chunk(undefined);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the array to process is null', () => {
        const chunkArray = chunk(null);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the array to process is NaN', () => {
        const chunkArray = chunk(NaN);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the size parameter is null', () => {
        const chunkArray = chunk(charArray, null);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the size parameter is undefined', () => {
        const chunkArray = chunk(charArray, undefined);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });
        
    it('should return empty array when the size parameter is NaN', () => {
        const chunkArray = chunk(charArray, NaN);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the size parameter is negative value', () => {
        const chunkArray = chunk(charArray, -3);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the size parameter is infinite', () => {
        const chunkArray = chunk(charArray, 1/0);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the size parameter is negative infinity', () => {
        const chunkArray = chunk(charArray, -1/0);
        expect(chunkArray).to.be.an('array').that.is.empty;
    });

    it('should return empty array when the size parameter is symbol', () => {
        const chunkArray = chunk(charArray, Symbol(1));
        expect(chunkArray).to.be.an('array').that.is.empty;
    });
});