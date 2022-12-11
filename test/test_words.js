import words from '../src/words.js'
import chai from 'chai'
const expect = chai.expect

/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */

describe('Words.js', () => {
    const stringWithAsciiWords = 'Pizza, Burger & Fries'
    const stringWithUnicodeWords = '🍕, 🍔 & 🍟'
    const re = /[^, ]+/g;

    it('should return words of string when calling with Ascii words', () => {
        expect(words(stringWithAsciiWords)).to.eql(['Pizza', 'Burger', 'Fries']);
    });

    it('should return words of string when calling with Unicode words', () => {
        expect(words(stringWithUnicodeWords)).to.eql(['🍕', '🍔', '🍟']);
    });

    it('should return words of string that match given pattern (ascii words)', () => {
        expect(words(stringWithAsciiWords, re)).to.eql(['Pizza', 'Burger', '&', 'Fries']);
    });

    it('should return words of string that match given pattern (unicode words)', () => {
        expect(words(stringWithUnicodeWords, re)).to.eql(['🍕', '🍔', '&', '🍟']);
    });


});