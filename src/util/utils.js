/**
 * Check if param is a function.
 *
 * @param thing
 * @returns boolean
 */
export function isFunction(thing) {
    return (typeof thing === 'function');
}

/**
 * Check if param is a string.
 *
 * @param thing
 * @returns boolean
 */
export function isString(thing) {
    return (typeof thing === 'string');
}

/**
 * Check if param is undefined.
 *
 * @param thing
 * @returns boolean
 */
export function isUndefined(thing) {
    return (typeof thing === 'undefined');
}

/**
 * Check if param is not undefined.
 *
 * @param thing
 * @returns boolean
 */
export function isDefined(thing) {
    return !isUndefined(thing);
}

/**
 * Check if param is an object.
 *
 * @param thing
 * @returns boolean
 */
export function isObject(thing) {
    return (typeof thing === 'object');
}

/**
 * Check if param is an array.
 *
 * @param thing
 * @returns boolean
 */
export function isArray(thing) {
    return (Object.prototype.toString.call(thing) === '[object Array]');
}

/**
 * Check if the value is numeric.
 *
 * @param value
 * @returns {boolean}
 */
export function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
