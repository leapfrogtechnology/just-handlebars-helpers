/**
 * Check if param is a function.
 *
 * @param thing
 * @returns boolean
 */
function isFunction(thing) {
    return (typeof thing === 'function');
}

/**
 * Check if param is a string.
 *
 * @param thing
 * @returns boolean
 */
function isString(thing) {
    return (typeof thing === 'string');
}

/**
 * Check if param is undefined.
 *
 * @param thing
 * @returns boolean
 */
function isUndefined(thing) {
    return (typeof thing === 'undefined');
}

/**
 * Check if param is not undefined.
 *
 * @param thing
 * @returns boolean
 */
function isDefined(thing) {
    return !isUndefined(thing);
}

/**
 * Check if param is an object.
 *
 * @param thing
 * @returns boolean
 */
function isObject(thing) {
    return (typeof thing === 'object');
}

/**
 * Check if param is an array.
 *
 * @param thing
 * @returns boolean
 */
function isArray(thing) {
    return (Object.prototype.toString.call(thing) === '[object Array]');
}

/**
 * Remove decimal place if the decimal value is empty.
 *
 * @param value
 * @returns {*}
 */
function precision(value) {
    return value % 1 === 0 ? 0 : null;
}

export {isFunction, isUndefined, isDefined, isObject, isArray, isString, precision};
