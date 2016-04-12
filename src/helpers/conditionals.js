import {isArray, isObject} from '../util/utils';

export default {

    /**
    * Determine whether or not two values are equal (===).
    * @example
    *      {{eq '3' 3}}    => false
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    eq: (value1, value2) => {
        return (value1 === value2);
    },

    /**
    * Determine whether or not two values are equal (==) i.e weak checking.
    * @example
    *      {{eqw '3' 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    eqw: (value1, value2) => {
        return (value1 == value2);
    },

    /**
    * Determine whether or not two values are not equal (!==).
    * @example
    *      {{neq 4 3}}    => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    neq: (value1, value2) => {
        return (value1 !== value2);
    },

    /**
    * Determine whether or not two values are not equal (!=) weak checking.
    * @example
    *      {{neqw '3' 3}}    => false
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    neqw: (value1, value2) => {
        return (value1 != value2);
    },

    /**
    * Check for less than condition (a < b).
    * @example
    *      {{lt 2 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    lt: (value1, value2) => {
        return (value1 < value2);
    },

    /**
    * Check for less than or equals condition (a <= b).
    * @example
    *      {{lte 2 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    lte: (value1, value2) => {
        return (value1 <= value2);
    },

    /**
    * Check for greater than condition (a > b).
    * @example
    *      {{gt 2 3}}   => false
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    gt: (value1, value2) => {
        return (value1 > value2);
    },

    /**
    * Check for greater than or equals condition (a >= b).
    * @example
    *      {{gte 3 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    gte: (value1, value2) => {
        return (value1 >= value2);
    },

    /**
    * Helper to imitate the ternary conditional operator ?:
    * @example
    *      {{ifx true 'Foo' 'Bar'}}    => Foo
    *      {{ifx false 'Foo' 'Bar'}}   => Foo
    *
    * @param condition
    * @param value1
    * @param value2
    * @returns value1 | value2
    */
    ifx: (condition, value1, value2) => {
        return !!condition ? value1 : value2;
    },

    /**
    * Logical NOT of any expression.
    * @example
    *      {{not true}}    => false
    *      {{not false}}   => true
    *
    * @param expression
    * @returns boolean
    */
    not: function (expression) {
        return !expression;
    },

    /**
    * Check if an array is empty.
    * @example
    *      {{empty array}} => true | false
    *
    * @param array
    * @returns boolean
    */
    empty: (array) => {
        if (!isArray(array)) {
            return true;
        }

        return (array.length === 0);
    },

    /**
    * Determine the length of an array.
    * @example
    *      {{count array}} =>  false | array.length
    *
    * @param array
    * @returns boolean | number
    */
    count: (array) => {
        if (!isArray(array)) {
            return false;
        }

        return array.length;
    },

    /**
    * Returns the boolean AND of two or more parameters passed i.e
    * it is true iff all the parameters are true.
    *
    * @example
    *     var value1 = value2 = true;
    *     {{and value1 value2}}    => true
    *
    *     var value1 = false, value2 = true;
    *     {{and value1 value2}}    => false
    *
    * @param params
    * @returns boolean
    */
    and: (...params) => {
        // Ignore the object appended by handlebars.
        if (isObject(params[params.length - 1])) {
            params.pop();
        }

        for (var index in params) {
            if (!params[index]) {
                return false;
            }
        }

        return true;
    },

    /**
    * Returns the boolean OR of two or more parameters passed i.e
    * it is true if any of the parameters is true.
    *
    * @example
    *     var value1 = true, value2 = false;
    *     {{or value1 value2}}    => true
    *
    *     var value = value2 = false;
    *     {{or value1 value2}}    => false
    *
    * @param params
    * @returns boolean
    */
    or: (...params) => {
        // Ignore the object appended by handlebars.
        if (isObject(params[params.length - 1])) {
            params.pop();
        }

        for (var index in params) {
            if (params[index]) {
                return true;
            }
        }

        return false;
    }
};
