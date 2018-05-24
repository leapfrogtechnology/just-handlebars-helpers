(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIE5vdGU6IEVTNiBleHBvcnQgZGVmYXVsdCB3b3VsZCBleHBvcnQgdGhlIEggY2xhc3MgaW4gJ2RlZmF1bHQnIGtleSBzbyB3ZSBoYXZlIHRvIHVzZSB0aGF0XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL0guanMnKS5kZWZhdWx0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBVdGlsc1xuXG5cbi8vIEhlbHBlcnNcblxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlsL3V0aWxzJyk7XG5cbnZhciBfaHRtbCA9IHJlcXVpcmUoJy4vaGVscGVycy9odG1sJyk7XG5cbnZhciBodG1sID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2h0bWwpO1xuXG52YXIgX21hdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvbWF0aCcpO1xuXG52YXIgbWF0aCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tYXRoKTtcblxudmFyIF9zdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0cmluZ3MnKTtcblxudmFyIHN0cmluZ3MgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc3RyaW5ncyk7XG5cbnZhciBfZGF0ZXRpbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvZGF0ZXRpbWUnKTtcblxudmFyIGRhdGV0aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2RhdGV0aW1lKTtcblxudmFyIF9mb3JtYXR0ZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Zvcm1hdHRlcnMnKTtcblxudmFyIGZvcm1hdHRlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZm9ybWF0dGVycyk7XG5cbnZhciBfY29uZGl0aW9uYWxzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NvbmRpdGlvbmFscycpO1xuXG52YXIgY29uZGl0aW9uYWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NvbmRpdGlvbmFscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhILCBudWxsLCBbe1xuICAgIGtleTogJ3JlZ2lzdGVySGVscGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzKSB7XG5cbiAgICAgIGhhbmRsZWJhcnMgPSBoYW5kbGViYXJzIHx8IGdsb2JhbC5IYW5kbGViYXJzO1xuXG4gICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmplY3QpKGhhbmRsZWJhcnMpKSB7XG4gICAgICAgIC8vIEluIGNhc2UsIGhhbmRsZWJhcnMgaXMgbm90IHByb3ZpZGVkIGFuZCBpdCdzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgLy8gaW4gdGhlIGdsb2JhbCBuYW1lc3BhY2UgYXMgd2VsbCB0aHJvdyB0aGUgZXJyb3IgYW5kIGhhbHQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEhlbHBlcnMgbGlzdFxuICAgICAgdmFyIGhlbHBlcnMgPSBbbWF0aCwgaHRtbCwgc3RyaW5ncywgY29uZGl0aW9uYWxzLCBkYXRldGltZSwgZm9ybWF0dGVyc107XG5cbiAgICAgIGhlbHBlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFsbCB0aGUgaGVscGVyIGZ1bmN0aW9ucyB0byBIYW5kbGViYXJzXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVscGVyKSB7XG4gICAgICAgICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVxID0gZXE7XG5leHBvcnRzLmVxdyA9IGVxdztcbmV4cG9ydHMubmVxID0gbmVxO1xuZXhwb3J0cy5uZXF3ID0gbmVxdztcbmV4cG9ydHMubHQgPSBsdDtcbmV4cG9ydHMubHRlID0gbHRlO1xuZXhwb3J0cy5ndCA9IGd0O1xuZXhwb3J0cy5ndGUgPSBndGU7XG5leHBvcnRzLmlmeCA9IGlmeDtcbmV4cG9ydHMubm90ID0gbm90O1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuZXhwb3J0cy5hbmQgPSBhbmQ7XG5leHBvcnRzLm9yID0gb3I7XG5leHBvcnRzLmNvYWxlc2NlID0gY29hbGVzY2U7XG5leHBvcnRzLmluY2x1ZGVzID0gaW5jbHVkZXM7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlcSAnMycgM319ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VxdyAnMycgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e25lcSA0IDN9fSAgICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBuZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSAhPT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9KSB3ZWFrIGNoZWNraW5nLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tuZXF3ICczJyAzfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIG5lcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSAhPSB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBjb25kaXRpb24gKGEgPCBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBsdCh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxIDwgdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bHRlIDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbHRlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPD0gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gY29uZGl0aW9uIChhID4gYikuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2d0IDIgM319ICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPiB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tndGUgMyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA+PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGltaXRhdGUgdGhlIHRlcm5hcnkgY29uZGl0aW9uYWwgb3BlcmF0b3IgPzpcbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gKiAgICAgIHt7aWZ4IGZhbHNlICdGb28nICdCYXInfX0gICA9PiBGb29cbiAqXG4gKiBAcGFyYW0gY29uZGl0aW9uXG4gKiBAcGFyYW0gdmFsdWUxICAgIFZhbHVlIHRvIHJldHVybiB3aGVuIHRoZSBjb25kaXRpb24gaG9sZHMgdHJ1ZVxuICogQHBhcmFtIHZhbHVlMiAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlIChPcHRpb25hbClcbiAqIEByZXR1cm5zIG1peGVkXG4gKi9cbmZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gIC8vIENoZWNrIGlmIHVzZXIgaGFzIG9taXR0ZWQgdGhlIGxhc3QgcGFyYW1ldGVyXG4gIC8vIGlmIHRoYXQncyB0aGUgY2FzZSwgaXQgd291bGQgYmUgdGhlIGhhbmRsZWJhcnMncyBvcHRpb25zIG9iamVjdFxuICAvLyB3aGljaCBpdCBzZW5kcyBhbHdheXMgYXMgdGhlIGxhc3QgcGFyYW1ldGVyLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkodmFsdWUyKSAmJiB2YWx1ZTIubmFtZSA9PT0gJ2lmeCcgJiYgdmFsdWUyLmhhc093blByb3BlcnR5KCdoYXNoJykpIHtcbiAgICAvLyBUaGlzIG1lYW5zIHRoZSB1c2VyIGhhcyBza2lwcGVkIHRoZSBsYXN0IHBhcmFtZXRlcixcbiAgICAvLyBzbyB3ZSBzaG91bGQgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyAoJycpIGluIHRoZSBlbHNlIGNhc2UgaW5zdGVhZC5cbiAgICB2YWx1ZTIgPSAnJztcbiAgfVxuXG4gIHJldHVybiBjb25kaXRpb24gPyB2YWx1ZTEgOiB2YWx1ZTI7XG59XG5cbi8qKlxuICogTG9naWNhbCBOT1Qgb2YgYW55IGV4cHJlc3Npb24uXG4gKiBAZXhhbXBsZVxuICogICAgICB7e25vdCB0cnVlfX0gICAgPT4gZmFsc2VcbiAqICAgICAge3tub3QgZmFsc2V9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBub3QoZXhwcmVzc2lvbikge1xuICByZXR1cm4gIWV4cHJlc3Npb247XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXJyYXkgaXMgZW1wdHkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VtcHR5IGFycmF5fX0gPT4gdHJ1ZSB8IGZhbHNlXG4gKlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NvdW50IGFycmF5fX0gPT4gIGZhbHNlIHwgYXJyYXkubGVuZ3RoXG4gKlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJucyBib29sZWFuIHwgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGNvdW50KGFycmF5KSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYXJyYXkubGVuZ3RoO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvb2xlYW4gQU5EIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICogaXQgaXMgdHJ1ZSBpZmYgYWxsIHRoZSBwYXJhbWV0ZXJzIGFyZSB0cnVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIHZhbHVlMSA9IHZhbHVlMiA9IHRydWU7XG4gKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IHRydWVcbiAqXG4gKiAgICAgdmFyIHZhbHVlMSA9IGZhbHNlLCB2YWx1ZTIgPSB0cnVlO1xuICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gYW5kKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXBhcmFtc1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvb2xlYW4gT1Igb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gKiBpdCBpcyB0cnVlIGlmIGFueSBvZiB0aGUgcGFyYW1ldGVycyBpcyB0cnVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIHZhbHVlMSA9IHRydWUsIHZhbHVlMiA9IGZhbHNlO1xuICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IHRydWVcbiAqXG4gKiAgICAgdmFyIHZhbHVlID0gdmFsdWUyID0gZmFsc2U7XG4gKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIG9yKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBub24tZmFsc3kgdmFsdWUgZnJvbSB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gKiBXb3JrcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBTUUwncyBDT0FMRVNDRSgpIGZ1bmN0aW9uLCBidXQgdW5saWtlIHRoaXNcbiAqIGNoZWNrcyBmb3IgdGhlIGZpcnN0IG5vbi1mYWxzZSBwYXJhbWV0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgZnVsbE5hbWUgPSAnRm9vIEJhcicsIG5pY2tOYW1lID0gJ2Zvb2InO1xuICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ0ZvbyBCYXInXG4gKlxuICogICAgIHZhciBmdWxsTmFtZSA9ICcnLCBuaWNrTmFtZSA9ICdmb29iJztcbiAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdmb29iJ1xuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIG1peGVkXG4gKi9cbmZ1bmN0aW9uIGNvYWxlc2NlKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgcGFyYW1zW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgIHJldHVybiBwYXJhbXNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5wb3AoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJvb2xlYW4gaWYgdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBlbGVtZW50IHN0cmljdGx5IG9yIG5vbi1zdHJpY3RseS5cbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGFycmF5ID0gWzEsIDIsIDMsIDRdO1xuICogICAgIHZhciB2YWx1ZTEgPSAyLCB2YWx1ZTIgPSAxMCwgdmFsdWUzID0gJzMnO1xuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUxfX0gICAgICAgID0+IHRydWVcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMn19ICAgICAgICA9PiBmYWxzZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzfX0gICAgICAgID0+IGZhbHNlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTMgZmFsc2V9fSAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIHN0cmljdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RyaWN0ICYmIGFycmF5W2ldID09PSB2YWx1ZSB8fCAhc3RyaWN0ICYmIGFycmF5W2ldID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXREYXRlID0gZm9ybWF0RGF0ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBBIGZvcm1hdERhdGUgaGVscGVyIHRvIGZvcm1hdCBkYXRlIHVzaW5nIG1vbWVudCBqcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2Zvcm1hdERhdGUgJ01NL0REL1lZWVknIGRhdGV9fVxuICpcbiAqIEBwYXJhbSBmb3JtYXRTdHJpbmcgYmFzZWQgb24gbW9tZW50LmpzXG4gKiBAcGFyYW0gZGF0ZVxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUpIHtcbiAgdmFyIG1vbWVudCA9IGdsb2JhbC5tb21lbnQ7XG5cbiAgaWYgKCFtb21lbnQpIHtcbiAgICBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG4gIH1cblxuICBmb3JtYXRTdHJpbmcgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKShmb3JtYXRTdHJpbmcpID8gZm9ybWF0U3RyaW5nIDogJyc7XG5cbiAgcmV0dXJuIG1vbWVudChkYXRlIHx8IG5ldyBEYXRlKCkpLmZvcm1hdChmb3JtYXRTdHJpbmcpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0Q3VycmVuY3kgPSBmb3JtYXRDdXJyZW5jeTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBGb3JtYXQgdGhlIGN1cnJlbmN5IGFjY29yZGluZyB0byB0aGUgY291bnRyeS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Zm9ybWF0Q3VycmVuY3kgMTIzNDU2Ny44OSBjb2RlPSdVU0QnfX0gID0+ICQxLDIzNCw1NjcuODlcbiAqICAgICAge3tmb3JtYXRDdXJyZW5jeSAxMjM0NTY3Ljg5IGNvZGU9J0VVUid9fSAgPT4gMS4yMzQuNTY3LDg5IOKCrFxuICogICAgICB7e2Zvcm1hdEN1cnJlbmN5IDEyMzQ1NjcuODkgY29kZT0nRVVSJyBsb2NhbGU9XCJlblwifX0gID0+IOKCrDEsMjM0LDU2Ny44OVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGFyZ3NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUpIHtcbiAgdmFyIGN1cnJlbmN5Rm9ybWF0dGVyID0gZ2xvYmFsLk9TUkVDICYmIGdsb2JhbC5PU1JFQy5DdXJyZW5jeUZvcm1hdHRlcjtcbiAgdmFyIGhhbmRsZWJhcnMgPSBnbG9iYWwuSGFuZGxlYmFycztcblxuICBpZiAoIWN1cnJlbmN5Rm9ybWF0dGVyKSB7XG4gICAgY3VycmVuY3lGb3JtYXR0ZXIgPSAod2luZG93Lk9TUkVDLkN1cnJlbmN5Rm9ybWF0dGVyKTtcbiAgfVxuXG4gIGlmICghaGFuZGxlYmFycykge1xuICAgIGhhbmRsZWJhcnMgPSAod2luZG93LkhhbmRsZWJhcnMpO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZ3NbMF0pICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZ3NbMF0uaGFzaCkpIHtcbiAgICBwYXJhbXMgPSBhcmdzWzBdLmhhc2g7XG4gIH1cblxuICBwYXJhbXMuY3VycmVuY3kgPSAhKDAsIF91dGlscy5pc1VuZGVmaW5lZCkocGFyYW1zLmNvZGUpID8gcGFyYW1zLmNvZGUgOiBwYXJhbXMuY3VycmVuY3k7XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzVW5kZWZpbmVkKShwYXJhbXMuY3VycmVuY3kpICYmICEocGFyYW1zLmN1cnJlbmN5IGluIGN1cnJlbmN5Rm9ybWF0dGVyLnN5bWJvbHMpKSB7XG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjdXJyZW5jeSBjb2RlICcgKyBwYXJhbXMuY3VycmVuY3kgKyAnIHByb3ZpZGVkIGZvciBoZWxwZXIgYGZvcm1hdEN1cnJlbmN5YC4nKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghKDAsIF91dGlscy5pc051bWVyaWMpKHZhbHVlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKGN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSwgcGFyYW1zKSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zaG93SWYgPSBzaG93SWY7XG5leHBvcnRzLmhpZGVJZiA9IGhpZGVJZjtcbmV4cG9ydHMuc2VsZWN0ZWRJZiA9IHNlbGVjdGVkSWY7XG5leHBvcnRzLmNoZWNrZWRJZiA9IGNoZWNrZWRJZjtcbmV4cG9ydHMub3B0aW9ucyA9IG9wdGlvbnM7XG4vKipcbiAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzaG93SWYgdHJ1ZX19ICAgICA9PiAnJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc2hvd0lmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnJyA6ICdoaWRkZW4nO1xufVxuXG4vKipcbiAqIEEgaGlkZUlmIGhlbHBlciBmb3IgaGlkaW5nIGFueSBodG1sIGVsZW1lbnQuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2hpZGVJZiB0cnVlfX0gICAgID0+ICdoaWRkZW4nXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBoaWRlSWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG59XG5cbi8qKlxuICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd24gYW5kIHJhZGlvIGJveGVzLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc2VsZWN0ZWRJZihleHByZXNzaW9uKSB7XG4gIHJldHVybiBleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgY2hlY2tlZElmIGhlbHBlciBmb3IgY2hlY2tib3hlcy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjaGVja2VkSWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xufVxuXG4vKipcbiAqIEFuIG9wdGlvbnMgaGVscGVyIGZvciBnZW5lcmF0aW5nIDxvcHRpb24+IGxpc3QgZm9yIDxzZWxlY3Q+IGRyb3Bkb3ducy5cbiAqXG4gKiBAZXhhbXBsZVxuICogQSBzaW1wbGUgZXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IGRhdGEgPSBbXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDEsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28nXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAyLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmFyJ1xuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMyxcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbyBCYXInXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF07XG4gKlxuICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIyXCJ9fX1cbiAqXG4gKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICpcbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Gb288L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD5CYXI8L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5Gb28gQmFyPC9vcHRpb24+XG4gKlxuICogQGV4YW1wbGVcbiAqIFlvdSBjYW4gYWxzbyBvdmVycmlkZSB0aGUgZGVmYXVsdCBrZXkgbmFtZXMgZm9yICdpZCcgJiAnZGVzY3JpcHRpb24nXG4gKiB1c2luZyB0aGUgJ2lkJyAmICd0ZXh0JyBvcHRpb25zIGluIHRoZSBoZWxwZXIuXG4gKlxuICogICAgICBjb25zdCBkYXRhID0gW1xuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIHZhbHVlOiAxLFxuICogICAgICAgICAgICAgIHRleHQ6ICdOZXcgWW9yaydcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgdmFsdWU6IDIsXG4gKiAgICAgICAgICAgICAgdGV4dDogJ0xvbmRvbidcbiAqICAgICAgICAgIH1cbiAqICAgICAgXTtcbiAqXG4gKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjFcIiBpZD1cInZhbHVlXCIgdGV4dD1cInRleHRcIn19fVxuICpcbiAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gKlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHNlbGVjdGVkPk5ldyBZb3JrPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TG9uZG9uPC9vcHRpb24+XG4gKlxuICovXG5mdW5jdGlvbiBvcHRpb25zKGRhdGEsIG9wdHMpIHtcbiAgLy8gVGhlIGlkICYgdGV4dCBmb3IgdGhlIDxvcHRpb24+XG4gIHZhciBpZCA9IG9wdHMuaGFzaC5pZCB8fCAnaWQnO1xuICB2YXIgdGV4dCA9IG9wdHMuaGFzaC50ZXh0IHx8ICdkZXNjcmlwdGlvbic7XG5cbiAgLy8gVGhlIHNlbGVjdGlvbiBcImlkXCIgb2YgdGhlIDxvcHRpb24+XG4gIHZhciBzZWxlY3RlZElkID0gb3B0cy5oYXNoLnNlbGVjdGVkIHx8IG51bGw7XG5cbiAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIHZhbHVlID0gaXRlbVtpZF0gfHwgJyc7XG4gICAgdmFyIGlubmVyVGV4dCA9IGl0ZW1bdGV4dF0gfHwgJyc7XG4gICAgdmFyIHNlbGVjdGVkID0gdmFsdWUgPT0gc2VsZWN0ZWRJZCA/ICcgc2VsZWN0ZWQnIDogJyc7XG5cbiAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUgKyAnXCInICsgc2VsZWN0ZWQgKyAnPicgKyBpbm5lclRleHQgKyAnPC9vcHRpb24+JztcbiAgfSkuam9pbignXFxuJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnN1bSA9IHN1bTtcbmV4cG9ydHMuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG5leHBvcnRzLmNlaWwgPSBjZWlsO1xuZXhwb3J0cy5mbG9vciA9IGZsb29yO1xuLyoqXG4gKiBBIHN1bSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIHN1bSBvZiB0d28gbnVtYmVycy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c3VtIDEgMn19ICAgICA9PiAzXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIHN1bSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgKyBOdW1iZXIodmFsdWUyKTtcbn1cblxuLyoqXG4gKiBBIGRpZmZlcmVuY2UgaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlIG9mIHR3byBudW1iZXJzLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tkaWZmZXJlbmNlIDUgMn19ICA9PiAzXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2UodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZTEpIC0gTnVtYmVyKHZhbHVlMik7XG59XG5cbi8qKlxuICogQSBjZWlsIGhlbHBlciB0byBmaW5kIHRoZSBjZWlsIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NlaWwgNS42fX0gICAgPT4gNlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGNlaWwodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGguY2VpbChOdW1iZXIodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBBIGZsb29yIGhlbHBlciB0byBmaW5kIHRoZSBmbG9vciB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyBudW1iZXJcbiAqL1xuZnVuY3Rpb24gZmxvb3IodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leGNlcnB0ID0gZXhjZXJwdDtcbmV4cG9ydHMuc2FuaXRpemUgPSBzYW5pdGl6ZTtcbmV4cG9ydHMubmV3TGluZVRvQnIgPSBuZXdMaW5lVG9CcjtcbmV4cG9ydHMuY2FwaXRhbGl6ZUVhY2ggPSBjYXBpdGFsaXplRWFjaDtcbmV4cG9ydHMuY2FwaXRhbGl6ZUZpcnN0ID0gY2FwaXRhbGl6ZUZpcnN0O1xuZXhwb3J0cy5zcHJpbnRmID0gc3ByaW50ZjtcbmV4cG9ydHMubG93ZXJjYXNlID0gbG93ZXJjYXNlO1xuZXhwb3J0cy51cHBlcmNhc2UgPSB1cHBlcmNhc2U7XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIEV4dHJhY3QgYSBmZXcgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLiBEZWZhdWx0IG51bWJlciBvZiBjaGFyYWN0ZXJzIGlzIDUwLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsZW5ndGhcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdG8gdXJsIGZyaWVuZGx5IGRhc2gtY2FzZSBzdHJpbmcgcmVtb3Zpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzYW5pdGl6ZSAnSnVTdCAjV293J319ICAgID0+ICdqdXN0LXdvdydcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc2FuaXRpemUoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHMrLywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgXFxuIHdpdGggPGJyPiB0YWdzLlxuICogQGV4YW1wbGVcbiAqICAgICB7e25ld0xpbmVUb0JyICduZXdMaW5lVG9CciBoZWxwZXIgXFxuIGlzIHZlcnkgXFxuIHVzZWZ1bC4nfX0gICAgPT4gbmV3TGluZVRvQnIgaGVscGVyIDxicj4gaXMgdmVyeSA8YnI+IHVzZWZ1bC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5ld0xpbmVUb0JyKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICc8YnI+Jyk7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUVhY2ggJ2p1c3Qgd293J319ICAgPT4gJ0p1c3QgV293J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IHdvdydcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNwcmludGYgaGVscGVyIHRvIGJlIHVzZWQgaW4gdGhlIGhhbmRsZWJhcnMgdGVtcGxhdGVzIHRoYXQgc3VwcG9ydHMgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogTk9URTogVGhpcyBoZWxwZXIgcmVsaWVzIG9uIHNwcmludGYoKSBmdW5jdGlvbiBwcm92aWRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanNcbiAqIFNvLCBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIHNwcmludGYtanMgcGFja2FnZSBhdmFpbGFibGUgZWl0aGVyIGFzIGEgbm9kZSBtb2R1bGVcbiAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gKlxuICogU3ludGF4OlxuICogICAgICB7e3NwcmludGYgZm9ybWF0IGFyZzEgYXJnMiBhcmczLi4uLn19XG4gKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgb2JqZWN0fX1cbiAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBrZXkxPXZhbHVlMSBrZXkyPXZhbHVlMi4uLn19XG4gKlxuICogIEBleGFtcGxlXG4gKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMhJyAnSGVsbG8nICdLYWJpcicgfX1cbiAqICAgICAge3tzcHJpbnRmICclcyAlcyAlZCAlcyAlZCcgJ0ZvbycgJ0JhcicgNTUgJ0JheicgJzIwJ319XG4gKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISBIb3cgYXJlIHlvdT8nIG9iaiB9fVxuICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgJyBncmVldGluZz0nSGVsbG8nIG5hbWU9J0thYmlyJ319XG4gKlxuICogQ2hlY2sgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAqXG4gKiBAcGFyYW0gZm9ybWF0XG4gKiBAcGFyYW0gLi4uYXJnc1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNwcmludGYoZm9ybWF0KSB7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHZzcHJpbnRmIGZ1bmN0aW9uIGlzIGF2YWlsYWJsZSBnbG9iYWxseVxuICAvLyBpZiBpdCdzIG5vdCBhdmFpbGFibGUgdGhlbiB0cnkgdG8gcmVxdWlyZSgpIGl0XG4gIHZhciBfdnNwcmludGYgPSBnbG9iYWwudnNwcmludGY7XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzRnVuY3Rpb24pKF92c3ByaW50ZikpIHtcbiAgICBfdnNwcmludGYgPSAoe3NwcmludGY6IHdpbmRvdy5zcHJpbnRmLCB2c3ByaW50Zjogd2luZG93LnZzcHJpbnRmfSkudnNwcmludGY7XG4gIH1cblxuICAvLyBOb3JtYWxpemUgYWxsIHRoZSBwYXJhbWV0ZXJzIGJlZm9yZSBwYXNzaW5nIGl0IHRvIHRoZVxuICAvLyBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9uXG4gIHZhciBwYXJhbXMgPSBbXTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZykgJiYgKDAsIF91dGlscy5pc09iamVjdCkoYXJnLmhhc2gpKSB7XG4gICAgICBhcmcgPSBhcmcuaGFzaDtcbiAgICB9XG5cbiAgICBwYXJhbXMucHVzaChhcmcpO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDAgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UuXG4gKiBAZXhhbXBsZVxuICogICAge3tsb3dlcmNhc2UgJ0pVU1QgV09XISEhJ319ICAgPT4gJ2p1c3Qgd293ISEhJ1xuICpcbiAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBsb3dlcmNhc2UocGFyYW0pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvTG93ZXJDYXNlKCkgOiBwYXJhbTtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxuICogQGV4YW1wbGVcbiAqICAgIHt7dXBwZXJjYXNlICdqdXN0IHdvdyEhISd9fSAgID0+ICdKVVNUIFdPVyEhISdcbiAqXG4gKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gdXBwZXJjYXNlKHBhcmFtKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b1VwcGVyQ2FzZSgpIDogcGFyYW07XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAqIEBleGFtcGxlXG4gKiAgICB2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAqICAgIHt7Zmlyc3Qgc29tZUFycmF5fX0gICA9PiAnRGF2aWQnXG4gKlxuICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBmaXJzdChjb2xsZWN0aW9uKSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uWzBdO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAqIEBleGFtcGxlXG4gKiAgICB2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAqICAgIHt7bGFzdCBzb21lQXJyYXl9fSAgID0+ICdKb25lcydcbiAqXG4gKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGxhc3QoY29sbGVjdGlvbikge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbltjb2xsZWN0aW9uLmxlbmd0aCAtIDFdO1xufVxuXG4vKipcbiAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICogQGV4YW1wbGVcbiAqICAgIHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAqXG4gKiBAcGFyYW0gIG1peGVkIC4uLnBhcmFtc1xuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29uY2F0KCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIEpvaW4gdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IHVzaW5nIGEgZGVsaW1ldGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB2YXIgc29tZUFycmF5ID0gWydIYW5kcycsICdsZWdzJywgJ2ZlZXQnXTtcbiAqICAgIHt7am9pbiBzb21lQXJyYXkgJyAmICd9fSAgID0+ICdIYW5kcyAmIGxlZ3MgJiBmZWV0J1xuICpcbiAqIEBwYXJhbSAgYXJyYXkgcGFyYW1zXG4gKiBAcGFyYW0gIHN0cmluZyBkZWxpbWV0ZXJcbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGpvaW4ocGFyYW1zLCBkZWxpbWV0ZXIpIHtcbiAgaWYgKCFkZWxpbWV0ZXIgfHwgKDAsIF91dGlscy5pc09iamVjdCkoZGVsaW1ldGVyKSkge1xuICAgIGRlbGltZXRlciA9ICcnO1xuICB9XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKHBhcmFtcykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zLmpvaW4oZGVsaW1ldGVyKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNEZWZpbmVkID0gaXNEZWZpbmVkO1xuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmV4cG9ydHMuaXNOdW1lcmljID0gaXNOdW1lcmljO1xuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQodGhpbmcpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcbiAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRoaW5nKSkgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRoaW5nKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59Il19
