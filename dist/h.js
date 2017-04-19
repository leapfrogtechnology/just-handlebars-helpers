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

    return !!condition ? value1 : value2;
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
    return !!expression ? '' : 'hidden';
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
    return !!expression ? 'hidden' : '';
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
    return !!expression ? 'selected' : '';
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
    return !!expression ? 'checked' : '';
}

/**
 * An options helper for generating <option> list for <select> dropdowns.
 *
 * @example
 * A simple example:
 *
 *      let data = [
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
 *      let data = [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBVdGlsc1xuXG5cbi8vIEhlbHBlcnNcblxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlsL3V0aWxzJyk7XG5cbnZhciBfaHRtbCA9IHJlcXVpcmUoJy4vaGVscGVycy9odG1sJyk7XG5cbnZhciBodG1sID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2h0bWwpO1xuXG52YXIgX21hdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvbWF0aCcpO1xuXG52YXIgbWF0aCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tYXRoKTtcblxudmFyIF9zdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0cmluZ3MnKTtcblxudmFyIHN0cmluZ3MgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc3RyaW5ncyk7XG5cbnZhciBfZGF0ZXRpbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvZGF0ZXRpbWUnKTtcblxudmFyIGRhdGV0aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2RhdGV0aW1lKTtcblxudmFyIF9mb3JtYXR0ZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Zvcm1hdHRlcnMnKTtcblxudmFyIGZvcm1hdHRlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZm9ybWF0dGVycyk7XG5cbnZhciBfY29uZGl0aW9uYWxzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NvbmRpdGlvbmFscycpO1xuXG52YXIgY29uZGl0aW9uYWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NvbmRpdGlvbmFscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEgoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAncmVnaXN0ZXJIZWxwZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzKSB7XG5cbiAgICAgICAgICAgIGhhbmRsZWJhcnMgPSBoYW5kbGViYXJzIHx8IGdsb2JhbC5IYW5kbGViYXJzO1xuXG4gICAgICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmplY3QpKGhhbmRsZWJhcnMpKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSwgaGFuZGxlYmFycyBpcyBub3QgcHJvdmlkZWQgYW5kIGl0J3Mgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGFzIHdlbGwgdGhyb3cgdGhlIGVycm9yIGFuZCBoYWx0LlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhlbHBlcnMgbGlzdFxuICAgICAgICAgICAgdmFyIGhlbHBlcnMgPSBbbWF0aCwgaHRtbCwgc3RyaW5ncywgY29uZGl0aW9uYWxzLCBkYXRldGltZSwgZm9ybWF0dGVyc107XG5cbiAgICAgICAgICAgIGhlbHBlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHRvIEhhbmRsZWJhcnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlbHBlcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcltuYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXEgPSBlcTtcbmV4cG9ydHMuZXF3ID0gZXF3O1xuZXhwb3J0cy5uZXEgPSBuZXE7XG5leHBvcnRzLm5lcXcgPSBuZXF3O1xuZXhwb3J0cy5sdCA9IGx0O1xuZXhwb3J0cy5sdGUgPSBsdGU7XG5leHBvcnRzLmd0ID0gZ3Q7XG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmV4cG9ydHMuaWZ4ID0gaWZ4O1xuZXhwb3J0cy5ub3QgPSBub3Q7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmNvdW50ID0gY291bnQ7XG5leHBvcnRzLmFuZCA9IGFuZDtcbmV4cG9ydHMub3IgPSBvcjtcbmV4cG9ydHMuY29hbGVzY2UgPSBjb2FsZXNjZTtcbmV4cG9ydHMuaW5jbHVkZXMgPSBpbmNsdWRlcztcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09PSkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VxICczJyAzfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSA9PT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT0pIGkuZSB3ZWFrIGNoZWNraW5nLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlcXcgJzMnIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiB2YWx1ZTEgPT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e25lcSA0IDN9fSAgICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBuZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxICE9PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT0pIHdlYWsgY2hlY2tpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e25lcXcgJzMnIDN9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbmVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiB2YWx1ZTEgIT0gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxIDwgdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bHRlIDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbHRlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSA8PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBjb25kaXRpb24gKGEgPiBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Z3QgMiAzfX0gICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZ3QodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxID4gdmFsdWUyO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSA+PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGltaXRhdGUgdGhlIHRlcm5hcnkgY29uZGl0aW9uYWwgb3BlcmF0b3IgPzpcbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gKiAgICAgIHt7aWZ4IGZhbHNlICdGb28nICdCYXInfX0gICA9PiBGb29cbiAqXG4gKiBAcGFyYW0gY29uZGl0aW9uXG4gKiBAcGFyYW0gdmFsdWUxICAgIFZhbHVlIHRvIHJldHVybiB3aGVuIHRoZSBjb25kaXRpb24gaG9sZHMgdHJ1ZVxuICogQHBhcmFtIHZhbHVlMiAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlIChPcHRpb25hbClcbiAqIEByZXR1cm5zIG1peGVkXG4gKi9cbmZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgb21pdHRlZCB0aGUgbGFzdCBwYXJhbWV0ZXJcbiAgICAvLyBpZiB0aGF0J3MgdGhlIGNhc2UsIGl0IHdvdWxkIGJlIHRoZSBoYW5kbGViYXJzJ3Mgb3B0aW9ucyBvYmplY3RcbiAgICAvLyB3aGljaCBpdCBzZW5kcyBhbHdheXMgYXMgdGhlIGxhc3QgcGFyYW1ldGVyLlxuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KSh2YWx1ZTIpICYmIHZhbHVlMi5uYW1lID09PSAnaWZ4JyAmJiB2YWx1ZTIuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSkge1xuICAgICAgICAvLyBUaGlzIG1lYW5zIHRoZSB1c2VyIGhhcyBza2lwcGVkIHRoZSBsYXN0IHBhcmFtZXRlcixcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHJldHVybiBhbiBlbXB0eSBzdHJpbmcgKCcnKSBpbiB0aGUgZWxzZSBjYXNlIGluc3RlYWQuXG4gICAgICAgIHZhbHVlMiA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiAhIWNvbmRpdGlvbiA/IHZhbHVlMSA6IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBMb2dpY2FsIE5PVCBvZiBhbnkgZXhwcmVzc2lvbi5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bm90IHRydWV9fSAgICA9PiBmYWxzZVxuICogICAgICB7e25vdCBmYWxzZX19ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIG5vdChleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICFleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICogQGV4YW1wbGVcbiAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICpcbiAqIEBwYXJhbSBhcnJheVxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBlbXB0eShhcnJheSkge1xuICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAqL1xuZnVuY3Rpb24gY291bnQoYXJyYXkpIHtcbiAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvb2xlYW4gQU5EIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICogaXQgaXMgdHJ1ZSBpZmYgYWxsIHRoZSBwYXJhbWV0ZXJzIGFyZSB0cnVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIHZhbHVlMSA9IHZhbHVlMiA9IHRydWU7XG4gKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IHRydWVcbiAqXG4gKiAgICAgdmFyIHZhbHVlMSA9IGZhbHNlLCB2YWx1ZTIgPSB0cnVlO1xuICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gYW5kKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXBhcmFtc1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYm9vbGVhbiBPUiBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAqIGl0IGlzIHRydWUgaWYgYW55IG9mIHRoZSBwYXJhbWV0ZXJzIGlzIHRydWUuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgdmFsdWUxID0gdHJ1ZSwgdmFsdWUyID0gZmFsc2U7XG4gKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICpcbiAqICAgICB2YXIgdmFsdWUgPSB2YWx1ZTIgPSBmYWxzZTtcbiAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gb3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBwYXJhbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3Qgbm9uLWZhbHN5IHZhbHVlIGZyb20gdGhlIHBhcmFtZXRlciBsaXN0LlxuICogV29ya3MgcXVpdGUgc2ltaWxhciB0byB0aGUgU1FMJ3MgQ09BTEVTQ0UoKSBmdW5jdGlvbiwgYnV0IHVubGlrZSB0aGlzXG4gKiBjaGVja3MgZm9yIHRoZSBmaXJzdCBub24tZmFsc2UgcGFyYW1ldGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGZ1bGxOYW1lID0gJ0ZvbyBCYXInLCBuaWNrTmFtZSA9ICdmb29iJztcbiAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdGb28gQmFyJ1xuICpcbiAqICAgICB2YXIgZnVsbE5hbWUgPSAnJywgbmlja05hbWUgPSAnZm9vYic7XG4gKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnZm9vYidcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyBtaXhlZFxuICovXG5mdW5jdGlvbiBjb2FsZXNjZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIHBhcmFtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcy5wb3AoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJvb2xlYW4gaWYgdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBlbGVtZW50IHN0cmljdGx5IG9yIG5vbi1zdHJpY3RseS5cbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGFycmF5ID0gWzEsIDIsIDMsIDRdO1xuICogICAgIHZhciB2YWx1ZTEgPSAyLCB2YWx1ZTIgPSAxMCwgdmFsdWUzID0gJzMnO1xuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUxfX0gICAgICAgID0+IHRydWVcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMn19ICAgICAgICA9PiBmYWxzZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzfX0gICAgICAgID0+IGZhbHNlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTMgZmFsc2V9fSAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgICB2YXIgc3RyaWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSB8fCBhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0cmljdCAmJiBhcnJheVtpXSA9PT0gdmFsdWUgfHwgIXN0cmljdCAmJiBhcnJheVtpXSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcm1hdERhdGUgPSBmb3JtYXREYXRlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIEEgZm9ybWF0RGF0ZSBoZWxwZXIgdG8gZm9ybWF0IGRhdGUgdXNpbmcgbW9tZW50IGpzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Zm9ybWF0RGF0ZSAnTU0vREQvWVlZWScgZGF0ZX19XG4gKlxuICogQHBhcmFtIGZvcm1hdFN0cmluZyBiYXNlZCBvbiBtb21lbnQuanNcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBmb3JtYXREYXRlKGZvcm1hdFN0cmluZywgZGF0ZSkge1xuICAgIHZhciBtb21lbnQgPSBnbG9iYWwubW9tZW50O1xuXG4gICAgaWYgKCFtb21lbnQpIHtcbiAgICAgICAgbW9tZW50ID0gKHdpbmRvdy5tb21lbnQpO1xuICAgIH1cblxuICAgIGZvcm1hdFN0cmluZyA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICAgIHJldHVybiBtb21lbnQoZGF0ZSB8fCBuZXcgRGF0ZSgpKS5mb3JtYXQoZm9ybWF0U3RyaW5nKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0Q3VycmVuY3kgPSBmb3JtYXRDdXJyZW5jeTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuLyoqXG4gKiBGb3JtYXQgdGhlIGN1cnJlbmN5IGFjY29yZGluZyB0byB0aGUgY291bnRyeS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Zm9ybWF0Q3VycmVuY3kgMTIzNDU2Ny44OSBjb2RlPSdVU0QnfX0gID0+ICQxLDIzNCw1NjcuODlcbiAqICAgICAge3tmb3JtYXRDdXJyZW5jeSAxMjM0NTY3Ljg5IGNvZGU9J0VVUid9fSAgPT4gMS4yMzQuNTY3LDg5IOKCrFxuICogICAgICB7e2Zvcm1hdEN1cnJlbmN5IDEyMzQ1NjcuODkgY29kZT0nRVVSJyBsb2NhbGU9XCJlblwifX0gID0+IOKCrDEsMjM0LDU2Ny44OVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGFyZ3NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUpIHtcbiAgICB2YXIgY3VycmVuY3lGb3JtYXR0ZXIgPSBnbG9iYWwuT1NSRUMgJiYgZ2xvYmFsLk9TUkVDLkN1cnJlbmN5Rm9ybWF0dGVyO1xuICAgIHZhciBoYW5kbGViYXJzID0gZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgICBpZiAoIWN1cnJlbmN5Rm9ybWF0dGVyKSB7XG4gICAgICAgIGN1cnJlbmN5Rm9ybWF0dGVyID0gKHdpbmRvdy5PU1JFQy5DdXJyZW5jeUZvcm1hdHRlcik7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGViYXJzKSB7XG4gICAgICAgIGhhbmRsZWJhcnMgPSAod2luZG93LkhhbmRsZWJhcnMpO1xuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkoYXJnc1swXSkgJiYgKDAsIF91dGlscy5pc09iamVjdCkoYXJnc1swXS5oYXNoKSkge1xuICAgICAgICBwYXJhbXMgPSBhcmdzWzBdLmhhc2g7XG4gICAgfVxuXG4gICAgcGFyYW1zLmN1cnJlbmN5ID0gISgwLCBfdXRpbHMuaXNVbmRlZmluZWQpKHBhcmFtcy5jb2RlKSA/IHBhcmFtcy5jb2RlIDogcGFyYW1zLmN1cnJlbmN5O1xuXG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzVW5kZWZpbmVkKShwYXJhbXMuY3VycmVuY3kpICYmICEocGFyYW1zLmN1cnJlbmN5IGluIGN1cnJlbmN5Rm9ybWF0dGVyLnN5bWJvbHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY3VycmVuY3kgY29kZSAnICsgcGFyYW1zLmN1cnJlbmN5ICsgJyBwcm92aWRlZCBmb3IgaGVscGVyIGBmb3JtYXRDdXJyZW5jeWAuJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghKDAsIF91dGlscy5pc051bWVyaWMpKHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBoYW5kbGViYXJzLlNhZmVTdHJpbmcoY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHZhbHVlLCBwYXJhbXMpKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2hvd0lmID0gc2hvd0lmO1xuZXhwb3J0cy5oaWRlSWYgPSBoaWRlSWY7XG5leHBvcnRzLnNlbGVjdGVkSWYgPSBzZWxlY3RlZElmO1xuZXhwb3J0cy5jaGVja2VkSWYgPSBjaGVja2VkSWY7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuLyoqXG4gKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2hvd0lmIHRydWV9fSAgICAgPT4gJydcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICcnIDogJ2hpZGRlbic7XG59XG5cbi8qKlxuICogQSBoaWRlSWYgaGVscGVyIGZvciBoaWRpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7aGlkZUlmIHRydWV9fSAgICAgPT4gJ2hpZGRlbidcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGhpZGVJZihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG59XG5cbi8qKlxuICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd24gYW5kIHJhZGlvIGJveGVzLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc2VsZWN0ZWRJZihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdzZWxlY3RlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NoZWNrZWRJZiB0cnVlfX0gID0+ICdjaGVja2VkJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY2hlY2tlZElmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ2NoZWNrZWQnIDogJyc7XG59XG5cbi8qKlxuICogQW4gb3B0aW9ucyBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgPG9wdGlvbj4gbGlzdCBmb3IgPHNlbGVjdD4gZHJvcGRvd25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiBBIHNpbXBsZSBleGFtcGxlOlxuICpcbiAqICAgICAgbGV0IGRhdGEgPSBbXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDEsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28nXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAyLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmFyJ1xuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMyxcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbyBCYXInXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF07XG4gKlxuICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIyXCJ9fX1cbiAqXG4gKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICpcbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Gb288L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD5CYXI8L29wdGlvbj5cbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5Gb28gQmFyPC9vcHRpb24+XG4gKlxuICogQGV4YW1wbGVcbiAqIFlvdSBjYW4gYWxzbyBvdmVycmlkZSB0aGUgZGVmYXVsdCBrZXkgbmFtZXMgZm9yICdpZCcgJiAnZGVzY3JpcHRpb24nXG4gKiB1c2luZyB0aGUgJ2lkJyAmICd0ZXh0JyBvcHRpb25zIGluIHRoZSBoZWxwZXIuXG4gKlxuICogICAgICBsZXQgZGF0YSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAqICAgICAgICAgICAgICB0ZXh0OiAnTmV3IFlvcmsnXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIHZhbHVlOiAyLFxuICogICAgICAgICAgICAgIHRleHQ6ICdMb25kb24nXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF07XG4gKlxuICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIxXCIgaWQ9XCJ2YWx1ZVwiIHRleHQ9XCJ0ZXh0XCJ9fX1cbiAqXG4gKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICpcbiAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD5OZXcgWW9yazwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkxvbmRvbjwvb3B0aW9uPlxuICpcbiAqL1xuZnVuY3Rpb24gb3B0aW9ucyhkYXRhLCBvcHRzKSB7XG4gICAgLy8gVGhlIGlkICYgdGV4dCBmb3IgdGhlIDxvcHRpb24+XG4gICAgdmFyIGlkID0gb3B0cy5oYXNoLmlkIHx8ICdpZCc7XG4gICAgdmFyIHRleHQgPSBvcHRzLmhhc2gudGV4dCB8fCAnZGVzY3JpcHRpb24nO1xuXG4gICAgLy8gVGhlIHNlbGVjdGlvbiBcImlkXCIgb2YgdGhlIDxvcHRpb24+XG4gICAgdmFyIHNlbGVjdGVkSWQgPSBvcHRzLmhhc2guc2VsZWN0ZWQgfHwgbnVsbDtcblxuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtW2lkXSB8fCAnJztcbiAgICAgICAgdmFyIGlubmVyVGV4dCA9IGl0ZW1bdGV4dF0gfHwgJyc7XG4gICAgICAgIHZhciBzZWxlY3RlZCA9IHZhbHVlID09IHNlbGVjdGVkSWQgPyAnIHNlbGVjdGVkJyA6ICcnO1xuXG4gICAgICAgIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZSArICdcIicgKyBzZWxlY3RlZCArICc+JyArIGlubmVyVGV4dCArICc8L29wdGlvbj4nO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zdW0gPSBzdW07XG5leHBvcnRzLmRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuZXhwb3J0cy5jZWlsID0gY2VpbDtcbmV4cG9ydHMuZmxvb3IgPSBmbG9vcjtcbi8qKlxuICogQSBzdW0gaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBzdW0gb2YgdHdvIG51bWJlcnMuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3N1bSAxIDJ9fSAgICAgPT4gM1xuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIG51bWJlclxuICovXG5mdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZTEpICsgTnVtYmVyKHZhbHVlMik7XG59XG5cbi8qKlxuICogQSBkaWZmZXJlbmNlIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gbnVtYmVycy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZGlmZmVyZW5jZSA1IDJ9fSAgPT4gM1xuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIG51bWJlclxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUxKSAtIE51bWJlcih2YWx1ZTIpO1xufVxuXG4vKipcbiAqIEEgY2VpbCBoZWxwZXIgdG8gZmluZCB0aGUgY2VpbCB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjZWlsIDUuNn19ICAgID0+IDZcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIG51bWJlclxuICovXG5mdW5jdGlvbiBjZWlsKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoTnVtYmVyKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Zmxvb3IgNS42fX0gPT4gNVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGZsb29yKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leGNlcnB0ID0gZXhjZXJwdDtcbmV4cG9ydHMuc2FuaXRpemUgPSBzYW5pdGl6ZTtcbmV4cG9ydHMubmV3TGluZVRvQnIgPSBuZXdMaW5lVG9CcjtcbmV4cG9ydHMuY2FwaXRhbGl6ZUVhY2ggPSBjYXBpdGFsaXplRWFjaDtcbmV4cG9ydHMuY2FwaXRhbGl6ZUZpcnN0ID0gY2FwaXRhbGl6ZUZpcnN0O1xuZXhwb3J0cy5zcHJpbnRmID0gc3ByaW50ZjtcbmV4cG9ydHMubG93ZXJjYXNlID0gbG93ZXJjYXNlO1xuZXhwb3J0cy51cHBlcmNhc2UgPSB1cHBlcmNhc2U7XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIEV4dHJhY3QgYSBmZXcgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLiBEZWZhdWx0IG51bWJlciBvZiBjaGFyYWN0ZXJzIGlzIDUwLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsZW5ndGhcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcblxuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsZW5ndGgpICsgJy4uLic7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3Nhbml0aXplICdKdVN0ICNXb3cnfX0gICAgPT4gJ2p1c3Qtd293J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzYW5pdGl6ZShzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHMrLywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgXFxuIHdpdGggPGJyPiB0YWdzLlxuICogQGV4YW1wbGVcbiAqICAgICB7e25ld0xpbmVUb0JyICduZXdMaW5lVG9CciBoZWxwZXIgXFxuIGlzIHZlcnkgXFxuIHVzZWZ1bC4nfX0gICAgPT4gbmV3TGluZVRvQnIgaGVscGVyIDxicj4gaXMgdmVyeSA8YnI+IHVzZWZ1bC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5ld0xpbmVUb0JyKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgJzxicj4nKTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIGVhY2ggbGV0dGVyIG9mIGEgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjYXBpdGFsaXplRWFjaCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCBXb3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVFYWNoKHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgc3ByaW50ZiBoZWxwZXIgdG8gYmUgdXNlZCBpbiB0aGUgaGFuZGxlYmFycyB0ZW1wbGF0ZXMgdGhhdCBzdXBwb3J0cyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAqXG4gKiBOT1RFOiBUaGlzIGhlbHBlciByZWxpZXMgb24gc3ByaW50ZigpIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZWkvc3ByaW50Zi5qc1xuICogU28sIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgc3ByaW50Zi1qcyBwYWNrYWdlIGF2YWlsYWJsZSBlaXRoZXIgYXMgYSBub2RlIG1vZHVsZVxuICogb3IgaGF2ZSBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9ucyBhdmFpbGFibGUgaW4gdGhlIGdsb2JhbCBzY29wZSBmcm9tIHRoYXQgcGFja2FnZS5cbiAqXG4gKiBTeW50YXg6XG4gKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgYXJnMSBhcmcyIGFyZzMuLi4ufX1cbiAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBvYmplY3R9fVxuICogICAgICB7e3NwcmludGYgZm9ybWF0IGtleTE9dmFsdWUxIGtleTI9dmFsdWUyLi4ufX1cbiAqXG4gKiAgQGV4YW1wbGVcbiAqICAgICAge3tzcHJpbnRmICclcyAlcyEnICdIZWxsbycgJ0thYmlyJyB9fVxuICogICAgICB7e3NwcmludGYgJyVzICVzICVkICVzICVkJyAnRm9vJyAnQmFyJyA1NSAnQmF6JyAnMjAnfX1cbiAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhIEhvdyBhcmUgeW91Pycgb2JqIH19XG4gKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISAnIGdyZWV0aW5nPSdIZWxsbycgbmFtZT0nS2FiaXInfX1cbiAqXG4gKiBDaGVjayB0aGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZWkvc3ByaW50Zi5qcyBmb3IgbW9yZSBpbmZvcm1hdGlvblxuICpcbiAqIEBwYXJhbSBmb3JtYXRcbiAqIEBwYXJhbSAuLi5hcmdzXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc3ByaW50Zihmb3JtYXQpIHtcblxuICAgIC8vIENoZWNrIGlmIHRoZSB2c3ByaW50ZiBmdW5jdGlvbiBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAvLyBpZiBpdCdzIG5vdCBhdmFpbGFibGUgdGhlbiB0cnkgdG8gcmVxdWlyZSgpIGl0XG4gICAgdmFyIF92c3ByaW50ZiA9IGdsb2JhbC52c3ByaW50ZjtcblxuICAgIGlmICghKDAsIF91dGlscy5pc0Z1bmN0aW9uKShfdnNwcmludGYpKSB7XG4gICAgICAgIF92c3ByaW50ZiA9ICh7c3ByaW50Zjogd2luZG93LnNwcmludGYsIHZzcHJpbnRmOiB3aW5kb3cudnNwcmludGZ9KS52c3ByaW50ZjtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHRoZSBwYXJhbWV0ZXJzIGJlZm9yZSBwYXNzaW5nIGl0IHRvIHRoZVxuICAgIC8vIHNwcmludGYvdnNwcmludGYgZnVuY3Rpb25cbiAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZykgJiYgKDAsIF91dGlscy5pc09iamVjdCkoYXJnLmhhc2gpKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuaGFzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5wdXNoKGFyZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDAgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UuXG4gKiBAZXhhbXBsZVxuICogICAge3tsb3dlcmNhc2UgJ0pVU1QgV09XISEhJ319ICAgPT4gJ2p1c3Qgd293ISEhJ1xuICpcbiAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBsb3dlcmNhc2UocGFyYW0pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9Mb3dlckNhc2UoKSA6IHBhcmFtO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gKiBAZXhhbXBsZVxuICogICAge3t1cHBlcmNhc2UgJ2p1c3Qgd293ISEhJ319ICAgPT4gJ0pVU1QgV09XISEhJ1xuICpcbiAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiB1cHBlcmNhc2UocGFyYW0pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9VcHBlckNhc2UoKSA6IHBhcmFtO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gKiAgICB7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICpcbiAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25bMF07XG59XG5cbi8qKlxuICogR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICogQGV4YW1wbGVcbiAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICogICAge3tsYXN0IHNvbWVBcnJheX19ICAgPT4gJ0pvbmVzJ1xuICpcbiAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGNvbGxlY3Rpb24pIHx8IGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbltjb2xsZWN0aW9uLmxlbmd0aCAtIDFdO1xufVxuXG4vKipcbiAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICogQGV4YW1wbGVcbiAqICAgIHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAqXG4gKiBAcGFyYW0gIG1peGVkIC4uLnBhcmFtc1xuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXMuam9pbignJyk7XG59XG5cbi8qKlxuICogSm9pbiB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgdXNpbmcgYSBkZWxpbWV0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0hhbmRzJywgJ2xlZ3MnLCAnZmVldCddO1xuICogICAge3tqb2luIHNvbWVBcnJheSAnICYgJ319ICAgPT4gJ0hhbmRzICYgbGVncyAmIGZlZXQnXG4gKlxuICogQHBhcmFtICBhcnJheSBwYXJhbXNcbiAqIEBwYXJhbSAgc3RyaW5nIGRlbGltZXRlclxuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gam9pbihwYXJhbXMsIGRlbGltZXRlcikge1xuICAgIGlmICghZGVsaW1ldGVyIHx8ICgwLCBfdXRpbHMuaXNPYmplY3QpKGRlbGltZXRlcikpIHtcbiAgICAgICAgZGVsaW1ldGVyID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKHBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXMuam9pbihkZWxpbWV0ZXIpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0RlZmluZWQgPSBpc0RlZmluZWQ7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc051bWVyaWMgPSBpc051bWVyaWM7XG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBub3QgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0RlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGhpbmcpKSA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMuXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcbn0iXX0=
