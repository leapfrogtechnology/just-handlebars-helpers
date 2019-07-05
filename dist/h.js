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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9VQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gVXRpbHNcblxuXG4vLyBIZWxwZXJzXG5cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbC91dGlscycpO1xuXG52YXIgX2h0bWwgPSByZXF1aXJlKCcuL2hlbHBlcnMvaHRtbCcpO1xuXG52YXIgaHRtbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9odG1sKTtcblxudmFyIF9tYXRoID0gcmVxdWlyZSgnLi9oZWxwZXJzL21hdGgnKTtcblxudmFyIG1hdGggPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWF0aCk7XG5cbnZhciBfc3RyaW5ncyA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHJpbmdzJyk7XG5cbnZhciBzdHJpbmdzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3N0cmluZ3MpO1xuXG52YXIgX2RhdGV0aW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL2RhdGV0aW1lJyk7XG5cbnZhciBkYXRldGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kYXRldGltZSk7XG5cbnZhciBfZm9ybWF0dGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JtYXR0ZXJzJyk7XG5cbnZhciBmb3JtYXR0ZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Zvcm1hdHRlcnMpO1xuXG52YXIgX2NvbmRpdGlvbmFscyA9IHJlcXVpcmUoJy4vaGVscGVycy9jb25kaXRpb25hbHMnKTtcblxudmFyIGNvbmRpdGlvbmFscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jb25kaXRpb25hbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSCwgbnVsbCwgW3tcbiAgICBrZXk6ICdyZWdpc3RlckhlbHBlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcnMoaGFuZGxlYmFycykge1xuXG4gICAgICBoYW5kbGViYXJzID0gaGFuZGxlYmFycyB8fCBnbG9iYWwuSGFuZGxlYmFycztcblxuICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqZWN0KShoYW5kbGViYXJzKSkge1xuICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgIC8vIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGFzIHdlbGwgdGhyb3cgdGhlIGVycm9yIGFuZCBoYWx0LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBIZWxwZXJzIGxpc3RcbiAgICAgIHZhciBoZWxwZXJzID0gW21hdGgsIGh0bWwsIHN0cmluZ3MsIGNvbmRpdGlvbmFscywgZGF0ZXRpbWUsIGZvcm1hdHRlcnNdO1xuXG4gICAgICBoZWxwZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcikge1xuICAgICAgICAvLyBSZWdpc3RlciBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgdG8gSGFuZGxlYmFyc1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlbHBlcikge1xuICAgICAgICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEg7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lcSA9IGVxO1xuZXhwb3J0cy5lcXcgPSBlcXc7XG5leHBvcnRzLm5lcSA9IG5lcTtcbmV4cG9ydHMubmVxdyA9IG5lcXc7XG5leHBvcnRzLmx0ID0gbHQ7XG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmV4cG9ydHMuZ3QgPSBndDtcbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZXhwb3J0cy5pZnggPSBpZng7XG5leHBvcnRzLm5vdCA9IG5vdDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbmV4cG9ydHMuYW5kID0gYW5kO1xuZXhwb3J0cy5vciA9IG9yO1xuZXhwb3J0cy5jb2FsZXNjZSA9IGNvYWxlc2NlO1xuZXhwb3J0cy5pbmNsdWRlcyA9IGluY2x1ZGVzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VxICczJyAzfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA9PT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT0pIGkuZSB3ZWFrIGNoZWNraW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxID09IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPT0pLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bmVxIDQgM319ICAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbmVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgIT09IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPSkgd2VhayBjaGVja2luZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e25lcXcgJzMnIDN9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBuZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgIT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tsdCAyIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA8IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgbGVzcyB0aGFuIG9yIGVxdWFscyBjb25kaXRpb24gKGEgPD0gYikuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGx0ZSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxIDw9IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIGNvbmRpdGlvbiAoYSA+IGIpLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPiB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA+PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGltaXRhdGUgdGhlIHRlcm5hcnkgY29uZGl0aW9uYWwgb3BlcmF0b3IgPzpcbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gKiAgICAgIHt7aWZ4IGZhbHNlICdGb28nICdCYXInfX0gICA9PiBGb29cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvblxuICogQHBhcmFtIHthbnl9IHZhbHVlMSAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGhvbGRzIHRydWVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTIgICAgVmFsdWUgdG8gcmV0dXJuIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyBmYWxzZSAoT3B0aW9uYWwpXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpZngoY29uZGl0aW9uLCB2YWx1ZTEsIHZhbHVlMikge1xuICAvLyBDaGVjayBpZiB1c2VyIGhhcyBvbWl0dGVkIHRoZSBsYXN0IHBhcmFtZXRlclxuICAvLyBpZiB0aGF0J3MgdGhlIGNhc2UsIGl0IHdvdWxkIGJlIHRoZSBoYW5kbGViYXJzJ3Mgb3B0aW9ucyBvYmplY3RcbiAgLy8gd2hpY2ggaXQgc2VuZHMgYWx3YXlzIGFzIHRoZSBsYXN0IHBhcmFtZXRlci5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHZhbHVlMikgJiYgdmFsdWUyLm5hbWUgPT09ICdpZngnICYmIHZhbHVlMi5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpKSB7XG4gICAgLy8gVGhpcyBtZWFucyB0aGUgdXNlciBoYXMgc2tpcHBlZCB0aGUgbGFzdCBwYXJhbWV0ZXIsXG4gICAgLy8gc28gd2Ugc2hvdWxkIHJldHVybiBhbiBlbXB0eSBzdHJpbmcgKCcnKSBpbiB0aGUgZWxzZSBjYXNlIGluc3RlYWQuXG4gICAgdmFsdWUyID0gJyc7XG4gIH1cblxuICByZXR1cm4gY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xufVxuXG4vKipcbiAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHthbnl9IGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBub3QoZXhwcmVzc2lvbikge1xuICByZXR1cm4gIWV4cHJlc3Npb247XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXJyYXkgaXMgZW1wdHkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5Lmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHJldHVybnMge2Jvb2xlYW4gfCBudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvdW50KGFycmF5KSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYXJyYXkubGVuZ3RoO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvb2xlYW4gQU5EIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICogaXQgaXMgdHJ1ZSBpZmYgYWxsIHRoZSBwYXJhbWV0ZXJzIGFyZSB0cnVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIHZhbHVlMSA9IHZhbHVlMiA9IHRydWU7XG4gKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IHRydWVcbiAqXG4gKiAgICAgdmFyIHZhbHVlMSA9IGZhbHNlLCB2YWx1ZTIgPSB0cnVlO1xuICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhbmQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcGFyYW1zW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYm9vbGVhbiBPUiBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAqIGl0IGlzIHRydWUgaWYgYW55IG9mIHRoZSBwYXJhbWV0ZXJzIGlzIHRydWUuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgdmFsdWUxID0gdHJ1ZSwgdmFsdWUyID0gZmFsc2U7XG4gKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICpcbiAqICAgICB2YXIgdmFsdWUgPSB2YWx1ZTIgPSBmYWxzZTtcbiAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBvcigpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3Qgbm9uLWZhbHN5IHZhbHVlIGZyb20gdGhlIHBhcmFtZXRlciBsaXN0LlxuICogV29ya3MgcXVpdGUgc2ltaWxhciB0byB0aGUgU1FMJ3MgQ09BTEVTQ0UoKSBmdW5jdGlvbiwgYnV0IHVubGlrZSB0aGlzXG4gKiBjaGVja3MgZm9yIHRoZSBmaXJzdCBub24tZmFsc2UgcGFyYW1ldGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGZ1bGxOYW1lID0gJ0ZvbyBCYXInLCBuaWNrTmFtZSA9ICdmb29iJztcbiAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdGb28gQmFyJ1xuICpcbiAqICAgICB2YXIgZnVsbE5hbWUgPSAnJywgbmlja05hbWUgPSAnZm9vYic7XG4gKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnZm9vYidcbiAqXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBjb2FsZXNjZSgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHBhcmFtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICByZXR1cm4gcGFyYW1zW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJhbXMucG9wKCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIGlmIHRoZSBhcnJheSBjb250YWlucyB0aGUgZWxlbWVudCBzdHJpY3RseSBvciBub24tc3RyaWN0bHkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgYXJyYXkgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgdmFyIHZhbHVlMSA9IDIsIHZhbHVlMiA9IDEwLCB2YWx1ZTMgPSAnMyc7XG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTF9fSAgICAgICAgPT4gdHJ1ZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUyfX0gICAgICAgID0+IGZhbHNlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTN9fSAgICAgICAgPT4gZmFsc2VcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMyBmYWxzZX19ICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIHN0cmljdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RyaWN0ICYmIGFycmF5W2ldID09PSB2YWx1ZSB8fCAhc3RyaWN0ICYmIGFycmF5W2ldID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXREYXRlID0gZm9ybWF0RGF0ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBBIGZvcm1hdERhdGUgaGVscGVyIHRvIGZvcm1hdCBkYXRlIHVzaW5nIG1vbWVudCBqcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2Zvcm1hdERhdGUgJ01NL0REL1lZWVknIGRhdGV9fVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRTdHJpbmcgYmFzZWQgb24gbW9tZW50LmpzXG4gKiBAcGFyYW0ge2RhdGV9IGRhdGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUpIHtcbiAgdmFyIG1vbWVudCA9IGdsb2JhbC5tb21lbnQ7XG5cbiAgaWYgKCFtb21lbnQpIHtcbiAgICBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG4gIH1cblxuICBmb3JtYXRTdHJpbmcgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKShmb3JtYXRTdHJpbmcpID8gZm9ybWF0U3RyaW5nIDogJyc7XG5cbiAgcmV0dXJuIG1vbWVudChkYXRlIHx8IG5ldyBEYXRlKCkpLmZvcm1hdChmb3JtYXRTdHJpbmcpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0Q3VycmVuY3kgPSBmb3JtYXRDdXJyZW5jeTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBGb3JtYXQgdGhlIGN1cnJlbmN5IGFjY29yZGluZyB0byB0aGUgY291bnRyeS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2Zvcm1hdEN1cnJlbmN5IDEyMzQ1NjcuODkgY29kZT0nVVNEJ319ICA9PiAkMSwyMzQsNTY3Ljg5XG4gKiAgICAgIHt7Zm9ybWF0Q3VycmVuY3kgMTIzNDU2Ny44OSBjb2RlPSdFVVInfX0gID0+IDEuMjM0LjU2Nyw4OSDigqxcbiAqICAgICAge3tmb3JtYXRDdXJyZW5jeSAxMjM0NTY3Ljg5IGNvZGU9J0VVUicgbG9jYWxlPVwiZW5cIn19ICA9PiDigqwxLDIzNCw1NjcuODlcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7YW55fSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSkge1xuICB2YXIgY3VycmVuY3lGb3JtYXR0ZXIgPSBnbG9iYWwuT1NSRUMgJiYgZ2xvYmFsLk9TUkVDLkN1cnJlbmN5Rm9ybWF0dGVyO1xuICB2YXIgaGFuZGxlYmFycyA9IGdsb2JhbC5IYW5kbGViYXJzO1xuXG4gIGlmICghY3VycmVuY3lGb3JtYXR0ZXIpIHtcbiAgICBjdXJyZW5jeUZvcm1hdHRlciA9ICh3aW5kb3cuT1NSRUMuQ3VycmVuY3lGb3JtYXR0ZXIpO1xuICB9XG5cbiAgaWYgKCFoYW5kbGViYXJzKSB7XG4gICAgaGFuZGxlYmFycyA9ICh3aW5kb3cuSGFuZGxlYmFycyk7XG4gIH1cblxuICB2YXIgcGFyYW1zID0ge307XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkoYXJnc1swXSkgJiYgKDAsIF91dGlscy5pc09iamVjdCkoYXJnc1swXS5oYXNoKSkge1xuICAgIHBhcmFtcyA9IGFyZ3NbMF0uaGFzaDtcbiAgfVxuXG4gIHBhcmFtcy5jdXJyZW5jeSA9ICEoMCwgX3V0aWxzLmlzVW5kZWZpbmVkKShwYXJhbXMuY29kZSkgPyBwYXJhbXMuY29kZSA6IHBhcmFtcy5jdXJyZW5jeTtcblxuICBpZiAoISgwLCBfdXRpbHMuaXNVbmRlZmluZWQpKHBhcmFtcy5jdXJyZW5jeSkgJiYgIShwYXJhbXMuY3VycmVuY3kgaW4gY3VycmVuY3lGb3JtYXR0ZXIuc3ltYm9scykpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGN1cnJlbmN5IGNvZGUgJyArIHBhcmFtcy5jdXJyZW5jeSArICcgcHJvdmlkZWQgZm9yIGhlbHBlciBgZm9ybWF0Q3VycmVuY3lgLicpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzTnVtZXJpYykodmFsdWUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBoYW5kbGViYXJzLlNhZmVTdHJpbmcoY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHZhbHVlLCBwYXJhbXMpKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNob3dJZiA9IHNob3dJZjtcbmV4cG9ydHMuaGlkZUlmID0gaGlkZUlmO1xuZXhwb3J0cy5zZWxlY3RlZElmID0gc2VsZWN0ZWRJZjtcbmV4cG9ydHMuY2hlY2tlZElmID0gY2hlY2tlZElmO1xuZXhwb3J0cy5vcHRpb25zID0gb3B0aW9ucztcbi8qKlxuICogQSBzaG93SWYgaGVscGVyIGZvciBzaG93aW5nIGFueSBodG1sIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzaG93SWYgdHJ1ZX19ICAgICA9PiAnJ1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhwcmVzc2lvblxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2hvd0lmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnJyA6ICdoaWRkZW4nO1xufVxuXG4vKipcbiAqIEEgaGlkZUlmIGhlbHBlciBmb3IgaGlkaW5nIGFueSBodG1sIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3toaWRlSWYgdHJ1ZX19ICAgICA9PiAnaGlkZGVuJ1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhwcmVzc2lvblxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnaGlkZGVuJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3NlbGVjdGVkSWYgdHJ1ZX19ID0+ICAnc2VsZWN0ZWQnXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzZWxlY3RlZElmKGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIGV4cHJlc3Npb24gPyAnc2VsZWN0ZWQnIDogJyc7XG59XG5cbi8qKlxuICogQSBjaGVja2VkSWYgaGVscGVyIGZvciBjaGVja2JveGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjaGVja2VkSWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xufVxuXG4vKipcbiAqIEFuIG9wdGlvbnMgaGVscGVyIGZvciBnZW5lcmF0aW5nIDxvcHRpb24+IGxpc3QgZm9yIDxzZWxlY3Q+IGRyb3Bkb3ducy5cbiAqXG4gKiBAZXhhbXBsZVxuICogQSBzaW1wbGUgZXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IGRhdGEgPSBbXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDEsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28nXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAyLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmFyJ1xuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMyxcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbyBCYXInXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF07XG4gKlxuICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIyXCJ9fX1cbiAqXG4gKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICpcbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Gb288L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD5CYXI8L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5Gb28gQmFyPC9vcHRpb24+XG4gKlxuICogQGV4YW1wbGVcbiAqIFlvdSBjYW4gYWxzbyBvdmVycmlkZSB0aGUgZGVmYXVsdCBrZXkgbmFtZXMgZm9yICdpZCcgJiAnZGVzY3JpcHRpb24nXG4gKiB1c2luZyB0aGUgJ2lkJyAmICd0ZXh0JyBvcHRpb25zIGluIHRoZSBoZWxwZXIuXG4gKlxuICogICAgICBjb25zdCBkYXRhID0gW1xuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIHZhbHVlOiAxLFxuICogICAgICAgICAgICAgIHRleHQ6ICdOZXcgWW9yaydcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgdmFsdWU6IDIsXG4gKiAgICAgICAgICAgICAgdGV4dDogJ0xvbmRvbidcbiAqICAgICAgICAgIH1cbiAqICAgICAgXTtcbiAqXG4gKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjFcIiBpZD1cInZhbHVlXCIgdGV4dD1cInRleHRcIn19fVxuICpcbiAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gKlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHNlbGVjdGVkPk5ldyBZb3JrPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TG9uZG9uPC9vcHRpb24+XG4gKlxuICogQHBhcmFtIHthcnJheX0gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IG9wdHMgT2JqZWN0IG9mIG9wdGlvbnMgdGhhdCBpbmNsdWRlcyBpZCwgdGV4dCBhbmQgc2VsZWN0ZWQgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIG9wdGlvbnMoZGF0YSwgb3B0cykge1xuICAvLyBUaGUgaWQgJiB0ZXh0IGZvciB0aGUgPG9wdGlvbj5cbiAgdmFyIGlkID0gb3B0cy5oYXNoLmlkIHx8ICdpZCc7XG4gIHZhciB0ZXh0ID0gb3B0cy5oYXNoLnRleHQgfHwgJ2Rlc2NyaXB0aW9uJztcblxuICAvLyBUaGUgc2VsZWN0aW9uIFwiaWRcIiBvZiB0aGUgPG9wdGlvbj5cbiAgdmFyIHNlbGVjdGVkSWQgPSBvcHRzLmhhc2guc2VsZWN0ZWQgfHwgbnVsbDtcblxuICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgdmFsdWUgPSBpdGVtW2lkXSB8fCAnJztcbiAgICB2YXIgaW5uZXJUZXh0ID0gaXRlbVt0ZXh0XSB8fCAnJztcbiAgICB2YXIgc2VsZWN0ZWQgPSB2YWx1ZSA9PSBzZWxlY3RlZElkID8gJyBzZWxlY3RlZCcgOiAnJztcblxuICAgIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZSArICdcIicgKyBzZWxlY3RlZCArICc+JyArIGlubmVyVGV4dCArICc8L29wdGlvbj4nO1xuICB9KS5qb2luKCdcXG4nKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3VtID0gc3VtO1xuZXhwb3J0cy5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbmV4cG9ydHMuY2VpbCA9IGNlaWw7XG5leHBvcnRzLmZsb29yID0gZmxvb3I7XG4vKipcbiAqIEEgc3VtIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgc3VtIG9mIHR3byBudW1iZXJzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c3VtIDEgMn19ICAgICA9PiAzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gc3VtKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUxKSArIE51bWJlcih2YWx1ZTIpO1xufVxuXG4vKipcbiAqIEEgZGlmZmVyZW5jZSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIG51bWJlcnMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tkaWZmZXJlbmNlIDUgMn19ICA9PiAzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlMlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgLSBOdW1iZXIodmFsdWUyKTtcbn1cblxuLyoqXG4gKiBBIGNlaWwgaGVscGVyIHRvIGZpbmQgdGhlIGNlaWwgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NlaWwgNS42fX0gICAgPT4gNlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2VpbCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5jZWlsKE51bWJlcih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIEEgZmxvb3IgaGVscGVyIHRvIGZpbmQgdGhlIGZsb29yIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBmbG9vcih2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4Y2VycHQgPSBleGNlcnB0O1xuZXhwb3J0cy5zYW5pdGl6ZSA9IHNhbml0aXplO1xuZXhwb3J0cy5uZXdMaW5lVG9CciA9IG5ld0xpbmVUb0JyO1xuZXhwb3J0cy5jYXBpdGFsaXplRWFjaCA9IGNhcGl0YWxpemVFYWNoO1xuZXhwb3J0cy5jYXBpdGFsaXplRmlyc3QgPSBjYXBpdGFsaXplRmlyc3Q7XG5leHBvcnRzLnNwcmludGYgPSBzcHJpbnRmO1xuZXhwb3J0cy5sb3dlcmNhc2UgPSBsb3dlcmNhc2U7XG5leHBvcnRzLnVwcGVyY2FzZSA9IHVwcGVyY2FzZTtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbmV4cG9ydHMuam9pbiA9IGpvaW47XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7aW50fSBsZW5ndGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGV4Y2VycHQoc3RyaW5nLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcblxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsZW5ndGgpICsgJy4uLic7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzYW5pdGl6ZSAnSnVTdCAjV293J319ICAgID0+ICdqdXN0LXdvdydcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpLnRyaW0oKTtcblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBcXG4gd2l0aCA8YnI+IHRhZ3MuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB7e25ld0xpbmVUb0JyICduZXdMaW5lVG9CciBoZWxwZXIgXFxuIGlzIHZlcnkgXFxuIHVzZWZ1bC4nfX0gICAgPT4gbmV3TGluZVRvQnIgaGVscGVyIDxicj4gaXMgdmVyeSA8YnI+IHVzZWZ1bC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5ld0xpbmVUb0JyKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICc8YnI+Jyk7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNwcmludGYgaGVscGVyIHRvIGJlIHVzZWQgaW4gdGhlIGhhbmRsZWJhcnMgdGVtcGxhdGVzIHRoYXQgc3VwcG9ydHMgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogTk9URTogVGhpcyBoZWxwZXIgcmVsaWVzIG9uIHNwcmludGYoKSBmdW5jdGlvbiBwcm92aWRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanNcbiAqIFNvLCBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIHNwcmludGYtanMgcGFja2FnZSBhdmFpbGFibGUgZWl0aGVyIGFzIGEgbm9kZSBtb2R1bGVcbiAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gKlxuICogU3ludGF4OlxuICogICAgICB7e3NwcmludGYgZm9ybWF0IGFyZzEgYXJnMiBhcmczLi4uLn19XG4gKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgb2JqZWN0fX1cbiAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBrZXkxPXZhbHVlMSBrZXkyPXZhbHVlMi4uLn19XG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzcHJpbnRmICclcyAlcyEnICdIZWxsbycgJ0thYmlyJyB9fVxuICogICAgICB7e3NwcmludGYgJyVzICVzICVkICVzICVkJyAnRm9vJyAnQmFyJyA1NSAnQmF6JyAnMjAnfX1cbiAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhIEhvdyBhcmUgeW91Pycgb2JqIH19XG4gKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISAnIGdyZWV0aW5nPSdIZWxsbycgbmFtZT0nS2FiaXInfX1cbiAqXG4gKiBDaGVjayB0aGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZWkvc3ByaW50Zi5qcyBmb3IgbW9yZSBpbmZvcm1hdGlvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAqIEBwYXJhbSB7YW55fSAuLi5hcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCkge1xuXG4gIC8vIENoZWNrIGlmIHRoZSB2c3ByaW50ZiBmdW5jdGlvbiBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlIHRoZW4gdHJ5IHRvIHJlcXVpcmUoKSBpdFxuICB2YXIgX3ZzcHJpbnRmID0gZ2xvYmFsLnZzcHJpbnRmO1xuXG4gIGlmICghKDAsIF91dGlscy5pc0Z1bmN0aW9uKShfdnNwcmludGYpKSB7XG4gICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICB9XG5cbiAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICB2YXIgcGFyYW1zID0gW107XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgYXJnID0gYXJnLmhhc2g7XG4gICAgfVxuXG4gICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gX3ZzcHJpbnRmKGZvcm1hdCwgcGFyYW1zKSA6IGZvcm1hdDtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB7e2xvd2VyY2FzZSAnSlVTVCBXT1chISEnfX0gICA9PiAnanVzdCB3b3chISEnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvd2VyY2FzZShwYXJhbSkge1xuICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9Mb3dlckNhc2UoKSA6IHBhcmFtO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHt7dXBwZXJjYXNlICdqdXN0IHdvdyEhISd9fSAgID0+ICdKVVNUIFdPVyEhISdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdXBwZXJjYXNlKHBhcmFtKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b1VwcGVyQ2FzZSgpIDogcGFyYW07XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gKiAgICB7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvblswXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICogICAge3tsYXN0IHNvbWVBcnJheX19ICAgPT4gJ0pvbmVzJ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uW2NvbGxlY3Rpb24ubGVuZ3RoIC0gMV07XG59XG5cbi8qKlxuICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAqXG4gKiBAcGFyYW0ge2FueX0gLi4ucGFyYW1zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgcGFyYW1zLnBvcCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gKiAgICB7e2pvaW4gc29tZUFycmF5ICcgJiAnfX0gICA9PiAnSGFuZHMgJiBsZWdzICYgZmVldCdcbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gcGFyYW1zXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGRlbGltaXRlclxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKHBhcmFtcywgZGVsaW1pdGVyKSB7XG4gIGlmICghZGVsaW1pdGVyIHx8ICgwLCBfdXRpbHMuaXNPYmplY3QpKGRlbGltaXRlcikpIHtcbiAgICBkZWxpbWl0ZXIgPSAnJztcbiAgfVxuXG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShwYXJhbXMpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5qb2luKGRlbGltaXRlcik7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzTnVtZXJpYyA9IGlzTnVtZXJpYztcbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYy5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufSJdfQ==
