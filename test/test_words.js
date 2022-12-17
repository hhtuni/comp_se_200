import words from '../src/words.js'
import chai from 'chai'
const expect = chai.expect

describe('Words.js', () => {
    const stringWithAsciiWords = 'Pizza, Burger & Fries'
    const stringWithUnicodeWords = '🍕, 🍔 & 🍟'
    const stringWithStrangeLetters = 'ñ, å, ä, ö, ¡, À, ∑'
    const re = /[^, ]+/g;

    it('should return words of string when calling with Ascii words', () => {
        expect(words(stringWithAsciiWords)).to.eql(['Pizza', 'Burger', 'Fries']);
    });

    it('should return words of string when called with strange letters)', () => {
        expect(words(stringWithStrangeLetters)).to.eql(['ñ', 'å', 'ä', 'ö', '¡', 'À', '∑']);
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
    
    it('should return empty array when called with empty string ""', () => {
        expect(words("")).to.be.an('array').that.is.empty;
    });

    it('should return empty array when called with ",,,,,,,,,,"', () => {
        expect(words(',,,,,,,,,,')).to.be.an('array').that.is.empty;
    });
    
});