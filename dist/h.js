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
 *
 * @example
 *      {{eq '3' 3}}    => false
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function eq(value1, value2) {
  return value1 === value2;
}

/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 *
 * @example
 *      {{eqw '3' 3}}   => true
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function eqw(value1, value2) {
  return value1 == value2;
}

/**
 * Determine whether or not two values are not equal (!==).
 *
 * @example
 *      {{neq 4 3}}    => true
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function neq(value1, value2) {
  return value1 !== value2;
}

/**
 * Determine whether or not two values are not equal (!=) weak checking.
 *
 * @example
 *      {{neqw '3' 3}}    => false
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function neqw(value1, value2) {
  return value1 != value2;
}

/**
 * Check for less than condition (a < b).
 *
 * @example
 *      {{lt 2 3}}   => true
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function lt(value1, value2) {
  return value1 < value2;
}

/**
 * Check for less than or equals condition (a <= b).
 *
 * @example
 *      {{lte 2 3}}   => true
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function lte(value1, value2) {
  return value1 <= value2;
}

/**
 * Check for greater than condition (a > b).
 * @example
 *      {{gt 2 3}}   => false
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function gt(value1, value2) {
  return value1 > value2;
}

/**
 * Check for greater than or equals condition (a >= b).
 *
 * @example
 *      {{gte 3 3}}   => true
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
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
 * @param {boolean} condition
 * @param {any} value1    Value to return when the condition holds true
 * @param {any} value2    Value to return when the condition is false (Optional)
 * @returns {any}
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
 * @param {any} expression
 * @returns {boolean}
 */
function not(expression) {
  return !expression;
}

/**
 * Check if an array is empty.
 *
 * @example
 *      {{empty array}} => true | false
 *
 * @param {array} array
 * @returns {boolean}
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
 * @param {array} array
 * @returns {boolean | number}
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
 * @param {any} params
 * @returns {boolean}
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
 * @param {any} params
 * @returns {boolean}
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
 * @param {any} params
 * @returns {any}
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
 *
 * @example
 *     var array = [1, 2, 3, 4];
 *     var value1 = 2, value2 = 10, value3 = '3';
 *     {{includes array value1}}        => true
 *     {{includes array value2}}        => false
 *     {{includes array value3}}        => false
 *     {{includes array value3 false}}  => false
 *
 * @param {array} array
 * @param {any} value
 * @returns {boolean}
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
 * @param {string} formatString based on moment.js
 * @param {date} date
 * @return {string}
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
 *
 * @example
 *      {{formatCurrency 1234567.89 code='USD'}}  => $1,234,567.89
 *      {{formatCurrency 1234567.89 code='EUR'}}  => 1.234.567,89 €
 *      {{formatCurrency 1234567.89 code='EUR' locale="en"}}  => €1,234,567.89
 *
 * @param {number} value
 * @param {any} args
 * @returns {string}
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
 *
 * @example
 *      {{showIf true}}     => ''
 *
 * @param {boolean} expression
 * @returns {string}
 */
function showIf(expression) {
  return expression ? '' : 'hidden';
}

/**
 * A hideIf helper for hiding any html element.
 *
 * @example
 *      {{hideIf true}}     => 'hidden'
 *
 * @param {boolean} expression
 * @returns {string}
 */
function hideIf(expression) {
  return expression ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdown and radio boxes.
 *
 * @example
 *      {{selectedIf true}} =>  'selected'
 *
 * @param {boolean} expression
 * @returns {string}
 */
function selectedIf(expression) {
  return expression ? 'selected' : '';
}

/**
 * A checkedIf helper for checkboxes.
 *
 * @example
 *      {{checkedIf true}}  => 'checked'
 *
 * @param {boolean} expression
 * @returns {string}
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
 * @param {array} data
 * @param {object} opts Object of options that includes id, text and selected attribute
 * @returns {array}
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
exports.abs = abs;
/**
 * A sum helper calculating the sum of two numbers.
 *
 * @example
 *      {{sum 1 2}}     => 3
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function sum(value1, value2) {
  return Number(value1) + Number(value2);
}

/**
 * A difference helper calculating the difference of two numbers.
 *
 * @example
 *      {{difference 5 2}}  => 3
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function difference(value1, value2) {
  return Number(value1) - Number(value2);
}

/**
 * A ceil helper to find the ceil value of the number.
 *
 * @example
 *      {{ceil 5.6}}    => 6
 *
 * @param {number} value
 * @returns {number}
 */
function ceil(value) {
  return Math.ceil(Number(value));
}

/**
 * A floor helper to find the floor value of the number.
 *
 * @example
 *      {{floor 5.6}} => 5
 *
 * @param {number} value
 * @returns {number}
 */
function floor(value) {
  return Math.floor(Number(value));
}

/**
 * An abs helper to find the absolute value of the number.
 *
 * @example
 *      {{abs -5.6}} => 5.6
 *
 * @param {number} value
 * @returns {number}
 */
function abs(value) {
  return Math.abs(Number(value));
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
 *
 * @example
 *      {{excerpt 'Just Wow' 4}}    => 'Just'
 *
 * @param {string} string
 * @param {int} length
 * @returns {string}
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
 *
 * @example
 *      {{sanitize 'JuSt #Wow'}}    => 'just-wow'
 *
 * @param {string} string
 * @returns {string}
 */
function sanitize(string) {
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
 * @return {string}
 */
function newLineToBr(string) {
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
 *
 * @example
 *      {{capitalizeFirst 'just wow'}}   => 'Just wow'
 *
 * @param {string} string
 * @returns {string}
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
 * @example
 *      {{sprintf '%s %s!' 'Hello' 'Kabir' }}
 *      {{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
 *      {{sprintf '%(greeting)s %(name)s! How are you?' obj }}
 *      {{sprintf '%(greeting)s %(name)s! ' greeting='Hello' name='Kabir'}}
 *
 * Check this https://github.com/alexei/sprintf.js for more information
 *
 * @param {string} format
 * @param {any} ...args
 * @returns {string}
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
 *
 * @example
 *    {{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
 *
 * @param {string} param
 * @return {string}
 */
function lowercase(param) {
  return (0, _utils.isString)(param) ? param.toLowerCase() : param;
}

/**
 * Changes the string to uppercase.
 *
 * @example
 *    {{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
 *
 * @param {string} param
 * @return {string}
 */
function uppercase(param) {
  return (0, _utils.isString)(param) ? param.toUpperCase() : param;
}

/**
 * Get the first element of a collection/array.
 *
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{first someArray}}   => 'David'
 *
 * @param {array} collection
 * @return {string}
 */
function first(collection) {
  if (!(0, _utils.isArray)(collection) || collection.length === 0) {
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
 * @return {string}
 */
function last(collection) {
  if (!(0, _utils.isArray)(collection) || collection.length === 0) {
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
 * @param {any} ...params
 * @return {string}
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
 * @param  {array} params
 * @param  {string} delimiter
 * @return {string}
 */
function join(params, delimiter) {
  if (!delimiter || (0, _utils.isObject)(delimiter)) {
    delimiter = '';
  }

  if (!(0, _utils.isArray)(params)) {
    return false;
  }

  return params.join(delimiter);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9VQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gTm90ZTogRVM2IGV4cG9ydCBkZWZhdWx0IHdvdWxkIGV4cG9ydCB0aGUgSCBjbGFzcyBpbiAnZGVmYXVsdCcga2V5IHNvIHdlIGhhdmUgdG8gdXNlIHRoYXRcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvSC5qcycpLmRlZmF1bHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIFV0aWxzXG5cblxuLy8gSGVscGVyc1xuXG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWwvdXRpbHMnKTtcblxudmFyIF9odG1sID0gcmVxdWlyZSgnLi9oZWxwZXJzL2h0bWwnKTtcblxudmFyIGh0bWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaHRtbCk7XG5cbnZhciBfbWF0aCA9IHJlcXVpcmUoJy4vaGVscGVycy9tYXRoJyk7XG5cbnZhciBtYXRoID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX21hdGgpO1xuXG52YXIgX3N0cmluZ3MgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3RyaW5ncycpO1xuXG52YXIgc3RyaW5ncyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zdHJpbmdzKTtcblxudmFyIF9kYXRldGltZSA9IHJlcXVpcmUoJy4vaGVscGVycy9kYXRldGltZScpO1xuXG52YXIgZGF0ZXRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZGF0ZXRpbWUpO1xuXG52YXIgX2Zvcm1hdHRlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMvZm9ybWF0dGVycycpO1xuXG52YXIgZm9ybWF0dGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9mb3JtYXR0ZXJzKTtcblxudmFyIF9jb25kaXRpb25hbHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvY29uZGl0aW9uYWxzJyk7XG5cbnZhciBjb25kaXRpb25hbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY29uZGl0aW9uYWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEgsIG51bGwsIFt7XG4gICAga2V5OiAncmVnaXN0ZXJIZWxwZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXJzKGhhbmRsZWJhcnMpIHtcblxuICAgICAgaGFuZGxlYmFycyA9IGhhbmRsZWJhcnMgfHwgZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgICAgIGlmICghKDAsIF91dGlscy5pc09iamVjdCkoaGFuZGxlYmFycykpIHtcbiAgICAgICAgLy8gSW4gY2FzZSwgaGFuZGxlYmFycyBpcyBub3QgcHJvdmlkZWQgYW5kIGl0J3Mgbm90IGF2YWlsYWJsZVxuICAgICAgICAvLyBpbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZSBhcyB3ZWxsIHRocm93IHRoZSBlcnJvciBhbmQgaGFsdC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGViYXJzIG5vdCBsb2FkZWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGVscGVycyBsaXN0XG4gICAgICB2YXIgaGVscGVycyA9IFttYXRoLCBodG1sLCBzdHJpbmdzLCBjb25kaXRpb25hbHMsIGRhdGV0aW1lLCBmb3JtYXR0ZXJzXTtcblxuICAgICAgaGVscGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXIpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHRvIEhhbmRsZWJhcnNcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWxwZXIpIHtcbiAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcltuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXEgPSBlcTtcbmV4cG9ydHMuZXF3ID0gZXF3O1xuZXhwb3J0cy5uZXEgPSBuZXE7XG5leHBvcnRzLm5lcXcgPSBuZXF3O1xuZXhwb3J0cy5sdCA9IGx0O1xuZXhwb3J0cy5sdGUgPSBsdGU7XG5leHBvcnRzLmd0ID0gZ3Q7XG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmV4cG9ydHMuaWZ4ID0gaWZ4O1xuZXhwb3J0cy5ub3QgPSBub3Q7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmNvdW50ID0gY291bnQ7XG5leHBvcnRzLmFuZCA9IGFuZDtcbmV4cG9ydHMub3IgPSBvcjtcbmV4cG9ydHMuY29hbGVzY2UgPSBjb2FsZXNjZTtcbmV4cG9ydHMuaW5jbHVkZXMgPSBpbmNsdWRlcztcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09PSkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlcSAnMycgM319ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VxdyAnMycgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA9PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT09KS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e25lcSA0IDN9fSAgICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5lcSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxICE9PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT0pIHdlYWsgY2hlY2tpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tuZXF3ICczJyAzfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbmVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxICE9IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgbGVzcyB0aGFuIGNvbmRpdGlvbiAoYSA8IGIpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGx0KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPCB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bHRlIDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA8PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBjb25kaXRpb24gKGEgPiBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Z3QgMiAzfX0gICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBndCh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxID4gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2d0ZSAzIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPj0gdmFsdWUyO1xufVxuXG4vKipcbiAqIEhlbHBlciB0byBpbWl0YXRlIHRoZSB0ZXJuYXJ5IGNvbmRpdGlvbmFsIG9wZXJhdG9yID86XG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTEgICAgVmFsdWUgdG8gcmV0dXJuIHdoZW4gdGhlIGNvbmRpdGlvbiBob2xkcyB0cnVlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyICAgIFZhbHVlIHRvIHJldHVybiB3aGVuIHRoZSBjb25kaXRpb24gaXMgZmFsc2UgKE9wdGlvbmFsKVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gaWZ4KGNvbmRpdGlvbiwgdmFsdWUxLCB2YWx1ZTIpIHtcbiAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgb21pdHRlZCB0aGUgbGFzdCBwYXJhbWV0ZXJcbiAgLy8gaWYgdGhhdCdzIHRoZSBjYXNlLCBpdCB3b3VsZCBiZSB0aGUgaGFuZGxlYmFycydzIG9wdGlvbnMgb2JqZWN0XG4gIC8vIHdoaWNoIGl0IHNlbmRzIGFsd2F5cyBhcyB0aGUgbGFzdCBwYXJhbWV0ZXIuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KSh2YWx1ZTIpICYmIHZhbHVlMi5uYW1lID09PSAnaWZ4JyAmJiB2YWx1ZTIuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSkge1xuICAgIC8vIFRoaXMgbWVhbnMgdGhlIHVzZXIgaGFzIHNraXBwZWQgdGhlIGxhc3QgcGFyYW1ldGVyLFxuICAgIC8vIHNvIHdlIHNob3VsZCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nICgnJykgaW4gdGhlIGVsc2UgY2FzZSBpbnN0ZWFkLlxuICAgIHZhbHVlMiA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIGNvbmRpdGlvbiA/IHZhbHVlMSA6IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBMb2dpY2FsIE5PVCBvZiBhbnkgZXhwcmVzc2lvbi5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bm90IHRydWV9fSAgICA9PiBmYWxzZVxuICogICAgICB7e25vdCBmYWxzZX19ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuICFleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSA9PiB0cnVlIHwgZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NvdW50IGFycmF5fX0gPT4gIGZhbHNlIHwgYXJyYXkubGVuZ3RoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEByZXR1cm5zIHtib29sZWFuIHwgbnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb3VudChhcnJheSkge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib29sZWFuIEFORCBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAqIGl0IGlzIHRydWUgaWZmIGFsbCB0aGUgcGFyYW1ldGVycyBhcmUgdHJ1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB2YWx1ZTEgPSB2YWx1ZTIgPSB0cnVlO1xuICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gKlxuICogICAgIHZhciB2YWx1ZTEgPSBmYWxzZSwgdmFsdWUyID0gdHJ1ZTtcbiAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYW5kKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXBhcmFtc1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvb2xlYW4gT1Igb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gKiBpdCBpcyB0cnVlIGlmIGFueSBvZiB0aGUgcGFyYW1ldGVycyBpcyB0cnVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIHZhbHVlMSA9IHRydWUsIHZhbHVlMiA9IGZhbHNlO1xuICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IHRydWVcbiAqXG4gKiAgICAgdmFyIHZhbHVlID0gdmFsdWUyID0gZmFsc2U7XG4gKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gb3IoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBwYXJhbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgIHBhcmFtcy5wb3AoKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IG5vbi1mYWxzeSB2YWx1ZSBmcm9tIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAqIFdvcmtzIHF1aXRlIHNpbWlsYXIgdG8gdGhlIFNRTCdzIENPQUxFU0NFKCkgZnVuY3Rpb24sIGJ1dCB1bmxpa2UgdGhpc1xuICogY2hlY2tzIGZvciB0aGUgZmlyc3Qgbm9uLWZhbHNlIHBhcmFtZXRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciBmdWxsTmFtZSA9ICdGb28gQmFyJywgbmlja05hbWUgPSAnZm9vYic7XG4gKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnRm9vIEJhcidcbiAqXG4gKiAgICAgdmFyIGZ1bGxOYW1lID0gJycsIG5pY2tOYW1lID0gJ2Zvb2InO1xuICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ2Zvb2InXG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gY29hbGVzY2UoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBwYXJhbXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgIHBhcmFtcy5wb3AoKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgcmV0dXJuIHBhcmFtc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyYW1zLnBvcCgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiBpZiB0aGUgYXJyYXkgY29udGFpbnMgdGhlIGVsZW1lbnQgc3RyaWN0bHkgb3Igbm9uLXN0cmljdGx5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGFycmF5ID0gWzEsIDIsIDMsIDRdO1xuICogICAgIHZhciB2YWx1ZTEgPSAyLCB2YWx1ZTIgPSAxMCwgdmFsdWUzID0gJzMnO1xuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUxfX0gICAgICAgID0+IHRydWVcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMn19ICAgICAgICA9PiBmYWxzZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzfX0gICAgICAgID0+IGZhbHNlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTMgZmFsc2V9fSAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBzdHJpY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSB8fCBhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0cmljdCAmJiBhcnJheVtpXSA9PT0gdmFsdWUgfHwgIXN0cmljdCAmJiBhcnJheVtpXSA9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogQSBmb3JtYXREYXRlIGhlbHBlciB0byBmb3JtYXQgZGF0ZSB1c2luZyBtb21lbnQganMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmb3JtYXREYXRlICdNTS9ERC9ZWVlZJyBkYXRlfX1cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZm9ybWF0U3RyaW5nLCBkYXRlKSB7XG4gIHZhciBtb21lbnQgPSBnbG9iYWwubW9tZW50O1xuXG4gIGlmICghbW9tZW50KSB7XG4gICAgbW9tZW50ID0gKHdpbmRvdy5tb21lbnQpO1xuICB9XG5cbiAgZm9ybWF0U3RyaW5nID0gKDAsIF91dGlscy5pc1N0cmluZykoZm9ybWF0U3RyaW5nKSA/IGZvcm1hdFN0cmluZyA6ICcnO1xuXG4gIHJldHVybiBtb21lbnQoZGF0ZSB8fCBuZXcgRGF0ZSgpKS5mb3JtYXQoZm9ybWF0U3RyaW5nKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcm1hdEN1cnJlbmN5ID0gZm9ybWF0Q3VycmVuY3k7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRm9ybWF0IHRoZSBjdXJyZW5jeSBhY2NvcmRpbmcgdG8gdGhlIGNvdW50cnkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmb3JtYXRDdXJyZW5jeSAxMjM0NTY3Ljg5IGNvZGU9J1VTRCd9fSAgPT4gJDEsMjM0LDU2Ny44OVxuICogICAgICB7e2Zvcm1hdEN1cnJlbmN5IDEyMzQ1NjcuODkgY29kZT0nRVVSJ319ICA9PiAxLjIzNC41NjcsODkg4oKsXG4gKiAgICAgIHt7Zm9ybWF0Q3VycmVuY3kgMTIzNDU2Ny44OSBjb2RlPSdFVVInIGxvY2FsZT1cImVuXCJ9fSAgPT4g4oKsMSwyMzQsNTY3Ljg5XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge2FueX0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUpIHtcbiAgdmFyIGN1cnJlbmN5Rm9ybWF0dGVyID0gZ2xvYmFsLk9TUkVDICYmIGdsb2JhbC5PU1JFQy5DdXJyZW5jeUZvcm1hdHRlcjtcbiAgdmFyIGhhbmRsZWJhcnMgPSBnbG9iYWwuSGFuZGxlYmFycztcblxuICBpZiAoIWN1cnJlbmN5Rm9ybWF0dGVyKSB7XG4gICAgY3VycmVuY3lGb3JtYXR0ZXIgPSAod2luZG93Lk9TUkVDLkN1cnJlbmN5Rm9ybWF0dGVyKTtcbiAgfVxuXG4gIGlmICghaGFuZGxlYmFycykge1xuICAgIGhhbmRsZWJhcnMgPSAod2luZG93LkhhbmRsZWJhcnMpO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZ3NbMF0pICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZ3NbMF0uaGFzaCkpIHtcbiAgICBwYXJhbXMgPSBhcmdzWzBdLmhhc2g7XG4gIH1cblxuICBwYXJhbXMuY3VycmVuY3kgPSAhKDAsIF91dGlscy5pc1VuZGVmaW5lZCkocGFyYW1zLmNvZGUpID8gcGFyYW1zLmNvZGUgOiBwYXJhbXMuY3VycmVuY3k7XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzVW5kZWZpbmVkKShwYXJhbXMuY3VycmVuY3kpICYmICEocGFyYW1zLmN1cnJlbmN5IGluIGN1cnJlbmN5Rm9ybWF0dGVyLnN5bWJvbHMpKSB7XG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjdXJyZW5jeSBjb2RlICcgKyBwYXJhbXMuY3VycmVuY3kgKyAnIHByb3ZpZGVkIGZvciBoZWxwZXIgYGZvcm1hdEN1cnJlbmN5YC4nKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghKDAsIF91dGlscy5pc051bWVyaWMpKHZhbHVlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBuZXcgaGFuZGxlYmFycy5TYWZlU3RyaW5nKGN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSwgcGFyYW1zKSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zaG93SWYgPSBzaG93SWY7XG5leHBvcnRzLmhpZGVJZiA9IGhpZGVJZjtcbmV4cG9ydHMuc2VsZWN0ZWRJZiA9IHNlbGVjdGVkSWY7XG5leHBvcnRzLmNoZWNrZWRJZiA9IGNoZWNrZWRJZjtcbmV4cG9ydHMub3B0aW9ucyA9IG9wdGlvbnM7XG4vKipcbiAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2hvd0lmIHRydWV9fSAgICAgPT4gJydcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gIHJldHVybiBleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbn1cblxuLyoqXG4gKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7aGlkZUlmIHRydWV9fSAgICAgPT4gJ2hpZGRlbidcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGhpZGVJZihleHByZXNzaW9uKSB7XG4gIHJldHVybiBleHByZXNzaW9uID8gJ2hpZGRlbicgOiAnJztcbn1cblxuLyoqXG4gKiBBIHNlbGVjdGVkSWYgaGVscGVyIGZvciBkcm9wZG93biBhbmQgcmFkaW8gYm94ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhwcmVzc2lvblxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2VsZWN0ZWRJZihleHByZXNzaW9uKSB7XG4gIHJldHVybiBleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgY2hlY2tlZElmIGhlbHBlciBmb3IgY2hlY2tib3hlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NoZWNrZWRJZiB0cnVlfX0gID0+ICdjaGVja2VkJ1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhwcmVzc2lvblxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2hlY2tlZElmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBbiBvcHRpb25zIGhlbHBlciBmb3IgZ2VuZXJhdGluZyA8b3B0aW9uPiBsaXN0IGZvciA8c2VsZWN0PiBkcm9wZG93bnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIEEgc2ltcGxlIGV4YW1wbGU6XG4gKlxuICogICAgICBjb25zdCBkYXRhID0gW1xuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAxLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vJ1xuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMixcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JhcidcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDMsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28gQmFyJ1xuICogICAgICAgICAgfVxuICogICAgICBdO1xuICpcbiAqICAgICAge3t7b3B0aW9ucyBkYXRhIHNlbGVjdGVkPVwiMlwifX19XG4gKlxuICogd2lsbCBnZW5lcmF0ZSBodG1sIGxpa2UgdGhpczpcbiAqXG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Rm9vPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIgc2VsZWN0ZWQ+QmFyPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Rm9vIEJhcjwvb3B0aW9uPlxuICpcbiAqIEBleGFtcGxlXG4gKiBZb3UgY2FuIGFsc28gb3ZlcnJpZGUgdGhlIGRlZmF1bHQga2V5IG5hbWVzIGZvciAnaWQnICYgJ2Rlc2NyaXB0aW9uJ1xuICogdXNpbmcgdGhlICdpZCcgJiAndGV4dCcgb3B0aW9ucyBpbiB0aGUgaGVscGVyLlxuICpcbiAqICAgICAgY29uc3QgZGF0YSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAqICAgICAgICAgICAgICB0ZXh0OiAnTmV3IFlvcmsnXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIHZhbHVlOiAyLFxuICogICAgICAgICAgICAgIHRleHQ6ICdMb25kb24nXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF07XG4gKlxuICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIxXCIgaWQ9XCJ2YWx1ZVwiIHRleHQ9XCJ0ZXh0XCJ9fX1cbiAqXG4gKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICpcbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD5OZXcgWW9yazwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkxvbmRvbjwvb3B0aW9uPlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRzIE9iamVjdCBvZiBvcHRpb25zIHRoYXQgaW5jbHVkZXMgaWQsIHRleHQgYW5kIHNlbGVjdGVkIGF0dHJpYnV0ZVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5mdW5jdGlvbiBvcHRpb25zKGRhdGEsIG9wdHMpIHtcbiAgLy8gVGhlIGlkICYgdGV4dCBmb3IgdGhlIDxvcHRpb24+XG4gIHZhciBpZCA9IG9wdHMuaGFzaC5pZCB8fCAnaWQnO1xuICB2YXIgdGV4dCA9IG9wdHMuaGFzaC50ZXh0IHx8ICdkZXNjcmlwdGlvbic7XG5cbiAgLy8gVGhlIHNlbGVjdGlvbiBcImlkXCIgb2YgdGhlIDxvcHRpb24+XG4gIHZhciBzZWxlY3RlZElkID0gb3B0cy5oYXNoLnNlbGVjdGVkIHx8IG51bGw7XG5cbiAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIHZhbHVlID0gaXRlbVtpZF0gfHwgJyc7XG4gICAgdmFyIGlubmVyVGV4dCA9IGl0ZW1bdGV4dF0gfHwgJyc7XG4gICAgdmFyIHNlbGVjdGVkID0gdmFsdWUgPT0gc2VsZWN0ZWRJZCA/ICcgc2VsZWN0ZWQnIDogJyc7XG5cbiAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUgKyAnXCInICsgc2VsZWN0ZWQgKyAnPicgKyBpbm5lclRleHQgKyAnPC9vcHRpb24+JztcbiAgfSkuam9pbignXFxuJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnN1bSA9IHN1bTtcbmV4cG9ydHMuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG5leHBvcnRzLmNlaWwgPSBjZWlsO1xuZXhwb3J0cy5mbG9vciA9IGZsb29yO1xuZXhwb3J0cy5hYnMgPSBhYnM7XG4vKipcbiAqIEEgc3VtIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgc3VtIG9mIHR3byBudW1iZXJzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c3VtIDEgMn19ICAgICA9PiAzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gc3VtKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUxKSArIE51bWJlcih2YWx1ZTIpO1xufVxuXG4vKipcbiAqIEEgZGlmZmVyZW5jZSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIG51bWJlcnMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tkaWZmZXJlbmNlIDUgMn19ICA9PiAzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgLSBOdW1iZXIodmFsdWUyKTtcbn1cblxuLyoqXG4gKiBBIGNlaWwgaGVscGVyIHRvIGZpbmQgdGhlIGNlaWwgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NlaWwgNS42fX0gICAgPT4gNlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2VpbCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5jZWlsKE51bWJlcih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIEEgZmxvb3IgaGVscGVyIHRvIGZpbmQgdGhlIGZsb29yIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBmbG9vcih2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBBbiBhYnMgaGVscGVyIHRvIGZpbmQgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3thYnMgLTUuNn19ID0+IDUuNlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gYWJzKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmFicyhOdW1iZXIodmFsdWUpKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4Y2VycHQgPSBleGNlcnB0O1xuZXhwb3J0cy5zYW5pdGl6ZSA9IHNhbml0aXplO1xuZXhwb3J0cy5uZXdMaW5lVG9CciA9IG5ld0xpbmVUb0JyO1xuZXhwb3J0cy5jYXBpdGFsaXplRWFjaCA9IGNhcGl0YWxpemVFYWNoO1xuZXhwb3J0cy5jYXBpdGFsaXplRmlyc3QgPSBjYXBpdGFsaXplRmlyc3Q7XG5leHBvcnRzLnNwcmludGYgPSBzcHJpbnRmO1xuZXhwb3J0cy5sb3dlcmNhc2UgPSBsb3dlcmNhc2U7XG5leHBvcnRzLnVwcGVyY2FzZSA9IHVwcGVyY2FzZTtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbmV4cG9ydHMuam9pbiA9IGpvaW47XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7aW50fSBsZW5ndGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGV4Y2VycHQoc3RyaW5nLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcblxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsZW5ndGgpICsgJy4uLic7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzYW5pdGl6ZSAnSnVTdCAjV293J319ICAgID0+ICdqdXN0LXdvdydcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpLnRyaW0oKTtcblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBcXG4gd2l0aCA8YnI+IHRhZ3MuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB7e25ld0xpbmVUb0JyICduZXdMaW5lVG9CciBoZWxwZXIgXFxuIGlzIHZlcnkgXFxuIHVzZWZ1bC4nfX0gICAgPT4gbmV3TGluZVRvQnIgaGVscGVyIDxicj4gaXMgdmVyeSA8YnI+IHVzZWZ1bC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5ld0xpbmVUb0JyKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICc8YnI+Jyk7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNwcmludGYgaGVscGVyIHRvIGJlIHVzZWQgaW4gdGhlIGhhbmRsZWJhcnMgdGVtcGxhdGVzIHRoYXQgc3VwcG9ydHMgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogTk9URTogVGhpcyBoZWxwZXIgcmVsaWVzIG9uIHNwcmludGYoKSBmdW5jdGlvbiBwcm92aWRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanNcbiAqIFNvLCBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIHNwcmludGYtanMgcGFja2FnZSBhdmFpbGFibGUgZWl0aGVyIGFzIGEgbm9kZSBtb2R1bGVcbiAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gKlxuICogU3ludGF4OlxuICogICAgICB7e3NwcmludGYgZm9ybWF0IGFyZzEgYXJnMiBhcmczLi4uLn19XG4gKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgb2JqZWN0fX1cbiAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBrZXkxPXZhbHVlMSBrZXkyPXZhbHVlMi4uLn19XG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzcHJpbnRmICclcyAlcyEnICdIZWxsbycgJ0thYmlyJyB9fVxuICogICAgICB7e3NwcmludGYgJyVzICVzICVkICVzICVkJyAnRm9vJyAnQmFyJyA1NSAnQmF6JyAnMjAnfX1cbiAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhIEhvdyBhcmUgeW91Pycgb2JqIH19XG4gKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISAnIGdyZWV0aW5nPSdIZWxsbycgbmFtZT0nS2FiaXInfX1cbiAqXG4gKiBDaGVjayB0aGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZWkvc3ByaW50Zi5qcyBmb3IgbW9yZSBpbmZvcm1hdGlvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAqIEBwYXJhbSB7YW55fSAuLi5hcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCkge1xuXG4gIC8vIENoZWNrIGlmIHRoZSB2c3ByaW50ZiBmdW5jdGlvbiBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlIHRoZW4gdHJ5IHRvIHJlcXVpcmUoKSBpdFxuICB2YXIgX3ZzcHJpbnRmID0gZ2xvYmFsLnZzcHJpbnRmO1xuXG4gIGlmICghKDAsIF91dGlscy5pc0Z1bmN0aW9uKShfdnNwcmludGYpKSB7XG4gICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICB9XG5cbiAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICB2YXIgcGFyYW1zID0gW107XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgYXJnID0gYXJnLmhhc2g7XG4gICAgfVxuXG4gICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gX3ZzcHJpbnRmKGZvcm1hdCwgcGFyYW1zKSA6IGZvcm1hdDtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB7e2xvd2VyY2FzZSAnSlVTVCBXT1chISEnfX0gICA9PiAnanVzdCB3b3chISEnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvd2VyY2FzZShwYXJhbSkge1xuICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9Mb3dlckNhc2UoKSA6IHBhcmFtO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHt7dXBwZXJjYXNlICdqdXN0IHdvdyEhISd9fSAgID0+ICdKVVNUIFdPVyEhISdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdXBwZXJjYXNlKHBhcmFtKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b1VwcGVyQ2FzZSgpIDogcGFyYW07XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gKiAgICB7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvblswXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICogICAge3tsYXN0IHNvbWVBcnJheX19ICAgPT4gJ0pvbmVzJ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uW2NvbGxlY3Rpb24ubGVuZ3RoIC0gMV07XG59XG5cbi8qKlxuICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAqXG4gKiBAcGFyYW0ge2FueX0gLi4ucGFyYW1zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gKiAgICB7e2pvaW4gc29tZUFycmF5ICcgJiAnfX0gICA9PiAnSGFuZHMgJiBsZWdzICYgZmVldCdcbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gcGFyYW1zXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGRlbGltaXRlclxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKHBhcmFtcywgZGVsaW1pdGVyKSB7XG4gIGlmICghZGVsaW1pdGVyIHx8ICgwLCBfdXRpbHMuaXNPYmplY3QpKGRlbGltaXRlcikpIHtcbiAgICBkZWxpbWl0ZXIgPSAnJztcbiAgfVxuXG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShwYXJhbXMpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5qb2luKGRlbGltaXRlcik7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzTnVtZXJpYyA9IGlzTnVtZXJpYztcbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYy5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufSJdfQ==
