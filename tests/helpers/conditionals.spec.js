import * as conditionals from '../../src/helpers/conditionals';

describe('conditionals', () => {

    /* eq */
    it('eq should return true if provided params are equal and are of same type', () => {
        expect(conditionals.eq('1', '1')).toEqual(true);
    });

    it('eq should return false if provided params are equal but not of same type', () => {
        expect(conditionals.eq('1', 1)).toEqual(false);
    });

    /* eqw */
    it('eqw should return true if provided params are equal and are of same type', () => {
        expect(conditionals.eqw('1', '1')).toEqual(true);
    });

    it('eq should also return true if provided params are equal but not of same type', () => {
        expect(conditionals.eqw('1', 1)).toEqual(true);
    });

    /* neq */
    it('neq should return true if provided params are not equal', () => {
        expect(conditionals.neq(4, 3)).toEqual(true);
    });

    it('neq should return false if provided params are equal and of same type', () => {
        expect(conditionals.neq(3, 3)).toEqual(false);
    });

    it('neq should return true if provided params are equal but of different types', () => {
        expect(conditionals.neq('3', 3)).toEqual(true);
    });

    /* neqw */
    it('neqw should return true if provided params are not equal', () => {
        expect(conditionals.neqw(4, 3)).toEqual(true);
    });

    it('neqw should return false if provided params are equal and of same type', () => {
        expect(conditionals.neqw(3, 3)).toEqual(false);
    });

    it('neqw should return false if provided params are equal but of different types', () => {
        expect(conditionals.neqw('3', 3)).toEqual(false);
    });

    /* lt */
    it('lt should return true if param1 is smaller than param2', () => {
        expect(conditionals.lt(1, 2)).toEqual(true);
    });

    it('lt should return false if param1 is equal to param2', () => {
        expect(conditionals.lt(1, 1)).toEqual(false);
    });

    it('lt should return false if param2 is smaller than param1', () => {
        expect(conditionals.lt('31', '11')).toEqual(false); // Lexicographical Order
    });

    /* lte */
    it('lte should return true if param1 is smaller than param2', () => {
        expect(conditionals.lte(1, 2)).toEqual(true);
    });

    it('lte should return true if param1 is equal to param2', () => {
        expect(conditionals.lte(1, 1)).toEqual(true);
    });

    it('lte should return false if param2 is smaller than param1', () => {
        expect(conditionals.lte(2, 1)).toEqual(false);
    });

    /* gt */
    it('gt should return true if param1 is greater than param2', () => {
        expect(conditionals.gt(2, 1)).toEqual(true);
    });

    it('gt should return false if param1 is equal to param2', () => {
        expect(conditionals.gt(1, 1)).toEqual(false);
    });

    it('gt should return false if param2 is greater than param1', () => {
        expect(conditionals.gt('11', '31')).toEqual(false); // Lexicographical Order
    });

    /* gte */
    it('gte should return true if param1 is greater than param2', () => {
        expect(conditionals.gte(2, 1)).toEqual(true);
    });

    it('gte should return true if param1 is equal to param2', () => {
        expect(conditionals.gte(1, 1)).toEqual(true);
    });

    it('gte should return false if param2 is greater than param1', () => {
        expect(conditionals.gte(1, 2)).toEqual(false); // Lexicographical Order
    });

    /* ifx */
    it('ifx should return value1 if the condition holds true', () => {
        expect(conditionals.ifx(2 > 1, 'value 1', 'value 2')).toEqual('value 1');
    });

    it('ifx should return value2 if the condition results to false', () => {
        expect(conditionals.ifx(2 < 1, 'value 1', 'value 2')).toEqual('value 2');
    });

    /* not */
    it('not should return true if false is passed', () => {
        expect(conditionals.not(false)).toEqual(true);
    });

    it('not should return false if true is passed', () => {
        expect(conditionals.not(true)).toEqual(false);
    });

    /* empty */
    it('empty should return true for an empty array', () => {
        expect(conditionals.empty([])).toEqual(true);
    });

    it('empty should return false for a non-empty array', () => {
        expect(conditionals.empty([5, 6, 7])).toEqual(false);
    });

    /* count */
    it('count should return the length of an array', () => {
        expect(conditionals.count([5, 6, 9])).toEqual(3);
    });

    /* count */
    it('count should return false if param is not an array', () => {
        expect(conditionals.count({
            foo: 'bar'
        })).toEqual(false);
    });

});
