import * as strings from '../../src/helpers/strings';

describe('strings', () => {

    /* excerpt */
    it('excerpt should extract all the characters from a string if it is less than 50 characters by default', () => {
        expect(strings.excerpt('just wow')).toEqual('just wow');
    });

    it('excerpt should extract 50 characters from a string if it has more than 50 characters by default', () => {
        expect(strings.excerpt('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))
            .toEqual('Lorem ipsum dolor sit amet, consectetur adipisicin...');
    });

    it('excerpt should extract provided number of characters from a string', () => {
        expect(strings.excerpt('Just wow', 4)).toEqual('Just...');
    });

    it('excerpt should extract all the characters from a string if the provided number of characters to be extracted is more than the number of characters', () => {
        expect(strings.excerpt('wow', 10)).toEqual('wow');
    });

    it('excerpt should return the string if the length parameter is not a number', () => {
        expect(strings.excerpt('just wow', 'random')).toEqual('just wow');
    });

    /* sanitize */
    it('sanitize should return a normal string as dash case', () => {
        expect(strings.sanitize('Just    wow')).toEqual('just-wow');
    });

    it('sanitize should return a string with special characters as dash case without special characters', () => {
        expect(strings.sanitize('*JuST *#wow#')).toEqual('just-wow');
    });

    /* capitalizeFirst */
    it('capitalizeFirst should capitalize the first letter of a string', () => {
        expect(strings.capitalizeFirst('just wow')).toEqual('Just wow');
    });

    it('capitalizeFirst should return the param if it is not a string', () => {
        expect(strings.capitalizeFirst(1.1)).toEqual(1.1);
    });

    /* capitalizeEach */
    it('capitalizeEach should capitalize the first letter of a string', () => {
        expect(strings.capitalizeEach('just wow')).toEqual('Just Wow');
    });

    it('capitalizeEach should return the param if it is not a string', () => {
        expect(strings.capitalizeEach(1)).toEqual(1);
    });

    /* concat */
    it('concat should return the param value if only one parameter(string) is provided', () => {
        expect(strings.concat('hello')).toEqual('hello');
    });

    it('concat should return the param value if only one parameter(integer) is provided', () => {
        expect(strings.concat(5)).toEqual('5');
    });

    it('concat should return concatenation of all param values(string)', () => {
        expect(strings.concat('hello', ' ', 'world', '!!!')).toEqual('hello world!!!');
    });

    it('concat should return concatenation of all param values(string and integer)', () => {
        expect(strings.concat('I have got', ' ', 4, ' ', 'apples.')).toEqual('I have got 4 apples.');
    });

    it('concat should return concatenation of all param values(integer)', () => {
        expect(strings.concat(1, 2, 3, 4)).toEqual('1234');
    });

    it('concat should return empty string if no params provided', () => {
        expect(strings.concat()).toEqual('');
    });

    it('concat should return concatenation of boolean value if boolean params provided', () => {
        expect(strings.concat(true, false, true, false)).toEqual('truefalsetruefalse');
    });

    it('concat should return concatenation of boolean value if null params provided', () => {
        expect(strings.concat(null, 'abc')).toEqual('nullabc');
    });

    /* join */
    it('join should join the values of array using the delimeter provided', () => {
        expect(strings.join(['Hands', 'legs', 'feet'], ' & ')).toEqual('Hands & legs & feet');
    });

    it('join should return the first value of array if size of the array is equals to 1', () => {
        expect(strings.join(['Hands'], ' & ')).toEqual('Hands');
    });

    it('join should return empty string if size of array is zero', () => {
        expect(strings.join([], ' & ')).toEqual('');
    });

    it('join should return empty string if first parameter is null', () => {
        expect(strings.join(null, ' & ')).toEqual('');
    });

    it('join should return empty string if both the array and delimeter is null', () => {
        expect(strings.join(null, null)).toEqual('');
    });

    it('join should return concatenation of elements of array using null if the delimeter is null', () => {
        expect(strings.join(['Hands', 'legs', 'feet'], null)).toEqual('Handsnulllegsnullfeet');
    });

    it('join should return concatenation of elements of array using false if the delimeter is false', () => {
        expect(strings.join(['Hands', 'legs', 'feet'], false)).toEqual('Handsfalselegsfalsefeet');
    });

});
