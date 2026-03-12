import { isFunction, isObject, isString, isArray, isUndefined } from '../util/utils';

/**
 * Extract a few characters from a string. Default number of characters is 50.
 *
 * @example
 *      {{excerpt 'Just Wow' 4}}    => 'Just'
 *
 * @param {string} string
 * @param {int} length
 * @param {any} args
 * @returns {string}
 */
export function excerpt(string, length, ...args) {
  length = parseInt(length) || 50;
  
  let params = {};
  if (isObject(args[0]) && isObject(args[0].hash)) {
    params = args[0].hash;
  }
  let suffix = !isUndefined(params.suffix) ? params.suffix : '...';

  if (typeof (string) !== 'string' || typeof (length) !== 'number') {
    return string;
  }

  if (string.length < length) {
    return string;
  }

  return string.slice(0, length) + suffix;
}

/**
 * Convert a string to url friendly dash-case string removing special characters.
 *
 * @example
 *      {{sanitize 'JuSt #Wow'}}    => 'just-wow'
 *
 * @param {string} string
 * @returns {string}
 */
export function sanitize(string) {
  string = string.replace(/[^\w\s]/gi, '').trim();

  return string.replace(/\s+/, '-').toLowerCase();
}

/**
 * Replace \n with <br> tags.
 *
 * @example
 *     {{newLineToBr 'newLineToBr helper \n is very \n useful.'}}    => newLineToBr helper <br> is very <br> useful.
 *
 * @param {string} string
 * @returns {string}
 */
export function newLineToBr(string) {
  return string.replace(/\r?\n|\r/g, '<br>');
}

/**
 * Capitalize each letter of a string.
 *
 * @example
 *      {{capitalizeEach 'just wow'}}   => 'Just Wow'
 *
 * @param {string} string
 * @returns {string}
 */
export function capitalizeEach(string) {
  if (typeof string === 'string') {
    return string.toLowerCase().replace(/\w\S*/g, function (match) {
      return match.charAt(0).toUpperCase() + match.substr(1);
    });
  }

  return string;
}

/**
 * Capitalize the first letter of a string.
 *
 * @example
 *      {{capitalizeFirst 'just wow'}}   => 'Just wow'
 *
 * @param {string} string
 * @returns {string}
 */
export function capitalizeFirst(string) {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
}

/**
 * A sprintf helper to be used in the handlebars templates that supports arbitrary parameters.
 *
 * Make sure you have the sprintf-js (https://github.com/alexei/sprintf.js) package is available
 * either as a node module or you have sprintf/vsprintf functions available in the global scope
 * from that package.
 *
 * Check https://github.com/alexei/sprintf.js for more information.
 *
 * @example
 *      {{sprintf '%s %s!' 'Hello' 'Kabir' }}
 *      {{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
 *      {{sprintf '%(greeting)s %(name)s! How are you?' obj }}
 *      {{sprintf '%(greeting)s %(name)s! ' greeting='Hello' name='Kabir'}}
 *
 * @param {string} format
 * @param {any} args
 * @returns {string}
 */
export function sprintf(format, ...args) {
  // Check if the vsprintf function is available globally
  // if it's not available then try to require() it
  let _vsprintf = global.vsprintf;

  if (!isFunction(_vsprintf)) {
    _vsprintf = require('sprintf-js').vsprintf;
  }

  // Normalize all the parameters before passing it to the
  // sprintf/vsprintf function
  const params = [];

  args.forEach(arg => {
    if (isObject(arg) && isObject(arg.hash)) {
      arg = arg.hash;
    }

    params.push(arg);
  });

  return (params.length > 0) ? _vsprintf(format, params) : format;
}

/**
 * Changes the string to lowercase.
 *
 * @example
 *    {{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
 *
 * @param {string} param
 * @returns {string}
 */
export function lowercase(param) {
  return isString(param) ? param.toLowerCase() : param;
}

/**
 * Changes the string to uppercase.
 *
 * @example
 *    {{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
 *
 * @param {string} param
 * @returns {string}
 */
export function uppercase(param) {
  return isString(param) ? param.toUpperCase() : param;
}

/**
 * Get the first element of a collection/array.
 *
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{first someArray}}   => 'David'
 *
 * @param {array} collection
 * @returns {string}
 */
export function first(collection) {
  if (!isArray(collection) || collection.length === 0) {
    return '';
  }

  return collection[0];
}

/**
 * Get the last element of a collection/array.
 *
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{last someArray}}   => 'Jones'
 *
 * @param {array} collection
 * @returns {string}
 */
export function last(collection) {
  if (!isArray(collection) || collection.length === 0) {
    return '';
  }

  return collection[collection.length - 1];
}

/**
 * Concat two or more strings.
 *
 * @example
 *    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
 *
 * @param {any} params
 * @returns {string}
 */
export function concat(...params) {
  // Ignore the object appended by handlebars.
  if (isObject(params[params.length - 1])) {
    params.pop();
  }

  return params.join('');
}

/**
 * Join the elements of an array using a delimeter.
 *
 * @example
 *    var someArray = ['Hands', 'legs', 'feet'];
 *    {{join someArray ' & '}}   => 'Hands & legs & feet'
 *
 * @param  {array} params
 * @param  {string} delimiter
 * @returns {string|boolean}
 */
export function join(params, delimiter) {
  if (!delimiter || isObject(delimiter)) {
    delimiter = '';
  }

  if (!isArray(params)) {
    return false;
  }

  return params.join(delimiter);
}
