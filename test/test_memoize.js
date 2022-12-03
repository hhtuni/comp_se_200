import chai from 'chai';
import memoize from '../src/memoize.js';
import type from 'type-detect';

// simple test function to return values of an object in an array
// const values = (obj) => {
//     return Object.values(obj);
// } 

describe('Memoize.js', () => {
    // create test objects as per documentation
    const object = { 'a': 1, 'b': 2 }
    const other = { 'c': 3, 'd': 4 }

    const values = memoize(Object.values);

    it('should throw Expected a function if first arg is not function', async () => {
        try {
            memoize(object);   
        } catch (error) {
            chai.expect(error.message).to.equal('Expected a function'); 
        }   
    });

    it('should throw Expected a function if resolver arg is not function', async () => {
        try {
            memoize(Object.values, object);   
        } catch (error) {
            chai.expect(error.message).to.equal('Expected a function'); 
        }   
    });

    it('should return values [1,2] for object', async () => {
        chai.expect(values(object)).to.eql([1,2]);
    });

    it('should still return [1,2] for object if using memoizer even if value changed', async () => {
        object.a = 2;
        chai.expect(values(object)).to.eql([1,2]);
        chai.expect(object.a).to.equal(2);
    });

    it('should return values [3,4] for other', async () => {
        chai.expect(values(other)).to.eql([3,4]);
    });

    it('should allow to modify the cache results', async () => {
        values.cache.set(object, ['c','d']);
        chai.expect(values(object)).to.eql(['c','d']);
    });

    it('should allow to modify the cache instance type', async () => {
        memoize.Cache = new WeakMap();
        chai.assert(type(memoize.Cache) === 'WeakMap');
        chai.expect(values(object)).to.eql(['c','d']);
    });
    
})