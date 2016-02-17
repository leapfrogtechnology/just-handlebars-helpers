import * as helpers from '../src/helpers.js';

describe('helpers', () => {

    /* excerpt */
    it('excerpt should extract all the characters from a string if it is less than 50 characters by default', () => {
        expect(helpers.excerpt('just wow')).toEqual('just wow');
    });

    it('excerpt should extract 50 characters from a string if it has more than 50 characters by default', () => {
        expect(helpers.excerpt('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))
            .toEqual('Lorem ipsum dolor sit amet, consectetur adipisicin...');
    });

    it('excerpt should extract provided number of characters from a string', () => {
        expect(helpers.excerpt('Just wow', 4)).toEqual('Just...');
    });

    it('excerpt should extract all the characters from a string if the provided number of characters to be extracted is more than the number of characters', () => {
        expect(helpers.excerpt('wow', 10)).toEqual('wow');
    });

    it('excerpt should return the string if the length parameter is not a number', () => {
        expect(helpers.excerpt('just wow', 'random')).toEqual('just wow');
    });

    /* dashCase */
    it('dashCase should return a normal string as dash case', () => {
        expect(helpers.dashCase('Just    wow')).toEqual('just-wow');
    });

    it('dashCase should return a string with special characters as dash case without special characters', () => {
        expect(helpers.dashCase('*JuST *#wow#')).toEqual('just-wow');
    });

    /* capitalizeFirst */
    it('capitalizeFirst should capitalize the first letter of a string', () => {
        expect(helpers.capitalizeFirst('just wow')).toEqual('Just wow');
    });

    it('capitalizeFirst should return the param if it is not a string', () => {
        expect(helpers.capitalizeFirst(1.1)).toEqual(1.1);
    });

    /* capitalizeEach */
    it('capitalizeEach should capitalize the first letter of a string', () => {
        expect(helpers.capitalizeEach('just wow')).toEqual('Just Wow');
    });

    it('capitalizeEach should return the param if it is not a string', () => {
        expect(helpers.capitalizeEach(1)).toEqual(1);
    });

    /* showIf */
    it('showIf should return empty if param is false', () => {
        expect(helpers.showIf(false)).toEqual('hidden');
    });

    it('showIf should return hidden if param is true', () => {
        expect(helpers.showIf(true)).toEqual('');
    });

    it('showIf should return empty for a random param', () => {
        expect(helpers.showIf('random')).toEqual('');
    });

    /* hideIf */
    it('hideIf should return empty if param is false', () => {
        expect(helpers.hideIf(false)).toEqual('');
    });

    it('hideIf should return hidden if param is true', () => {
        expect(helpers.hideIf(true)).toEqual('hidden');
    });

    // TODO: Random stuff should not return hidden
    it('hideIf should return hidden for a random param', () => {
        expect(helpers.hideIf('random')).toEqual('hidden');
    });

    /* selectedIf */
    it('selectedIf should return empty if param is false', () => {
        expect(helpers.selectedIf(false)).toEqual('');
    });

    it('selectedIf should return hidden if param is true', () => {
        expect(helpers.selectedIf(true)).toEqual('selected');
    });

    it('selectedIf should return empty for a random param', () => {
        expect(helpers.selectedIf('random')).toEqual('selected');
    });

    /* checkedIf */
    it('checkedIf should return empty if param is false', () => {
        expect(helpers.checkedIf(false)).toEqual('');
    });

    it('checkedIf should return hidden if param is true', () => {
        expect(helpers.checkedIf(true)).toEqual('checked');
    });

    it('checkedIf should return empty for a random param', () => {
        expect(helpers.checkedIf('random')).toEqual('checked');
    });

    /* eq */
    it('eq should return true if provided params are equal and are of same type', () => {
        expect(helpers.eq('1', '1')).toEqual(true);
    });

    it('eq should return false if provided params are equal but not of same type', () => {
        expect(helpers.eq('1', 1)).toEqual(false);
    });

    /* eqw */
    it('eqw should return true if provided params are equal and are of same type', () => {
        expect(helpers.eqw('1', '1')).toEqual(true);
    });

    it('eq should also return true if provided params are equal but not of same type', () => {
        expect(helpers.eqw('1', 1)).toEqual(true);
    });

    /* lt */
    it('lt should return true if param1 is smaller than param2', () => {
        expect(helpers.lt(1, 2)).toEqual(true);
    });

    it('lt should return false if param1 is equal to param2', () => {
        expect(helpers.lt(1, 1)).toEqual(false);
    });

    it('lt should return false if param2 is smaller than param1', () => {
        expect(helpers.lt('31', '11')).toEqual(false);   // Lexicographical Order
    });

    /* lte */
    it('lte should return true if param1 is smaller than param2', () => {
        expect(helpers.lte(1, 2)).toEqual(true);
    });

    it('lte should return true if param1 is equal to param2', () => {
        expect(helpers.lte(1, 1)).toEqual(true);
    });

    it('lte should return false if param2 is smaller than param1', () => {
        expect(helpers.lte(2, 1)).toEqual(false);
    });

    /* gt */
    it('gt should return true if param1 is greater than param2', () => {
        expect(helpers.gt(2, 1)).toEqual(true);
    });

    it('gt should return false if param1 is equal to param2', () => {
        expect(helpers.gt(1, 1)).toEqual(false);
    });

    it('gt should return false if param2 is greater than param1', () => {
        expect(helpers.gt('11', '31')).toEqual(false);   // Lexicographical Order
    });

    /* gte */
    it('gte should return true if param1 is greater than param2', () => {
        expect(helpers.gte(2, 1)).toEqual(true);
    });

    it('gte should return true if param1 is equal to param2', () => {
        expect(helpers.gte(1, 1)).toEqual(true);
    });

    it('gte should return false if param2 is greater than param1', () => {
        expect(helpers.gte(1, 2)).toEqual(false);   // Lexicographical Order
    });

    /* ifx */
    it('ifx should return value1 if the condition holds true', () => {
        expect(helpers.ifx(2 > 1, 'value 1', 'value 2')).toEqual('value 1');
    });

    it('ifx should return value2 if the condition results to false', () => {
        expect(helpers.ifx(2 < 1, 'value 1', 'value 2')).toEqual('value 2');
    });

    /* not */
    it('not should return true if false is passed', () => {
        expect(helpers.not(false)).toEqual(true);
    });

    it('not should return false if true is passed', () => {
        expect(helpers.not(true)).toEqual(false);
    });

    /* empty */
    it('empty should return true for an empty array', () => {
        expect(helpers.empty([])).toEqual(true);
    });

    it('empty should return false for a non-empty array', () => {
        expect(helpers.empty([5, 6, 7])).toEqual(false);
    });

});
