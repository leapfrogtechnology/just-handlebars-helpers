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

/**
 * Class for just-handlebars-helpers.
 */
var H = function () {
  function H() {
    _classCallCheck(this, H);
  }

  _createClass(H, null, [{
    key: 'registerHelpers',

    /**
     * Static method to register just-handlebars-helpers with Handlebars.
     *
     * @param {*} handlebars
     */
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
 *
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
 * Helper to imitate the ternary '?:' conditional operator.
 *
 * @example
 *      {{ifx true 'Foo' 'Bar'}}    => Foo
 *      {{ifx false 'Foo' 'Bar'}}   => Foo
 *
 * @param {boolean} condition
 * @param {any} value1    Value to return when the condition holds true.
 * @param {any} value2    Value to return when the condition is false (Optional).
 * @returns {any}
 */
function ifx(condition, value1, value2) {
  // Check if user has omitted the last parameter
  // if that's the case, it would be the Handlebars options object
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
 *
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
 *
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
 * @param {boolean} strict
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
 * @param {string} formatString Based on moment.js.
 * @param {Date} date
 * @returns {string}
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
 * @param {object} opts Object of options that includes id, text and selected attribute.
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
 * @returns {string}
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
 * @returns {string}
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
 * @returns {string}
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
 * @returns {string}
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
 * @returns {string}
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
 * @param {any} params
 * @returns {string}
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
 * @returns {string|boolean}
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
 * @param {any} thing
 * @returns {boolean}
 */
function isFunction(thing) {
  return typeof thing === 'function';
}

/**
 * Check if param is a string.
 *
 * @param {any} thing
 * @returns {boolean}
 */
function isString(thing) {
  return typeof thing === 'string';
}

/**
 * Check if param is undefined.
 *
 * @param {any} thing
 * @returns {boolean}
 */
function isUndefined(thing) {
  return typeof thing === 'undefined';
}

/**
 * Check if param is not undefined.
 *
 * @param {any} thing
 * @returns {boolean}
 */
function isDefined(thing) {
  return !isUndefined(thing);
}

/**
 * Check if param is an object.
 *
 * @param {any} thing
 * @returns {boolean}
 */
function isObject(thing) {
  return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
}

/**
 * Check if param is an array.
 *
 * @param {any} thing
 * @returns {boolean}
 */
function isArray(thing) {
  return Object.prototype.toString.call(thing) === '[object Array]';
}

/**
 * Check if the value is numeric.
 *
 * @param {any} thing
 * @returns {boolean}
 */
function isNumeric(thing) {
  return !isNaN(parseFloat(thing)) && isFinite(thing);
}
},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDblZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gVXRpbHNcblxuXG4vLyBIZWxwZXJzXG5cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbC91dGlscycpO1xuXG52YXIgX2h0bWwgPSByZXF1aXJlKCcuL2hlbHBlcnMvaHRtbCcpO1xuXG52YXIgaHRtbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9odG1sKTtcblxudmFyIF9tYXRoID0gcmVxdWlyZSgnLi9oZWxwZXJzL21hdGgnKTtcblxudmFyIG1hdGggPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWF0aCk7XG5cbnZhciBfc3RyaW5ncyA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHJpbmdzJyk7XG5cbnZhciBzdHJpbmdzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3N0cmluZ3MpO1xuXG52YXIgX2RhdGV0aW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL2RhdGV0aW1lJyk7XG5cbnZhciBkYXRldGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kYXRldGltZSk7XG5cbnZhciBfZm9ybWF0dGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JtYXR0ZXJzJyk7XG5cbnZhciBmb3JtYXR0ZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Zvcm1hdHRlcnMpO1xuXG52YXIgX2NvbmRpdGlvbmFscyA9IHJlcXVpcmUoJy4vaGVscGVycy9jb25kaXRpb25hbHMnKTtcblxudmFyIGNvbmRpdGlvbmFscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jb25kaXRpb25hbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIENsYXNzIGZvciBqdXN0LWhhbmRsZWJhcnMtaGVscGVycy5cbiAqL1xudmFyIEggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEgsIG51bGwsIFt7XG4gICAga2V5OiAncmVnaXN0ZXJIZWxwZXJzJyxcblxuICAgIC8qKlxuICAgICAqIFN0YXRpYyBtZXRob2QgdG8gcmVnaXN0ZXIganVzdC1oYW5kbGViYXJzLWhlbHBlcnMgd2l0aCBIYW5kbGViYXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBoYW5kbGViYXJzXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzKSB7XG5cbiAgICAgIGhhbmRsZWJhcnMgPSBoYW5kbGViYXJzIHx8IGdsb2JhbC5IYW5kbGViYXJzO1xuXG4gICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmplY3QpKGhhbmRsZWJhcnMpKSB7XG4gICAgICAgIC8vIEluIGNhc2UsIGhhbmRsZWJhcnMgaXMgbm90IHByb3ZpZGVkIGFuZCBpdCdzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgLy8gaW4gdGhlIGdsb2JhbCBuYW1lc3BhY2UgYXMgd2VsbCB0aHJvdyB0aGUgZXJyb3IgYW5kIGhhbHQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEhlbHBlcnMgbGlzdFxuICAgICAgdmFyIGhlbHBlcnMgPSBbbWF0aCwgaHRtbCwgc3RyaW5ncywgY29uZGl0aW9uYWxzLCBkYXRldGltZSwgZm9ybWF0dGVyc107XG5cbiAgICAgIGhlbHBlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFsbCB0aGUgaGVscGVyIGZ1bmN0aW9ucyB0byBIYW5kbGViYXJzXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVscGVyKSB7XG4gICAgICAgICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVxID0gZXE7XG5leHBvcnRzLmVxdyA9IGVxdztcbmV4cG9ydHMubmVxID0gbmVxO1xuZXhwb3J0cy5uZXF3ID0gbmVxdztcbmV4cG9ydHMubHQgPSBsdDtcbmV4cG9ydHMubHRlID0gbHRlO1xuZXhwb3J0cy5ndCA9IGd0O1xuZXhwb3J0cy5ndGUgPSBndGU7XG5leHBvcnRzLmlmeCA9IGlmeDtcbmV4cG9ydHMubm90ID0gbm90O1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuZXhwb3J0cy5hbmQgPSBhbmQ7XG5leHBvcnRzLm9yID0gb3I7XG5leHBvcnRzLmNvYWxlc2NlID0gY29hbGVzY2U7XG5leHBvcnRzLmluY2x1ZGVzID0gaW5jbHVkZXM7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlcXcgJzMnIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tuZXEgNCAzfX0gICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBuZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSAhPT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9KSB3ZWFrIGNoZWNraW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bmVxdyAnMycgM319ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5lcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSAhPSB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBjb25kaXRpb24gKGEgPCBiKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBsdCh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gdmFsdWUxIDwgdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2x0ZSAyIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUxXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbHRlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPD0gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gY29uZGl0aW9uIChhID4gYikuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlMVxuICogQHBhcmFtIHthbnl9IHZhbHVlMlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTEgPiB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTFcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZTJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMSA+PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGltaXRhdGUgdGhlIHRlcm5hcnkgJz86JyBjb25kaXRpb25hbCBvcGVyYXRvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gKiAgICAgIHt7aWZ4IGZhbHNlICdGb28nICdCYXInfX0gICA9PiBGb29cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvblxuICogQHBhcmFtIHthbnl9IHZhbHVlMSAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGhvbGRzIHRydWUuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUyICAgIFZhbHVlIHRvIHJldHVybiB3aGVuIHRoZSBjb25kaXRpb24gaXMgZmFsc2UgKE9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gIC8vIENoZWNrIGlmIHVzZXIgaGFzIG9taXR0ZWQgdGhlIGxhc3QgcGFyYW1ldGVyXG4gIC8vIGlmIHRoYXQncyB0aGUgY2FzZSwgaXQgd291bGQgYmUgdGhlIEhhbmRsZWJhcnMgb3B0aW9ucyBvYmplY3RcbiAgLy8gd2hpY2ggaXQgc2VuZHMgYWx3YXlzIGFzIHRoZSBsYXN0IHBhcmFtZXRlci5cbiAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHZhbHVlMikgJiYgdmFsdWUyLm5hbWUgPT09ICdpZngnICYmIHZhbHVlMi5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpKSB7XG4gICAgLy8gVGhpcyBtZWFucyB0aGUgdXNlciBoYXMgc2tpcHBlZCB0aGUgbGFzdCBwYXJhbWV0ZXIsXG4gICAgLy8gc28gd2Ugc2hvdWxkIHJldHVybiBhbiBlbXB0eSBzdHJpbmcgKCcnKSBpbiB0aGUgZWxzZSBjYXNlIGluc3RlYWQuXG4gICAgdmFsdWUyID0gJyc7XG4gIH1cblxuICByZXR1cm4gY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xufVxuXG4vKipcbiAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bm90IHRydWV9fSAgICA9PiBmYWxzZVxuICogICAgICB7e25vdCBmYWxzZX19ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB7YW55fSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgcmV0dXJuICFleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSA9PiB0cnVlIHwgZmFsc2VcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjb3VudCBhcnJheX19ID0+ICBmYWxzZSB8IGFycmF5Lmxlbmd0aFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbiB8IG51bWJlcn1cbiAqL1xuZnVuY3Rpb24gY291bnQoYXJyYXkpIHtcbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5sZW5ndGg7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYm9vbGVhbiBBTkQgb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gKiBpdCBpcyB0cnVlIGlmZiBhbGwgdGhlIHBhcmFtZXRlcnMgYXJlIHRydWUuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgdmFsdWUxID0gdmFsdWUyID0gdHJ1ZTtcbiAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICpcbiAqICAgICB2YXIgdmFsdWUxID0gZmFsc2UsIHZhbHVlMiA9IHRydWU7XG4gKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFuZCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgIHBhcmFtcy5wb3AoKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFwYXJhbXNbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib29sZWFuIE9SIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICogaXQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIHBhcmFtZXRlcnMgaXMgdHJ1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB2YWx1ZTEgPSB0cnVlLCB2YWx1ZTIgPSBmYWxzZTtcbiAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gKlxuICogICAgIHZhciB2YWx1ZSA9IHZhbHVlMiA9IGZhbHNlO1xuICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG9yKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBub24tZmFsc3kgdmFsdWUgZnJvbSB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gKiBXb3JrcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBTUUwncyBDT0FMRVNDRSgpIGZ1bmN0aW9uLCBidXQgdW5saWtlIHRoaXNcbiAqIGNoZWNrcyBmb3IgdGhlIGZpcnN0IG5vbi1mYWxzZSBwYXJhbWV0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgZnVsbE5hbWUgPSAnRm9vIEJhcicsIG5pY2tOYW1lID0gJ2Zvb2InO1xuICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ0ZvbyBCYXInXG4gKlxuICogICAgIHZhciBmdWxsTmFtZSA9ICcnLCBuaWNrTmFtZSA9ICdmb29iJztcbiAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdmb29iJ1xuICpcbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGNvYWxlc2NlKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgcGFyYW1zW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgIHJldHVybiBwYXJhbXNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5wb3AoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJvb2xlYW4gaWYgdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBlbGVtZW50IHN0cmljdGx5IG9yIG5vbi1zdHJpY3RseS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciBhcnJheSA9IFsxLCAyLCAzLCA0XTtcbiAqICAgICB2YXIgdmFsdWUxID0gMiwgdmFsdWUyID0gMTAsIHZhbHVlMyA9ICczJztcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMX19ICAgICAgICA9PiB0cnVlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTJ9fSAgICAgICAgPT4gZmFsc2VcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlM319ICAgICAgICA9PiBmYWxzZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzIGZhbHNlfX0gID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBzdHJpY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIHN0cmljdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RyaWN0ICYmIGFycmF5W2ldID09PSB2YWx1ZSB8fCAhc3RyaWN0ICYmIGFycmF5W2ldID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXREYXRlID0gZm9ybWF0RGF0ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBBIGZvcm1hdERhdGUgaGVscGVyIHRvIGZvcm1hdCBkYXRlIHVzaW5nIG1vbWVudCBqcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2Zvcm1hdERhdGUgJ01NL0REL1lZWVknIGRhdGV9fVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRTdHJpbmcgQmFzZWQgb24gbW9tZW50LmpzLlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmb3JtYXREYXRlKGZvcm1hdFN0cmluZywgZGF0ZSkge1xuICB2YXIgbW9tZW50ID0gZ2xvYmFsLm1vbWVudDtcblxuICBpZiAoIW1vbWVudCkge1xuICAgIG1vbWVudCA9ICh3aW5kb3cubW9tZW50KTtcbiAgfVxuXG4gIGZvcm1hdFN0cmluZyA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICByZXR1cm4gbW9tZW50KGRhdGUgfHwgbmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdFN0cmluZyk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXRDdXJyZW5jeSA9IGZvcm1hdEN1cnJlbmN5O1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIEZvcm1hdCB0aGUgY3VycmVuY3kgYWNjb3JkaW5nIHRvIHRoZSBjb3VudHJ5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Zm9ybWF0Q3VycmVuY3kgMTIzNDU2Ny44OSBjb2RlPSdVU0QnfX0gID0+ICQxLDIzNCw1NjcuODlcbiAqICAgICAge3tmb3JtYXRDdXJyZW5jeSAxMjM0NTY3Ljg5IGNvZGU9J0VVUid9fSAgPT4gMS4yMzQuNTY3LDg5IOKCrFxuICogICAgICB7e2Zvcm1hdEN1cnJlbmN5IDEyMzQ1NjcuODkgY29kZT0nRVVSJyBsb2NhbGU9XCJlblwifX0gID0+IOKCrDEsMjM0LDU2Ny44OVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHthbnl9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlKSB7XG4gIHZhciBjdXJyZW5jeUZvcm1hdHRlciA9IGdsb2JhbC5PU1JFQyAmJiBnbG9iYWwuT1NSRUMuQ3VycmVuY3lGb3JtYXR0ZXI7XG4gIHZhciBoYW5kbGViYXJzID0gZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgaWYgKCFjdXJyZW5jeUZvcm1hdHRlcikge1xuICAgIGN1cnJlbmN5Rm9ybWF0dGVyID0gKHdpbmRvdy5PU1JFQy5DdXJyZW5jeUZvcm1hdHRlcik7XG4gIH1cblxuICBpZiAoIWhhbmRsZWJhcnMpIHtcbiAgICBoYW5kbGViYXJzID0gKHdpbmRvdy5IYW5kbGViYXJzKTtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmdzWzBdKSAmJiAoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmdzWzBdLmhhc2gpKSB7XG4gICAgcGFyYW1zID0gYXJnc1swXS5oYXNoO1xuICB9XG5cbiAgcGFyYW1zLmN1cnJlbmN5ID0gISgwLCBfdXRpbHMuaXNVbmRlZmluZWQpKHBhcmFtcy5jb2RlKSA/IHBhcmFtcy5jb2RlIDogcGFyYW1zLmN1cnJlbmN5O1xuXG4gIGlmICghKDAsIF91dGlscy5pc1VuZGVmaW5lZCkocGFyYW1zLmN1cnJlbmN5KSAmJiAhKHBhcmFtcy5jdXJyZW5jeSBpbiBjdXJyZW5jeUZvcm1hdHRlci5zeW1ib2xzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY3VycmVuY3kgY29kZSAnICsgcGFyYW1zLmN1cnJlbmN5ICsgJyBwcm92aWRlZCBmb3IgaGVscGVyIGBmb3JtYXRDdXJyZW5jeWAuJyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoISgwLCBfdXRpbHMuaXNOdW1lcmljKSh2YWx1ZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbmV3IGhhbmRsZWJhcnMuU2FmZVN0cmluZyhjdXJyZW5jeUZvcm1hdHRlci5mb3JtYXQodmFsdWUsIHBhcmFtcykpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2hvd0lmID0gc2hvd0lmO1xuZXhwb3J0cy5oaWRlSWYgPSBoaWRlSWY7XG5leHBvcnRzLnNlbGVjdGVkSWYgPSBzZWxlY3RlZElmO1xuZXhwb3J0cy5jaGVja2VkSWYgPSBjaGVja2VkSWY7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuLyoqXG4gKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3Nob3dJZiB0cnVlfX0gICAgID0+ICcnXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzaG93SWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICcnIDogJ2hpZGRlbic7XG59XG5cbi8qKlxuICogQSBoaWRlSWYgaGVscGVyIGZvciBoaWRpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2hpZGVJZiB0cnVlfX0gICAgID0+ICdoaWRkZW4nXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoaWRlSWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG59XG5cbi8qKlxuICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd24gYW5kIHJhZGlvIGJveGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2VsZWN0ZWRJZiB0cnVlfX0gPT4gICdzZWxlY3RlZCdcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGVkSWYoZXhwcmVzc2lvbikge1xuICByZXR1cm4gZXhwcmVzc2lvbiA/ICdzZWxlY3RlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjaGVja2VkSWYgdHJ1ZX19ICA9PiAnY2hlY2tlZCdcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrZWRJZihleHByZXNzaW9uKSB7XG4gIHJldHVybiBleHByZXNzaW9uID8gJ2NoZWNrZWQnIDogJyc7XG59XG5cbi8qKlxuICogQW4gb3B0aW9ucyBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgPG9wdGlvbj4gbGlzdCBmb3IgPHNlbGVjdD4gZHJvcGRvd25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiBBIHNpbXBsZSBleGFtcGxlOlxuICpcbiAqICAgICAgY29uc3QgZGF0YSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMSxcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbydcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDIsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXInXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAzLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vIEJhcidcbiAqICAgICAgICAgIH1cbiAqICAgICAgXTtcbiAqXG4gKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjJcIn19fVxuICpcbiAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gKlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkZvbzwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIHNlbGVjdGVkPkJhcjwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkZvbyBCYXI8L29wdGlvbj5cbiAqXG4gKiBAZXhhbXBsZVxuICogWW91IGNhbiBhbHNvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGtleSBuYW1lcyBmb3IgJ2lkJyAmICdkZXNjcmlwdGlvbidcbiAqIHVzaW5nIHRoZSAnaWQnICYgJ3RleHQnIG9wdGlvbnMgaW4gdGhlIGhlbHBlci5cbiAqXG4gKiAgICAgIGNvbnN0IGRhdGEgPSBbXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gKiAgICAgICAgICAgICAgdGV4dDogJ05ldyBZb3JrJ1xuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB2YWx1ZTogMixcbiAqICAgICAgICAgICAgICB0ZXh0OiAnTG9uZG9uJ1xuICogICAgICAgICAgfVxuICogICAgICBdO1xuICpcbiAqICAgICAge3t7b3B0aW9ucyBkYXRhIHNlbGVjdGVkPVwiMVwiIGlkPVwidmFsdWVcIiB0ZXh0PVwidGV4dFwifX19XG4gKlxuICogd2lsbCBnZW5lcmF0ZSBodG1sIGxpa2UgdGhpczpcbiAqXG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgc2VsZWN0ZWQ+TmV3IFlvcms8L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Mb25kb248L29wdGlvbj5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0cyBPYmplY3Qgb2Ygb3B0aW9ucyB0aGF0IGluY2x1ZGVzIGlkLCB0ZXh0IGFuZCBzZWxlY3RlZCBhdHRyaWJ1dGUuXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIG9wdGlvbnMoZGF0YSwgb3B0cykge1xuICAvLyBUaGUgaWQgJiB0ZXh0IGZvciB0aGUgPG9wdGlvbj5cbiAgdmFyIGlkID0gb3B0cy5oYXNoLmlkIHx8ICdpZCc7XG4gIHZhciB0ZXh0ID0gb3B0cy5oYXNoLnRleHQgfHwgJ2Rlc2NyaXB0aW9uJztcblxuICAvLyBUaGUgc2VsZWN0aW9uIFwiaWRcIiBvZiB0aGUgPG9wdGlvbj5cbiAgdmFyIHNlbGVjdGVkSWQgPSBvcHRzLmhhc2guc2VsZWN0ZWQgfHwgbnVsbDtcblxuICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgdmFsdWUgPSBpdGVtW2lkXSB8fCAnJztcbiAgICB2YXIgaW5uZXJUZXh0ID0gaXRlbVt0ZXh0XSB8fCAnJztcbiAgICB2YXIgc2VsZWN0ZWQgPSB2YWx1ZSA9PSBzZWxlY3RlZElkID8gJyBzZWxlY3RlZCcgOiAnJztcblxuICAgIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZSArICdcIicgKyBzZWxlY3RlZCArICc+JyArIGlubmVyVGV4dCArICc8L29wdGlvbj4nO1xuICB9KS5qb2luKCdcXG4nKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3VtID0gc3VtO1xuZXhwb3J0cy5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbmV4cG9ydHMuY2VpbCA9IGNlaWw7XG5leHBvcnRzLmZsb29yID0gZmxvb3I7XG5leHBvcnRzLmFicyA9IGFicztcbi8qKlxuICogQSBzdW0gaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBzdW0gb2YgdHdvIG51bWJlcnMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzdW0gMSAyfX0gICAgID0+IDNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUxXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZTEpICsgTnVtYmVyKHZhbHVlMik7XG59XG5cbi8qKlxuICogQSBkaWZmZXJlbmNlIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gbnVtYmVycy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2RpZmZlcmVuY2UgNSAyfX0gID0+IDNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUxXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUxKSAtIE51bWJlcih2YWx1ZTIpO1xufVxuXG4vKipcbiAqIEEgY2VpbCBoZWxwZXIgdG8gZmluZCB0aGUgY2VpbCB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2VpbCA1LjZ9fSAgICA9PiA2XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjZWlsKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoTnVtYmVyKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2Zsb29yIDUuNn19ID0+IDVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZsb29yKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIEFuIGFicyBoZWxwZXIgdG8gZmluZCB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2FicyAtNS42fX0gPT4gNS42XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBhYnModmFsdWUpIHtcbiAgcmV0dXJuIE1hdGguYWJzKE51bWJlcih2YWx1ZSkpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXhjZXJwdCA9IGV4Y2VycHQ7XG5leHBvcnRzLnNhbml0aXplID0gc2FuaXRpemU7XG5leHBvcnRzLm5ld0xpbmVUb0JyID0gbmV3TGluZVRvQnI7XG5leHBvcnRzLmNhcGl0YWxpemVFYWNoID0gY2FwaXRhbGl6ZUVhY2g7XG5leHBvcnRzLmNhcGl0YWxpemVGaXJzdCA9IGNhcGl0YWxpemVGaXJzdDtcbmV4cG9ydHMuc3ByaW50ZiA9IHNwcmludGY7XG5leHBvcnRzLmxvd2VyY2FzZSA9IGxvd2VyY2FzZTtcbmV4cG9ydHMudXBwZXJjYXNlID0gdXBwZXJjYXNlO1xuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuZXhwb3J0cy5qb2luID0gam9pbjtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2V4Y2VycHQgJ0p1c3QgV293JyA0fX0gICAgPT4gJ0p1c3QnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtpbnR9IGxlbmd0aFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXhjZXJwdChzdHJpbmcsIGxlbmd0aCkge1xuICBsZW5ndGggPSBwYXJzZUludChsZW5ndGgpIHx8IDUwO1xuXG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3Nhbml0aXplICdKdVN0ICNXb3cnfX0gICAgPT4gJ2p1c3Qtd293J1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIFxcbiB3aXRoIDxicj4gdGFncy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHt7bmV3TGluZVRvQnIgJ25ld0xpbmVUb0JyIGhlbHBlciBcXG4gaXMgdmVyeSBcXG4gdXNlZnVsLid9fSAgICA9PiBuZXdMaW5lVG9CciBoZWxwZXIgPGJyPiBpcyB2ZXJ5IDxicj4gdXNlZnVsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5ld0xpbmVUb0JyKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICc8YnI+Jyk7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNwcmludGYgaGVscGVyIHRvIGJlIHVzZWQgaW4gdGhlIGhhbmRsZWJhcnMgdGVtcGxhdGVzIHRoYXQgc3VwcG9ydHMgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogTWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBzcHJpbnRmLWpzIChodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMpIHBhY2thZ2UgaXMgYXZhaWxhYmxlXG4gKiBlaXRoZXIgYXMgYSBub2RlIG1vZHVsZSBvciB5b3UgaGF2ZSBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9ucyBhdmFpbGFibGUgaW4gdGhlIGdsb2JhbCBzY29wZVxuICogZnJvbSB0aGF0IHBhY2thZ2UuXG4gKlxuICogQ2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMhJyAnSGVsbG8nICdLYWJpcicgfX1cbiAqICAgICAge3tzcHJpbnRmICclcyAlcyAlZCAlcyAlZCcgJ0ZvbycgJ0JhcicgNTUgJ0JheicgJzIwJ319XG4gKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISBIb3cgYXJlIHlvdT8nIG9iaiB9fVxuICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgJyBncmVldGluZz0nSGVsbG8nIG5hbWU9J0thYmlyJ319XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFxuICogQHBhcmFtIHthbnl9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNwcmludGYoZm9ybWF0KSB7XG4gIC8vIENoZWNrIGlmIHRoZSB2c3ByaW50ZiBmdW5jdGlvbiBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlIHRoZW4gdHJ5IHRvIHJlcXVpcmUoKSBpdFxuICB2YXIgX3ZzcHJpbnRmID0gZ2xvYmFsLnZzcHJpbnRmO1xuXG4gIGlmICghKDAsIF91dGlscy5pc0Z1bmN0aW9uKShfdnNwcmludGYpKSB7XG4gICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICB9XG5cbiAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICB2YXIgcGFyYW1zID0gW107XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgYXJnID0gYXJnLmhhc2g7XG4gICAgfVxuXG4gICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gX3ZzcHJpbnRmKGZvcm1hdCwgcGFyYW1zKSA6IGZvcm1hdDtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB7e2xvd2VyY2FzZSAnSlVTVCBXT1chISEnfX0gICA9PiAnanVzdCB3b3chISEnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb3dlcmNhc2UocGFyYW0pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvTG93ZXJDYXNlKCkgOiBwYXJhbTtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB1cHBlcmNhc2UocGFyYW0pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvVXBwZXJDYXNlKCkgOiBwYXJhbTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAqICAgIHt7Zmlyc3Qgc29tZUFycmF5fX0gICA9PiAnRGF2aWQnXG4gKlxuICogQHBhcmFtIHthcnJheX0gY29sbGVjdGlvblxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvblswXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICogICAge3tsYXN0IHNvbWVBcnJheX19ICAgPT4gJ0pvbmVzJ1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbGxlY3Rpb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxhc3QoY29sbGVjdGlvbikge1xuICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbltjb2xsZWN0aW9uLmxlbmd0aCAtIDFdO1xufVxuXG4vKipcbiAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB7e2NvbmNhdCAnSGVsbG8nICcgd29ybGQnICchISEnfX0gICA9PiAnSGVsbG8gd29ybGQhISEnXG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICBwYXJhbXMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIEpvaW4gdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IHVzaW5nIGEgZGVsaW1ldGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICB2YXIgc29tZUFycmF5ID0gWydIYW5kcycsICdsZWdzJywgJ2ZlZXQnXTtcbiAqICAgIHt7am9pbiBzb21lQXJyYXkgJyAmICd9fSAgID0+ICdIYW5kcyAmIGxlZ3MgJiBmZWV0J1xuICpcbiAqIEBwYXJhbSAge2FycmF5fSBwYXJhbXNcbiAqIEBwYXJhbSAge3N0cmluZ30gZGVsaW1pdGVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGpvaW4ocGFyYW1zLCBkZWxpbWl0ZXIpIHtcbiAgaWYgKCFkZWxpbWl0ZXIgfHwgKDAsIF91dGlscy5pc09iamVjdCkoZGVsaW1pdGVyKSkge1xuICAgIGRlbGltaXRlciA9ICcnO1xuICB9XG5cbiAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKHBhcmFtcykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zLmpvaW4oZGVsaW1pdGVyKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNEZWZpbmVkID0gaXNEZWZpbmVkO1xuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmV4cG9ydHMuaXNOdW1lcmljID0gaXNOdW1lcmljO1xuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7YW55fSB0aGluZ1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge2FueX0gdGhpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHthbnl9IHRoaW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge2FueX0gdGhpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7YW55fSB0aGluZ1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gdGhpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRoaW5nKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljLlxuICpcbiAqIEBwYXJhbSB7YW55fSB0aGluZ1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVtZXJpYyh0aGluZykge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodGhpbmcpKSAmJiBpc0Zpbml0ZSh0aGluZyk7XG59Il19
