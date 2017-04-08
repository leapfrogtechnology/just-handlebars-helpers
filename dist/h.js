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

var _html2 = _interopRequireDefault(_html);

var _math = require('./helpers/math');

var _math2 = _interopRequireDefault(_math);

var _strings = require('./helpers/strings');

var _strings2 = _interopRequireDefault(_strings);

var _datetime = require('./helpers/datetime');

var _datetime2 = _interopRequireDefault(_datetime);

var _formatters = require('./helpers/formatters');

var _formatters2 = _interopRequireDefault(_formatters);

var _conditionals = require('./helpers/conditionals');

var _conditionals2 = _interopRequireDefault(_conditionals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            var helpers = [_math2.default, _html2.default, _strings2.default, _conditionals2.default, _datetime2.default, _formatters2.default];

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

var _utils = require('../util/utils');

exports.default = {
    /**
     * Determine whether or not two values are equal (===).
     * @example
     *      {{eq '3' 3}}    => false
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    eq: function eq(value1, value2) {
        return value1 === value2;
    },

    /**
     * Determine whether or not two values are equal (==) i.e weak checking.
     * @example
     *      {{eqw '3' 3}}   => true
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    eqw: function eqw(value1, value2) {
        return value1 == value2;
    },

    /**
     * Determine whether or not two values are not equal (!==).
     * @example
     *      {{neq 4 3}}    => true
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    neq: function neq(value1, value2) {
        return value1 !== value2;
    },

    /**
     * Determine whether or not two values are not equal (!=) weak checking.
     * @example
     *      {{neqw '3' 3}}    => false
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    neqw: function neqw(value1, value2) {
        return value1 != value2;
    },

    /**
     * Check for less than condition (a < b).
     * @example
     *      {{lt 2 3}}   => true
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    lt: function lt(value1, value2) {
        return value1 < value2;
    },

    /**
     * Check for less than or equals condition (a <= b).
     * @example
     *      {{lte 2 3}}   => true
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    lte: function lte(value1, value2) {
        return value1 <= value2;
    },

    /**
     * Check for greater than condition (a > b).
     * @example
     *      {{gt 2 3}}   => false
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    gt: function gt(value1, value2) {
        return value1 > value2;
    },

    /**
     * Check for greater than or equals condition (a >= b).
     * @example
     *      {{gte 3 3}}   => true
     *
     * @param value1
     * @param value2
     * @returns boolean
     */
    gte: function gte(value1, value2) {
        return value1 >= value2;
    },

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
    ifx: function ifx(condition, value1, value2) {
        // Check if user has omitted the last parameter
        // if that's the case, it would be the handlebars's options object
        // which it sends always as the last parameter.
        if ((0, _utils.isObject)(value2) && value2.name === 'ifx' && value2.hasOwnProperty('hash')) {
            // This means the user has skipped the last parameter,
            // so we should return an empty string ('') in the else case instead.
            value2 = '';
        }

        return !!condition ? value1 : value2;
    },

    /**
     * Logical NOT of any expression.
     * @example
     *      {{not true}}    => false
     *      {{not false}}   => true
     *
     * @param expression
     * @returns boolean
     */
    not: function not(expression) {
        return !expression;
    },

    /**
     * Check if an array is empty.
     * @example
     *      {{empty array}} => true | false
     *
     * @param array
     * @returns boolean
     */
    empty: function empty(array) {
        if (!(0, _utils.isArray)(array)) {
            return true;
        }

        return array.length === 0;
    },

    /**
     * Determine the length of an array.
     * @example
     *      {{count array}} =>  false | array.length
     *
     * @param array
     * @returns boolean | number
     */
    count: function count(array) {
        if (!(0, _utils.isArray)(array)) {
            return false;
        }

        return array.length;
    },

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
    and: function and() {
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
    },

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
    or: function or() {
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
    },

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
    coalesce: function coalesce() {
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
    },

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
    includes: function includes(array, value) {
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
};
},{"../util/utils":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../util/utils');

exports.default = {
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
    formatDate: function formatDate(formatString, date) {

        var moment = (window.moment);

        if (!moment) {
            throw new Error('Moment JS is required for this helper. Make sure you have loaded moment js http://momentjs.com/');
        }

        formatString = (0, _utils.isString)(formatString) ? formatString : '';

        return moment(date || new Date()).format(formatString);
    }
};
},{"../util/utils":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../util/utils');

exports.default = {

    /**
     * Format the currency according to the country.
     * @example
     *      {{currency 1000000 code='USD'}}  => $1,000,000.00
     *      {{currency 1000000 code='EUR'}}  => 1 000 000,00 €
     *      {{currency 1000000 code='EUR' precision=0}}  => 1 000 000 €
     *
     * @param value
     * @param args
     */
    currency: function currency(value) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var currencyFormatter = require('currency-formatter');

        if (!currencyFormatter) {
            throw new Error('Currency Formatter JS is required for this helper. Make sure you have loaded https://www.npmjs.com/package/currency-formatter');
        }

        var params = [];

        args.forEach(function (arg) {
            if ((0, _utils.isObject)(arg) && (0, _utils.isObject)(arg.hash)) {
                arg = arg.hash;
            }

            params.push(arg);
        });

        if (params.length) {
            params = params[0];
        }

        return currencyFormatter.format(value, params);
    }
};
},{"../util/utils":9,"currency-formatter":12}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * A showIf helper for showing any html element.
     * @example
     *      {{showIf true}}     => ''
     *
     * @param expression
     * @returns string
     */
    showIf: function showIf(expression) {
        return !!expression ? '' : 'hidden';
    },

    /**
     * A hideIf helper for hiding any html element.
     * @example
     *      {{hideIf true}}     => 'hidden'
     *
     * @param expression
     * @returns string
     */
    hideIf: function hideIf(expression) {
        return !!expression ? 'hidden' : '';
    },

    /**
     * A selectedIf helper for dropdown and radio boxes.
     * @example
     *      {{selectedIf true}} =>  'selected'
     *
     * @param expression
     * @returns string
     */
    selectedIf: function selectedIf(expression) {
        return !!expression ? 'selected' : '';
    },

    /**
     * A checkedIf helper for checkboxes.
     * @example
     *      {{checkedIf true}}  => 'checked'
     *
     * @param expression
     * @returns string
     */
    checkedIf: function checkedIf(expression) {
        return !!expression ? 'checked' : '';
    },

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
    options: function options(data, opts) {
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
};
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * A sum helper calculating the sum of two numbers.
     * @example
     *      {{sum 1 2}}     => 3
     *
     * @param value1
     * @param value2
     * @returns number
     */
    sum: function sum(value1, value2) {
        return Number(value1) + Number(value2);
    },

    /**
     * A difference helper calculating the difference of two numbers.
     * @example
     *      {{difference 5 2}}  => 3
     *
     * @param value1
     * @param value2
     * @returns number
     */
    difference: function difference(value1, value2) {
        return Number(value1) - Number(value2);
    },

    /**
     * A ceil helper to find the ceil value of the number.
     * @example
     *      {{ceil 5.6}}    => 6
     *
     * @param value
     * @returns number
     */
    ceil: function ceil(value) {
        return Math.ceil(Number(value));
    },

    /**
     * A floor helper to find the floor value of the number.
     * @example
     *      {{floor 5.6}} => 5
     *
     * @param value
     * @returns number
     */
    floor: function floor(value) {
        return Math.floor(Number(value));
    }
};
},{}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../util/utils');

exports.default = {
    /**
     * Extract a few characters from a string. Default number of characters is 50.
     * @example
     *      {{excerpt 'Just Wow' 4}}    => 'Just'
     *
     * @param string
     * @param length
     * @returns string
     */
    excerpt: function excerpt(string, length) {
        length = parseInt(length) || 50;

        if (typeof string !== 'string' || typeof length !== 'number') {
            return string;
        }

        if (string.length < length) {
            return string;
        }

        return string.slice(0, length) + '...';
    },

    /**
     * Convert a string to url friendly dash-case string removing special characters.
     * @example
     *      {{sanitize 'JuSt #Wow'}}    => 'just-wow'
     *
     * @param string
     * @returns string
     */
    sanitize: function sanitize(string) {
        string = string.replace(/[^\w\s]/gi, '').trim();

        return string.replace(/\s+/, '-').toLowerCase();
    },

    /**
     * Replace \n with <br> tags.
     * @example
     *     {{newLineToBr 'newLineToBr helper \n is very \n useful.'}}    => newLineToBr helper <br> is very <br> useful.
     *
     * @param  {string}
     * @return {string}
     */
    newLineToBr: function newLineToBr(string) {
        return string.replace(/\r?\n|\r/g, '<br>');
    },

    /**
     * Capitalize each letter of a string.
     * @example
     *      {{capitalizeEach 'just wow'}}   => 'Just Wow'
     *
     * @param string
     * @returns string
     */
    capitalizeEach: function capitalizeEach(string) {
        if (typeof string === 'string') {
            return string.toLowerCase().replace(/\w\S*/g, function (match) {
                return match.charAt(0).toUpperCase() + match.substr(1);
            });
        }

        return string;
    },

    /**
     * Capitalize the first letter of a string.
     * @example
     *      {{capitalizeFirst 'just wow'}}   => 'Just wow'
     *
     * @param string
     * @returns string
     */
    capitalizeFirst: function capitalizeFirst(string) {
        if (typeof string === 'string') {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        return string;
    },

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
    sprintf: function sprintf(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        // Check if the vsprintf function is available globally
        // if it's not available then try to require() it
        var _vsprintf = global.vsprintf;

        if (!(0, _utils.isFunction)(_vsprintf)) {
            _vsprintf = ({sprintf: window.sprintf, vsprintf: window.vsprintf}).vsprintf;
        }

        // Normalize all the parameters before passing it to the
        // sprintf/vsprintf function
        var params = [];

        args.forEach(function (arg) {
            if ((0, _utils.isObject)(arg) && (0, _utils.isObject)(arg.hash)) {
                arg = arg.hash;
            }

            params.push(arg);
        });

        return params.length > 0 ? _vsprintf(format, params) : format;
    },

    /**
     * Changes the string to lowercase.
     * @example
     *    {{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
     *
     * @param  string param
     * @return string
     */
    lowercase: function lowercase(param) {
        return (0, _utils.isString)(param) ? param.toLowerCase() : param;
    },

    /**
     * Changes the string to uppercase.
     * @example
     *    {{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
     *
     * @param  string param
     * @return string
     */
    uppercase: function uppercase(param) {
        return (0, _utils.isString)(param) ? param.toUpperCase() : param;
    },

    /**
     * Get the first element of a collection/array.
     * @example
     *    var someArray = ['David', 'Miller', 'Jones'];
     *    {{first someArray}}   => 'David'
     *
     * @param  array collection
     * @return string
     */
    first: function first(collection) {
        if (!(0, _utils.isArray)(collection) || collection.length === 0) {
            return '';
        }

        return collection[0];
    },

    /**
     * Get the last element of a collection/array.
     * @example
     *    var someArray = ['David', 'Miller', 'Jones'];
     *    {{last someArray}}   => 'Jones'
     *
     * @param  array collection
     * @return string
     */
    last: function last(collection) {
        if (!(0, _utils.isArray)(collection) || collection.length === 0) {
            return '';
        }

        return collection[collection.length - 1];
    },

    /**
     * Concat two or more strings.
     * @example
     *    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
     *
     * @param  mixed ...params
     * @return string
     */
    concat: function concat() {
        for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
        }

        // Ignore the object appended by handlebars.
        if ((0, _utils.isObject)(params[params.length - 1])) {
            params.pop();
        }

        return params.join('');
    },

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
    join: function join(params, delimeter) {
        if (!delimeter || (0, _utils.isObject)(delimeter)) {
            delimeter = '';
        }

        if (!(0, _utils.isArray)(params)) {
            return false;
        }

        return params.join(delimeter);
    }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isString = isString;
},{}],10:[function(require,module,exports){
/*!
 * accounting.js v0.4.1
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */

(function(root, undefined) {

	/* --- Setup --- */

	// Create the local library object, to be exported or referenced globally later
	var lib = {};

	// Current version
	lib.version = '0.4.1';


	/* --- Exposed settings --- */

	// The library's settings configuration object. Contains default parameters for
	// currency and number formatting
	lib.settings = {
		currency: {
			symbol : "$",		// default currency symbol is '$'
			format : "%s%v",	// controls output: %s = symbol, %v = value (can be object, see docs)
			decimal : ".",		// decimal point separator
			thousand : ",",		// thousands separator
			precision : 2,		// decimal places
			grouping : 3		// digit grouping (not implemented yet)
		},
		number: {
			precision : 0,		// default precision on numbers is 0
			grouping : 3,		// digit grouping (not implemented yet)
			thousand : ",",
			decimal : "."
		}
	};


	/* --- Internal Helper Methods --- */

	// Store reference to possibly-available ECMAScript 5 methods for later
	var nativeMap = Array.prototype.map,
		nativeIsArray = Array.isArray,
		toString = Object.prototype.toString;

	/**
	 * Tests whether supplied parameter is a string
	 * from underscore.js
	 */
	function isString(obj) {
		return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
	}

	/**
	 * Tests whether supplied parameter is a string
	 * from underscore.js, delegates to ECMA5's native Array.isArray
	 */
	function isArray(obj) {
		return nativeIsArray ? nativeIsArray(obj) : toString.call(obj) === '[object Array]';
	}

	/**
	 * Tests whether supplied parameter is a true object
	 */
	function isObject(obj) {
		return obj && toString.call(obj) === '[object Object]';
	}

	/**
	 * Extends an object with a defaults object, similar to underscore's _.defaults
	 *
	 * Used for abstracting parameter handling from API methods
	 */
	function defaults(object, defs) {
		var key;
		object = object || {};
		defs = defs || {};
		// Iterate over object non-prototype properties:
		for (key in defs) {
			if (defs.hasOwnProperty(key)) {
				// Replace values with defaults only if undefined (allow empty/zero values):
				if (object[key] == null) object[key] = defs[key];
			}
		}
		return object;
	}

	/**
	 * Implementation of `Array.map()` for iteration loops
	 *
	 * Returns a new Array as a result of calling `iterator` on each array value.
	 * Defers to native Array.map if available
	 */
	function map(obj, iterator, context) {
		var results = [], i, j;

		if (!obj) return results;

		// Use native .map method if it exists:
		if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);

		// Fallback for native .map:
		for (i = 0, j = obj.length; i < j; i++ ) {
			results[i] = iterator.call(context, obj[i], i, obj);
		}
		return results;
	}

	/**
	 * Check and normalise the value of precision (must be positive integer)
	 */
	function checkPrecision(val, base) {
		val = Math.round(Math.abs(val));
		return isNaN(val)? base : val;
	}


	/**
	 * Parses a format string or object and returns format obj for use in rendering
	 *
	 * `format` is either a string with the default (positive) format, or object
	 * containing `pos` (required), `neg` and `zero` values (or a function returning
	 * either a string or object)
	 *
	 * Either string or format.pos must contain "%v" (value) to be valid
	 */
	function checkCurrencyFormat(format) {
		var defaults = lib.settings.currency.format;

		// Allow function as format parameter (should return string or object):
		if ( typeof format === "function" ) format = format();

		// Format can be a string, in which case `value` ("%v") must be present:
		if ( isString( format ) && format.match("%v") ) {

			// Create and return positive, negative and zero formats:
			return {
				pos : format,
				neg : format.replace("-", "").replace("%v", "-%v"),
				zero : format
			};

		// If no format, or object is missing valid positive value, use defaults:
		} else if ( !format || !format.pos || !format.pos.match("%v") ) {

			// If defaults is a string, casts it to an object for faster checking next time:
			return ( !isString( defaults ) ) ? defaults : lib.settings.currency.format = {
				pos : defaults,
				neg : defaults.replace("%v", "-%v"),
				zero : defaults
			};

		}
		// Otherwise, assume format was fine:
		return format;
	}


	/* --- API Methods --- */

	/**
	 * Takes a string/array of strings, removes all formatting/cruft and returns the raw float value
	 * Alias: `accounting.parse(string)`
	 *
	 * Decimal must be included in the regular expression to match floats (defaults to
	 * accounting.settings.number.decimal), so if the number uses a non-standard decimal 
	 * separator, provide it as the second argument.
	 *
	 * Also matches bracketed negatives (eg. "$ (1.99)" => -1.99)
	 *
	 * Doesn't throw any errors (`NaN`s become 0) but this may change in future
	 */
	var unformat = lib.unformat = lib.parse = function(value, decimal) {
		// Recursively unformat arrays:
		if (isArray(value)) {
			return map(value, function(val) {
				return unformat(val, decimal);
			});
		}

		// Fails silently (need decent errors):
		value = value || 0;

		// Return the value as-is if it's already a number:
		if (typeof value === "number") return value;

		// Default decimal point comes from settings, but could be set to eg. "," in opts:
		decimal = decimal || lib.settings.number.decimal;

		 // Build regex to strip out everything except digits, decimal point and minus sign:
		var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
			unformatted = parseFloat(
				("" + value)
				.replace(/\((.*)\)/, "-$1") // replace bracketed values with negatives
				.replace(regex, '')         // strip out any cruft
				.replace(decimal, '.')      // make sure decimal point is standard
			);

		// This will fail silently which may cause trouble, let's wait and see:
		return !isNaN(unformatted) ? unformatted : 0;
	};


	/**
	 * Implementation of toFixed() that treats floats more like decimals
	 *
	 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === "0.61") that present
	 * problems for accounting- and finance-related software.
	 */
	var toFixed = lib.toFixed = function(value, precision) {
		precision = checkPrecision(precision, lib.settings.number.precision);
		var power = Math.pow(10, precision);

		// Multiply up by precision, round accurately, then divide and use native toFixed():
		return (Math.round(lib.unformat(value) * power) / power).toFixed(precision);
	};


	/**
	 * Format a number, with comma-separated thousands and custom precision/decimal places
	 * Alias: `accounting.format()`
	 *
	 * Localise by overriding the precision and thousand / decimal separators
	 * 2nd parameter `precision` can be an object matching `settings.number`
	 */
	var formatNumber = lib.formatNumber = lib.format = function(number, precision, thousand, decimal) {
		// Resursively format arrays:
		if (isArray(number)) {
			return map(number, function(val) {
				return formatNumber(val, precision, thousand, decimal);
			});
		}

		// Clean up number:
		number = unformat(number);

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(precision) ? precision : {
					precision : precision,
					thousand : thousand,
					decimal : decimal
				}),
				lib.settings.number
			),

			// Clean up precision
			usePrecision = checkPrecision(opts.precision),

			// Do some calc:
			negative = number < 0 ? "-" : "",
			base = parseInt(toFixed(Math.abs(number || 0), usePrecision), 10) + "",
			mod = base.length > 3 ? base.length % 3 : 0;

		// Format the number:
		return negative + (mod ? base.substr(0, mod) + opts.thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + opts.thousand) + (usePrecision ? opts.decimal + toFixed(Math.abs(number), usePrecision).split('.')[1] : "");
	};


	/**
	 * Format a number into currency
	 *
	 * Usage: accounting.formatMoney(number, symbol, precision, thousandsSep, decimalSep, format)
	 * defaults: (0, "$", 2, ",", ".", "%s%v")
	 *
	 * Localise by overriding the symbol, precision, thousand / decimal separators and format
	 * Second param can be an object matching `settings.currency` which is the easiest way.
	 *
	 * To do: tidy up the parameters
	 */
	var formatMoney = lib.formatMoney = function(number, symbol, precision, thousand, decimal, format) {
		// Resursively format arrays:
		if (isArray(number)) {
			return map(number, function(val){
				return formatMoney(val, symbol, precision, thousand, decimal, format);
			});
		}

		// Clean up number:
		number = unformat(number);

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(symbol) ? symbol : {
					symbol : symbol,
					precision : precision,
					thousand : thousand,
					decimal : decimal,
					format : format
				}),
				lib.settings.currency
			),

			// Check format (returns object with pos, neg and zero):
			formats = checkCurrencyFormat(opts.format),

			// Choose which format to use for this value:
			useFormat = number > 0 ? formats.pos : number < 0 ? formats.neg : formats.zero;

		// Return with currency symbol added:
		return useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(number), checkPrecision(opts.precision), opts.thousand, opts.decimal));
	};


	/**
	 * Format a list of numbers into an accounting column, padding with whitespace
	 * to line up currency symbols, thousand separators and decimals places
	 *
	 * List should be an array of numbers
	 * Second parameter can be an object containing keys that match the params
	 *
	 * Returns array of accouting-formatted number strings of same length
	 *
	 * NB: `white-space:pre` CSS rule is required on the list container to prevent
	 * browsers from collapsing the whitespace in the output strings.
	 */
	lib.formatColumn = function(list, symbol, precision, thousand, decimal, format) {
		if (!list) return [];

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(symbol) ? symbol : {
					symbol : symbol,
					precision : precision,
					thousand : thousand,
					decimal : decimal,
					format : format
				}),
				lib.settings.currency
			),

			// Check format (returns object with pos, neg and zero), only need pos for now:
			formats = checkCurrencyFormat(opts.format),

			// Whether to pad at start of string or after currency symbol:
			padAfterSymbol = formats.pos.indexOf("%s") < formats.pos.indexOf("%v") ? true : false,

			// Store value for the length of the longest string in the column:
			maxLength = 0,

			// Format the list according to options, store the length of the longest string:
			formatted = map(list, function(val, i) {
				if (isArray(val)) {
					// Recursively format columns if list is a multi-dimensional array:
					return lib.formatColumn(val, opts);
				} else {
					// Clean up the value
					val = unformat(val);

					// Choose which format to use for this value (pos, neg or zero):
					var useFormat = val > 0 ? formats.pos : val < 0 ? formats.neg : formats.zero,

						// Format this value, push into formatted list and save the length:
						fVal = useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(val), checkPrecision(opts.precision), opts.thousand, opts.decimal));

					if (fVal.length > maxLength) maxLength = fVal.length;
					return fVal;
				}
			});

		// Pad each number in the list and send back the column of numbers:
		return map(formatted, function(val, i) {
			// Only if this is a string (not a nested array, which would have already been padded):
			if (isString(val) && val.length < maxLength) {
				// Depending on symbol position, pad after symbol or at index 0:
				return padAfterSymbol ? val.replace(opts.symbol, opts.symbol+(new Array(maxLength - val.length + 1).join(" "))) : (new Array(maxLength - val.length + 1).join(" ")) + val;
			}
			return val;
		});
	};


	/* --- Module Definition --- */

	// Export accounting for CommonJS. If being loaded as an AMD module, define it as such.
	// Otherwise, just add `accounting` to the global object
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.accounting = lib;
	} else if (typeof define === 'function' && define.amd) {
		// Return the library as an AMD module:
		define([], function() {
			return lib;
		});
	} else {
		// Use accounting.noConflict to restore `accounting` back to its original value.
		// Returns a reference to the library's `accounting` object;
		// e.g. `var numbers = accounting.noConflict();`
		lib.noConflict = (function(oldAccounting) {
			return function() {
				// Reset the value of the root's `accounting` variable:
				root.accounting = oldAccounting;
				// Delete the noConflict method:
				lib.noConflict = undefined;
				// Return reference to the library to re-assign it:
				return lib;
			};
		})(root.accounting);

		// Declare `fx` on the root (global/window) object:
		root['accounting'] = lib;
	}

	// Root will be `window` in browser or `global` on the server:
}(this));

},{}],11:[function(require,module,exports){
module.exports={
  "AED": {
    "code": "AED",
    "symbol": "د.إ.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "AFN": {
    "code": "AFN",
    "symbol": "؋",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "ALL": {
    "code": "ALL",
    "symbol": "Lek",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "AMD": {
    "code": "AMD",
    "symbol": "֏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "ANG": {
    "code": "ANG",
    "symbol": "ƒ",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "AOA": {
    "code": "AOA",
    "symbol": "Kz",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "ARS": {
    "code": "ARS",
    "symbol": "$",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "AUD": {
    "code": "AUD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "AWG": {
    "code": "AWG",
    "symbol": "ƒ",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "AZN": {
    "code": "AZN",
    "symbol": "₼",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "BAM": {
    "code": "BAM",
    "symbol": "КМ",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "BBD": {
    "code": "BBD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "BDT": {
    "code": "BDT",
    "symbol": "৳",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 0
  },
  "BGN": {
    "code": "BGN",
    "symbol": "лв.",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "BHD": {
    "code": "BHD",
    "symbol": "د.ب.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 3
  },
  "BIF": {
    "code": "BIF",
    "symbol": "FBu",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "BMD": {
    "code": "BMD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "BND": {
    "code": "BND",
    "symbol": "$",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "BOB": {
    "code": "BOB",
    "symbol": "Bs",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "BRL": {
    "code": "BRL",
    "symbol": "R$",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "BSD": {
    "code": "BSD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "BTC": {
    "code": "BTC",
    "symbol": "Ƀ",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "BTN": {
    "code": "BTN",
    "symbol": "Nu.",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 1
  },
  "BWP": {
    "code": "BWP",
    "symbol": "P",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "BYR": {
    "code": "BYR",
    "symbol": "р.",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "BZD": {
    "code": "BZD",
    "symbol": "BZ$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CAD": {
    "code": "CAD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CDF": {
    "code": "CDF",
    "symbol": "FC",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CHF": {
    "code": "CHF",
    "symbol": "CHF",
    "thousandsSeparator": "'",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "CLP": {
    "code": "CLP",
    "symbol": "$",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "CNY": {
    "code": "CNY",
    "symbol": "¥",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "COP": {
    "code": "COP",
    "symbol": "$",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "CRC": {
    "code": "CRC",
    "symbol": "₡",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CUC": {
    "code": "CUC",
    "symbol": "CUC",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CUP": {
    "code": "CUP",
    "symbol": "$MN",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CVE": {
    "code": "CVE",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "CZK": {
    "code": "CZK",
    "symbol": "Kč",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "DJF": {
    "code": "DJF",
    "symbol": "Fdj",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "DKK": {
    "code": "DKK",
    "symbol": "kr.",
    "thousandsSeparator": "",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "DOP": {
    "code": "DOP",
    "symbol": "RD$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "DZD": {
    "code": "DZD",
    "symbol": "د.ج.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "EGP": {
    "code": "EGP",
    "symbol": "ج.م.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "ERN": {
    "code": "ERN",
    "symbol": "Nfk",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "ETB": {
    "code": "ETB",
    "symbol": "ETB",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "EUR": {
    "code": "EUR",
    "symbol": "€",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "FJD": {
    "code": "FJD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "FKP": {
    "code": "FKP",
    "symbol": "£",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "GBP": {
    "code": "GBP",
    "symbol": "£",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "GEL": {
    "code": "GEL",
    "symbol": "Lari",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "GHS": {
    "code": "GHS",
    "symbol": "₵",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "GIP": {
    "code": "GIP",
    "symbol": "£",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "GMD": {
    "code": "GMD",
    "symbol": "D",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "GNF": {
    "code": "GNF",
    "symbol": "FG",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "GTQ": {
    "code": "GTQ",
    "symbol": "Q",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "GYD": {
    "code": "GYD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "HKD": {
    "code": "HKD",
    "symbol": "HK$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "HNL": {
    "code": "HNL",
    "symbol": "L.",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "HRK": {
    "code": "HRK",
    "symbol": "kn",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "HTG": {
    "code": "HTG",
    "symbol": "G",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "HUF": {
    "code": "HUF",
    "symbol": "Ft",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "IDR": {
    "code": "IDR",
    "symbol": "Rp",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "ILS": {
    "code": "ILS",
    "symbol": "₪",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "INR": {
    "code": "INR",
    "symbol": "₹",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "IQD": {
    "code": "IQD",
    "symbol": "د.ع.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "IRR": {
    "code": "IRR",
    "symbol": "﷼",
    "thousandsSeparator": ",",
    "decimalSeparator": "/",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "ISK": {
    "code": "ISK",
    "symbol": "kr.",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 0
  },
  "JMD": {
    "code": "JMD",
    "symbol": "J$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "JOD": {
    "code": "JOD",
    "symbol": "د.ا.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 3
  },
  "JPY": {
    "code": "JPY",
    "symbol": "¥",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "KES": {
    "code": "KES",
    "symbol": "S",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "KGS": {
    "code": "KGS",
    "symbol": "сом",
    "thousandsSeparator": " ",
    "decimalSeparator": "-",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "KHR": {
    "code": "KHR",
    "symbol": "៛",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "KMF": {
    "code": "KMF",
    "symbol": "CF",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "KPW": {
    "code": "KPW",
    "symbol": "₩",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "KRW": {
    "code": "KRW",
    "symbol": "₩",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "KWD": {
    "code": "KWD",
    "symbol": "د.ك.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 3
  },
  "KYD": {
    "code": "KYD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "KZT": {
    "code": "KZT",
    "symbol": "₸",
    "thousandsSeparator": " ",
    "decimalSeparator": "-",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "LAK": {
    "code": "LAK",
    "symbol": "₭",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "LBP": {
    "code": "LBP",
    "symbol": "ل.ل.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "LKR": {
    "code": "LKR",
    "symbol": "₨",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 0
  },
  "LRD": {
    "code": "LRD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "LSL": {
    "code": "LSL",
    "symbol": "M",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "LYD": {
    "code": "LYD",
    "symbol": "د.ل.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 3
  },
  "MAD": {
    "code": "MAD",
    "symbol": "د.م.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "MDL": {
    "code": "MDL",
    "symbol": "lei",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "MGA": {
    "code": "MGA",
    "symbol": "Ar",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "MKD": {
    "code": "MKD",
    "symbol": "ден.",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "MMK": {
    "code": "MMK",
    "symbol": "K",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MNT": {
    "code": "MNT",
    "symbol": "₮",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MOP": {
    "code": "MOP",
    "symbol": "MOP$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MRO": {
    "code": "MRO",
    "symbol": "UM",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MTL": {
    "code": "MTL",
    "symbol": "₤",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MUR": {
    "code": "MUR",
    "symbol": "₨",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MVR": {
    "code": "MVR",
    "symbol": "MVR",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 1
  },
  "MWK": {
    "code": "MWK",
    "symbol": "MK",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MXN": {
    "code": "MXN",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MYR": {
    "code": "MYR",
    "symbol": "RM",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "MZN": {
    "code": "MZN",
    "symbol": "MT",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "NAD": {
    "code": "NAD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "NGN": {
    "code": "NGN",
    "symbol": "₦",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "NIO": {
    "code": "NIO",
    "symbol": "C$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "NOK": {
    "code": "NOK",
    "symbol": "kr",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "NPR": {
    "code": "NPR",
    "symbol": "₨",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "NZD": {
    "code": "NZD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "OMR": {
    "code": "OMR",
    "symbol": "﷼",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 3
  },
  "PAB": {
    "code": "PAB",
    "symbol": "B/.",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "PEN": {
    "code": "PEN",
    "symbol": "S/.",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "PGK": {
    "code": "PGK",
    "symbol": "K",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "PHP": {
    "code": "PHP",
    "symbol": "₱",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "PKR": {
    "code": "PKR",
    "symbol": "₨",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "PLN": {
    "code": "PLN",
    "symbol": "zł",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "PYG": {
    "code": "PYG",
    "symbol": "₲",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "QAR": {
    "code": "QAR",
    "symbol": "﷼",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "RON": {
    "code": "RON",
    "symbol": "lei",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "RSD": {
    "code": "RSD",
    "symbol": "Дин.",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "RUB": {
    "code": "RUB",
    "symbol": "₽",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "RWF": {
    "code": "RWF",
    "symbol": "RWF",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "SAR": {
    "code": "SAR",
    "symbol": "﷼",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "SBD": {
    "code": "SBD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SCR": {
    "code": "SCR",
    "symbol": "₨",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SDD": {
    "code": "SDD",
    "symbol": "LSd",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SDG": {
    "code": "SDG",
    "symbol": "£‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SEK": {
    "code": "SEK",
    "symbol": "kr",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "SGD": {
    "code": "SGD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SHP": {
    "code": "SHP",
    "symbol": "£",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SLL": {
    "code": "SLL",
    "symbol": "Le",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SOS": {
    "code": "SOS",
    "symbol": "S",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SRD": {
    "code": "SRD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "STD": {
    "code": "STD",
    "symbol": "Db",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SVC": {
    "code": "SVC",
    "symbol": "₡",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "SYP": {
    "code": "SYP",
    "symbol": "£",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "SZL": {
    "code": "SZL",
    "symbol": "E",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "THB": {
    "code": "THB",
    "symbol": "฿",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "TJS": {
    "code": "TJS",
    "symbol": "TJS",
    "thousandsSeparator": " ",
    "decimalSeparator": ";",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "TMT": {
    "code": "TMT",
    "symbol": "m",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "TND": {
    "code": "TND",
    "symbol": "د.ت.‏",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 3
  },
  "TOP": {
    "code": "TOP",
    "symbol": "T$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "TRY": {
    "code": "TRY",
    "symbol": "TL",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "TTD": {
    "code": "TTD",
    "symbol": "TT$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "TVD": {
    "code": "TVD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "TWD": {
    "code": "TWD",
    "symbol": "NT$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "TZS": {
    "code": "TZS",
    "symbol": "TSh",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "UAH": {
    "code": "UAH",
    "symbol": "₴",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "UGX": {
    "code": "UGX",
    "symbol": "USh",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "USD": {
    "code": "USD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "UYU": {
    "code": "UYU",
    "symbol": "$U",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "UZS": {
    "code": "UZS",
    "symbol": "сўм",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "VEB": {
    "code": "VEB",
    "symbol": "Bs.",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "VEF": {
    "code": "VEF",
    "symbol": "Bs. F.",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "VND": {
    "code": "VND",
    "symbol": "₫",
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 1
  },
  "VUV": {
    "code": "VUV",
    "symbol": "VT",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 0
  },
  "WST": {
    "code": "WST",
    "symbol": "WS$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "XAF": {
    "code": "XAF",
    "symbol": "F",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "XCD": {
    "code": "XCD",
    "symbol": "$",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "XOF": {
    "code": "XOF",
    "symbol": "F",
    "thousandsSeparator": " ",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "XPF": {
    "code": "XPF",
    "symbol": "F",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "YER": {
    "code": "YER",
    "symbol": "﷼",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "ZAR": {
    "code": "ZAR",
    "symbol": "R",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "ZMW": {
    "code": "ZMW",
    "symbol": "ZK",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  },
  "WON": {
    "code": "WON",
    "symbol": "₩",
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "decimalDigits": 2
  }
}
},{}],12:[function(require,module,exports){
var accounting = require('accounting')
var assign = require('object-assign')
var localeCurrency = require('locale-currency')
var currencies = require('./currencies.json')
var localeFormats = require('./localeFormats.json')

var defaultCurrency = {
  symbol: '',
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
}

var defaultLocaleFormat = {}

var formatMapping = [
  {
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: false,
    format: {
      pos: '%s%v',
      neg: '-%s%v',
      zero: '%s%v'
    }
  },
  {
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: true,
    format: {
      pos: '%s %v',
      neg: '-%s %v',
      zero: '%s %v'
    }
  },
  {
    symbolOnLeft: false,
    spaceBetweenAmountAndSymbol: false,
    format: {
      pos: '%v%s',
      neg: '-%v%s',
      zero: '%v%s'
    }
  },
  {
    symbolOnLeft: false,
    spaceBetweenAmountAndSymbol: true,
    format: {
      pos: '%v %s',
      neg: '-%v %s',
      zero: '%v %s'
    }
  }
]

function format(value, options) {
  var code = options.code || (options.locale && localeCurrency.getCurrency(options.locale))
  var localeFormat = localeFormats[options.locale] || defaultLocaleFormat
  var currency = assign({}, defaultCurrency, findCurrency(code), localeFormat)
  
  var symbolOnLeft = currency.symbolOnLeft
  var spaceBetweenAmountAndSymbol = currency.spaceBetweenAmountAndSymbol

  var format = formatMapping.filter(function(f) {
    return f.symbolOnLeft == symbolOnLeft && f.spaceBetweenAmountAndSymbol == spaceBetweenAmountAndSymbol
  })[0].format

  return accounting.formatMoney(value, {
    symbol: isUndefined(options.symbol)
              ? currency.symbol
              : options.symbol,

    decimal: isUndefined(options.decimal)
              ? currency.decimalSeparator
              : options.decimal,

    thousand: isUndefined(options.thousand)
              ? currency.thousandsSeparator
              : options.thousand,

    precision: typeof options.precision === 'number'
              ? options.precision
              : currency.decimalDigits,

    format: ['string', 'object'].indexOf(typeof options.format) > -1
              ? options.format
              : format
  })
}

function findCurrency (currencyCode) {
  return currencies[currencyCode]
}

function isUndefined (val) {
  return typeof val === 'undefined'
}

module.exports = {
  defaultCurrency: defaultCurrency,
  get currencies() {
    // In favor of backwards compatibility, the currencies map is converted to an array here
    return Object.keys(currencies).map(function(key) {
      return currencies[key]
    })
  },
  findCurrency: findCurrency,
  format: format
}
},{"./currencies.json":11,"./localeFormats.json":13,"accounting":10,"locale-currency":14,"object-assign":16}],13:[function(require,module,exports){
module.exports={
  "de-AT": {
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "el-GR": {
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "decimalDigits": 2
  },
  "en-IE": {
    "symbolOnLeft": true,
    "thousandsSeparator": ",",
    "decimalSeparator": ".",
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "es-ES": {
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "symbolOnLeft": false,
    "spaceBetweenAmountAndSymbol": true,
    "decimalDigits": 2
  },
  "it-IT": {
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "decimalDigits": 2
  },
  "nl-NL": {
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "decimalDigits": 2
  },
  "nl-BE": {
    "symbolOnLeft": true,
    "spaceBetweenAmountAndSymbol": false,
    "thousandsSeparator": ".",
    "decimalSeparator": ",",
    "decimalDigits": 2
  }
}
},{}],14:[function(require,module,exports){
var map = require("./map");

var getCountryCode = function(localeString) {
    var components = localeString.split("_");
    if (components.length == 2) {
        return components.pop();
    }
    components = localeString.split("-");
    if (components.length == 2) {
        return components.pop();
    }
    return localeString;
}

exports.getCurrency = function(locale) {
    var countryCode = getCountryCode(locale).toUpperCase();
    if (countryCode in map) {
        return map[countryCode];
    }
    return null;
}

exports.getLocales = function(currencyCode) {
    currencyCode = currencyCode.toUpperCase();
    var locales = [];
    for (countryCode in map) {
        if (map[countryCode] === currencyCode) {
            locales.push(countryCode);
        }
    }
    return locales;
}
},{"./map":15}],15:[function(require,module,exports){
// Generated using ShowCurrencies.java
var map = {
AD: 'EUR',
AE: 'AED',
AF: 'AFN',
AG: 'XCD',
AI: 'XCD',
AL: 'ALL',
AM: 'AMD',
AN: 'ANG',
AO: 'AOA',
AR: 'ARS',
AS: 'USD',
AT: 'EUR',
AU: 'AUD',
AW: 'AWG',
AX: 'EUR',
AZ: 'AZN',
BA: 'BAM',
BB: 'BBD',
BD: 'BDT',
BE: 'EUR',
BF: 'XOF',
BG: 'BGN',
BH: 'BHD',
BI: 'BIF',
BJ: 'XOF',
BL: 'EUR',
BM: 'BMD',
BN: 'BND',
BO: 'BOB',
BQ: 'USD',
BR: 'BRL',
BS: 'BSD',
BT: 'BTN',
BV: 'NOK',
BW: 'BWP',
BY: 'BYR',
BZ: 'BZD',
CA: 'CAD',
CC: 'AUD',
CD: 'CDF',
CF: 'XAF',
CG: 'XAF',
CH: 'CHF',
CI: 'XOF',
CK: 'NZD',
CL: 'CLP',
CM: 'XAF',
CN: 'CNY',
CO: 'COP',
CR: 'CRC',
CU: 'CUP',
CV: 'CVE',
CW: 'ANG',
CX: 'AUD',
CY: 'EUR',
CZ: 'CZK',
DE: 'EUR',
DJ: 'DJF',
DK: 'DKK',
DM: 'XCD',
DO: 'DOP',
DZ: 'DZD',
EC: 'USD',
EE: 'EUR',
EG: 'EGP',
EH: 'MAD',
ER: 'ERN',
ES: 'EUR',
ET: 'ETB',
FI: 'EUR',
FJ: 'FJD',
FK: 'FKP',
FM: 'USD',
FO: 'DKK',
FR: 'EUR',
GA: 'XAF',
GB: 'GBP',
GD: 'XCD',
GE: 'GEL',
GF: 'EUR',
GG: 'GBP',
GH: 'GHS',
GI: 'GIP',
GL: 'DKK',
GM: 'GMD',
GN: 'GNF',
GP: 'EUR',
GQ: 'XAF',
GR: 'EUR',
GS: 'GBP',
GT: 'GTQ',
GU: 'USD',
GW: 'XOF',
GY: 'GYD',
HK: 'HKD',
HM: 'AUD',
HN: 'HNL',
HR: 'HRK',
HT: 'HTG',
HU: 'HUF',
ID: 'IDR',
IE: 'EUR',
IL: 'ILS',
IM: 'GBP',
IN: 'INR',
IO: 'USD',
IQ: 'IQD',
IR: 'IRR',
IS: 'ISK',
IT: 'EUR',
JE: 'GBP',
JM: 'JMD',
JO: 'JOD',
JP: 'JPY',
KE: 'KES',
KG: 'KGS',
KH: 'KHR',
KI: 'AUD',
KM: 'KMF',
KN: 'XCD',
KP: 'KPW',
KR: 'KRW',
KW: 'KWD',
KY: 'KYD',
KZ: 'KZT',
LA: 'LAK',
LB: 'LBP',
LC: 'XCD',
LI: 'CHF',
LK: 'LKR',
LR: 'LRD',
LS: 'LSL',
LT: 'LTL',
LU: 'EUR',
LV: 'LVL',
LY: 'LYD',
MA: 'MAD',
MC: 'EUR',
MD: 'MDL',
ME: 'EUR',
MF: 'EUR',
MG: 'MGA',
MH: 'USD',
MK: 'MKD',
ML: 'XOF',
MM: 'MMK',
MN: 'MNT',
MO: 'MOP',
MP: 'USD',
MQ: 'EUR',
MR: 'MRO',
MS: 'XCD',
MT: 'EUR',
MU: 'MUR',
MV: 'MVR',
MW: 'MWK',
MX: 'MXN',
MY: 'MYR',
MZ: 'MZN',
NA: 'NAD',
NC: 'XPF',
NE: 'XOF',
NF: 'AUD',
NG: 'NGN',
NI: 'NIO',
NL: 'EUR',
NO: 'NOK',
NP: 'NPR',
NR: 'AUD',
NU: 'NZD',
NZ: 'NZD',
OM: 'OMR',
PA: 'PAB',
PE: 'PEN',
PF: 'XPF',
PG: 'PGK',
PH: 'PHP',
PK: 'PKR',
PL: 'PLN',
PM: 'EUR',
PN: 'NZD',
PR: 'USD',
PS: 'ILS',
PT: 'EUR',
PW: 'USD',
PY: 'PYG',
QA: 'QAR',
RE: 'EUR',
RO: 'RON',
RS: 'RSD',
RU: 'RUB',
RW: 'RWF',
SA: 'SAR',
SB: 'SBD',
SC: 'SCR',
SD: 'SDG',
SE: 'SEK',
SG: 'SGD',
SH: 'SHP',
SI: 'EUR',
SJ: 'NOK',
SK: 'EUR',
SL: 'SLL',
SM: 'EUR',
SN: 'XOF',
SO: 'SOS',
SR: 'SRD',
ST: 'STD',
SV: 'SVC',
SX: 'ANG',
SY: 'SYP',
SZ: 'SZL',
TC: 'USD',
TD: 'XAF',
TF: 'EUR',
TG: 'XOF',
TH: 'THB',
TJ: 'TJS',
TK: 'NZD',
TL: 'USD',
TM: 'TMT',
TN: 'TND',
TO: 'TOP',
TR: 'TRY',
TT: 'TTD',
TV: 'AUD',
TW: 'TWD',
TZ: 'TZS',
UA: 'UAH',
UG: 'UGX',
UM: 'USD',
US: 'USD',
UY: 'UYU',
UZ: 'UZS',
VA: 'EUR',
VC: 'XCD',
VE: 'VEF',
VG: 'USD',
VI: 'USD',
VN: 'VND',
VU: 'VUV',
WF: 'XPF',
WS: 'WST',
YE: 'YER',
YT: 'EUR',
ZA: 'ZAR',
ZM: 'ZMK',
ZW: 'ZWL'
};

module.exports = map;
},{}],16:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9mb3JtYXR0ZXJzLmpzIiwibGliL2hlbHBlcnMvaHRtbC5qcyIsImxpYi9oZWxwZXJzL21hdGguanMiLCJsaWIvaGVscGVycy9zdHJpbmdzLmpzIiwibGliL3V0aWwvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvYWNjb3VudGluZy9hY2NvdW50aW5nLmpzIiwibm9kZV9tb2R1bGVzL2N1cnJlbmN5LWZvcm1hdHRlci9jdXJyZW5jaWVzLmpzb24iLCJub2RlX21vZHVsZXMvY3VycmVuY3ktZm9ybWF0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2N1cnJlbmN5LWZvcm1hdHRlci9sb2NhbGVGb3JtYXRzLmpzb24iLCJub2RlX21vZHVsZXMvbG9jYWxlLWN1cnJlbmN5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvY2FsZS1jdXJyZW5jeS9tYXAuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBVdGlsc1xuXG5cbi8vIEhlbHBlcnNcblxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlsL3V0aWxzJyk7XG5cbnZhciBfaHRtbCA9IHJlcXVpcmUoJy4vaGVscGVycy9odG1sJyk7XG5cbnZhciBfaHRtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9odG1sKTtcblxudmFyIF9tYXRoID0gcmVxdWlyZSgnLi9oZWxwZXJzL21hdGgnKTtcblxudmFyIF9tYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGgpO1xuXG52YXIgX3N0cmluZ3MgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3RyaW5ncycpO1xuXG52YXIgX3N0cmluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5ncyk7XG5cbnZhciBfZGF0ZXRpbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvZGF0ZXRpbWUnKTtcblxudmFyIF9kYXRldGltZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRldGltZSk7XG5cbnZhciBfZm9ybWF0dGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JtYXR0ZXJzJyk7XG5cbnZhciBfZm9ybWF0dGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb3JtYXR0ZXJzKTtcblxudmFyIF9jb25kaXRpb25hbHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvY29uZGl0aW9uYWxzJyk7XG5cbnZhciBfY29uZGl0aW9uYWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmRpdGlvbmFscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEgoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAncmVnaXN0ZXJIZWxwZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzKSB7XG5cbiAgICAgICAgICAgIGhhbmRsZWJhcnMgPSBoYW5kbGViYXJzIHx8IGdsb2JhbC5IYW5kbGViYXJzO1xuXG4gICAgICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmplY3QpKGhhbmRsZWJhcnMpKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSwgaGFuZGxlYmFycyBpcyBub3QgcHJvdmlkZWQgYW5kIGl0J3Mgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGFzIHdlbGwgdGhyb3cgdGhlIGVycm9yIGFuZCBoYWx0LlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhlbHBlcnMgbGlzdFxuICAgICAgICAgICAgdmFyIGhlbHBlcnMgPSBbX21hdGgyLmRlZmF1bHQsIF9odG1sMi5kZWZhdWx0LCBfc3RyaW5nczIuZGVmYXVsdCwgX2NvbmRpdGlvbmFsczIuZGVmYXVsdCwgX2RhdGV0aW1lMi5kZWZhdWx0LCBfZm9ybWF0dGVyczIuZGVmYXVsdF07XG5cbiAgICAgICAgICAgIGhlbHBlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHRvIEhhbmRsZWJhcnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlbHBlcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcltuYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tlcSAnMycgM319ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBlcTogZnVuY3Rpb24gZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA9PT0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tlcXcgJzMnIDN9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGVxdzogZnVuY3Rpb24gZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPT0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPT0pLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e25lcSA0IDN9fSAgICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBuZXE6IGZ1bmN0aW9uIG5lcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxICE9PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9KSB3ZWFrIGNoZWNraW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e25lcXcgJzMnIDN9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbmVxdzogZnVuY3Rpb24gbmVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxICE9IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBjb25kaXRpb24gKGEgPCBiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tsdCAyIDN9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGx0OiBmdW5jdGlvbiBsdCh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxIDwgdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgbGVzcyB0aGFuIG9yIGVxdWFscyBjb25kaXRpb24gKGEgPD0gYikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bHRlIDIgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbHRlOiBmdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA8PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gY29uZGl0aW9uIChhID4gYikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Z3QgMiAzfX0gICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZ3Q6IGZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPiB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tndGUgMyAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBndGU6IGZ1bmN0aW9uIGd0ZSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID49IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIHRvIGltaXRhdGUgdGhlIHRlcm5hcnkgY29uZGl0aW9uYWwgb3BlcmF0b3IgPzpcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gICAgICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlMSAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGhvbGRzIHRydWVcbiAgICAgKiBAcGFyYW0gdmFsdWUyICAgIFZhbHVlIHRvIHJldHVybiB3aGVuIHRoZSBjb25kaXRpb24gaXMgZmFsc2UgKE9wdGlvbmFsKVxuICAgICAqIEByZXR1cm5zIG1peGVkXG4gICAgICovXG4gICAgaWZ4OiBmdW5jdGlvbiBpZngoY29uZGl0aW9uLCB2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBvbWl0dGVkIHRoZSBsYXN0IHBhcmFtZXRlclxuICAgICAgICAvLyBpZiB0aGF0J3MgdGhlIGNhc2UsIGl0IHdvdWxkIGJlIHRoZSBoYW5kbGViYXJzJ3Mgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgLy8gd2hpY2ggaXQgc2VuZHMgYWx3YXlzIGFzIHRoZSBsYXN0IHBhcmFtZXRlci5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHZhbHVlMikgJiYgdmFsdWUyLm5hbWUgPT09ICdpZngnICYmIHZhbHVlMi5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIG1lYW5zIHRoZSB1c2VyIGhhcyBza2lwcGVkIHRoZSBsYXN0IHBhcmFtZXRlcixcbiAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nICgnJykgaW4gdGhlIGVsc2UgY2FzZSBpbnN0ZWFkLlxuICAgICAgICAgICAgdmFsdWUyID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFjb25kaXRpb24gPyB2YWx1ZTEgOiB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e25vdCB0cnVlfX0gICAgPT4gZmFsc2VcbiAgICAgKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBub3Q6IGZ1bmN0aW9uIG5vdChleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhZXhwcmVzc2lvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW4gYXJyYXkgaXMgZW1wdHkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSA9PiB0cnVlIHwgZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcnJheVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBlbXB0eTogZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXkubGVuZ3RoID09PSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjb3VudCBhcnJheX19ID0+ICBmYWxzZSB8IGFycmF5Lmxlbmd0aFxuICAgICAqXG4gICAgICogQHBhcmFtIGFycmF5XG4gICAgICogQHJldHVybnMgYm9vbGVhbiB8IG51bWJlclxuICAgICAqL1xuICAgIGNvdW50OiBmdW5jdGlvbiBjb3VudChhcnJheSkge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib29sZWFuIEFORCBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAgICAgKiBpdCBpcyB0cnVlIGlmZiBhbGwgdGhlIHBhcmFtZXRlcnMgYXJlIHRydWUuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICB2YXIgdmFsdWUxID0gdmFsdWUyID0gdHJ1ZTtcbiAgICAgKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IHRydWVcbiAgICAgKlxuICAgICAqICAgICB2YXIgdmFsdWUxID0gZmFsc2UsIHZhbHVlMiA9IHRydWU7XG4gICAgICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBhbmQ6IGZ1bmN0aW9uIGFuZCgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFwYXJhbXNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYm9vbGVhbiBPUiBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAgICAgKiBpdCBpcyB0cnVlIGlmIGFueSBvZiB0aGUgcGFyYW1ldGVycyBpcyB0cnVlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IHRydWUsIHZhbHVlMiA9IGZhbHNlO1xuICAgICAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiAgICAgdmFyIHZhbHVlID0gdmFsdWUyID0gZmFsc2U7XG4gICAgICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG9yOiBmdW5jdGlvbiBvcigpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IG5vbi1mYWxzeSB2YWx1ZSBmcm9tIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgKiBXb3JrcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBTUUwncyBDT0FMRVNDRSgpIGZ1bmN0aW9uLCBidXQgdW5saWtlIHRoaXNcbiAgICAgKiBjaGVja3MgZm9yIHRoZSBmaXJzdCBub24tZmFsc2UgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIGZ1bGxOYW1lID0gJ0ZvbyBCYXInLCBuaWNrTmFtZSA9ICdmb29iJztcbiAgICAgKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnRm9vIEJhcidcbiAgICAgKlxuICAgICAqICAgICB2YXIgZnVsbE5hbWUgPSAnJywgbmlja05hbWUgPSAnZm9vYic7XG4gICAgICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ2Zvb2InXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgbWl4ZWRcbiAgICAgKi9cbiAgICBjb2FsZXNjZTogZnVuY3Rpb24gY29hbGVzY2UoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLnBvcCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gaWYgdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBlbGVtZW50IHN0cmljdGx5IG9yIG5vbi1zdHJpY3RseS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICB2YXIgYXJyYXkgPSBbMSwgMiwgMywgNF07XG4gICAgICogICAgIHZhciB2YWx1ZTEgPSAyLCB2YWx1ZTIgPSAxMCwgdmFsdWUzID0gJzMnO1xuICAgICAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMX19ICAgICAgICA9PiB0cnVlXG4gICAgICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUyfX0gICAgICAgID0+IGZhbHNlXG4gICAgICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzfX0gICAgICAgID0+IGZhbHNlXG4gICAgICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUzIGZhbHNlfX0gID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgc3RyaWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkgfHwgYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmIGFycmF5W2ldID09PSB2YWx1ZSB8fCAhc3RyaWN0ICYmIGFycmF5W2ldID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIEEgZm9ybWF0RGF0ZSBoZWxwZXIgdG8gZm9ybWF0IGRhdGUgdXNpbmcgbW9tZW50IGpzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Zm9ybWF0RGF0ZSAnTU0vREQvWVlZWScgZGF0ZX19XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbiBmb3JtYXREYXRlKGZvcm1hdFN0cmluZywgZGF0ZSkge1xuXG4gICAgICAgIHZhciBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG5cbiAgICAgICAgaWYgKCFtb21lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9tZW50IEpTIGlzIHJlcXVpcmVkIGZvciB0aGlzIGhlbHBlci4gTWFrZSBzdXJlIHlvdSBoYXZlIGxvYWRlZCBtb21lbnQganMgaHR0cDovL21vbWVudGpzLmNvbS8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdFN0cmluZyA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUgfHwgbmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdFN0cmluZyk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSBjdXJyZW5jeSBhY2NvcmRpbmcgdG8gdGhlIGNvdW50cnkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y3VycmVuY3kgMTAwMDAwMCBjb2RlPSdVU0QnfX0gID0+ICQxLDAwMCwwMDAuMDBcbiAgICAgKiAgICAgIHt7Y3VycmVuY3kgMTAwMDAwMCBjb2RlPSdFVVInfX0gID0+IDEgMDAwIDAwMCwwMCDigqxcbiAgICAgKiAgICAgIHt7Y3VycmVuY3kgMTAwMDAwMCBjb2RlPSdFVVInIHByZWNpc2lvbj0wfX0gID0+IDEgMDAwIDAwMCDigqxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgY3VycmVuY3k6IGZ1bmN0aW9uIGN1cnJlbmN5KHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVuY3lGb3JtYXR0ZXIgPSByZXF1aXJlKCdjdXJyZW5jeS1mb3JtYXR0ZXInKTtcblxuICAgICAgICBpZiAoIWN1cnJlbmN5Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnJlbmN5IEZvcm1hdHRlciBKUyBpcyByZXF1aXJlZCBmb3IgdGhpcyBoZWxwZXIuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBsb2FkZWQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3VycmVuY3ktZm9ybWF0dGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5oYXNoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJhbXMucHVzaChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSwgcGFyYW1zKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e3Nob3dJZiB0cnVlfX0gICAgID0+ICcnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNob3dJZjogZnVuY3Rpb24gc2hvd0lmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICcnIDogJ2hpZGRlbic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgaGlkZUlmIGhlbHBlciBmb3IgaGlkaW5nIGFueSBodG1sIGVsZW1lbnQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7aGlkZUlmIHRydWV9fSAgICAgPT4gJ2hpZGRlbidcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgaGlkZUlmOiBmdW5jdGlvbiBoaWRlSWYoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ2hpZGRlbicgOiAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd24gYW5kIHJhZGlvIGJveGVzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e3NlbGVjdGVkSWYgdHJ1ZX19ID0+ICAnc2VsZWN0ZWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNlbGVjdGVkSWY6IGZ1bmN0aW9uIHNlbGVjdGVkSWYoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGNoZWNrZWRJZjogZnVuY3Rpb24gY2hlY2tlZElmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25zIGhlbHBlciBmb3IgZ2VuZXJhdGluZyA8b3B0aW9uPiBsaXN0IGZvciA8c2VsZWN0PiBkcm9wZG93bnMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIEEgc2ltcGxlIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgIGxldCBkYXRhID0gW1xuICAgICAqICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vJ1xuICAgICAqICAgICAgICAgIH0sXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICBpZDogMixcbiAgICAgKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXInXG4gICAgICogICAgICAgICAgfSxcbiAgICAgKiAgICAgICAgICB7XG4gICAgICogICAgICAgICAgICAgIGlkOiAzLFxuICAgICAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbyBCYXInXG4gICAgICogICAgICAgICAgfVxuICAgICAqICAgICAgXTtcbiAgICAgKlxuICAgICAqICAgICAge3t7b3B0aW9ucyBkYXRhIHNlbGVjdGVkPVwiMlwifX19XG4gICAgICpcbiAgICAgKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkZvbzwvb3B0aW9uPlxuICAgICAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD5CYXI8L29wdGlvbj5cbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Rm9vIEJhcjwvb3B0aW9uPlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBZb3UgY2FuIGFsc28gb3ZlcnJpZGUgdGhlIGRlZmF1bHQga2V5IG5hbWVzIGZvciAnaWQnICYgJ2Rlc2NyaXB0aW9uJ1xuICAgICAqIHVzaW5nIHRoZSAnaWQnICYgJ3RleHQnIG9wdGlvbnMgaW4gdGhlIGhlbHBlci5cbiAgICAgKlxuICAgICAqICAgICAgbGV0IGRhdGEgPSBbXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgKiAgICAgICAgICAgICAgdGV4dDogJ05ldyBZb3JrJ1xuICAgICAqICAgICAgICAgIH0sXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgKiAgICAgICAgICAgICAgdGV4dDogJ0xvbmRvbidcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICBdO1xuICAgICAqXG4gICAgICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIxXCIgaWQ9XCJ2YWx1ZVwiIHRleHQ9XCJ0ZXh0XCJ9fX1cbiAgICAgKlxuICAgICAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgc2VsZWN0ZWQ+TmV3IFlvcms8L29wdGlvbj5cbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TG9uZG9uPC9vcHRpb24+XG4gICAgICpcbiAgICAgKi9cbiAgICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGRhdGEsIG9wdHMpIHtcbiAgICAgICAgLy8gVGhlIGlkICYgdGV4dCBmb3IgdGhlIDxvcHRpb24+XG4gICAgICAgIHZhciBpZCA9IG9wdHMuaGFzaC5pZCB8fCAnaWQnO1xuICAgICAgICB2YXIgdGV4dCA9IG9wdHMuaGFzaC50ZXh0IHx8ICdkZXNjcmlwdGlvbic7XG5cbiAgICAgICAgLy8gVGhlIHNlbGVjdGlvbiBcImlkXCIgb2YgdGhlIDxvcHRpb24+XG4gICAgICAgIHZhciBzZWxlY3RlZElkID0gb3B0cy5oYXNoLnNlbGVjdGVkIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtW2lkXSB8fCAnJztcbiAgICAgICAgICAgIHZhciBpbm5lclRleHQgPSBpdGVtW3RleHRdIHx8ICcnO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdmFsdWUgPT0gc2VsZWN0ZWRJZCA/ICcgc2VsZWN0ZWQnIDogJyc7XG5cbiAgICAgICAgICAgIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZSArICdcIicgKyBzZWxlY3RlZCArICc+JyArIGlubmVyVGV4dCArICc8L29wdGlvbj4nO1xuICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICogQSBzdW0gaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBzdW0gb2YgdHdvIG51bWJlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c3VtIDEgMn19ICAgICA9PiAzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIHN1bTogZnVuY3Rpb24gc3VtKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUxKSArIE51bWJlcih2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGRpZmZlcmVuY2UgaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlIG9mIHR3byBudW1iZXJzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2RpZmZlcmVuY2UgNSAyfX0gID0+IDNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgZGlmZmVyZW5jZTogZnVuY3Rpb24gZGlmZmVyZW5jZSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgLSBOdW1iZXIodmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBjZWlsIGhlbHBlciB0byBmaW5kIHRoZSBjZWlsIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2VpbCA1LjZ9fSAgICA9PiA2XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBjZWlsOiBmdW5jdGlvbiBjZWlsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoTnVtYmVyKHZhbHVlKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgZmxvb3IgaGVscGVyIHRvIGZpbmQgdGhlIGZsb29yIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Zmxvb3IgNS42fX0gPT4gNVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgZmxvb3I6IGZ1bmN0aW9uIGZsb29yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBleGNlcnB0OiBmdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2FuaXRpemU6IGZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBcXG4gd2l0aCA8YnI+IHRhZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAge3tuZXdMaW5lVG9CciAnbmV3TGluZVRvQnIgaGVscGVyIFxcbiBpcyB2ZXJ5IFxcbiB1c2VmdWwuJ319ICAgID0+IG5ld0xpbmVUb0JyIGhlbHBlciA8YnI+IGlzIHZlcnkgPGJyPiB1c2VmdWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIG5ld0xpbmVUb0JyOiBmdW5jdGlvbiBuZXdMaW5lVG9CcihzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnPGJyPicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIGVhY2ggbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRWFjaDogZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2goc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IHdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3Q6IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBzcHJpbnRmIGhlbHBlciB0byBiZSB1c2VkIGluIHRoZSBoYW5kbGViYXJzIHRlbXBsYXRlcyB0aGF0IHN1cHBvcnRzIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogTk9URTogVGhpcyBoZWxwZXIgcmVsaWVzIG9uIHNwcmludGYoKSBmdW5jdGlvbiBwcm92aWRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanNcbiAgICAgKiBTbywgbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBzcHJpbnRmLWpzIHBhY2thZ2UgYXZhaWxhYmxlIGVpdGhlciBhcyBhIG5vZGUgbW9kdWxlXG4gICAgICogb3IgaGF2ZSBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9ucyBhdmFpbGFibGUgaW4gdGhlIGdsb2JhbCBzY29wZSBmcm9tIHRoYXQgcGFja2FnZS5cbiAgICAgKlxuICAgICAqIFN5bnRheDpcbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgYXJnMSBhcmcyIGFyZzMuLi4ufX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgb2JqZWN0fX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQga2V5MT12YWx1ZTEga2V5Mj12YWx1ZTIuLi59fVxuICAgICAqXG4gICAgICogIEBleGFtcGxlXG4gICAgICogICAgICB7e3NwcmludGYgJyVzICVzIScgJ0hlbGxvJyAnS2FiaXInIH19XG4gICAgICogICAgICB7e3NwcmludGYgJyVzICVzICVkICVzICVkJyAnRm9vJyAnQmFyJyA1NSAnQmF6JyAnMjAnfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISBIb3cgYXJlIHlvdT8nIG9iaiB9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhICcgZ3JlZXRpbmc9J0hlbGxvJyBuYW1lPSdLYWJpcid9fVxuICAgICAqXG4gICAgICogQ2hlY2sgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNwcmludGY6IGZ1bmN0aW9uIHNwcmludGYoZm9ybWF0KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdnNwcmludGYgZnVuY3Rpb24gaXMgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSB0aGVuIHRyeSB0byByZXF1aXJlKCkgaXRcbiAgICAgICAgdmFyIF92c3ByaW50ZiA9IGdsb2JhbC52c3ByaW50ZjtcblxuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNGdW5jdGlvbikoX3ZzcHJpbnRmKSkge1xuICAgICAgICAgICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgICAgICAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5oYXNoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJhbXMucHVzaChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDAgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAge3tsb3dlcmNhc2UgJ0pVU1QgV09XISEhJ319ICAgPT4gJ2p1c3Qgd293ISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gbG93ZXJjYXNlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b0xvd2VyQ2FzZSgpIDogcGFyYW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgdXBwZXJjYXNlOiBmdW5jdGlvbiB1cHBlcmNhc2UocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvVXBwZXJDYXNlKCkgOiBwYXJhbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICAgIHt7Zmlyc3Qgc29tZUFycmF5fX0gICA9PiAnRGF2aWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bMF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICAgIHt7bGFzdCBzb21lQXJyYXl9fSAgID0+ICdKb25lcydcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgbGFzdDogZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bY29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e2NvbmNhdCAnSGVsbG8nICcgd29ybGQnICchISEnfX0gICA9PiAnSGVsbG8gd29ybGQhISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIG1peGVkIC4uLnBhcmFtc1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gICAgICogICAge3tqb2luIHNvbWVBcnJheSAnICYgJ319ICAgPT4gJ0hhbmRzICYgbGVncyAmIGZlZXQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IHBhcmFtc1xuICAgICAqIEBwYXJhbSAgc3RyaW5nIGRlbGltZXRlclxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihwYXJhbXMsIGRlbGltZXRlcikge1xuICAgICAgICBpZiAoIWRlbGltZXRlciB8fCAoMCwgX3V0aWxzLmlzT2JqZWN0KShkZWxpbWV0ZXIpKSB7XG4gICAgICAgICAgICBkZWxpbWV0ZXIgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShwYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oZGVsaW1ldGVyKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBub3QgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0RlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGhpbmcpKSA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7IiwiLyohXG4gKiBhY2NvdW50aW5nLmpzIHYwLjQuMVxuICogQ29weXJpZ2h0IDIwMTQgT3BlbiBFeGNoYW5nZSBSYXRlc1xuICpcbiAqIEZyZWVseSBkaXN0cmlidXRhYmxlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFBvcnRpb25zIG9mIGFjY291bnRpbmcuanMgYXJlIGluc3BpcmVkIG9yIGJvcnJvd2VkIGZyb20gdW5kZXJzY29yZS5qc1xuICpcbiAqIEZ1bGwgZGV0YWlscyBhbmQgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHA6Ly9vcGVuZXhjaGFuZ2VyYXRlcy5naXRodWIuaW8vYWNjb3VudGluZy5qcy9cbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgdW5kZWZpbmVkKSB7XG5cblx0LyogLS0tIFNldHVwIC0tLSAqL1xuXG5cdC8vIENyZWF0ZSB0aGUgbG9jYWwgbGlicmFyeSBvYmplY3QsIHRvIGJlIGV4cG9ydGVkIG9yIHJlZmVyZW5jZWQgZ2xvYmFsbHkgbGF0ZXJcblx0dmFyIGxpYiA9IHt9O1xuXG5cdC8vIEN1cnJlbnQgdmVyc2lvblxuXHRsaWIudmVyc2lvbiA9ICcwLjQuMSc7XG5cblxuXHQvKiAtLS0gRXhwb3NlZCBzZXR0aW5ncyAtLS0gKi9cblxuXHQvLyBUaGUgbGlicmFyeSdzIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24gb2JqZWN0LiBDb250YWlucyBkZWZhdWx0IHBhcmFtZXRlcnMgZm9yXG5cdC8vIGN1cnJlbmN5IGFuZCBudW1iZXIgZm9ybWF0dGluZ1xuXHRsaWIuc2V0dGluZ3MgPSB7XG5cdFx0Y3VycmVuY3k6IHtcblx0XHRcdHN5bWJvbCA6IFwiJFwiLFx0XHQvLyBkZWZhdWx0IGN1cnJlbmN5IHN5bWJvbCBpcyAnJCdcblx0XHRcdGZvcm1hdCA6IFwiJXMldlwiLFx0Ly8gY29udHJvbHMgb3V0cHV0OiAlcyA9IHN5bWJvbCwgJXYgPSB2YWx1ZSAoY2FuIGJlIG9iamVjdCwgc2VlIGRvY3MpXG5cdFx0XHRkZWNpbWFsIDogXCIuXCIsXHRcdC8vIGRlY2ltYWwgcG9pbnQgc2VwYXJhdG9yXG5cdFx0XHR0aG91c2FuZCA6IFwiLFwiLFx0XHQvLyB0aG91c2FuZHMgc2VwYXJhdG9yXG5cdFx0XHRwcmVjaXNpb24gOiAyLFx0XHQvLyBkZWNpbWFsIHBsYWNlc1xuXHRcdFx0Z3JvdXBpbmcgOiAzXHRcdC8vIGRpZ2l0IGdyb3VwaW5nIChub3QgaW1wbGVtZW50ZWQgeWV0KVxuXHRcdH0sXG5cdFx0bnVtYmVyOiB7XG5cdFx0XHRwcmVjaXNpb24gOiAwLFx0XHQvLyBkZWZhdWx0IHByZWNpc2lvbiBvbiBudW1iZXJzIGlzIDBcblx0XHRcdGdyb3VwaW5nIDogMyxcdFx0Ly8gZGlnaXQgZ3JvdXBpbmcgKG5vdCBpbXBsZW1lbnRlZCB5ZXQpXG5cdFx0XHR0aG91c2FuZCA6IFwiLFwiLFxuXHRcdFx0ZGVjaW1hbCA6IFwiLlwiXG5cdFx0fVxuXHR9O1xuXG5cblx0LyogLS0tIEludGVybmFsIEhlbHBlciBNZXRob2RzIC0tLSAqL1xuXG5cdC8vIFN0b3JlIHJlZmVyZW5jZSB0byBwb3NzaWJseS1hdmFpbGFibGUgRUNNQVNjcmlwdCA1IG1ldGhvZHMgZm9yIGxhdGVyXG5cdHZhciBuYXRpdmVNYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuXHRcdG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuXHRcdHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXHQvKipcblx0ICogVGVzdHMgd2hldGhlciBzdXBwbGllZCBwYXJhbWV0ZXIgaXMgYSBzdHJpbmdcblx0ICogZnJvbSB1bmRlcnNjb3JlLmpzXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcblx0XHRyZXR1cm4gISEob2JqID09PSAnJyB8fCAob2JqICYmIG9iai5jaGFyQ29kZUF0ICYmIG9iai5zdWJzdHIpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUZXN0cyB3aGV0aGVyIHN1cHBsaWVkIHBhcmFtZXRlciBpcyBhIHN0cmluZ1xuXHQgKiBmcm9tIHVuZGVyc2NvcmUuanMsIGRlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG5cdCAqL1xuXHRmdW5jdGlvbiBpc0FycmF5KG9iaikge1xuXHRcdHJldHVybiBuYXRpdmVJc0FycmF5ID8gbmF0aXZlSXNBcnJheShvYmopIDogdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRlc3RzIHdoZXRoZXIgc3VwcGxpZWQgcGFyYW1ldGVyIGlzIGEgdHJ1ZSBvYmplY3Rcblx0ICovXG5cdGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuXHRcdHJldHVybiBvYmogJiYgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcblx0fVxuXG5cdC8qKlxuXHQgKiBFeHRlbmRzIGFuIG9iamVjdCB3aXRoIGEgZGVmYXVsdHMgb2JqZWN0LCBzaW1pbGFyIHRvIHVuZGVyc2NvcmUncyBfLmRlZmF1bHRzXG5cdCAqXG5cdCAqIFVzZWQgZm9yIGFic3RyYWN0aW5nIHBhcmFtZXRlciBoYW5kbGluZyBmcm9tIEFQSSBtZXRob2RzXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWZhdWx0cyhvYmplY3QsIGRlZnMpIHtcblx0XHR2YXIga2V5O1xuXHRcdG9iamVjdCA9IG9iamVjdCB8fCB7fTtcblx0XHRkZWZzID0gZGVmcyB8fCB7fTtcblx0XHQvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IG5vbi1wcm90b3R5cGUgcHJvcGVydGllczpcblx0XHRmb3IgKGtleSBpbiBkZWZzKSB7XG5cdFx0XHRpZiAoZGVmcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdC8vIFJlcGxhY2UgdmFsdWVzIHdpdGggZGVmYXVsdHMgb25seSBpZiB1bmRlZmluZWQgKGFsbG93IGVtcHR5L3plcm8gdmFsdWVzKTpcblx0XHRcdFx0aWYgKG9iamVjdFtrZXldID09IG51bGwpIG9iamVjdFtrZXldID0gZGVmc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEltcGxlbWVudGF0aW9uIG9mIGBBcnJheS5tYXAoKWAgZm9yIGl0ZXJhdGlvbiBsb29wc1xuXHQgKlxuXHQgKiBSZXR1cm5zIGEgbmV3IEFycmF5IGFzIGEgcmVzdWx0IG9mIGNhbGxpbmcgYGl0ZXJhdG9yYCBvbiBlYWNoIGFycmF5IHZhbHVlLlxuXHQgKiBEZWZlcnMgdG8gbmF0aXZlIEFycmF5Lm1hcCBpZiBhdmFpbGFibGVcblx0ICovXG5cdGZ1bmN0aW9uIG1hcChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG5cdFx0dmFyIHJlc3VsdHMgPSBbXSwgaSwgajtcblxuXHRcdGlmICghb2JqKSByZXR1cm4gcmVzdWx0cztcblxuXHRcdC8vIFVzZSBuYXRpdmUgLm1hcCBtZXRob2QgaWYgaXQgZXhpc3RzOlxuXHRcdGlmIChuYXRpdmVNYXAgJiYgb2JqLm1hcCA9PT0gbmF0aXZlTWFwKSByZXR1cm4gb2JqLm1hcChpdGVyYXRvciwgY29udGV4dCk7XG5cblx0XHQvLyBGYWxsYmFjayBmb3IgbmF0aXZlIC5tYXA6XG5cdFx0Zm9yIChpID0gMCwgaiA9IG9iai5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG5cdFx0XHRyZXN1bHRzW2ldID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaik7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGFuZCBub3JtYWxpc2UgdGhlIHZhbHVlIG9mIHByZWNpc2lvbiAobXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyKVxuXHQgKi9cblx0ZnVuY3Rpb24gY2hlY2tQcmVjaXNpb24odmFsLCBiYXNlKSB7XG5cdFx0dmFsID0gTWF0aC5yb3VuZChNYXRoLmFicyh2YWwpKTtcblx0XHRyZXR1cm4gaXNOYU4odmFsKT8gYmFzZSA6IHZhbDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFBhcnNlcyBhIGZvcm1hdCBzdHJpbmcgb3Igb2JqZWN0IGFuZCByZXR1cm5zIGZvcm1hdCBvYmogZm9yIHVzZSBpbiByZW5kZXJpbmdcblx0ICpcblx0ICogYGZvcm1hdGAgaXMgZWl0aGVyIGEgc3RyaW5nIHdpdGggdGhlIGRlZmF1bHQgKHBvc2l0aXZlKSBmb3JtYXQsIG9yIG9iamVjdFxuXHQgKiBjb250YWluaW5nIGBwb3NgIChyZXF1aXJlZCksIGBuZWdgIGFuZCBgemVyb2AgdmFsdWVzIChvciBhIGZ1bmN0aW9uIHJldHVybmluZ1xuXHQgKiBlaXRoZXIgYSBzdHJpbmcgb3Igb2JqZWN0KVxuXHQgKlxuXHQgKiBFaXRoZXIgc3RyaW5nIG9yIGZvcm1hdC5wb3MgbXVzdCBjb250YWluIFwiJXZcIiAodmFsdWUpIHRvIGJlIHZhbGlkXG5cdCAqL1xuXHRmdW5jdGlvbiBjaGVja0N1cnJlbmN5Rm9ybWF0KGZvcm1hdCkge1xuXHRcdHZhciBkZWZhdWx0cyA9IGxpYi5zZXR0aW5ncy5jdXJyZW5jeS5mb3JtYXQ7XG5cblx0XHQvLyBBbGxvdyBmdW5jdGlvbiBhcyBmb3JtYXQgcGFyYW1ldGVyIChzaG91bGQgcmV0dXJuIHN0cmluZyBvciBvYmplY3QpOlxuXHRcdGlmICggdHlwZW9mIGZvcm1hdCA9PT0gXCJmdW5jdGlvblwiICkgZm9ybWF0ID0gZm9ybWF0KCk7XG5cblx0XHQvLyBGb3JtYXQgY2FuIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGB2YWx1ZWAgKFwiJXZcIikgbXVzdCBiZSBwcmVzZW50OlxuXHRcdGlmICggaXNTdHJpbmcoIGZvcm1hdCApICYmIGZvcm1hdC5tYXRjaChcIiV2XCIpICkge1xuXG5cdFx0XHQvLyBDcmVhdGUgYW5kIHJldHVybiBwb3NpdGl2ZSwgbmVnYXRpdmUgYW5kIHplcm8gZm9ybWF0czpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBvcyA6IGZvcm1hdCxcblx0XHRcdFx0bmVnIDogZm9ybWF0LnJlcGxhY2UoXCItXCIsIFwiXCIpLnJlcGxhY2UoXCIldlwiLCBcIi0ldlwiKSxcblx0XHRcdFx0emVybyA6IGZvcm1hdFxuXHRcdFx0fTtcblxuXHRcdC8vIElmIG5vIGZvcm1hdCwgb3Igb2JqZWN0IGlzIG1pc3NpbmcgdmFsaWQgcG9zaXRpdmUgdmFsdWUsIHVzZSBkZWZhdWx0czpcblx0XHR9IGVsc2UgaWYgKCAhZm9ybWF0IHx8ICFmb3JtYXQucG9zIHx8ICFmb3JtYXQucG9zLm1hdGNoKFwiJXZcIikgKSB7XG5cblx0XHRcdC8vIElmIGRlZmF1bHRzIGlzIGEgc3RyaW5nLCBjYXN0cyBpdCB0byBhbiBvYmplY3QgZm9yIGZhc3RlciBjaGVja2luZyBuZXh0IHRpbWU6XG5cdFx0XHRyZXR1cm4gKCAhaXNTdHJpbmcoIGRlZmF1bHRzICkgKSA/IGRlZmF1bHRzIDogbGliLnNldHRpbmdzLmN1cnJlbmN5LmZvcm1hdCA9IHtcblx0XHRcdFx0cG9zIDogZGVmYXVsdHMsXG5cdFx0XHRcdG5lZyA6IGRlZmF1bHRzLnJlcGxhY2UoXCIldlwiLCBcIi0ldlwiKSxcblx0XHRcdFx0emVybyA6IGRlZmF1bHRzXG5cdFx0XHR9O1xuXG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgYXNzdW1lIGZvcm1hdCB3YXMgZmluZTpcblx0XHRyZXR1cm4gZm9ybWF0O1xuXHR9XG5cblxuXHQvKiAtLS0gQVBJIE1ldGhvZHMgLS0tICovXG5cblx0LyoqXG5cdCAqIFRha2VzIGEgc3RyaW5nL2FycmF5IG9mIHN0cmluZ3MsIHJlbW92ZXMgYWxsIGZvcm1hdHRpbmcvY3J1ZnQgYW5kIHJldHVybnMgdGhlIHJhdyBmbG9hdCB2YWx1ZVxuXHQgKiBBbGlhczogYGFjY291bnRpbmcucGFyc2Uoc3RyaW5nKWBcblx0ICpcblx0ICogRGVjaW1hbCBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggZmxvYXRzIChkZWZhdWx0cyB0b1xuXHQgKiBhY2NvdW50aW5nLnNldHRpbmdzLm51bWJlci5kZWNpbWFsKSwgc28gaWYgdGhlIG51bWJlciB1c2VzIGEgbm9uLXN0YW5kYXJkIGRlY2ltYWwgXG5cdCAqIHNlcGFyYXRvciwgcHJvdmlkZSBpdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHQgKlxuXHQgKiBBbHNvIG1hdGNoZXMgYnJhY2tldGVkIG5lZ2F0aXZlcyAoZWcuIFwiJCAoMS45OSlcIiA9PiAtMS45OSlcblx0ICpcblx0ICogRG9lc24ndCB0aHJvdyBhbnkgZXJyb3JzIChgTmFOYHMgYmVjb21lIDApIGJ1dCB0aGlzIG1heSBjaGFuZ2UgaW4gZnV0dXJlXG5cdCAqL1xuXHR2YXIgdW5mb3JtYXQgPSBsaWIudW5mb3JtYXQgPSBsaWIucGFyc2UgPSBmdW5jdGlvbih2YWx1ZSwgZGVjaW1hbCkge1xuXHRcdC8vIFJlY3Vyc2l2ZWx5IHVuZm9ybWF0IGFycmF5czpcblx0XHRpZiAoaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBtYXAodmFsdWUsIGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHRyZXR1cm4gdW5mb3JtYXQodmFsLCBkZWNpbWFsKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEZhaWxzIHNpbGVudGx5IChuZWVkIGRlY2VudCBlcnJvcnMpOlxuXHRcdHZhbHVlID0gdmFsdWUgfHwgMDtcblxuXHRcdC8vIFJldHVybiB0aGUgdmFsdWUgYXMtaXMgaWYgaXQncyBhbHJlYWR5IGEgbnVtYmVyOlxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHJldHVybiB2YWx1ZTtcblxuXHRcdC8vIERlZmF1bHQgZGVjaW1hbCBwb2ludCBjb21lcyBmcm9tIHNldHRpbmdzLCBidXQgY291bGQgYmUgc2V0IHRvIGVnLiBcIixcIiBpbiBvcHRzOlxuXHRcdGRlY2ltYWwgPSBkZWNpbWFsIHx8IGxpYi5zZXR0aW5ncy5udW1iZXIuZGVjaW1hbDtcblxuXHRcdCAvLyBCdWlsZCByZWdleCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBleGNlcHQgZGlnaXRzLCBkZWNpbWFsIHBvaW50IGFuZCBtaW51cyBzaWduOlxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXjAtOS1cIiArIGRlY2ltYWwgKyBcIl1cIiwgW1wiZ1wiXSksXG5cdFx0XHR1bmZvcm1hdHRlZCA9IHBhcnNlRmxvYXQoXG5cdFx0XHRcdChcIlwiICsgdmFsdWUpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXCgoLiopXFwpLywgXCItJDFcIikgLy8gcmVwbGFjZSBicmFja2V0ZWQgdmFsdWVzIHdpdGggbmVnYXRpdmVzXG5cdFx0XHRcdC5yZXBsYWNlKHJlZ2V4LCAnJykgICAgICAgICAvLyBzdHJpcCBvdXQgYW55IGNydWZ0XG5cdFx0XHRcdC5yZXBsYWNlKGRlY2ltYWwsICcuJykgICAgICAvLyBtYWtlIHN1cmUgZGVjaW1hbCBwb2ludCBpcyBzdGFuZGFyZFxuXHRcdFx0KTtcblxuXHRcdC8vIFRoaXMgd2lsbCBmYWlsIHNpbGVudGx5IHdoaWNoIG1heSBjYXVzZSB0cm91YmxlLCBsZXQncyB3YWl0IGFuZCBzZWU6XG5cdFx0cmV0dXJuICFpc05hTih1bmZvcm1hdHRlZCkgPyB1bmZvcm1hdHRlZCA6IDA7XG5cdH07XG5cblxuXHQvKipcblx0ICogSW1wbGVtZW50YXRpb24gb2YgdG9GaXhlZCgpIHRoYXQgdHJlYXRzIGZsb2F0cyBtb3JlIGxpa2UgZGVjaW1hbHNcblx0ICpcblx0ICogRml4ZXMgYmluYXJ5IHJvdW5kaW5nIGlzc3VlcyAoZWcuICgwLjYxNSkudG9GaXhlZCgyKSA9PT0gXCIwLjYxXCIpIHRoYXQgcHJlc2VudFxuXHQgKiBwcm9ibGVtcyBmb3IgYWNjb3VudGluZy0gYW5kIGZpbmFuY2UtcmVsYXRlZCBzb2Z0d2FyZS5cblx0ICovXG5cdHZhciB0b0ZpeGVkID0gbGliLnRvRml4ZWQgPSBmdW5jdGlvbih2YWx1ZSwgcHJlY2lzaW9uKSB7XG5cdFx0cHJlY2lzaW9uID0gY2hlY2tQcmVjaXNpb24ocHJlY2lzaW9uLCBsaWIuc2V0dGluZ3MubnVtYmVyLnByZWNpc2lvbik7XG5cdFx0dmFyIHBvd2VyID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG5cblx0XHQvLyBNdWx0aXBseSB1cCBieSBwcmVjaXNpb24sIHJvdW5kIGFjY3VyYXRlbHksIHRoZW4gZGl2aWRlIGFuZCB1c2UgbmF0aXZlIHRvRml4ZWQoKTpcblx0XHRyZXR1cm4gKE1hdGgucm91bmQobGliLnVuZm9ybWF0KHZhbHVlKSAqIHBvd2VyKSAvIHBvd2VyKS50b0ZpeGVkKHByZWNpc2lvbik7XG5cdH07XG5cblxuXHQvKipcblx0ICogRm9ybWF0IGEgbnVtYmVyLCB3aXRoIGNvbW1hLXNlcGFyYXRlZCB0aG91c2FuZHMgYW5kIGN1c3RvbSBwcmVjaXNpb24vZGVjaW1hbCBwbGFjZXNcblx0ICogQWxpYXM6IGBhY2NvdW50aW5nLmZvcm1hdCgpYFxuXHQgKlxuXHQgKiBMb2NhbGlzZSBieSBvdmVycmlkaW5nIHRoZSBwcmVjaXNpb24gYW5kIHRob3VzYW5kIC8gZGVjaW1hbCBzZXBhcmF0b3JzXG5cdCAqIDJuZCBwYXJhbWV0ZXIgYHByZWNpc2lvbmAgY2FuIGJlIGFuIG9iamVjdCBtYXRjaGluZyBgc2V0dGluZ3MubnVtYmVyYFxuXHQgKi9cblx0dmFyIGZvcm1hdE51bWJlciA9IGxpYi5mb3JtYXROdW1iZXIgPSBsaWIuZm9ybWF0ID0gZnVuY3Rpb24obnVtYmVyLCBwcmVjaXNpb24sIHRob3VzYW5kLCBkZWNpbWFsKSB7XG5cdFx0Ly8gUmVzdXJzaXZlbHkgZm9ybWF0IGFycmF5czpcblx0XHRpZiAoaXNBcnJheShudW1iZXIpKSB7XG5cdFx0XHRyZXR1cm4gbWFwKG51bWJlciwgZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHJldHVybiBmb3JtYXROdW1iZXIodmFsLCBwcmVjaXNpb24sIHRob3VzYW5kLCBkZWNpbWFsKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIENsZWFuIHVwIG51bWJlcjpcblx0XHRudW1iZXIgPSB1bmZvcm1hdChudW1iZXIpO1xuXG5cdFx0Ly8gQnVpbGQgb3B0aW9ucyBvYmplY3QgZnJvbSBzZWNvbmQgcGFyYW0gKGlmIG9iamVjdCkgb3IgYWxsIHBhcmFtcywgZXh0ZW5kaW5nIGRlZmF1bHRzOlxuXHRcdHZhciBvcHRzID0gZGVmYXVsdHMoXG5cdFx0XHRcdChpc09iamVjdChwcmVjaXNpb24pID8gcHJlY2lzaW9uIDoge1xuXHRcdFx0XHRcdHByZWNpc2lvbiA6IHByZWNpc2lvbixcblx0XHRcdFx0XHR0aG91c2FuZCA6IHRob3VzYW5kLFxuXHRcdFx0XHRcdGRlY2ltYWwgOiBkZWNpbWFsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRsaWIuc2V0dGluZ3MubnVtYmVyXG5cdFx0XHQpLFxuXG5cdFx0XHQvLyBDbGVhbiB1cCBwcmVjaXNpb25cblx0XHRcdHVzZVByZWNpc2lvbiA9IGNoZWNrUHJlY2lzaW9uKG9wdHMucHJlY2lzaW9uKSxcblxuXHRcdFx0Ly8gRG8gc29tZSBjYWxjOlxuXHRcdFx0bmVnYXRpdmUgPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiLFxuXHRcdFx0YmFzZSA9IHBhcnNlSW50KHRvRml4ZWQoTWF0aC5hYnMobnVtYmVyIHx8IDApLCB1c2VQcmVjaXNpb24pLCAxMCkgKyBcIlwiLFxuXHRcdFx0bW9kID0gYmFzZS5sZW5ndGggPiAzID8gYmFzZS5sZW5ndGggJSAzIDogMDtcblxuXHRcdC8vIEZvcm1hdCB0aGUgbnVtYmVyOlxuXHRcdHJldHVybiBuZWdhdGl2ZSArIChtb2QgPyBiYXNlLnN1YnN0cigwLCBtb2QpICsgb3B0cy50aG91c2FuZCA6IFwiXCIpICsgYmFzZS5zdWJzdHIobW9kKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgb3B0cy50aG91c2FuZCkgKyAodXNlUHJlY2lzaW9uID8gb3B0cy5kZWNpbWFsICsgdG9GaXhlZChNYXRoLmFicyhudW1iZXIpLCB1c2VQcmVjaXNpb24pLnNwbGl0KCcuJylbMV0gOiBcIlwiKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBGb3JtYXQgYSBudW1iZXIgaW50byBjdXJyZW5jeVxuXHQgKlxuXHQgKiBVc2FnZTogYWNjb3VudGluZy5mb3JtYXRNb25leShudW1iZXIsIHN5bWJvbCwgcHJlY2lzaW9uLCB0aG91c2FuZHNTZXAsIGRlY2ltYWxTZXAsIGZvcm1hdClcblx0ICogZGVmYXVsdHM6ICgwLCBcIiRcIiwgMiwgXCIsXCIsIFwiLlwiLCBcIiVzJXZcIilcblx0ICpcblx0ICogTG9jYWxpc2UgYnkgb3ZlcnJpZGluZyB0aGUgc3ltYm9sLCBwcmVjaXNpb24sIHRob3VzYW5kIC8gZGVjaW1hbCBzZXBhcmF0b3JzIGFuZCBmb3JtYXRcblx0ICogU2Vjb25kIHBhcmFtIGNhbiBiZSBhbiBvYmplY3QgbWF0Y2hpbmcgYHNldHRpbmdzLmN1cnJlbmN5YCB3aGljaCBpcyB0aGUgZWFzaWVzdCB3YXkuXG5cdCAqXG5cdCAqIFRvIGRvOiB0aWR5IHVwIHRoZSBwYXJhbWV0ZXJzXG5cdCAqL1xuXHR2YXIgZm9ybWF0TW9uZXkgPSBsaWIuZm9ybWF0TW9uZXkgPSBmdW5jdGlvbihudW1iZXIsIHN5bWJvbCwgcHJlY2lzaW9uLCB0aG91c2FuZCwgZGVjaW1hbCwgZm9ybWF0KSB7XG5cdFx0Ly8gUmVzdXJzaXZlbHkgZm9ybWF0IGFycmF5czpcblx0XHRpZiAoaXNBcnJheShudW1iZXIpKSB7XG5cdFx0XHRyZXR1cm4gbWFwKG51bWJlciwgZnVuY3Rpb24odmFsKXtcblx0XHRcdFx0cmV0dXJuIGZvcm1hdE1vbmV5KHZhbCwgc3ltYm9sLCBwcmVjaXNpb24sIHRob3VzYW5kLCBkZWNpbWFsLCBmb3JtYXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYW4gdXAgbnVtYmVyOlxuXHRcdG51bWJlciA9IHVuZm9ybWF0KG51bWJlcik7XG5cblx0XHQvLyBCdWlsZCBvcHRpb25zIG9iamVjdCBmcm9tIHNlY29uZCBwYXJhbSAoaWYgb2JqZWN0KSBvciBhbGwgcGFyYW1zLCBleHRlbmRpbmcgZGVmYXVsdHM6XG5cdFx0dmFyIG9wdHMgPSBkZWZhdWx0cyhcblx0XHRcdFx0KGlzT2JqZWN0KHN5bWJvbCkgPyBzeW1ib2wgOiB7XG5cdFx0XHRcdFx0c3ltYm9sIDogc3ltYm9sLFxuXHRcdFx0XHRcdHByZWNpc2lvbiA6IHByZWNpc2lvbixcblx0XHRcdFx0XHR0aG91c2FuZCA6IHRob3VzYW5kLFxuXHRcdFx0XHRcdGRlY2ltYWwgOiBkZWNpbWFsLFxuXHRcdFx0XHRcdGZvcm1hdCA6IGZvcm1hdFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bGliLnNldHRpbmdzLmN1cnJlbmN5XG5cdFx0XHQpLFxuXG5cdFx0XHQvLyBDaGVjayBmb3JtYXQgKHJldHVybnMgb2JqZWN0IHdpdGggcG9zLCBuZWcgYW5kIHplcm8pOlxuXHRcdFx0Zm9ybWF0cyA9IGNoZWNrQ3VycmVuY3lGb3JtYXQob3B0cy5mb3JtYXQpLFxuXG5cdFx0XHQvLyBDaG9vc2Ugd2hpY2ggZm9ybWF0IHRvIHVzZSBmb3IgdGhpcyB2YWx1ZTpcblx0XHRcdHVzZUZvcm1hdCA9IG51bWJlciA+IDAgPyBmb3JtYXRzLnBvcyA6IG51bWJlciA8IDAgPyBmb3JtYXRzLm5lZyA6IGZvcm1hdHMuemVybztcblxuXHRcdC8vIFJldHVybiB3aXRoIGN1cnJlbmN5IHN5bWJvbCBhZGRlZDpcblx0XHRyZXR1cm4gdXNlRm9ybWF0LnJlcGxhY2UoJyVzJywgb3B0cy5zeW1ib2wpLnJlcGxhY2UoJyV2JywgZm9ybWF0TnVtYmVyKE1hdGguYWJzKG51bWJlciksIGNoZWNrUHJlY2lzaW9uKG9wdHMucHJlY2lzaW9uKSwgb3B0cy50aG91c2FuZCwgb3B0cy5kZWNpbWFsKSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogRm9ybWF0IGEgbGlzdCBvZiBudW1iZXJzIGludG8gYW4gYWNjb3VudGluZyBjb2x1bW4sIHBhZGRpbmcgd2l0aCB3aGl0ZXNwYWNlXG5cdCAqIHRvIGxpbmUgdXAgY3VycmVuY3kgc3ltYm9scywgdGhvdXNhbmQgc2VwYXJhdG9ycyBhbmQgZGVjaW1hbHMgcGxhY2VzXG5cdCAqXG5cdCAqIExpc3Qgc2hvdWxkIGJlIGFuIGFycmF5IG9mIG51bWJlcnNcblx0ICogU2Vjb25kIHBhcmFtZXRlciBjYW4gYmUgYW4gb2JqZWN0IGNvbnRhaW5pbmcga2V5cyB0aGF0IG1hdGNoIHRoZSBwYXJhbXNcblx0ICpcblx0ICogUmV0dXJucyBhcnJheSBvZiBhY2NvdXRpbmctZm9ybWF0dGVkIG51bWJlciBzdHJpbmdzIG9mIHNhbWUgbGVuZ3RoXG5cdCAqXG5cdCAqIE5COiBgd2hpdGUtc3BhY2U6cHJlYCBDU1MgcnVsZSBpcyByZXF1aXJlZCBvbiB0aGUgbGlzdCBjb250YWluZXIgdG8gcHJldmVudFxuXHQgKiBicm93c2VycyBmcm9tIGNvbGxhcHNpbmcgdGhlIHdoaXRlc3BhY2UgaW4gdGhlIG91dHB1dCBzdHJpbmdzLlxuXHQgKi9cblx0bGliLmZvcm1hdENvbHVtbiA9IGZ1bmN0aW9uKGxpc3QsIHN5bWJvbCwgcHJlY2lzaW9uLCB0aG91c2FuZCwgZGVjaW1hbCwgZm9ybWF0KSB7XG5cdFx0aWYgKCFsaXN0KSByZXR1cm4gW107XG5cblx0XHQvLyBCdWlsZCBvcHRpb25zIG9iamVjdCBmcm9tIHNlY29uZCBwYXJhbSAoaWYgb2JqZWN0KSBvciBhbGwgcGFyYW1zLCBleHRlbmRpbmcgZGVmYXVsdHM6XG5cdFx0dmFyIG9wdHMgPSBkZWZhdWx0cyhcblx0XHRcdFx0KGlzT2JqZWN0KHN5bWJvbCkgPyBzeW1ib2wgOiB7XG5cdFx0XHRcdFx0c3ltYm9sIDogc3ltYm9sLFxuXHRcdFx0XHRcdHByZWNpc2lvbiA6IHByZWNpc2lvbixcblx0XHRcdFx0XHR0aG91c2FuZCA6IHRob3VzYW5kLFxuXHRcdFx0XHRcdGRlY2ltYWwgOiBkZWNpbWFsLFxuXHRcdFx0XHRcdGZvcm1hdCA6IGZvcm1hdFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bGliLnNldHRpbmdzLmN1cnJlbmN5XG5cdFx0XHQpLFxuXG5cdFx0XHQvLyBDaGVjayBmb3JtYXQgKHJldHVybnMgb2JqZWN0IHdpdGggcG9zLCBuZWcgYW5kIHplcm8pLCBvbmx5IG5lZWQgcG9zIGZvciBub3c6XG5cdFx0XHRmb3JtYXRzID0gY2hlY2tDdXJyZW5jeUZvcm1hdChvcHRzLmZvcm1hdCksXG5cblx0XHRcdC8vIFdoZXRoZXIgdG8gcGFkIGF0IHN0YXJ0IG9mIHN0cmluZyBvciBhZnRlciBjdXJyZW5jeSBzeW1ib2w6XG5cdFx0XHRwYWRBZnRlclN5bWJvbCA9IGZvcm1hdHMucG9zLmluZGV4T2YoXCIlc1wiKSA8IGZvcm1hdHMucG9zLmluZGV4T2YoXCIldlwiKSA/IHRydWUgOiBmYWxzZSxcblxuXHRcdFx0Ly8gU3RvcmUgdmFsdWUgZm9yIHRoZSBsZW5ndGggb2YgdGhlIGxvbmdlc3Qgc3RyaW5nIGluIHRoZSBjb2x1bW46XG5cdFx0XHRtYXhMZW5ndGggPSAwLFxuXG5cdFx0XHQvLyBGb3JtYXQgdGhlIGxpc3QgYWNjb3JkaW5nIHRvIG9wdGlvbnMsIHN0b3JlIHRoZSBsZW5ndGggb2YgdGhlIGxvbmdlc3Qgc3RyaW5nOlxuXHRcdFx0Zm9ybWF0dGVkID0gbWFwKGxpc3QsIGZ1bmN0aW9uKHZhbCwgaSkge1xuXHRcdFx0XHRpZiAoaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzaXZlbHkgZm9ybWF0IGNvbHVtbnMgaWYgbGlzdCBpcyBhIG11bHRpLWRpbWVuc2lvbmFsIGFycmF5OlxuXHRcdFx0XHRcdHJldHVybiBsaWIuZm9ybWF0Q29sdW1uKHZhbCwgb3B0cyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQ2xlYW4gdXAgdGhlIHZhbHVlXG5cdFx0XHRcdFx0dmFsID0gdW5mb3JtYXQodmFsKTtcblxuXHRcdFx0XHRcdC8vIENob29zZSB3aGljaCBmb3JtYXQgdG8gdXNlIGZvciB0aGlzIHZhbHVlIChwb3MsIG5lZyBvciB6ZXJvKTpcblx0XHRcdFx0XHR2YXIgdXNlRm9ybWF0ID0gdmFsID4gMCA/IGZvcm1hdHMucG9zIDogdmFsIDwgMCA/IGZvcm1hdHMubmVnIDogZm9ybWF0cy56ZXJvLFxuXG5cdFx0XHRcdFx0XHQvLyBGb3JtYXQgdGhpcyB2YWx1ZSwgcHVzaCBpbnRvIGZvcm1hdHRlZCBsaXN0IGFuZCBzYXZlIHRoZSBsZW5ndGg6XG5cdFx0XHRcdFx0XHRmVmFsID0gdXNlRm9ybWF0LnJlcGxhY2UoJyVzJywgb3B0cy5zeW1ib2wpLnJlcGxhY2UoJyV2JywgZm9ybWF0TnVtYmVyKE1hdGguYWJzKHZhbCksIGNoZWNrUHJlY2lzaW9uKG9wdHMucHJlY2lzaW9uKSwgb3B0cy50aG91c2FuZCwgb3B0cy5kZWNpbWFsKSk7XG5cblx0XHRcdFx0XHRpZiAoZlZhbC5sZW5ndGggPiBtYXhMZW5ndGgpIG1heExlbmd0aCA9IGZWYWwubGVuZ3RoO1xuXHRcdFx0XHRcdHJldHVybiBmVmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdC8vIFBhZCBlYWNoIG51bWJlciBpbiB0aGUgbGlzdCBhbmQgc2VuZCBiYWNrIHRoZSBjb2x1bW4gb2YgbnVtYmVyczpcblx0XHRyZXR1cm4gbWFwKGZvcm1hdHRlZCwgZnVuY3Rpb24odmFsLCBpKSB7XG5cdFx0XHQvLyBPbmx5IGlmIHRoaXMgaXMgYSBzdHJpbmcgKG5vdCBhIG5lc3RlZCBhcnJheSwgd2hpY2ggd291bGQgaGF2ZSBhbHJlYWR5IGJlZW4gcGFkZGVkKTpcblx0XHRcdGlmIChpc1N0cmluZyh2YWwpICYmIHZhbC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcblx0XHRcdFx0Ly8gRGVwZW5kaW5nIG9uIHN5bWJvbCBwb3NpdGlvbiwgcGFkIGFmdGVyIHN5bWJvbCBvciBhdCBpbmRleCAwOlxuXHRcdFx0XHRyZXR1cm4gcGFkQWZ0ZXJTeW1ib2wgPyB2YWwucmVwbGFjZShvcHRzLnN5bWJvbCwgb3B0cy5zeW1ib2wrKG5ldyBBcnJheShtYXhMZW5ndGggLSB2YWwubGVuZ3RoICsgMSkuam9pbihcIiBcIikpKSA6IChuZXcgQXJyYXkobWF4TGVuZ3RoIC0gdmFsLmxlbmd0aCArIDEpLmpvaW4oXCIgXCIpKSArIHZhbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fSk7XG5cdH07XG5cblxuXHQvKiAtLS0gTW9kdWxlIERlZmluaXRpb24gLS0tICovXG5cblx0Ly8gRXhwb3J0IGFjY291bnRpbmcgZm9yIENvbW1vbkpTLiBJZiBiZWluZyBsb2FkZWQgYXMgYW4gQU1EIG1vZHVsZSwgZGVmaW5lIGl0IGFzIHN1Y2guXG5cdC8vIE90aGVyd2lzZSwganVzdCBhZGQgYGFjY291bnRpbmdgIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5cdGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRcdGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGxpYjtcblx0XHR9XG5cdFx0ZXhwb3J0cy5hY2NvdW50aW5nID0gbGliO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIFJldHVybiB0aGUgbGlicmFyeSBhcyBhbiBBTUQgbW9kdWxlOlxuXHRcdGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbGliO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFVzZSBhY2NvdW50aW5nLm5vQ29uZmxpY3QgdG8gcmVzdG9yZSBgYWNjb3VudGluZ2AgYmFjayB0byBpdHMgb3JpZ2luYWwgdmFsdWUuXG5cdFx0Ly8gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgbGlicmFyeSdzIGBhY2NvdW50aW5nYCBvYmplY3Q7XG5cdFx0Ly8gZS5nLiBgdmFyIG51bWJlcnMgPSBhY2NvdW50aW5nLm5vQ29uZmxpY3QoKTtgXG5cdFx0bGliLm5vQ29uZmxpY3QgPSAoZnVuY3Rpb24ob2xkQWNjb3VudGluZykge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBSZXNldCB0aGUgdmFsdWUgb2YgdGhlIHJvb3QncyBgYWNjb3VudGluZ2AgdmFyaWFibGU6XG5cdFx0XHRcdHJvb3QuYWNjb3VudGluZyA9IG9sZEFjY291bnRpbmc7XG5cdFx0XHRcdC8vIERlbGV0ZSB0aGUgbm9Db25mbGljdCBtZXRob2Q6XG5cdFx0XHRcdGxpYi5ub0NvbmZsaWN0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHQvLyBSZXR1cm4gcmVmZXJlbmNlIHRvIHRoZSBsaWJyYXJ5IHRvIHJlLWFzc2lnbiBpdDpcblx0XHRcdFx0cmV0dXJuIGxpYjtcblx0XHRcdH07XG5cdFx0fSkocm9vdC5hY2NvdW50aW5nKTtcblxuXHRcdC8vIERlY2xhcmUgYGZ4YCBvbiB0aGUgcm9vdCAoZ2xvYmFsL3dpbmRvdykgb2JqZWN0OlxuXHRcdHJvb3RbJ2FjY291bnRpbmcnXSA9IGxpYjtcblx0fVxuXG5cdC8vIFJvb3Qgd2lsbCBiZSBgd2luZG93YCBpbiBicm93c2VyIG9yIGBnbG9iYWxgIG9uIHRoZSBzZXJ2ZXI6XG59KHRoaXMpKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJBRURcIjoge1xuICAgIFwiY29kZVwiOiBcIkFFRFwiLFxuICAgIFwic3ltYm9sXCI6IFwi2K8u2KUu4oCPXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkFGTlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQUZOXCIsXG4gICAgXCJzeW1ib2xcIjogXCLYi1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQUxMXCI6IHtcbiAgICBcImNvZGVcIjogXCJBTExcIixcbiAgICBcInN5bWJvbFwiOiBcIkxla1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkFNRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQU1EXCIsXG4gICAgXCJzeW1ib2xcIjogXCLWj1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQU5HXCI6IHtcbiAgICBcImNvZGVcIjogXCJBTkdcIixcbiAgICBcInN5bWJvbFwiOiBcIsaSXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJBT0FcIjoge1xuICAgIFwiY29kZVwiOiBcIkFPQVwiLFxuICAgIFwic3ltYm9sXCI6IFwiS3pcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkFSU1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiQVJTXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkFVRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQVVEXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJBV0dcIjoge1xuICAgIFwiY29kZVwiOiBcIkFXR1wiLFxuICAgIFwic3ltYm9sXCI6IFwixpJcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkFaTlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQVpOXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigrxcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJCQU1cIjoge1xuICAgIFwiY29kZVwiOiBcIkJBTVwiLFxuICAgIFwic3ltYm9sXCI6IFwi0JrQnFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQkJEXCI6IHtcbiAgICBcImNvZGVcIjogXCJCQkRcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkJEVFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQkRUXCIsXG4gICAgXCJzeW1ib2xcIjogXCLgp7NcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiQkdOXCI6IHtcbiAgICBcImNvZGVcIjogXCJCR05cIixcbiAgICBcInN5bWJvbFwiOiBcItC70LIuXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCLCoFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQkhEXCI6IHtcbiAgICBcImNvZGVcIjogXCJCSERcIixcbiAgICBcInN5bWJvbFwiOiBcItivLtioLuKAj1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDNcbiAgfSxcbiAgXCJCSUZcIjoge1xuICAgIFwiY29kZVwiOiBcIkJJRlwiLFxuICAgIFwic3ltYm9sXCI6IFwiRkJ1XCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiQk1EXCI6IHtcbiAgICBcImNvZGVcIjogXCJCTURcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkJORFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQk5EXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDBcbiAgfSxcbiAgXCJCT0JcIjoge1xuICAgIFwiY29kZVwiOiBcIkJPQlwiLFxuICAgIFwic3ltYm9sXCI6IFwiQnNcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQlJMXCI6IHtcbiAgICBcImNvZGVcIjogXCJCUkxcIixcbiAgICBcInN5bWJvbFwiOiBcIlIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkJTRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQlNEXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJCVENcIjoge1xuICAgIFwiY29kZVwiOiBcIkJUQ1wiLFxuICAgIFwic3ltYm9sXCI6IFwiyYNcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJCVE5cIjoge1xuICAgIFwiY29kZVwiOiBcIkJUTlwiLFxuICAgIFwic3ltYm9sXCI6IFwiTnUuXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMVxuICB9LFxuICBcIkJXUFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQldQXCIsXG4gICAgXCJzeW1ib2xcIjogXCJQXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJCWVJcIjoge1xuICAgIFwiY29kZVwiOiBcIkJZUlwiLFxuICAgIFwic3ltYm9sXCI6IFwi0YAuXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCLCoFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQlpEXCI6IHtcbiAgICBcImNvZGVcIjogXCJCWkRcIixcbiAgICBcInN5bWJvbFwiOiBcIkJaJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQ0FEXCI6IHtcbiAgICBcImNvZGVcIjogXCJDQURcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkNERlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQ0RGXCIsXG4gICAgXCJzeW1ib2xcIjogXCJGQ1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkNIRlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQ0hGXCIsXG4gICAgXCJzeW1ib2xcIjogXCJDSEZcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIidcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkNMUFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQ0xQXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkNOWVwiOiB7XG4gICAgXCJjb2RlXCI6IFwiQ05ZXCIsXG4gICAgXCJzeW1ib2xcIjogXCLCpVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQ09QXCI6IHtcbiAgICBcImNvZGVcIjogXCJDT1BcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQ1JDXCI6IHtcbiAgICBcImNvZGVcIjogXCJDUkNcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCoVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQ1VDXCI6IHtcbiAgICBcImNvZGVcIjogXCJDVUNcIixcbiAgICBcInN5bWJvbFwiOiBcIkNVQ1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQ1VQXCI6IHtcbiAgICBcImNvZGVcIjogXCJDVVBcIixcbiAgICBcInN5bWJvbFwiOiBcIiRNTlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiQ1ZFXCI6IHtcbiAgICBcImNvZGVcIjogXCJDVkVcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkNaS1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiQ1pLXCIsXG4gICAgXCJzeW1ib2xcIjogXCJLxI1cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJESkZcIjoge1xuICAgIFwiY29kZVwiOiBcIkRKRlwiLFxuICAgIFwic3ltYm9sXCI6IFwiRmRqXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiREtLXCI6IHtcbiAgICBcImNvZGVcIjogXCJES0tcIixcbiAgICBcInN5bWJvbFwiOiBcImtyLlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJET1BcIjoge1xuICAgIFwiY29kZVwiOiBcIkRPUFwiLFxuICAgIFwic3ltYm9sXCI6IFwiUkQkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJEWkRcIjoge1xuICAgIFwiY29kZVwiOiBcIkRaRFwiLFxuICAgIFwic3ltYm9sXCI6IFwi2K8u2Kwu4oCPXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkVHUFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiRUdQXCIsXG4gICAgXCJzeW1ib2xcIjogXCLYrC7ZhS7igI9cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiRVJOXCI6IHtcbiAgICBcImNvZGVcIjogXCJFUk5cIixcbiAgICBcInN5bWJvbFwiOiBcIk5ma1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkVUQlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiRVRCXCIsXG4gICAgXCJzeW1ib2xcIjogXCJFVEJcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkVVUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiRVVSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigqxcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJGSkRcIjoge1xuICAgIFwiY29kZVwiOiBcIkZKRFwiLFxuICAgIFwic3ltYm9sXCI6IFwiJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiRktQXCI6IHtcbiAgICBcImNvZGVcIjogXCJGS1BcIixcbiAgICBcInN5bWJvbFwiOiBcIsKjXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJHQlBcIjoge1xuICAgIFwiY29kZVwiOiBcIkdCUFwiLFxuICAgIFwic3ltYm9sXCI6IFwiwqNcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkdFTFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiR0VMXCIsXG4gICAgXCJzeW1ib2xcIjogXCJMYXJpXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCLCoFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiR0hTXCI6IHtcbiAgICBcImNvZGVcIjogXCJHSFNcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCtVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiR0lQXCI6IHtcbiAgICBcImNvZGVcIjogXCJHSVBcIixcbiAgICBcInN5bWJvbFwiOiBcIsKjXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJHTURcIjoge1xuICAgIFwiY29kZVwiOiBcIkdNRFwiLFxuICAgIFwic3ltYm9sXCI6IFwiRFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkdORlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiR05GXCIsXG4gICAgXCJzeW1ib2xcIjogXCJGR1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMFxuICB9LFxuICBcIkdUUVwiOiB7XG4gICAgXCJjb2RlXCI6IFwiR1RRXCIsXG4gICAgXCJzeW1ib2xcIjogXCJRXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJHWURcIjoge1xuICAgIFwiY29kZVwiOiBcIkdZRFwiLFxuICAgIFwic3ltYm9sXCI6IFwiJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiSEtEXCI6IHtcbiAgICBcImNvZGVcIjogXCJIS0RcIixcbiAgICBcInN5bWJvbFwiOiBcIkhLJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiSE5MXCI6IHtcbiAgICBcImNvZGVcIjogXCJITkxcIixcbiAgICBcInN5bWJvbFwiOiBcIkwuXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkhSS1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiSFJLXCIsXG4gICAgXCJzeW1ib2xcIjogXCJrblwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiSFRHXCI6IHtcbiAgICBcImNvZGVcIjogXCJIVEdcIixcbiAgICBcInN5bWJvbFwiOiBcIkdcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkhVRlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiSFVGXCIsXG4gICAgXCJzeW1ib2xcIjogXCJGdFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiwqBcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIklEUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiSURSXCIsXG4gICAgXCJzeW1ib2xcIjogXCJScFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiSUxTXCI6IHtcbiAgICBcImNvZGVcIjogXCJJTFNcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCqlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJJTlJcIjoge1xuICAgIFwiY29kZVwiOiBcIklOUlwiLFxuICAgIFwic3ltYm9sXCI6IFwi4oK5XCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJJUURcIjoge1xuICAgIFwiY29kZVwiOiBcIklRRFwiLFxuICAgIFwic3ltYm9sXCI6IFwi2K8u2Lku4oCPXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIklSUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiSVJSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLvt7xcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIvXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiSVNLXCI6IHtcbiAgICBcImNvZGVcIjogXCJJU0tcIixcbiAgICBcInN5bWJvbFwiOiBcImtyLlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiSk1EXCI6IHtcbiAgICBcImNvZGVcIjogXCJKTURcIixcbiAgICBcInN5bWJvbFwiOiBcIkokXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJKT0RcIjoge1xuICAgIFwiY29kZVwiOiBcIkpPRFwiLFxuICAgIFwic3ltYm9sXCI6IFwi2K8u2Kcu4oCPXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogM1xuICB9LFxuICBcIkpQWVwiOiB7XG4gICAgXCJjb2RlXCI6IFwiSlBZXCIsXG4gICAgXCJzeW1ib2xcIjogXCLCpVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiS0VTXCI6IHtcbiAgICBcImNvZGVcIjogXCJLRVNcIixcbiAgICBcInN5bWJvbFwiOiBcIlNcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIktHU1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiS0dTXCIsXG4gICAgXCJzeW1ib2xcIjogXCLRgdC+0LxcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLVwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJLSFJcIjoge1xuICAgIFwiY29kZVwiOiBcIktIUlwiLFxuICAgIFwic3ltYm9sXCI6IFwi4Z+bXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiS01GXCI6IHtcbiAgICBcImNvZGVcIjogXCJLTUZcIixcbiAgICBcInN5bWJvbFwiOiBcIkNGXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiS1BXXCI6IHtcbiAgICBcImNvZGVcIjogXCJLUFdcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCqVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiS1JXXCI6IHtcbiAgICBcImNvZGVcIjogXCJLUldcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCqVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiS1dEXCI6IHtcbiAgICBcImNvZGVcIjogXCJLV0RcIixcbiAgICBcInN5bWJvbFwiOiBcItivLtmDLuKAj1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDNcbiAgfSxcbiAgXCJLWURcIjoge1xuICAgIFwiY29kZVwiOiBcIktZRFwiLFxuICAgIFwic3ltYm9sXCI6IFwiJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiS1pUXCI6IHtcbiAgICBcImNvZGVcIjogXCJLWlRcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCuFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiwqBcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCItXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkxBS1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiTEFLXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigq1cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDBcbiAgfSxcbiAgXCJMQlBcIjoge1xuICAgIFwiY29kZVwiOiBcIkxCUFwiLFxuICAgIFwic3ltYm9sXCI6IFwi2YQu2YQu4oCPXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkxLUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTEtSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigqhcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiTFJEXCI6IHtcbiAgICBcImNvZGVcIjogXCJMUkRcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIkxTTFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTFNMXCIsXG4gICAgXCJzeW1ib2xcIjogXCJNXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiTFlEXCI6IHtcbiAgICBcImNvZGVcIjogXCJMWURcIixcbiAgICBcInN5bWJvbFwiOiBcItivLtmELuKAj1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAzXG4gIH0sXG4gIFwiTUFEXCI6IHtcbiAgICBcImNvZGVcIjogXCJNQURcIixcbiAgICBcInN5bWJvbFwiOiBcItivLtmFLuKAj1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNRExcIjoge1xuICAgIFwiY29kZVwiOiBcIk1ETFwiLFxuICAgIFwic3ltYm9sXCI6IFwibGVpXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNR0FcIjoge1xuICAgIFwiY29kZVwiOiBcIk1HQVwiLFxuICAgIFwic3ltYm9sXCI6IFwiQXJcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMFxuICB9LFxuICBcIk1LRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTUtEXCIsXG4gICAgXCJzeW1ib2xcIjogXCLQtNC10L0uXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNTUtcIjoge1xuICAgIFwiY29kZVwiOiBcIk1NS1wiLFxuICAgIFwic3ltYm9sXCI6IFwiS1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiTU5UXCI6IHtcbiAgICBcImNvZGVcIjogXCJNTlRcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCrlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiwqBcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk1PUFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTU9QXCIsXG4gICAgXCJzeW1ib2xcIjogXCJNT1AkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNUk9cIjoge1xuICAgIFwiY29kZVwiOiBcIk1ST1wiLFxuICAgIFwic3ltYm9sXCI6IFwiVU1cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNVExcIjoge1xuICAgIFwiY29kZVwiOiBcIk1UTFwiLFxuICAgIFwic3ltYm9sXCI6IFwi4oKkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNVVJcIjoge1xuICAgIFwiY29kZVwiOiBcIk1VUlwiLFxuICAgIFwic3ltYm9sXCI6IFwi4oKoXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNVlJcIjoge1xuICAgIFwiY29kZVwiOiBcIk1WUlwiLFxuICAgIFwic3ltYm9sXCI6IFwiTVZSXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDFcbiAgfSxcbiAgXCJNV0tcIjoge1xuICAgIFwiY29kZVwiOiBcIk1XS1wiLFxuICAgIFwic3ltYm9sXCI6IFwiTUtcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk1YTlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTVhOXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJNWVJcIjoge1xuICAgIFwiY29kZVwiOiBcIk1ZUlwiLFxuICAgIFwic3ltYm9sXCI6IFwiUk1cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk1aTlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTVpOXCIsXG4gICAgXCJzeW1ib2xcIjogXCJNVFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiTkFEXCI6IHtcbiAgICBcImNvZGVcIjogXCJOQURcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk5HTlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTkdOXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigqZcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk5JT1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiTklPXCIsXG4gICAgXCJzeW1ib2xcIjogXCJDJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJOT0tcIjoge1xuICAgIFwiY29kZVwiOiBcIk5PS1wiLFxuICAgIFwic3ltYm9sXCI6IFwia3JcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk5QUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTlBSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigqhcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIk5aRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiTlpEXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJPTVJcIjoge1xuICAgIFwiY29kZVwiOiBcIk9NUlwiLFxuICAgIFwic3ltYm9sXCI6IFwi77e8XCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogM1xuICB9LFxuICBcIlBBQlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiUEFCXCIsXG4gICAgXCJzeW1ib2xcIjogXCJCLy5cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiUEVOXCI6IHtcbiAgICBcImNvZGVcIjogXCJQRU5cIixcbiAgICBcInN5bWJvbFwiOiBcIlMvLlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJQR0tcIjoge1xuICAgIFwiY29kZVwiOiBcIlBHS1wiLFxuICAgIFwic3ltYm9sXCI6IFwiS1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiUEhQXCI6IHtcbiAgICBcImNvZGVcIjogXCJQSFBcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCsVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiUEtSXCI6IHtcbiAgICBcImNvZGVcIjogXCJQS1JcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCqFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiUExOXCI6IHtcbiAgICBcImNvZGVcIjogXCJQTE5cIixcbiAgICBcInN5bWJvbFwiOiBcInrFglwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiwqBcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlBZR1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiUFlHXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigrJcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiUUFSXCI6IHtcbiAgICBcImNvZGVcIjogXCJRQVJcIixcbiAgICBcInN5bWJvbFwiOiBcIu+3vFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJST05cIjoge1xuICAgIFwiY29kZVwiOiBcIlJPTlwiLFxuICAgIFwic3ltYm9sXCI6IFwibGVpXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJSU0RcIjoge1xuICAgIFwiY29kZVwiOiBcIlJTRFwiLFxuICAgIFwic3ltYm9sXCI6IFwi0JTQuNC9LlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiUlVCXCI6IHtcbiAgICBcImNvZGVcIjogXCJSVUJcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCvVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiwqBcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlJXRlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiUldGXCIsXG4gICAgXCJzeW1ib2xcIjogXCJSV0ZcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNBUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiU0FSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLvt7xcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiU0JEXCI6IHtcbiAgICBcImNvZGVcIjogXCJTQkRcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNDUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiU0NSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigqhcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNERFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiU0REXCIsXG4gICAgXCJzeW1ib2xcIjogXCJMU2RcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJTREdcIjoge1xuICAgIFwiY29kZVwiOiBcIlNER1wiLFxuICAgIFwic3ltYm9sXCI6IFwiwqPigI9cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNFS1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiU0VLXCIsXG4gICAgXCJzeW1ib2xcIjogXCJrclwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiU0dEXCI6IHtcbiAgICBcImNvZGVcIjogXCJTR0RcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNIUFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiU0hQXCIsXG4gICAgXCJzeW1ib2xcIjogXCLCo1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiU0xMXCI6IHtcbiAgICBcImNvZGVcIjogXCJTTExcIixcbiAgICBcInN5bWJvbFwiOiBcIkxlXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJTT1NcIjoge1xuICAgIFwiY29kZVwiOiBcIlNPU1wiLFxuICAgIFwic3ltYm9sXCI6IFwiU1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiU1JEXCI6IHtcbiAgICBcImNvZGVcIjogXCJTUkRcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNURFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiU1REXCIsXG4gICAgXCJzeW1ib2xcIjogXCJEYlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiU1ZDXCI6IHtcbiAgICBcImNvZGVcIjogXCJTVkNcIixcbiAgICBcInN5bWJvbFwiOiBcIuKCoVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiU1lQXCI6IHtcbiAgICBcImNvZGVcIjogXCJTWVBcIixcbiAgICBcInN5bWJvbFwiOiBcIsKjXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlNaTFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiU1pMXCIsXG4gICAgXCJzeW1ib2xcIjogXCJFXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJUSEJcIjoge1xuICAgIFwiY29kZVwiOiBcIlRIQlwiLFxuICAgIFwic3ltYm9sXCI6IFwi4Li/XCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJUSlNcIjoge1xuICAgIFwiY29kZVwiOiBcIlRKU1wiLFxuICAgIFwic3ltYm9sXCI6IFwiVEpTXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCLCoFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIjtcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVE1UXCI6IHtcbiAgICBcImNvZGVcIjogXCJUTVRcIixcbiAgICBcInN5bWJvbFwiOiBcIm1cIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAwXG4gIH0sXG4gIFwiVE5EXCI6IHtcbiAgICBcImNvZGVcIjogXCJUTkRcIixcbiAgICBcInN5bWJvbFwiOiBcItivLtiqLuKAj1wiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDNcbiAgfSxcbiAgXCJUT1BcIjoge1xuICAgIFwiY29kZVwiOiBcIlRPUFwiLFxuICAgIFwic3ltYm9sXCI6IFwiVCRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlRSWVwiOiB7XG4gICAgXCJjb2RlXCI6IFwiVFJZXCIsXG4gICAgXCJzeW1ib2xcIjogXCJUTFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVFREXCI6IHtcbiAgICBcImNvZGVcIjogXCJUVERcIixcbiAgICBcInN5bWJvbFwiOiBcIlRUJFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVFZEXCI6IHtcbiAgICBcImNvZGVcIjogXCJUVkRcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlRXRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiVFdEXCIsXG4gICAgXCJzeW1ib2xcIjogXCJOVCRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlRaU1wiOiB7XG4gICAgXCJjb2RlXCI6IFwiVFpTXCIsXG4gICAgXCJzeW1ib2xcIjogXCJUU2hcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlVBSFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiVUFIXCIsXG4gICAgXCJzeW1ib2xcIjogXCLigrRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIsKgXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVUdYXCI6IHtcbiAgICBcImNvZGVcIjogXCJVR1hcIixcbiAgICBcInN5bWJvbFwiOiBcIlVTaFwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVVNEXCI6IHtcbiAgICBcImNvZGVcIjogXCJVU0RcIixcbiAgICBcInN5bWJvbFwiOiBcIiRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlVZVVwiOiB7XG4gICAgXCJjb2RlXCI6IFwiVVlVXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkVVwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJVWlNcIjoge1xuICAgIFwiY29kZVwiOiBcIlVaU1wiLFxuICAgIFwic3ltYm9sXCI6IFwi0YHRntC8XCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCLCoFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVkVCXCI6IHtcbiAgICBcImNvZGVcIjogXCJWRUJcIixcbiAgICBcInN5bWJvbFwiOiBcIkJzLlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiVkVGXCI6IHtcbiAgICBcImNvZGVcIjogXCJWRUZcIixcbiAgICBcInN5bWJvbFwiOiBcIkJzLiBGLlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJWTkRcIjoge1xuICAgIFwiY29kZVwiOiBcIlZORFwiLFxuICAgIFwic3ltYm9sXCI6IFwi4oKrXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IGZhbHNlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IHRydWUsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDFcbiAgfSxcbiAgXCJWVVZcIjoge1xuICAgIFwiY29kZVwiOiBcIlZVVlwiLFxuICAgIFwic3ltYm9sXCI6IFwiVlRcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDBcbiAgfSxcbiAgXCJXU1RcIjoge1xuICAgIFwiY29kZVwiOiBcIldTVFwiLFxuICAgIFwic3ltYm9sXCI6IFwiV1MkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJYQUZcIjoge1xuICAgIFwiY29kZVwiOiBcIlhBRlwiLFxuICAgIFwic3ltYm9sXCI6IFwiRlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIlhDRFwiOiB7XG4gICAgXCJjb2RlXCI6IFwiWENEXCIsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJYT0ZcIjoge1xuICAgIFwiY29kZVwiOiBcIlhPRlwiLFxuICAgIFwic3ltYm9sXCI6IFwiRlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiwqBcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJYUEZcIjoge1xuICAgIFwiY29kZVwiOiBcIlhQRlwiLFxuICAgIFwic3ltYm9sXCI6IFwiRlwiLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiBmYWxzZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcIllFUlwiOiB7XG4gICAgXCJjb2RlXCI6IFwiWUVSXCIsXG4gICAgXCJzeW1ib2xcIjogXCLvt7xcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiWkFSXCI6IHtcbiAgICBcImNvZGVcIjogXCJaQVJcIixcbiAgICBcInN5bWJvbFwiOiBcIlJcIixcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogdHJ1ZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiWk1XXCI6IHtcbiAgICBcImNvZGVcIjogXCJaTVdcIixcbiAgICBcInN5bWJvbFwiOiBcIlpLXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfSxcbiAgXCJXT05cIjoge1xuICAgIFwiY29kZVwiOiBcIldPTlwiLFxuICAgIFwic3ltYm9sXCI6IFwi4oKpXCIsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJkZWNpbWFsRGlnaXRzXCI6IDJcbiAgfVxufSIsInZhciBhY2NvdW50aW5nID0gcmVxdWlyZSgnYWNjb3VudGluZycpXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpXG52YXIgbG9jYWxlQ3VycmVuY3kgPSByZXF1aXJlKCdsb2NhbGUtY3VycmVuY3knKVxudmFyIGN1cnJlbmNpZXMgPSByZXF1aXJlKCcuL2N1cnJlbmNpZXMuanNvbicpXG52YXIgbG9jYWxlRm9ybWF0cyA9IHJlcXVpcmUoJy4vbG9jYWxlRm9ybWF0cy5qc29uJylcblxudmFyIGRlZmF1bHRDdXJyZW5jeSA9IHtcbiAgc3ltYm9sOiAnJyxcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnLCcsXG4gIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgc3ltYm9sT25MZWZ0OiB0cnVlLFxuICBzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2w6IGZhbHNlLFxuICBkZWNpbWFsRGlnaXRzOiAyXG59XG5cbnZhciBkZWZhdWx0TG9jYWxlRm9ybWF0ID0ge31cblxudmFyIGZvcm1hdE1hcHBpbmcgPSBbXG4gIHtcbiAgICBzeW1ib2xPbkxlZnQ6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sOiBmYWxzZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHBvczogJyVzJXYnLFxuICAgICAgbmVnOiAnLSVzJXYnLFxuICAgICAgemVybzogJyVzJXYnXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sT25MZWZ0OiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbDogdHJ1ZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHBvczogJyVzwqAldicsXG4gICAgICBuZWc6ICctJXPCoCV2JyxcbiAgICAgIHplcm86ICclc8KgJXYnXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sT25MZWZ0OiBmYWxzZSxcbiAgICBzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2w6IGZhbHNlLFxuICAgIGZvcm1hdDoge1xuICAgICAgcG9zOiAnJXYlcycsXG4gICAgICBuZWc6ICctJXYlcycsXG4gICAgICB6ZXJvOiAnJXYlcydcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2xPbkxlZnQ6IGZhbHNlLFxuICAgIHNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbDogdHJ1ZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHBvczogJyV2wqAlcycsXG4gICAgICBuZWc6ICctJXbCoCVzJyxcbiAgICAgIHplcm86ICcldsKgJXMnXG4gICAgfVxuICB9XG5dXG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgY29kZSA9IG9wdGlvbnMuY29kZSB8fCAob3B0aW9ucy5sb2NhbGUgJiYgbG9jYWxlQ3VycmVuY3kuZ2V0Q3VycmVuY3kob3B0aW9ucy5sb2NhbGUpKVxuICB2YXIgbG9jYWxlRm9ybWF0ID0gbG9jYWxlRm9ybWF0c1tvcHRpb25zLmxvY2FsZV0gfHwgZGVmYXVsdExvY2FsZUZvcm1hdFxuICB2YXIgY3VycmVuY3kgPSBhc3NpZ24oe30sIGRlZmF1bHRDdXJyZW5jeSwgZmluZEN1cnJlbmN5KGNvZGUpLCBsb2NhbGVGb3JtYXQpXG4gIFxuICB2YXIgc3ltYm9sT25MZWZ0ID0gY3VycmVuY3kuc3ltYm9sT25MZWZ0XG4gIHZhciBzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2wgPSBjdXJyZW5jeS5zcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcblxuICB2YXIgZm9ybWF0ID0gZm9ybWF0TWFwcGluZy5maWx0ZXIoZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmLnN5bWJvbE9uTGVmdCA9PSBzeW1ib2xPbkxlZnQgJiYgZi5zcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2wgPT0gc3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXG4gIH0pWzBdLmZvcm1hdFxuXG4gIHJldHVybiBhY2NvdW50aW5nLmZvcm1hdE1vbmV5KHZhbHVlLCB7XG4gICAgc3ltYm9sOiBpc1VuZGVmaW5lZChvcHRpb25zLnN5bWJvbClcbiAgICAgICAgICAgICAgPyBjdXJyZW5jeS5zeW1ib2xcbiAgICAgICAgICAgICAgOiBvcHRpb25zLnN5bWJvbCxcblxuICAgIGRlY2ltYWw6IGlzVW5kZWZpbmVkKG9wdGlvbnMuZGVjaW1hbClcbiAgICAgICAgICAgICAgPyBjdXJyZW5jeS5kZWNpbWFsU2VwYXJhdG9yXG4gICAgICAgICAgICAgIDogb3B0aW9ucy5kZWNpbWFsLFxuXG4gICAgdGhvdXNhbmQ6IGlzVW5kZWZpbmVkKG9wdGlvbnMudGhvdXNhbmQpXG4gICAgICAgICAgICAgID8gY3VycmVuY3kudGhvdXNhbmRzU2VwYXJhdG9yXG4gICAgICAgICAgICAgIDogb3B0aW9ucy50aG91c2FuZCxcblxuICAgIHByZWNpc2lvbjogdHlwZW9mIG9wdGlvbnMucHJlY2lzaW9uID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICA/IG9wdGlvbnMucHJlY2lzaW9uXG4gICAgICAgICAgICAgIDogY3VycmVuY3kuZGVjaW1hbERpZ2l0cyxcblxuICAgIGZvcm1hdDogWydzdHJpbmcnLCAnb2JqZWN0J10uaW5kZXhPZih0eXBlb2Ygb3B0aW9ucy5mb3JtYXQpID4gLTFcbiAgICAgICAgICAgICAgPyBvcHRpb25zLmZvcm1hdFxuICAgICAgICAgICAgICA6IGZvcm1hdFxuICB9KVxufVxuXG5mdW5jdGlvbiBmaW5kQ3VycmVuY3kgKGN1cnJlbmN5Q29kZSkge1xuICByZXR1cm4gY3VycmVuY2llc1tjdXJyZW5jeUNvZGVdXG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkICh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0Q3VycmVuY3k6IGRlZmF1bHRDdXJyZW5jeSxcbiAgZ2V0IGN1cnJlbmNpZXMoKSB7XG4gICAgLy8gSW4gZmF2b3Igb2YgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoZSBjdXJyZW5jaWVzIG1hcCBpcyBjb252ZXJ0ZWQgdG8gYW4gYXJyYXkgaGVyZVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjdXJyZW5jaWVzKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gY3VycmVuY2llc1trZXldXG4gICAgfSlcbiAgfSxcbiAgZmluZEN1cnJlbmN5OiBmaW5kQ3VycmVuY3ksXG4gIGZvcm1hdDogZm9ybWF0XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcImRlLUFUXCI6IHtcbiAgICBcInRob3VzYW5kc1NlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcImRlY2ltYWxTZXBhcmF0b3JcIjogXCIsXCIsXG4gICAgXCJzeW1ib2xPbkxlZnRcIjogZmFsc2UsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogdHJ1ZSxcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcImVsLUdSXCI6IHtcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwic3BhY2VCZXR3ZWVuQW1vdW50QW5kU3ltYm9sXCI6IGZhbHNlLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcImRlY2ltYWxEaWdpdHNcIjogMlxuICB9LFxuICBcImVuLUlFXCI6IHtcbiAgICBcInN5bWJvbE9uTGVmdFwiOiB0cnVlLFxuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIi5cIixcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiZXMtRVNcIjoge1xuICAgIFwidGhvdXNhbmRzU2VwYXJhdG9yXCI6IFwiLlwiLFxuICAgIFwiZGVjaW1hbFNlcGFyYXRvclwiOiBcIixcIixcbiAgICBcInN5bWJvbE9uTGVmdFwiOiBmYWxzZSxcbiAgICBcInNwYWNlQmV0d2VlbkFtb3VudEFuZFN5bWJvbFwiOiB0cnVlLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwiaXQtSVRcIjoge1xuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwibmwtTkxcIjoge1xuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH0sXG4gIFwibmwtQkVcIjoge1xuICAgIFwic3ltYm9sT25MZWZ0XCI6IHRydWUsXG4gICAgXCJzcGFjZUJldHdlZW5BbW91bnRBbmRTeW1ib2xcIjogZmFsc2UsXG4gICAgXCJ0aG91c2FuZHNTZXBhcmF0b3JcIjogXCIuXCIsXG4gICAgXCJkZWNpbWFsU2VwYXJhdG9yXCI6IFwiLFwiLFxuICAgIFwiZGVjaW1hbERpZ2l0c1wiOiAyXG4gIH1cbn0iLCJ2YXIgbWFwID0gcmVxdWlyZShcIi4vbWFwXCIpO1xuXG52YXIgZ2V0Q291bnRyeUNvZGUgPSBmdW5jdGlvbihsb2NhbGVTdHJpbmcpIHtcbiAgICB2YXIgY29tcG9uZW50cyA9IGxvY2FsZVN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID09IDIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMucG9wKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSBsb2NhbGVTdHJpbmcuc3BsaXQoXCItXCIpO1xuICAgIGlmIChjb21wb25lbnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLnBvcCgpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlU3RyaW5nO1xufVxuXG5leHBvcnRzLmdldEN1cnJlbmN5ID0gZnVuY3Rpb24obG9jYWxlKSB7XG4gICAgdmFyIGNvdW50cnlDb2RlID0gZ2V0Q291bnRyeUNvZGUobG9jYWxlKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChjb3VudHJ5Q29kZSBpbiBtYXApIHtcbiAgICAgICAgcmV0dXJuIG1hcFtjb3VudHJ5Q29kZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnRzLmdldExvY2FsZXMgPSBmdW5jdGlvbihjdXJyZW5jeUNvZGUpIHtcbiAgICBjdXJyZW5jeUNvZGUgPSBjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKTtcbiAgICB2YXIgbG9jYWxlcyA9IFtdO1xuICAgIGZvciAoY291bnRyeUNvZGUgaW4gbWFwKSB7XG4gICAgICAgIGlmIChtYXBbY291bnRyeUNvZGVdID09PSBjdXJyZW5jeUNvZGUpIHtcbiAgICAgICAgICAgIGxvY2FsZXMucHVzaChjb3VudHJ5Q29kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXM7XG59IiwiLy8gR2VuZXJhdGVkIHVzaW5nIFNob3dDdXJyZW5jaWVzLmphdmFcbnZhciBtYXAgPSB7XG5BRDogJ0VVUicsXG5BRTogJ0FFRCcsXG5BRjogJ0FGTicsXG5BRzogJ1hDRCcsXG5BSTogJ1hDRCcsXG5BTDogJ0FMTCcsXG5BTTogJ0FNRCcsXG5BTjogJ0FORycsXG5BTzogJ0FPQScsXG5BUjogJ0FSUycsXG5BUzogJ1VTRCcsXG5BVDogJ0VVUicsXG5BVTogJ0FVRCcsXG5BVzogJ0FXRycsXG5BWDogJ0VVUicsXG5BWjogJ0FaTicsXG5CQTogJ0JBTScsXG5CQjogJ0JCRCcsXG5CRDogJ0JEVCcsXG5CRTogJ0VVUicsXG5CRjogJ1hPRicsXG5CRzogJ0JHTicsXG5CSDogJ0JIRCcsXG5CSTogJ0JJRicsXG5CSjogJ1hPRicsXG5CTDogJ0VVUicsXG5CTTogJ0JNRCcsXG5CTjogJ0JORCcsXG5CTzogJ0JPQicsXG5CUTogJ1VTRCcsXG5CUjogJ0JSTCcsXG5CUzogJ0JTRCcsXG5CVDogJ0JUTicsXG5CVjogJ05PSycsXG5CVzogJ0JXUCcsXG5CWTogJ0JZUicsXG5CWjogJ0JaRCcsXG5DQTogJ0NBRCcsXG5DQzogJ0FVRCcsXG5DRDogJ0NERicsXG5DRjogJ1hBRicsXG5DRzogJ1hBRicsXG5DSDogJ0NIRicsXG5DSTogJ1hPRicsXG5DSzogJ05aRCcsXG5DTDogJ0NMUCcsXG5DTTogJ1hBRicsXG5DTjogJ0NOWScsXG5DTzogJ0NPUCcsXG5DUjogJ0NSQycsXG5DVTogJ0NVUCcsXG5DVjogJ0NWRScsXG5DVzogJ0FORycsXG5DWDogJ0FVRCcsXG5DWTogJ0VVUicsXG5DWjogJ0NaSycsXG5ERTogJ0VVUicsXG5ESjogJ0RKRicsXG5ESzogJ0RLSycsXG5ETTogJ1hDRCcsXG5ETzogJ0RPUCcsXG5EWjogJ0RaRCcsXG5FQzogJ1VTRCcsXG5FRTogJ0VVUicsXG5FRzogJ0VHUCcsXG5FSDogJ01BRCcsXG5FUjogJ0VSTicsXG5FUzogJ0VVUicsXG5FVDogJ0VUQicsXG5GSTogJ0VVUicsXG5GSjogJ0ZKRCcsXG5GSzogJ0ZLUCcsXG5GTTogJ1VTRCcsXG5GTzogJ0RLSycsXG5GUjogJ0VVUicsXG5HQTogJ1hBRicsXG5HQjogJ0dCUCcsXG5HRDogJ1hDRCcsXG5HRTogJ0dFTCcsXG5HRjogJ0VVUicsXG5HRzogJ0dCUCcsXG5HSDogJ0dIUycsXG5HSTogJ0dJUCcsXG5HTDogJ0RLSycsXG5HTTogJ0dNRCcsXG5HTjogJ0dORicsXG5HUDogJ0VVUicsXG5HUTogJ1hBRicsXG5HUjogJ0VVUicsXG5HUzogJ0dCUCcsXG5HVDogJ0dUUScsXG5HVTogJ1VTRCcsXG5HVzogJ1hPRicsXG5HWTogJ0dZRCcsXG5ISzogJ0hLRCcsXG5ITTogJ0FVRCcsXG5ITjogJ0hOTCcsXG5IUjogJ0hSSycsXG5IVDogJ0hURycsXG5IVTogJ0hVRicsXG5JRDogJ0lEUicsXG5JRTogJ0VVUicsXG5JTDogJ0lMUycsXG5JTTogJ0dCUCcsXG5JTjogJ0lOUicsXG5JTzogJ1VTRCcsXG5JUTogJ0lRRCcsXG5JUjogJ0lSUicsXG5JUzogJ0lTSycsXG5JVDogJ0VVUicsXG5KRTogJ0dCUCcsXG5KTTogJ0pNRCcsXG5KTzogJ0pPRCcsXG5KUDogJ0pQWScsXG5LRTogJ0tFUycsXG5LRzogJ0tHUycsXG5LSDogJ0tIUicsXG5LSTogJ0FVRCcsXG5LTTogJ0tNRicsXG5LTjogJ1hDRCcsXG5LUDogJ0tQVycsXG5LUjogJ0tSVycsXG5LVzogJ0tXRCcsXG5LWTogJ0tZRCcsXG5LWjogJ0taVCcsXG5MQTogJ0xBSycsXG5MQjogJ0xCUCcsXG5MQzogJ1hDRCcsXG5MSTogJ0NIRicsXG5MSzogJ0xLUicsXG5MUjogJ0xSRCcsXG5MUzogJ0xTTCcsXG5MVDogJ0xUTCcsXG5MVTogJ0VVUicsXG5MVjogJ0xWTCcsXG5MWTogJ0xZRCcsXG5NQTogJ01BRCcsXG5NQzogJ0VVUicsXG5NRDogJ01ETCcsXG5NRTogJ0VVUicsXG5NRjogJ0VVUicsXG5NRzogJ01HQScsXG5NSDogJ1VTRCcsXG5NSzogJ01LRCcsXG5NTDogJ1hPRicsXG5NTTogJ01NSycsXG5NTjogJ01OVCcsXG5NTzogJ01PUCcsXG5NUDogJ1VTRCcsXG5NUTogJ0VVUicsXG5NUjogJ01STycsXG5NUzogJ1hDRCcsXG5NVDogJ0VVUicsXG5NVTogJ01VUicsXG5NVjogJ01WUicsXG5NVzogJ01XSycsXG5NWDogJ01YTicsXG5NWTogJ01ZUicsXG5NWjogJ01aTicsXG5OQTogJ05BRCcsXG5OQzogJ1hQRicsXG5ORTogJ1hPRicsXG5ORjogJ0FVRCcsXG5ORzogJ05HTicsXG5OSTogJ05JTycsXG5OTDogJ0VVUicsXG5OTzogJ05PSycsXG5OUDogJ05QUicsXG5OUjogJ0FVRCcsXG5OVTogJ05aRCcsXG5OWjogJ05aRCcsXG5PTTogJ09NUicsXG5QQTogJ1BBQicsXG5QRTogJ1BFTicsXG5QRjogJ1hQRicsXG5QRzogJ1BHSycsXG5QSDogJ1BIUCcsXG5QSzogJ1BLUicsXG5QTDogJ1BMTicsXG5QTTogJ0VVUicsXG5QTjogJ05aRCcsXG5QUjogJ1VTRCcsXG5QUzogJ0lMUycsXG5QVDogJ0VVUicsXG5QVzogJ1VTRCcsXG5QWTogJ1BZRycsXG5RQTogJ1FBUicsXG5SRTogJ0VVUicsXG5STzogJ1JPTicsXG5SUzogJ1JTRCcsXG5SVTogJ1JVQicsXG5SVzogJ1JXRicsXG5TQTogJ1NBUicsXG5TQjogJ1NCRCcsXG5TQzogJ1NDUicsXG5TRDogJ1NERycsXG5TRTogJ1NFSycsXG5TRzogJ1NHRCcsXG5TSDogJ1NIUCcsXG5TSTogJ0VVUicsXG5TSjogJ05PSycsXG5TSzogJ0VVUicsXG5TTDogJ1NMTCcsXG5TTTogJ0VVUicsXG5TTjogJ1hPRicsXG5TTzogJ1NPUycsXG5TUjogJ1NSRCcsXG5TVDogJ1NURCcsXG5TVjogJ1NWQycsXG5TWDogJ0FORycsXG5TWTogJ1NZUCcsXG5TWjogJ1NaTCcsXG5UQzogJ1VTRCcsXG5URDogJ1hBRicsXG5URjogJ0VVUicsXG5URzogJ1hPRicsXG5USDogJ1RIQicsXG5USjogJ1RKUycsXG5USzogJ05aRCcsXG5UTDogJ1VTRCcsXG5UTTogJ1RNVCcsXG5UTjogJ1RORCcsXG5UTzogJ1RPUCcsXG5UUjogJ1RSWScsXG5UVDogJ1RURCcsXG5UVjogJ0FVRCcsXG5UVzogJ1RXRCcsXG5UWjogJ1RaUycsXG5VQTogJ1VBSCcsXG5VRzogJ1VHWCcsXG5VTTogJ1VTRCcsXG5VUzogJ1VTRCcsXG5VWTogJ1VZVScsXG5VWjogJ1VaUycsXG5WQTogJ0VVUicsXG5WQzogJ1hDRCcsXG5WRTogJ1ZFRicsXG5WRzogJ1VTRCcsXG5WSTogJ1VTRCcsXG5WTjogJ1ZORCcsXG5WVTogJ1ZVVicsXG5XRjogJ1hQRicsXG5XUzogJ1dTVCcsXG5ZRTogJ1lFUicsXG5ZVDogJ0VVUicsXG5aQTogJ1pBUicsXG5aTTogJ1pNSycsXG5aVzogJ1pXTCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iXX0=
