import chai from 'chai';
import get from '../src/get.js';

describe('Get.js', () => {
    // create test object as per documentation
    const obj = { 'a': [{ 'b': { 'c': 3 } }] }

    // use 999 as default test value. Null could be easily set down the line, this is testing the behaviour better. 
    const defaultValue = 999;

    describe('get(object, path)', () => {
        it('should return value when calling with proper array path', async () => {
            chai.expect(get(obj, ['a', '0', 'b', 'c'])).to.equal(3);
        });

        it('should return value when calling with proper string path', async () => {
            chai.expect(get(obj, 'a[0].b.c')).to.equal(3);
        });

        it('should return default value when calling with null object', async () => {
            chai.expect(get(null, 'a[0].b.c', defaultValue)).to.equal(defaultValue);
        });

        it('should return default value when calling with non-existing path', async () => {
            chai.expect(get(obj, 'a.b.c', defaultValue)).to.equal(defaultValue);
        });

        it('should not return default value even if given when calling with proper path', async () => {
            chai.expect(get(obj, 'a[0].b.c', defaultValue)).to.not.equal(defaultValue);
        });

        // This test fails. Should it work.. is this an improvement we could ask for? E.g. return null by default, even if not defaultValue is missing?
        it('should not crash when calling with null object', async () => {
            chai.expect(get(null, ['a', '0', 'b', 'c'])).to.not.throw();
        });

    })

})