import { isArray, isObject } from '../util/utils';

/**
 * Determine whether or not two values are equal (===).
 * @example
 *      {{eq '3' 3}}    => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function eq(value1, value2) {
  return (value1 === value2);
}

/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 * @example
 *      {{eqw '3' 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function eqw(value1, value2) {
  return (value1 == value2);
}

/**
 * Determine whether or not two values are not equal (!==).
 * @example
 *      {{neq 4 3}}    => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function neq(value1, value2) {
  return (value1 !== value2);
}

/**
 * Determine whether or not two values are not equal (!=) weak checking.
 * @example
 *      {{neqw '3' 3}}    => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function neqw(value1, value2) {
  return (value1 != value2);
}

/**
 * Check for less than condition (a < b).
 * @example
 *      {{lt 2 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function lt(value1, value2) {
  return (value1 < value2);
}

/**
 * Check for less than or equals condition (a <= b).
 * @example
 *      {{lte 2 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function lte(value1, value2) {
  return (value1 <= value2);
}

/**
 * Check for greater than condition (a > b).
 * @example
 *      {{gt 2 3}}   => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function gt(value1, value2) {
  return (value1 > value2);
}

/**
 * Check for greater than or equals condition (a >= b).
 * @example
 *      {{gte 3 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
export function gte(value1, value2) {
  return (value1 >= value2);
}

/**
 * Helper to imitate the ternary conditional operator ?:
 *
 * @example
 *      {{ifx true 'Foo' 'Bar'}}    => Foo
 *      {{ifx false 'Foo' 'Bar'}}   => Foo
 *
 * @param condition
 * @param value1    Value to return when the condition holds true
 * @param value2    Value to return when the condition is false (Optional)
 * @returns mixed
 */
export function ifx(condition, value1, value2) {
  // Check if user has omitted the last parameter
  // if that's the case, it would be the handlebars's options object
  // which it sends always as the last parameter.
  if (isObject(value2) && value2.name === 'ifx' && value2.hasOwnProperty('hash')) {
    // This means the user has skipped the last parameter,
    // so we should return an empty string ('') in the else case instead.
    value2 = '';
  }

  return condition ? value1 : value2;
}

/**
 * Logical NOT of any expression.
 * @example
 *      {{not true}}    => false
 *      {{not false}}   => true
 *
 * @param expression
 * @returns boolean
 */
export function not(expression) {
  return !expression;
}

/**
 * Check if an array is empty.
 * @example
 *      {{empty array}} => true | false
 *
 * @param array
 * @returns boolean
 */
export function empty(array) {
  if (!isArray(array)) {
    return true;
  }

  return (array.length === 0);
}

/**
 * Determine the length of an array.
 * @example
 *      {{count array}} =>  false | array.length
 *
 * @param array
 * @returns boolean | number
 */
export function count(array) {
  if (!isArray(array)) {
    return false;
  }

  return array.length;
}

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
export function and(...params) {
  // Ignore the object appended by handlebars.
  if (isObject(params[params.length - 1])) {
    params.pop();
  }

  for (let i = 0; i < params.length; i++) {
    if (!params[i]) {
      return false;
    }
  }

  return true;
}

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
export function or(...params) {
  // Ignore the object appended by handlebars.
  if (isObject(params[params.length - 1])) {
    params.pop();
  }

  for (let i = 0; i < params.length; i++) {
    if (params[i]) {
      return true;
    }
  }

  return false;
}

/**
 * Returns the first non-falsy value from the parameter list.
 * Works quite similar to the SQL's COALESCE() function, but unlike this
 * checks for the first non-false parameter.
 *
 * @example
 *     var fullName = 'Foo Bar', nickName = 'foob';
 *     {{coalesce fullName nickName 'Unknown'}}    => 'Foo Bar'
 *
 *     var fullName = '', nickName = 'foob';
 *     {{coalesce fullName nickName 'Unknown'}}    => 'foob'
 *
 * @param params
 * @returns mixed
 */
export function coalesce(...params) {
  // Ignore the object appended by handlebars.
  if (isObject(params[params.length - 1])) {
    params.pop();
  }

  for (let i = 0; i < params.length; i++) {
    if (params[i]) {
      return params[i];
    }
  }

  return params.pop();
}

/**
 * Returns boolean if the array contains the element strictly or non-strictly.
 * @example
 *     var array = [1, 2, 3, 4];
 *     var value1 = 2, value2 = 10, value3 = '3';
 *     {{includes array value1}}        => true
 *     {{includes array value2}}        => false
 *     {{includes array value3}}        => false
 *     {{includes array value3 false}}  => false
 *
 * @param array
 * @param value
 * @returns boolean
 */
export function includes(array, value, strict = true) {
  if (!isArray(array) || array.length === 0) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if ((strict && array[i] === value) || (!strict && array[i] == value)) {
      return true;
    }
  }

  return false;
}
