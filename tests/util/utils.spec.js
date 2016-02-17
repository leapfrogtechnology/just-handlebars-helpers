import * as utils from '../../src/util/utils.js';

describe('utils', () => {

    /* isFunction */
    it('isFunction should return true if param is a function', () => {
        expect(utils.isFunction(parseInt)).toEqual(true);
    });

    it('isFunction should return false if param is not a function', () => {
        expect(utils.isFunction(window)).toEqual(false);
    });

    /* isUndefined */
    it('isUndefined should return true if param is undefined', () => {
        expect(utils.isUndefined(undefined)).toEqual(true);
    });

    it('isUndefined should return false if param is not undefined', () => {
        expect(utils.isUndefined('notUndefined')).toEqual(false);
    });

    /* isDefined */
    it('isDefined should return true if param is not undefined', () => {
        expect(utils.isDefined('notUndefined')).toEqual(true);
    });

    it('isDefined should return false if param is defined', () => {
        expect(utils.isDefined(undefined)).toEqual(false);
    });

    /* isObject */
    it('isObject should return true if param is an object', () => {
        expect(utils.isObject(window)).toEqual(true);
    });

    it('isObject should return false if param is not an object', () => {
        expect(utils.isObject(parseInt)).toEqual(false);
    });

    /* isArray */
    it('isArray should return true if param passed is an array', () => {
        expect(utils.isArray([5, 6, 7])).toEqual(true);
    });

    it('isArray should return false if param is a normal object', () => {
        expect(utils.isArray({foo:'bar'})).toEqual(false);
    });

    it('isArray should return false if param is a scalar value', () => {
        expect(utils.isArray(567)).toEqual(false);
    });
});
