(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Note: ES6 export default would export the H class in 'default' key so we have to use that
module.exports = require('./lib/H.js').default;

},{"./lib/H.js":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// Utils


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
            var helpers = [_math2.default, _html2.default, _strings2.default, _conditionals2.default, _datetime2.default];

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

},{"./helpers/conditionals":3,"./helpers/datetime":4,"./helpers/html":5,"./helpers/math":6,"./helpers/strings":7,"./util/utils":8}],3:[function(require,module,exports){
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
     * @example
     *      {{ifx true 'Foo' 'Bar'}}    => Foo
     *      {{ifx false 'Foo' 'Bar'}}   => Foo
     *
     * @param condition
     * @param value1
     * @param value2
     * @returns value1 | value2
     */
    ifx: function ifx(condition, value1, value2) {
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

        for (var index in params) {
            if (!params[index]) {
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

        for (var index in params) {
            if (params[index]) {
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

        for (var i in params) {
            if (params[i]) {
                return params[i];
            }
        }

        return params.pop();
    }
};
},{"../util/utils":8}],4:[function(require,module,exports){
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
},{"../util/utils":8}],5:[function(require,module,exports){
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
    }

};
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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

},{"../util/utils":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9odG1sLmpzIiwibGliL2hlbHBlcnMvbWF0aC5qcyIsImxpYi9oZWxwZXJzL3N0cmluZ3MuanMiLCJsaWIvdXRpbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIE5vdGU6IEVTNiBleHBvcnQgZGVmYXVsdCB3b3VsZCBleHBvcnQgdGhlIEggY2xhc3MgaW4gJ2RlZmF1bHQnIGtleSBzbyB3ZSBoYXZlIHRvIHVzZSB0aGF0XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL0guanMnKS5kZWZhdWx0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG4vLyBVdGlsc1xuXG5cbi8vIEhlbHBlcnNcblxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlsL3V0aWxzJyk7XG5cbnZhciBfaHRtbCA9IHJlcXVpcmUoJy4vaGVscGVycy9odG1sJyk7XG5cbnZhciBfaHRtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9odG1sKTtcblxudmFyIF9tYXRoID0gcmVxdWlyZSgnLi9oZWxwZXJzL21hdGgnKTtcblxudmFyIF9tYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGgpO1xuXG52YXIgX3N0cmluZ3MgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3RyaW5ncycpO1xuXG52YXIgX3N0cmluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5ncyk7XG5cbnZhciBfZGF0ZXRpbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvZGF0ZXRpbWUnKTtcblxudmFyIF9kYXRldGltZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRldGltZSk7XG5cbnZhciBfY29uZGl0aW9uYWxzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NvbmRpdGlvbmFscycpO1xuXG52YXIgX2NvbmRpdGlvbmFsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25kaXRpb25hbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEgsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVySGVscGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcnMoaGFuZGxlYmFycykge1xuXG4gICAgICAgICAgICBoYW5kbGViYXJzID0gaGFuZGxlYmFycyB8fCBnbG9iYWwuSGFuZGxlYmFycztcblxuICAgICAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqZWN0KShoYW5kbGViYXJzKSkge1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UsIGhhbmRsZWJhcnMgaXMgbm90IHByb3ZpZGVkIGFuZCBpdCdzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZSBhcyB3ZWxsIHRocm93IHRoZSBlcnJvciBhbmQgaGFsdC5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIZWxwZXJzIGxpc3RcbiAgICAgICAgICAgIHZhciBoZWxwZXJzID0gW19tYXRoMi5kZWZhdWx0LCBfaHRtbDIuZGVmYXVsdCwgX3N0cmluZ3MyLmRlZmF1bHQsIF9jb25kaXRpb25hbHMyLmRlZmF1bHQsIF9kYXRldGltZTIuZGVmYXVsdF07XG5cbiAgICAgICAgICAgIGhlbHBlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHRvIEhhbmRsZWJhcnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlbHBlcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcltuYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2VxICczJyAzfX0gICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGVxOiBmdW5jdGlvbiBlcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT0pIGkuZSB3ZWFrIGNoZWNraW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2VxdyAnMycgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZXF3OiBmdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA9PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bmVxIDQgM319ICAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG5lcTogZnVuY3Rpb24gbmVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgIT09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT0pIHdlYWsgY2hlY2tpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bmVxdyAnMycgM319ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBuZXF3OiBmdW5jdGlvbiBuZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgIT0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgbGVzcyB0aGFuIGNvbmRpdGlvbiAoYSA8IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbHQ6IGZ1bmN0aW9uIGx0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPCB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBsZXNzIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBsdGU6IGZ1bmN0aW9uIGx0ZSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxIDw9IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBjb25kaXRpb24gKGEgPiBiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBndDogZnVuY3Rpb24gZ3QodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA+IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2d0ZSAzIDN9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGd0ZTogZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPj0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gICAgICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyB2YWx1ZTEgfCB2YWx1ZTJcbiAgICAgKi9cbiAgICBpZng6IGZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiAhIWNvbmRpdGlvbiA/IHZhbHVlMSA6IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9naWNhbCBOT1Qgb2YgYW55IGV4cHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bm90IHRydWV9fSAgICA9PiBmYWxzZVxuICAgICAqICAgICAge3tub3QgZmFsc2V9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG5vdDogZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICFleHByZXNzaW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFycmF5XG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGVtcHR5OiBmdW5jdGlvbiBlbXB0eShhcnJheSkge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheS5sZW5ndGggPT09IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGFuIGFycmF5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NvdW50IGFycmF5fX0gPT4gIGZhbHNlIHwgYXJyYXkubGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIHwgbnVtYmVyXG4gICAgICovXG4gICAgY291bnQ6IGZ1bmN0aW9uIGNvdW50KGFycmF5KSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvb2xlYW4gQU5EIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICAgICAqIGl0IGlzIHRydWUgaWZmIGFsbCB0aGUgcGFyYW1ldGVycyBhcmUgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSB2YWx1ZTIgPSB0cnVlO1xuICAgICAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSBmYWxzZSwgdmFsdWUyID0gdHJ1ZTtcbiAgICAgKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGFuZDogZnVuY3Rpb24gYW5kKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCFwYXJhbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvb2xlYW4gT1Igb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gICAgICogaXQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIHBhcmFtZXRlcnMgaXMgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSB0cnVlLCB2YWx1ZTIgPSBmYWxzZTtcbiAgICAgKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogICAgIHZhciB2YWx1ZSA9IHZhbHVlMiA9IGZhbHNlO1xuICAgICAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBvcjogZnVuY3Rpb24gb3IoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IG5vbi1mYWxzeSB2YWx1ZSBmcm9tIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgKiBXb3JrcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBTUUwncyBDT0FMRVNDRSgpIGZ1bmN0aW9uLCBidXQgdW5saWtlIHRoaXNcbiAgICAgKiBjaGVja3MgZm9yIHRoZSBmaXJzdCBub24tZmFsc2UgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIGZ1bGxOYW1lID0gJ0ZvbyBCYXInLCBuaWNrTmFtZSA9ICdmb29iJztcbiAgICAgKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnRm9vIEJhcidcbiAgICAgKlxuICAgICAqICAgICB2YXIgZnVsbE5hbWUgPSAnJywgbmlja05hbWUgPSAnZm9vYic7XG4gICAgICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ2Zvb2InXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgbWl4ZWRcbiAgICAgKi9cbiAgICBjb2FsZXNjZTogZnVuY3Rpb24gY29hbGVzY2UoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLnBvcCgpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICAgIC8qKlxuICAgICAqIEEgZm9ybWF0RGF0ZSBoZWxwZXIgdG8gZm9ybWF0IGRhdGUgdXNpbmcgbW9tZW50IGpzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Zm9ybWF0RGF0ZSAnTU0vREQvWVlZWScgZGF0ZX19XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbiBmb3JtYXREYXRlKGZvcm1hdFN0cmluZywgZGF0ZSkge1xuXG4gICAgICAgIHZhciBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG5cbiAgICAgICAgaWYgKCFtb21lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9tZW50IEpTIGlzIHJlcXVpcmVkIGZvciB0aGlzIGhlbHBlci4gTWFrZSBzdXJlIHlvdSBoYXZlIGxvYWRlZCBtb21lbnQganMgaHR0cDovL21vbWVudGpzLmNvbS8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdFN0cmluZyA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUgfHwgbmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdFN0cmluZyk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzaG93SWYgdHJ1ZX19ICAgICA9PiAnJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzaG93SWY6IGZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnJyA6ICdoaWRkZW4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2hpZGVJZiB0cnVlfX0gICAgID0+ICdoaWRkZW4nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGhpZGVJZjogZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzZWxlY3RlZElmOiBmdW5jdGlvbiBzZWxlY3RlZElmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBjaGVja2VkSWYgaGVscGVyIGZvciBjaGVja2JveGVzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NoZWNrZWRJZiB0cnVlfX0gID0+ICdjaGVja2VkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjaGVja2VkSWY6IGZ1bmN0aW9uIGNoZWNrZWRJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbiAgICB9XG5cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIHN1bSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIHN1bSBvZiB0d28gbnVtYmVycy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzdW0gMSAyfX0gICAgID0+IDNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgc3VtOiBmdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZTEpICsgTnVtYmVyKHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgZGlmZmVyZW5jZSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIG51bWJlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZGlmZmVyZW5jZSA1IDJ9fSAgPT4gM1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUxKSAtIE51bWJlcih2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNlaWwgaGVscGVyIHRvIGZpbmQgdGhlIGNlaWwgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjZWlsIDUuNn19ICAgID0+IDZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIGNlaWw6IGZ1bmN0aW9uIGNlaWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChOdW1iZXIodmFsdWUpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBmbG9vcjogZnVuY3Rpb24gZmxvb3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBleGNlcnB0OiBmdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2FuaXRpemU6IGZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBcXG4gd2l0aCA8YnI+IHRhZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAge3tuZXdMaW5lVG9CciAnbmV3TGluZVRvQnIgaGVscGVyIFxcbiBpcyB2ZXJ5IFxcbiB1c2VmdWwuJ319ICAgID0+IG5ld0xpbmVUb0JyIGhlbHBlciA8YnI+IGlzIHZlcnkgPGJyPiB1c2VmdWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIG5ld0xpbmVUb0JyOiBmdW5jdGlvbiBuZXdMaW5lVG9CcihzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnPGJyPicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIGVhY2ggbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRWFjaDogZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2goc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IHdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3Q6IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBzcHJpbnRmIGhlbHBlciB0byBiZSB1c2VkIGluIHRoZSBoYW5kbGViYXJzIHRlbXBsYXRlcyB0aGF0IHN1cHBvcnRzIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogTk9URTogVGhpcyBoZWxwZXIgcmVsaWVzIG9uIHNwcmludGYoKSBmdW5jdGlvbiBwcm92aWRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanNcbiAgICAgKiBTbywgbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBzcHJpbnRmLWpzIHBhY2thZ2UgYXZhaWxhYmxlIGVpdGhlciBhcyBhIG5vZGUgbW9kdWxlXG4gICAgICogb3IgaGF2ZSBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9ucyBhdmFpbGFibGUgaW4gdGhlIGdsb2JhbCBzY29wZSBmcm9tIHRoYXQgcGFja2FnZS5cbiAgICAgKlxuICAgICAqIFN5bnRheDpcbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgYXJnMSBhcmcyIGFyZzMuLi4ufX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgb2JqZWN0fX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQga2V5MT12YWx1ZTEga2V5Mj12YWx1ZTIuLi59fVxuICAgICAqXG4gICAgICogIEBleGFtcGxlXG4gICAgICogICAgICB7e3NwcmludGYgJyVzICVzIScgJ0hlbGxvJyAnS2FiaXInIH19XG4gICAgICogICAgICB7e3NwcmludGYgJyVzICVzICVkICVzICVkJyAnRm9vJyAnQmFyJyA1NSAnQmF6JyAnMjAnfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISBIb3cgYXJlIHlvdT8nIG9iaiB9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhICcgZ3JlZXRpbmc9J0hlbGxvJyBuYW1lPSdLYWJpcid9fVxuICAgICAqXG4gICAgICogQ2hlY2sgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNwcmludGY6IGZ1bmN0aW9uIHNwcmludGYoZm9ybWF0KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdnNwcmludGYgZnVuY3Rpb24gaXMgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSB0aGVuIHRyeSB0byByZXF1aXJlKCkgaXRcbiAgICAgICAgdmFyIF92c3ByaW50ZiA9IGdsb2JhbC52c3ByaW50ZjtcblxuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNGdW5jdGlvbikoX3ZzcHJpbnRmKSkge1xuICAgICAgICAgICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgICAgICAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5oYXNoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJhbXMucHVzaChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDAgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAge3tsb3dlcmNhc2UgJ0pVU1QgV09XISEhJ319ICAgPT4gJ2p1c3Qgd293ISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gbG93ZXJjYXNlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b0xvd2VyQ2FzZSgpIDogcGFyYW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgdXBwZXJjYXNlOiBmdW5jdGlvbiB1cHBlcmNhc2UocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvVXBwZXJDYXNlKCkgOiBwYXJhbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICAgIHt7Zmlyc3Qgc29tZUFycmF5fX0gICA9PiAnRGF2aWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bMF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICAgIHt7bGFzdCBzb21lQXJyYXl9fSAgID0+ICdKb25lcydcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgbGFzdDogZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bY29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e2NvbmNhdCAnSGVsbG8nICcgd29ybGQnICchISEnfX0gICA9PiAnSGVsbG8gd29ybGQhISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIG1peGVkIC4uLnBhcmFtc1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gICAgICogICAge3tqb2luIHNvbWVBcnJheSAnICYgJ319ICAgPT4gJ0hhbmRzICYgbGVncyAmIGZlZXQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IHBhcmFtc1xuICAgICAqIEBwYXJhbSAgc3RyaW5nIGRlbGltZXRlclxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihwYXJhbXMsIGRlbGltZXRlcikge1xuICAgICAgICBpZiAoIWRlbGltZXRlciB8fCAoMCwgX3V0aWxzLmlzT2JqZWN0KShkZWxpbWV0ZXIpKSB7XG4gICAgICAgICAgICBkZWxpbWV0ZXIgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShwYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oZGVsaW1ldGVyKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNEZWZpbmVkID0gaXNEZWZpbmVkO1xuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZzsiXX0=
