import * as math from '../../src/helpers/math';

describe('math', () => {

    /* eq */
    it('eq should return true if provided params are equal and are of same type', () => {
        expect(math.eq('1', '1')).toEqual(true);
    });

    it('eq should return false if provided params are equal but not of same type', () => {
        expect(math.eq('1', 1)).toEqual(false);
    });

    /* eqw */
    it('eqw should return true if provided params are equal and are of same type', () => {
        expect(math.eqw('1', '1')).toEqual(true);
    });

    it('eq should also return true if provided params are equal but not of same type', () => {
        expect(math.eqw('1', 1)).toEqual(true);
    });

    /* lt */
    it('lt should return true if param1 is smaller than param2', () => {
        expect(math.lt(1, 2)).toEqual(true);
    });

    it('lt should return false if param1 is equal to param2', () => {
        expect(math.lt(1, 1)).toEqual(false);
    });

    it('lt should return false if param2 is smaller than param1', () => {
        expect(math.lt('31', '11')).toEqual(false);   // Lexicographical Order
    });

    /* lte */
    it('lte should return true if param1 is smaller than param2', () => {
        expect(math.lte(1, 2)).toEqual(true);
    });

    it('lte should return true if param1 is equal to param2', () => {
        expect(math.lte(1, 1)).toEqual(true);
    });

    it('lte should return false if param2 is smaller than param1', () => {
        expect(math.lte(2, 1)).toEqual(false);
    });

    /* gt */
    it('gt should return true if param1 is greater than param2', () => {
        expect(math.gt(2, 1)).toEqual(true);
    });

    it('gt should return false if param1 is equal to param2', () => {
        expect(math.gt(1, 1)).toEqual(false);
    });

    it('gt should return false if param2 is greater than param1', () => {
        expect(math.gt('11', '31')).toEqual(false);   // Lexicographical Order
    });

    /* gte */
    it('gte should return true if param1 is greater than param2', () => {
        expect(math.gte(2, 1)).toEqual(true);
    });

    it('gte should return true if param1 is equal to param2', () => {
        expect(math.gte(1, 1)).toEqual(true);
    });

    it('gte should return false if param2 is greater than param1', () => {
        expect(math.gte(1, 2)).toEqual(false);   // Lexicographical Order
    });

    /* ifx */
    it('ifx should return value1 if the condition holds true', () => {
        expect(math.ifx(2 > 1, 'value 1', 'value 2')).toEqual('value 1');
    });

    it('ifx should return value2 if the condition results to false', () => {
        expect(math.ifx(2 < 1, 'value 1', 'value 2')).toEqual('value 2');
    });

    /* not */
    it('not should return true if false is passed', () => {
        expect(math.not(false)).toEqual(true);
    });

    it('not should return false if true is passed', () => {
        expect(math.not(true)).toEqual(false);
    });

    /* empty */
    it('empty should return true for an empty array', () => {
        expect(math.empty([])).toEqual(true);
    });

    it('empty should return false for a non-empty array', () => {
        expect(math.empty([5, 6, 7])).toEqual(false);
    });

});
