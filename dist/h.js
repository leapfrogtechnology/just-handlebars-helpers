(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Note: ES6 export default would export the H class in 'default' key so we have to use that
module.exports = require('./lib/H.js').default;

},{"./lib/H.js":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Utils


// Helpers


var _utils = require('./util/utils');

var _html = require('./helpers/html');

var html = _interopRequireWildcard(_html);

var _math = require('./helpers/math');

var math = _interopRequireWildcard(_math);

var _strings = require('./helpers/strings');

var strings = _interopRequireWildcard(_strings);

var _datetime = require('./helpers/datetime');

var datetime = _interopRequireWildcard(_datetime);

var _formatters = require('./helpers/formatters');

var formatters = _interopRequireWildcard(_formatters);

var _conditionals = require('./helpers/conditionals');

var conditionals = _interopRequireWildcard(_conditionals);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var H = function () {
  function H() {
    _classCallCheck(this, H);
  }

  _createClass(H, null, [{
    key: 'registerHelpers',
    value: function registerHelpers(handlebars) {

      handlebars = handlebars || global.Handlebars;

      if (!(0, _utils.isObject)(handlebars)) {
        // In case, handlebars is not provided and it's not available
        // in the global namespace as well throw the error and halt.
        throw new Error('Handlebars not loaded');
      }

      // Helpers list
      var helpers = [math, html, strings, conditionals, datetime, formatters];

      helpers.forEach(function (helper) {
        // Register all the helper functions to Handlebars
        for (var name in helper) {
          handlebars.registerHelper(name, helper[name]);
        }
      });
    }
  }]);

  return H;
}();

exports.default = H;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./helpers/conditionals":3,"./helpers/datetime":4,"./helpers/formatters":5,"./helpers/html":6,"./helpers/math":7,"./helpers/strings":8,"./util/utils":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eq = eq;
exports.eqw = eqw;
exports.neq = neq;
exports.neqw = neqw;
exports.lt = lt;
exports.lte = lte;
exports.gt = gt;
exports.gte = gte;
exports.ifx = ifx;
exports.not = not;
exports.empty = empty;
exports.count = count;
exports.and = and;
exports.or = or;
exports.coalesce = coalesce;
exports.includes = includes;

var _utils = require('../util/utils');

/**
 * Determine whether or not two values are equal (===).
 * @example
 *      {{eq '3' 3}}    => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function eq(value1, value2) {
  return value1 === value2;
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
function eqw(value1, value2) {
  return value1 == value2;
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
function neq(value1, value2) {
  return value1 !== value2;
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
function neqw(value1, value2) {
  return value1 != value2;
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
function lt(value1, value2) {
  return value1 < value2;
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
function lte(value1, value2) {
  return value1 <= value2;
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
function gt(value1, value2) {
  return value1 > value2;
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
function gte(value1, value2) {
  return value1 >= value2;
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
function ifx(condition, value1, value2) {
  // Check if user has omitted the last parameter
  // if that's the case, it would be the handlebars's options object
  // which it sends always as the last parameter.
  if ((0, _utils.isObject)(value2) && value2.name === 'ifx' && value2.hasOwnProperty('hash')) {
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
function not(expression) {
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
function empty(array) {
  if (!(0, _utils.isArray)(array)) {
    return true;
  }

  return array.length === 0;
}

/**
 * Determine the length of an array.
 * @example
 *      {{count array}} =>  false | array.length
 *
 * @param array
 * @returns boolean | number
 */
function count(array) {
  if (!(0, _utils.isArray)(array)) {
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
function and() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  // Ignore the object appended by handlebars.
  if ((0, _utils.isObject)(params[params.length - 1])) {
    params.pop();
  }

  for (var i = 0; i < params.length; i++) {
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
function or() {
  for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  // Ignore the object appended by handlebars.
  if ((0, _utils.isObject)(params[params.length - 1])) {
    params.pop();
  }

  for (var i = 0; i < params.length; i++) {
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
function coalesce() {
  for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  // Ignore the object appended by handlebars.
  if ((0, _utils.isObject)(params[params.length - 1])) {
    params.pop();
  }

  for (var i = 0; i < params.length; i++) {
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
function includes(array, value) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!(0, _utils.isArray)(array) || array.length === 0) {
    return false;
  }

  for (var i = 0; i < array.length; i++) {
    if (strict && array[i] === value || !strict && array[i] == value) {
      return true;
    }
  }

  return false;
}
},{"../util/utils":9}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;

var _utils = require('../util/utils');

/**
 * A formatDate helper to format date using moment js.
 *
 * @example
 *      {{formatDate 'MM/DD/YYYY' date}}
 *
 * @param formatString based on moment.js
 * @param date
 * @return string
 */
function formatDate(formatString, date) {
  var moment = global.moment;

  if (!moment) {
    moment = (window.moment);
  }

  formatString = (0, _utils.isString)(formatString) ? formatString : '';

  return moment(date || new Date()).format(formatString);
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":9}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCurrency = formatCurrency;

var _utils = require('../util/utils');

/**
 * Format the currency according to the country.
 * @example
 *      {{formatCurrency 1234567.89 code='USD'}}  => $1,234,567.89
 *      {{formatCurrency 1234567.89 code='EUR'}}  => 1.234.567,89 €
 *      {{formatCurrency 1234567.89 code='EUR' locale="en"}}  => €1,234,567.89
 *
 * @param value
 * @param args
 */
function formatCurrency(value) {
  var currencyFormatter = global.OSREC && global.OSREC.CurrencyFormatter;
  var handlebars = global.Handlebars;

  if (!currencyFormatter) {
    currencyFormatter = (window.OSREC.CurrencyFormatter);
  }

  if (!handlebars) {
    handlebars = (window.Handlebars);
  }

  var params = {};

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if ((0, _utils.isObject)(args[0]) && (0, _utils.isObject)(args[0].hash)) {
    params = args[0].hash;
  }

  params.currency = !(0, _utils.isUndefined)(params.code) ? params.code : params.currency;

  if (!(0, _utils.isUndefined)(params.currency) && !(params.currency in currencyFormatter.symbols)) {
    console.error('Invalid currency code ' + params.currency + ' provided for helper `formatCurrency`.');

    return;
  }

  if (!(0, _utils.isNumeric)(value)) {
    return;
  }

  return new handlebars.SafeString(currencyFormatter.format(value, params));
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showIf = showIf;
exports.hideIf = hideIf;
exports.selectedIf = selectedIf;
exports.checkedIf = checkedIf;
exports.options = options;
/**
 * A showIf helper for showing any html element.
 * @example
 *      {{showIf true}}     => ''
 *
 * @param expression
 * @returns string
 */
function showIf(expression) {
  return expression ? '' : 'hidden';
}

/**
 * A hideIf helper for hiding any html element.
 * @example
 *      {{hideIf true}}     => 'hidden'
 *
 * @param expression
 * @returns string
 */
function hideIf(expression) {
  return expression ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdown and radio boxes.
 * @example
 *      {{selectedIf true}} =>  'selected'
 *
 * @param expression
 * @returns string
 */
function selectedIf(expression) {
  return expression ? 'selected' : '';
}

/**
 * A checkedIf helper for checkboxes.
 * @example
 *      {{checkedIf true}}  => 'checked'
 *
 * @param expression
 * @returns string
 */
function checkedIf(expression) {
  return expression ? 'checked' : '';
}

/**
 * An options helper for generating <option> list for <select> dropdowns.
 *
 * @example
 * A simple example:
 *
 *      const data = [
 *          {
 *              id: 1,
 *              description: 'Foo'
 *          },
 *          {
 *              id: 2,
 *              description: 'Bar'
 *          },
 *          {
 *              id: 3,
 *              description: 'Foo Bar'
 *          }
 *      ];
 *
 *      {{{options data selected="2"}}}
 *
 * will generate html like this:
 *
 *      <option value="1">Foo</option>
 *      <option value="2" selected>Bar</option>
 *      <option value="3">Foo Bar</option>
 *
 * @example
 * You can also override the default key names for 'id' & 'description'
 * using the 'id' & 'text' options in the helper.
 *
 *      const data = [
 *          {
 *              value: 1,
 *              text: 'New York'
 *          },
 *          {
 *              value: 2,
 *              text: 'London'
 *          }
 *      ];
 *
 *      {{{options data selected="1" id="value" text="text"}}}
 *
 * will generate html like this:
 *
 *      <option value="1" selected>New York</option>
 *      <option value="2">London</option>
 *
 */
function options(data, opts) {
  // The id & text for the <option>
  var id = opts.hash.id || 'id';
  var text = opts.hash.text || 'description';

  // The selection "id" of the <option>
  var selectedId = opts.hash.selected || null;

  return data.map(function (item) {
    var value = item[id] || '';
    var innerText = item[text] || '';
    var selected = value == selectedId ? ' selected' : '';

    return '<option value="' + value + '"' + selected + '>' + innerText + '</option>';
  }).join('\n');
}
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.difference = difference;
exports.ceil = ceil;
exports.floor = floor;
/**
 * A sum helper calculating the sum of two numbers.
 * @example
 *      {{sum 1 2}}     => 3
 *
 * @param value1
 * @param value2
 * @returns number
 */
function sum(value1, value2) {
  return Number(value1) + Number(value2);
}

/**
 * A difference helper calculating the difference of two numbers.
 * @example
 *      {{difference 5 2}}  => 3
 *
 * @param value1
 * @param value2
 * @returns number
 */
function difference(value1, value2) {
  return Number(value1) - Number(value2);
}

/**
 * A ceil helper to find the ceil value of the number.
 * @example
 *      {{ceil 5.6}}    => 6
 *
 * @param value
 * @returns number
 */
function ceil(value) {
  return Math.ceil(Number(value));
}

/**
 * A floor helper to find the floor value of the number.
 * @example
 *      {{floor 5.6}} => 5
 *
 * @param value
 * @returns number
 */
function floor(value) {
  return Math.floor(Number(value));
}
},{}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excerpt = excerpt;
exports.sanitize = sanitize;
exports.newLineToBr = newLineToBr;
exports.capitalizeEach = capitalizeEach;
exports.capitalizeFirst = capitalizeFirst;
exports.sprintf = sprintf;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.first = first;
exports.last = last;
exports.concat = concat;
exports.join = join;

var _utils = require('../util/utils');

/**
 * Extract a few characters from a string. Default number of characters is 50.
 * @example
 *      {{excerpt 'Just Wow' 4}}    => 'Just'
 *
 * @param string
 * @param length
 * @returns string
 */
function excerpt(string, length) {
  length = parseInt(length) || 50;

  if (typeof string !== 'string' || typeof length !== 'number') {
    return string;
  }

  if (string.length < length) {
    return string;
  }

  return string.slice(0, length) + '...';
}

/**
 * Convert a string to url friendly dash-case string removing special characters.
 * @example
 *      {{sanitize 'JuSt #Wow'}}    => 'just-wow'
 *
 * @param string
 * @returns string
 */
function sanitize(string) {
  string = string.replace(/[^\w\s]/gi, '').trim();

  return string.replace(/\s+/, '-').toLowerCase();
}

/**
 * Replace \n with <br> tags.
 * @example
 *     {{newLineToBr 'newLineToBr helper \n is very \n useful.'}}    => newLineToBr helper <br> is very <br> useful.
 *
 * @param  {string}
 * @return {string}
 */
function newLineToBr(string) {
  return string.replace(/\r?\n|\r/g, '<br>');
}

/**
 * Capitalize each letter of a string.
 * @example
 *      {{capitalizeEach 'just wow'}}   => 'Just Wow'
 *
 * @param string
 * @returns string
 */
function capitalizeEach(string) {
  if (typeof string === 'string') {
    return string.toLowerCase().replace(/\w\S*/g, function (match) {
      return match.charAt(0).toUpperCase() + match.substr(1);
    });
  }

  return string;
}

/**
 * Capitalize the first letter of a string.
 * @example
 *      {{capitalizeFirst 'just wow'}}   => 'Just wow'
 *
 * @param string
 * @returns string
 */
function capitalizeFirst(string) {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
}

/**
 * A sprintf helper to be used in the handlebars templates that supports arbitrary parameters.
 *
 * NOTE: This helper relies on sprintf() function provided by https://github.com/alexei/sprintf.js
 * So, make sure you have the sprintf-js package available either as a node module
 * or have sprintf/vsprintf functions available in the global scope from that package.
 *
 * Syntax:
 *      {{sprintf format arg1 arg2 arg3....}}
 *      {{sprintf format object}}
 *      {{sprintf format key1=value1 key2=value2...}}
 *
 *  @example
 *      {{sprintf '%s %s!' 'Hello' 'Kabir' }}
 *      {{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
 *      {{sprintf '%(greeting)s %(name)s! How are you?' obj }}
 *      {{sprintf '%(greeting)s %(name)s! ' greeting='Hello' name='Kabir'}}
 *
 * Check this https://github.com/alexei/sprintf.js for more information
 *
 * @param format
 * @param ...args
 * @returns string
 */
function sprintf(format) {

  // Check if the vsprintf function is available globally
  // if it's not available then try to require() it
  var _vsprintf = global.vsprintf;

  if (!(0, _utils.isFunction)(_vsprintf)) {
    _vsprintf = ({sprintf: window.sprintf, vsprintf: window.vsprintf}).vsprintf;
  }

  // Normalize all the parameters before passing it to the
  // sprintf/vsprintf function
  var params = [];

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (arg) {
    if ((0, _utils.isObject)(arg) && (0, _utils.isObject)(arg.hash)) {
      arg = arg.hash;
    }

    params.push(arg);
  });

  return params.length > 0 ? _vsprintf(format, params) : format;
}

/**
 * Changes the string to lowercase.
 * @example
 *    {{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
 *
 * @param  string param
 * @return string
 */
function lowercase(param) {
  return (0, _utils.isString)(param) ? param.toLowerCase() : param;
}

/**
 * Changes the string to uppercase.
 * @example
 *    {{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
 *
 * @param  string param
 * @return string
 */
function uppercase(param) {
  return (0, _utils.isString)(param) ? param.toUpperCase() : param;
}

/**
 * Get the first element of a collection/array.
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{first someArray}}   => 'David'
 *
 * @param  array collection
 * @return string
 */
function first(collection) {
  if (!(0, _utils.isArray)(collection) || collection.length === 0) {
    return '';
  }

  return collection[0];
}

/**
 * Get the last element of a collection/array.
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{last someArray}}   => 'Jones'
 *
 * @param  array collection
 * @return string
 */
function last(collection) {
  if (!(0, _utils.isArray)(collection) || collection.length === 0) {
    return '';
  }

  return collection[collection.length - 1];
}

/**
 * Concat two or more strings.
 * @example
 *    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
 *
 * @param  mixed ...params
 * @return string
 */
function concat() {
  for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  // Ignore the object appended by handlebars.
  if ((0, _utils.isObject)(params[params.length - 1])) {
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
 * @param  array params
 * @param  string delimeter
 * @return string
 */
function join(params, delimeter) {
  if (!delimeter || (0, _utils.isObject)(delimeter)) {
    delimeter = '';
  }

  if (!(0, _utils.isArray)(params)) {
    return false;
  }

  return params.join(delimeter);
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isFunction = isFunction;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isNumeric = isNumeric;
/**
 * Check if param is a function.
 *
 * @param thing
 * @returns boolean
 */
function isFunction(thing) {
  return typeof thing === 'function';
}

/**
 * Check if param is a string.
 *
 * @param thing
 * @returns boolean
 */
function isString(thing) {
  return typeof thing === 'string';
}

/**
 * Check if param is undefined.
 *
 * @param thing
 * @returns boolean
 */
function isUndefined(thing) {
  return typeof thing === 'undefined';
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
  return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
}

/**
 * Check if param is an array.
 *
 * @param thing
 * @returns boolean
 */
function isArray(thing) {
  return Object.prototype.toString.call(thing) === '[object Array]';
}

/**
 * Check if the value is numeric.
 *
 * @param value
 * @returns {boolean}
 */
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gVXRpbHNcblxuXG4vLyBIZWxwZXJzXG5cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbC91dGlscycpO1xuXG52YXIgX2h0bWwgPSByZXF1aXJlKCcuL2hlbHBlcnMvaHRtbCcpO1xuXG52YXIgaHRtbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9odG1sKTtcblxudmFyIF9tYXRoID0gcmVxdWlyZSgnLi9oZWxwZXJzL21hdGgnKTtcblxudmFyIG1hdGggPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWF0aCk7XG5cbnZhciBfc3RyaW5ncyA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHJpbmdzJyk7XG5cbnZhciBzdHJpbmdzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3N0cmluZ3MpO1xuXG52YXIgX2RhdGV0aW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL2RhdGV0aW1lJyk7XG5cbnZhciBkYXRldGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kYXRldGltZSk7XG5cbnZhciBfZm9ybWF0dGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JtYXR0ZXJzJyk7XG5cbnZhciBmb3JtYXR0ZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Zvcm1hdHRlcnMpO1xuXG52YXIgX2NvbmRpdGlvbmFscyA9IHJlcXVpcmUoJy4vaGVscGVycy9jb25kaXRpb25hbHMnKTtcblxudmFyIGNvbmRpdGlvbmFscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jb25kaXRpb25hbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSCwgbnVsbCwgW3tcbiAgICBrZXk6ICdyZWdpc3RlckhlbHBlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcnMoaGFuZGxlYmFycykge1xuXG4gICAgICBoYW5kbGViYXJzID0gaGFuZGxlYmFycyB8fCBnbG9iYWwuSGFuZGxlYmFycztcblxuICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqZWN0KShoYW5kbGViYXJzKSkge1xuICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgIC8vIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGFzIHdlbGwgdGhyb3cgdGhlIGVycm9yIGFuZCBoYWx0LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBIZWxwZXJzIGxpc3RcbiAgICAgIHZhciBoZWxwZXJzID0gW21hdGgsIGh0bWwsIHN0cmluZ3MsIGNvbmRpdGlvbmFscywgZGF0ZXRpbWUsIGZvcm1hdHRlcnNdO1xuXG4gICAgICBoZWxwZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcikge1xuICAgICAgICAvLyBSZWdpc3RlciBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgdG8gSGFuZGxlYmFyc1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlbHBlcikge1xuICAgICAgICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEg7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lcSA9IGVxO1xuZXhwb3J0cy5lcXcgPSBlcXc7XG5leHBvcnRzLm5lcSA9IG5lcTtcbmV4cG9ydHMubmVxdyA9IG5lcXc7XG5leHBvcnRzLmx0ID0gbHQ7XG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmV4cG9ydHMuZ3QgPSBndDtcbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZXhwb3J0cy5pZnggPSBpZng7XG5leHBvcnRzLm5vdCA9IG5vdDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbmV4cG9ydHMuYW5kID0gYW5kO1xuZXhwb3J0cy5vciA9IG9yO1xuZXhwb3J0cy5jb2FsZXNjZSA9IGNvYWxlc2NlO1xuZXhwb3J0cy5pbmNsdWRlcyA9IGluY2x1ZGVzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA9PT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT0pIGkuZSB3ZWFrIGNoZWNraW5nLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlcXcgJzMnIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxID09IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPT0pLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tuZXEgNCAzfX0gICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbmVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgIT09IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPSkgd2VhayBjaGVja2luZy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bmVxdyAnMycgM319ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBuZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgIT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA8IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgbGVzcyB0aGFuIG9yIGVxdWFscyBjb25kaXRpb24gKGEgPD0gYikuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2x0ZSAyIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGx0ZSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxIDw9IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIGNvbmRpdGlvbiAoYSA+IGIpLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBndCh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxID4gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPj0gdmFsdWUyO1xufVxuXG4vKipcbiAqIEhlbHBlciB0byBpbWl0YXRlIHRoZSB0ZXJuYXJ5IGNvbmRpdGlvbmFsIG9wZXJhdG9yID86XG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gKlxuICogQHBhcmFtIGNvbmRpdGlvblxuICogQHBhcmFtIHZhbHVlMSAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGhvbGRzIHRydWVcbiAqIEBwYXJhbSB2YWx1ZTIgICAgVmFsdWUgdG8gcmV0dXJuIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyBmYWxzZSAoT3B0aW9uYWwpXG4gKiBAcmV0dXJucyBtaXhlZFxuICovXG5mdW5jdGlvbiBpZngoY29uZGl0aW9uLCB2YWx1ZTEsIHZhbHVlMikge1xuICAvLyBDaGVjayBpZiB1c2VyIGhhcyBvbWl0dGVkIHRoZSBsYXN0IHBhcmFtZXRlclxuICAvLyBpZiB0aGF0J3MgdGhlIGNhc2UsIGl0IHdvdWxkIGJlIHRoZSBoYW5kbGViYXJzJ3Mgb3B0aW9ucyBvYmplY3RcbiAgLy8gd2hpY2ggaXQgc2VuZHMgYWx3YXlzIGFzIHRoZSBsYXN0IHBhcmFtZXRlci5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHZhbHVlMikgJiYgdmFsdWUyLm5hbWUgPT09ICdpZngnICYmIHZhbHVlMi5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpKSB7XG4gICAgLy8gVGhpcyBtZWFucyB0aGUgdXNlciBoYXMgc2tpcHBlZCB0aGUgbGFzdCBwYXJhbWV0ZXIsXG4gICAgLy8gc28gd2Ugc2hvdWxkIHJldHVybiBhbiBlbXB0eSBzdHJpbmcgKCcnKSBpbiB0aGUgZWxzZSBjYXNlIGluc3RlYWQuXG4gICAgdmFsdWUyID0gJyc7XG4gIH1cblxuICByZXR1cm4gY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xufVxuXG4vKipcbiAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuICFleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICpcbiAqIEBwYXJhbSBhcnJheVxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBlbXB0eShhcnJheSkge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYXJyYXkubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGFuIGFycmF5LlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjb3VudCBhcnJheX19ID0+ICBmYWxzZSB8IGFycmF5Lmxlbmd0aFxuICpcbiAqIEBwYXJhbSBhcnJheVxuICogQHJldHVybnMgYm9vbGVhbiB8IG51bWJlclxuICovXG5mdW5jdGlvbiBjb3VudChhcnJheSkge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib29sZWFuIEFORCBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAqIGl0IGlzIHRydWUgaWZmIGFsbCB0aGUgcGFyYW1ldGVycyBhcmUgdHJ1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB2YWx1ZTEgPSB2YWx1ZTIgPSB0cnVlO1xuICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gKlxuICogICAgIHZhciB2YWx1ZTEgPSBmYWxzZSwgdmFsdWUyID0gdHJ1ZTtcbiAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGFuZCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgIHBhcmFtcy5wb3AoKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFwYXJhbXNbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib29sZWFuIE9SIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICogaXQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIHBhcmFtZXRlcnMgaXMgdHJ1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB2YWx1ZTEgPSB0cnVlLCB2YWx1ZTIgPSBmYWxzZTtcbiAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gKlxuICogICAgIHZhciB2YWx1ZSA9IHZhbHVlMiA9IGZhbHNlO1xuICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBvcigpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3Qgbm9uLWZhbHN5IHZhbHVlIGZyb20gdGhlIHBhcmFtZXRlciBsaXN0LlxuICogV29ya3MgcXVpdGUgc2ltaWxhciB0byB0aGUgU1FMJ3MgQ09BTEVTQ0UoKSBmdW5jdGlvbiwgYnV0IHVubGlrZSB0aGlzXG4gKiBjaGVja3MgZm9yIHRoZSBmaXJzdCBub24tZmFsc2UgcGFyYW1ldGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGZ1bGxOYW1lID0gJ0ZvbyBCYXInLCBuaWNrTmFtZSA9ICdmb29iJztcbiAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdGb28gQmFyJ1xuICpcbiAqICAgICB2YXIgZnVsbE5hbWUgPSAnJywgbmlja05hbWUgPSAnZm9vYic7XG4gKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnZm9vYidcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyBtaXhlZFxuICovXG5mdW5jdGlvbiBjb2FsZXNjZSgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHBhcmFtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICByZXR1cm4gcGFyYW1zW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJhbXMucG9wKCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIGlmIHRoZSBhcnJheSBjb250YWlucyB0aGUgZWxlbWVudCBzdHJpY3RseSBvciBub24tc3RyaWN0bHkuXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciBhcnJheSA9IFsxLCAyLCAzLCA0XTtcbiAqICAgICB2YXIgdmFsdWUxID0gMiwgdmFsdWUyID0gMTAsIHZhbHVlMyA9ICczJztcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMX19ICAgICAgICA9PiB0cnVlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTJ9fSAgICAgICAgPT4gZmFsc2VcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlM319ICAgICAgICA9PiBmYWxzZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzIGZhbHNlfX0gID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIGFycmF5XG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBzdHJpY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSB8fCBhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0cmljdCAmJiBhcnJheVtpXSA9PT0gdmFsdWUgfHwgIXN0cmljdCAmJiBhcnJheVtpXSA9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogQSBmb3JtYXREYXRlIGhlbHBlciB0byBmb3JtYXQgZGF0ZSB1c2luZyBtb21lbnQganMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmb3JtYXREYXRlICdNTS9ERC9ZWVlZJyBkYXRlfX1cbiAqXG4gKiBAcGFyYW0gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICogQHBhcmFtIGRhdGVcbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZm9ybWF0U3RyaW5nLCBkYXRlKSB7XG4gIHZhciBtb21lbnQgPSBnbG9iYWwubW9tZW50O1xuXG4gIGlmICghbW9tZW50KSB7XG4gICAgbW9tZW50ID0gKHdpbmRvdy5tb21lbnQpO1xuICB9XG5cbiAgZm9ybWF0U3RyaW5nID0gKDAsIF91dGlscy5pc1N0cmluZykoZm9ybWF0U3RyaW5nKSA/IGZvcm1hdFN0cmluZyA6ICcnO1xuXG4gIHJldHVybiBtb21lbnQoZGF0ZSB8fCBuZXcgRGF0ZSgpKS5mb3JtYXQoZm9ybWF0U3RyaW5nKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcm1hdEN1cnJlbmN5ID0gZm9ybWF0Q3VycmVuY3k7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRm9ybWF0IHRoZSBjdXJyZW5jeSBhY2NvcmRpbmcgdG8gdGhlIGNvdW50cnkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2Zvcm1hdEN1cnJlbmN5IDEyMzQ1NjcuODkgY29kZT0nVVNEJ319ICA9PiAkMSwyMzQsNTY3Ljg5XG4gKiAgICAgIHt7Zm9ybWF0Q3VycmVuY3kgMTIzNDU2Ny44OSBjb2RlPSdFVVInfX0gID0+IDEuMjM0LjU2Nyw4OSDigqxcbiAqICAgICAge3tmb3JtYXRDdXJyZW5jeSAxMjM0NTY3Ljg5IGNvZGU9J0VVUicgbG9jYWxlPVwiZW5cIn19ICA9PiDigqwxLDIzNCw1NjcuODlcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBhcmdzXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlKSB7XG4gIHZhciBjdXJyZW5jeUZvcm1hdHRlciA9IGdsb2JhbC5PU1JFQyAmJiBnbG9iYWwuT1NSRUMuQ3VycmVuY3lGb3JtYXR0ZXI7XG4gIHZhciBoYW5kbGViYXJzID0gZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgaWYgKCFjdXJyZW5jeUZvcm1hdHRlcikge1xuICAgIGN1cnJlbmN5Rm9ybWF0dGVyID0gKHdpbmRvdy5PU1JFQy5DdXJyZW5jeUZvcm1hdHRlcik7XG4gIH1cblxuICBpZiAoIWhhbmRsZWJhcnMpIHtcbiAgICBoYW5kbGViYXJzID0gKHdpbmRvdy5IYW5kbGViYXJzKTtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmdzWzBdKSAmJiAoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmdzWzBdLmhhc2gpKSB7XG4gICAgcGFyYW1zID0gYXJnc1swXS5oYXNoO1xuICB9XG5cbiAgcGFyYW1zLmN1cnJlbmN5ID0gISgwLCBfdXRpbHMuaXNVbmRlZmluZWQpKHBhcmFtcy5jb2RlKSA/IHBhcmFtcy5jb2RlIDogcGFyYW1zLmN1cnJlbmN5O1xuXG4gIGlmICghKDAsIF91dGlscy5pc1VuZGVmaW5lZCkocGFyYW1zLmN1cnJlbmN5KSAmJiAhKHBhcmFtcy5jdXJyZW5jeSBpbiBjdXJyZW5jeUZvcm1hdHRlci5zeW1ib2xzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY3VycmVuY3kgY29kZSAnICsgcGFyYW1zLmN1cnJlbmN5ICsgJyBwcm92aWRlZCBmb3IgaGVscGVyIGBmb3JtYXRDdXJyZW5jeWAuJyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoISgwLCBfdXRpbHMuaXNOdW1lcmljKSh2YWx1ZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhjdXJyZW5jeUZvcm1hdHRlci5mb3JtYXQodmFsdWUsIHBhcmFtcykpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2hvd0lmID0gc2hvd0lmO1xuZXhwb3J0cy5oaWRlSWYgPSBoaWRlSWY7XG5leHBvcnRzLnNlbGVjdGVkSWYgPSBzZWxlY3RlZElmO1xuZXhwb3J0cy5jaGVja2VkSWYgPSBjaGVja2VkSWY7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuLyoqXG4gKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2hvd0lmIHRydWV9fSAgICAgPT4gJydcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gIHJldHVybiBleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbn1cblxuLyoqXG4gKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICogQGV4YW1wbGVcbiAqICAgICAge3toaWRlSWYgdHJ1ZX19ICAgICA9PiAnaGlkZGVuJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnaGlkZGVuJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2VsZWN0ZWRJZiB0cnVlfX0gPT4gICdzZWxlY3RlZCdcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGVkSWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICdzZWxlY3RlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NoZWNrZWRJZiB0cnVlfX0gID0+ICdjaGVja2VkJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY2hlY2tlZElmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBbiBvcHRpb25zIGhlbHBlciBmb3IgZ2VuZXJhdGluZyA8b3B0aW9uPiBsaXN0IGZvciA8c2VsZWN0PiBkcm9wZG93bnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIEEgc2ltcGxlIGV4YW1wbGU6XG4gKlxuICogICAgICBjb25zdCBkYXRhID0gW1xuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAxLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vJ1xuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMixcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JhcidcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDMsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28gQmFyJ1xuICogICAgICAgICAgfVxuICogICAgICBdO1xuICpcbiAqICAgICAge3t7b3B0aW9ucyBkYXRhIHNlbGVjdGVkPVwiMlwifX19XG4gKlxuICogd2lsbCBnZW5lcmF0ZSBodG1sIGxpa2UgdGhpczpcbiAqXG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Rm9vPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIgc2VsZWN0ZWQ+QmFyPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Rm9vIEJhcjwvb3B0aW9uPlxuICpcbiAqIEBleGFtcGxlXG4gKiBZb3UgY2FuIGFsc28gb3ZlcnJpZGUgdGhlIGRlZmF1bHQga2V5IG5hbWVzIGZvciAnaWQnICYgJ2Rlc2NyaXB0aW9uJ1xuICogdXNpbmcgdGhlICdpZCcgJiAndGV4dCcgb3B0aW9ucyBpbiB0aGUgaGVscGVyLlxuICpcbiAqICAgICAgY29uc3QgZGF0YSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAqICAgICAgICAgICAgICB0ZXh0OiAnTmV3IFlvcmsnXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIHZhbHVlOiAyLFxuICogICAgICAgICAgICAgIHRleHQ6ICdMb25kb24nXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF07XG4gKlxuICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIxXCIgaWQ9XCJ2YWx1ZVwiIHRleHQ9XCJ0ZXh0XCJ9fX1cbiAqXG4gKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICpcbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD5OZXcgWW9yazwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkxvbmRvbjwvb3B0aW9uPlxuICpcbiAqL1xuZnVuY3Rpb24gb3B0aW9ucyhkYXRhLCBvcHRzKSB7XG4gIC8vIFRoZSBpZCAmIHRleHQgZm9yIHRoZSA8b3B0aW9uPlxuICB2YXIgaWQgPSBvcHRzLmhhc2guaWQgfHwgJ2lkJztcbiAgdmFyIHRleHQgPSBvcHRzLmhhc2gudGV4dCB8fCAnZGVzY3JpcHRpb24nO1xuXG4gIC8vIFRoZSBzZWxlY3Rpb24gXCJpZFwiIG9mIHRoZSA8b3B0aW9uPlxuICB2YXIgc2VsZWN0ZWRJZCA9IG9wdHMuaGFzaC5zZWxlY3RlZCB8fCBudWxsO1xuXG4gIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciB2YWx1ZSA9IGl0ZW1baWRdIHx8ICcnO1xuICAgIHZhciBpbm5lclRleHQgPSBpdGVtW3RleHRdIHx8ICcnO1xuICAgIHZhciBzZWxlY3RlZCA9IHZhbHVlID09IHNlbGVjdGVkSWQgPyAnIHNlbGVjdGVkJyA6ICcnO1xuXG4gICAgcmV0dXJuICc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlICsgJ1wiJyArIHNlbGVjdGVkICsgJz4nICsgaW5uZXJUZXh0ICsgJzwvb3B0aW9uPic7XG4gIH0pLmpvaW4oJ1xcbicpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zdW0gPSBzdW07XG5leHBvcnRzLmRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuZXhwb3J0cy5jZWlsID0gY2VpbDtcbmV4cG9ydHMuZmxvb3IgPSBmbG9vcjtcbi8qKlxuICogQSBzdW0gaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBzdW0gb2YgdHdvIG51bWJlcnMuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3N1bSAxIDJ9fSAgICAgPT4gM1xuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIG51bWJlclxuICovXG5mdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZTEpICsgTnVtYmVyKHZhbHVlMik7XG59XG5cbi8qKlxuICogQSBkaWZmZXJlbmNlIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gbnVtYmVycy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZGlmZmVyZW5jZSA1IDJ9fSAgPT4gM1xuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIG51bWJlclxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUxKSAtIE51bWJlcih2YWx1ZTIpO1xufVxuXG4vKipcbiAqIEEgY2VpbCBoZWxwZXIgdG8gZmluZCB0aGUgY2VpbCB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjZWlsIDUuNn19ICAgID0+IDZcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIG51bWJlclxuICovXG5mdW5jdGlvbiBjZWlsKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoTnVtYmVyKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Zmxvb3IgNS42fX0gPT4gNVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGZsb29yKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXhjZXJwdCA9IGV4Y2VycHQ7XG5leHBvcnRzLnNhbml0aXplID0gc2FuaXRpemU7XG5leHBvcnRzLm5ld0xpbmVUb0JyID0gbmV3TGluZVRvQnI7XG5leHBvcnRzLmNhcGl0YWxpemVFYWNoID0gY2FwaXRhbGl6ZUVhY2g7XG5leHBvcnRzLmNhcGl0YWxpemVGaXJzdCA9IGNhcGl0YWxpemVGaXJzdDtcbmV4cG9ydHMuc3ByaW50ZiA9IHNwcmludGY7XG5leHBvcnRzLmxvd2VyY2FzZSA9IGxvd2VyY2FzZTtcbmV4cG9ydHMudXBwZXJjYXNlID0gdXBwZXJjYXNlO1xuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuZXhwb3J0cy5qb2luID0gam9pbjtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZXhjZXJwdCAnSnVzdCBXb3cnIDR9fSAgICA9PiAnSnVzdCdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbGVuZ3RoXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZXhjZXJwdChzdHJpbmcsIGxlbmd0aCkge1xuICBsZW5ndGggPSBwYXJzZUludChsZW5ndGgpIHx8IDUwO1xuXG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIFxcbiB3aXRoIDxicj4gdGFncy5cbiAqIEBleGFtcGxlXG4gKiAgICAge3tuZXdMaW5lVG9CciAnbmV3TGluZVRvQnIgaGVscGVyIFxcbiBpcyB2ZXJ5IFxcbiB1c2VmdWwuJ319ICAgID0+IG5ld0xpbmVUb0JyIGhlbHBlciA8YnI+IGlzIHZlcnkgPGJyPiB1c2VmdWwuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBuZXdMaW5lVG9CcihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnPGJyPicpO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgZWFjaCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2goc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBzcHJpbnRmIGhlbHBlciB0byBiZSB1c2VkIGluIHRoZSBoYW5kbGViYXJzIHRlbXBsYXRlcyB0aGF0IHN1cHBvcnRzIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICpcbiAqIE5PVEU6IFRoaXMgaGVscGVyIHJlbGllcyBvbiBzcHJpbnRmKCkgZnVuY3Rpb24gcHJvdmlkZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzXG4gKiBTbywgbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBzcHJpbnRmLWpzIHBhY2thZ2UgYXZhaWxhYmxlIGVpdGhlciBhcyBhIG5vZGUgbW9kdWxlXG4gKiBvciBoYXZlIHNwcmludGYvdnNwcmludGYgZnVuY3Rpb25zIGF2YWlsYWJsZSBpbiB0aGUgZ2xvYmFsIHNjb3BlIGZyb20gdGhhdCBwYWNrYWdlLlxuICpcbiAqIFN5bnRheDpcbiAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBhcmcxIGFyZzIgYXJnMy4uLi59fVxuICogICAgICB7e3NwcmludGYgZm9ybWF0IG9iamVjdH19XG4gKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQga2V5MT12YWx1ZTEga2V5Mj12YWx1ZTIuLi59fVxuICpcbiAqICBAZXhhbXBsZVxuICogICAgICB7e3NwcmludGYgJyVzICVzIScgJ0hlbGxvJyAnS2FiaXInIH19XG4gKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMgJWQgJXMgJWQnICdGb28nICdCYXInIDU1ICdCYXonICcyMCd9fVxuICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgSG93IGFyZSB5b3U/JyBvYmogfX1cbiAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhICcgZ3JlZXRpbmc9J0hlbGxvJyBuYW1lPSdLYWJpcid9fVxuICpcbiAqIENoZWNrIHRoaXMgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gKlxuICogQHBhcmFtIGZvcm1hdFxuICogQHBhcmFtIC4uLmFyZ3NcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCkge1xuXG4gIC8vIENoZWNrIGlmIHRoZSB2c3ByaW50ZiBmdW5jdGlvbiBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlIHRoZW4gdHJ5IHRvIHJlcXVpcmUoKSBpdFxuICB2YXIgX3ZzcHJpbnRmID0gZ2xvYmFsLnZzcHJpbnRmO1xuXG4gIGlmICghKDAsIF91dGlscy5pc0Z1bmN0aW9uKShfdnNwcmludGYpKSB7XG4gICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICB9XG5cbiAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICB2YXIgcGFyYW1zID0gW107XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgYXJnID0gYXJnLmhhc2g7XG4gICAgfVxuXG4gICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gX3ZzcHJpbnRmKGZvcm1hdCwgcGFyYW1zKSA6IGZvcm1hdDtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICogQGV4YW1wbGVcbiAqICAgIHt7bG93ZXJjYXNlICdKVVNUIFdPVyEhISd9fSAgID0+ICdqdXN0IHdvdyEhISdcbiAqXG4gKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gbG93ZXJjYXNlKHBhcmFtKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b0xvd2VyQ2FzZSgpIDogcGFyYW07XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIHVwcGVyY2FzZS5cbiAqIEBleGFtcGxlXG4gKiAgICB7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gKlxuICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHVwcGVyY2FzZShwYXJhbSkge1xuICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9VcHBlckNhc2UoKSA6IHBhcmFtO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gKiAgICB7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICpcbiAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvblswXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gKiAgICB7e2xhc3Qgc29tZUFycmF5fX0gICA9PiAnSm9uZXMnXG4gKlxuICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBsYXN0KGNvbGxlY3Rpb24pIHtcbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGNvbGxlY3Rpb24pIHx8IGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25bY29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbn1cblxuLyoqXG4gKiBDb25jYXQgdHdvIG9yIG1vcmUgc3RyaW5ncy5cbiAqIEBleGFtcGxlXG4gKiAgICB7e2NvbmNhdCAnSGVsbG8nICcgd29ybGQnICchISEnfX0gICA9PiAnSGVsbG8gd29ybGQhISEnXG4gKlxuICogQHBhcmFtICBtaXhlZCAuLi5wYXJhbXNcbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gKiAgICB7e2pvaW4gc29tZUFycmF5ICcgJiAnfX0gICA9PiAnSGFuZHMgJiBsZWdzICYgZmVldCdcbiAqXG4gKiBAcGFyYW0gIGFycmF5IHBhcmFtc1xuICogQHBhcmFtICBzdHJpbmcgZGVsaW1ldGVyXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBqb2luKHBhcmFtcywgZGVsaW1ldGVyKSB7XG4gIGlmICghZGVsaW1ldGVyIHx8ICgwLCBfdXRpbHMuaXNPYmplY3QpKGRlbGltZXRlcikpIHtcbiAgICBkZWxpbWV0ZXIgPSAnJztcbiAgfVxuXG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShwYXJhbXMpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5qb2luKGRlbGltZXRlcik7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzTnVtZXJpYyA9IGlzTnVtZXJpYztcbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYy5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufSJdfQ==
