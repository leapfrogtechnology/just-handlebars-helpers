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
        var strict = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9odG1sLmpzIiwibGliL2hlbHBlcnMvbWF0aC5qcyIsImxpYi9oZWxwZXJzL3N0cmluZ3MuanMiLCJsaWIvdXRpbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuLy8gVXRpbHNcblxuXG4vLyBIZWxwZXJzXG5cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbC91dGlscycpO1xuXG52YXIgX2h0bWwgPSByZXF1aXJlKCcuL2hlbHBlcnMvaHRtbCcpO1xuXG52YXIgX2h0bWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHRtbCk7XG5cbnZhciBfbWF0aCA9IHJlcXVpcmUoJy4vaGVscGVycy9tYXRoJyk7XG5cbnZhciBfbWF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRoKTtcblxudmFyIF9zdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0cmluZ3MnKTtcblxudmFyIF9zdHJpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ3MpO1xuXG52YXIgX2RhdGV0aW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL2RhdGV0aW1lJyk7XG5cbnZhciBfZGF0ZXRpbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZXRpbWUpO1xuXG52YXIgX2NvbmRpdGlvbmFscyA9IHJlcXVpcmUoJy4vaGVscGVycy9jb25kaXRpb25hbHMnKTtcblxudmFyIF9jb25kaXRpb25hbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZGl0aW9uYWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhILCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdyZWdpc3RlckhlbHBlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXJzKGhhbmRsZWJhcnMpIHtcblxuICAgICAgICAgICAgaGFuZGxlYmFycyA9IGhhbmRsZWJhcnMgfHwgZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgICAgICAgICAgIGlmICghKDAsIF91dGlscy5pc09iamVjdCkoaGFuZGxlYmFycykpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGdsb2JhbCBuYW1lc3BhY2UgYXMgd2VsbCB0aHJvdyB0aGUgZXJyb3IgYW5kIGhhbHQuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGViYXJzIG5vdCBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGVscGVycyBsaXN0XG4gICAgICAgICAgICB2YXIgaGVscGVycyA9IFtfbWF0aDIuZGVmYXVsdCwgX2h0bWwyLmRlZmF1bHQsIF9zdHJpbmdzMi5kZWZhdWx0LCBfY29uZGl0aW9uYWxzMi5kZWZhdWx0LCBfZGF0ZXRpbWUyLmRlZmF1bHRdO1xuXG4gICAgICAgICAgICBoZWxwZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcikge1xuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGFsbCB0aGUgaGVscGVyIGZ1bmN0aW9ucyB0byBIYW5kbGViYXJzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEg7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09PSkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZXE6IGZ1bmN0aW9uIGVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBlcXc6IGZ1bmN0aW9uIGVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT09KS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tuZXEgNCAzfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbmVxOiBmdW5jdGlvbiBuZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSAhPT0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPSkgd2VhayBjaGVja2luZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tuZXF3ICczJyAzfX0gICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG5lcXc6IGZ1bmN0aW9uIG5lcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSAhPSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBsdDogZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA8IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2x0ZSAyIDN9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGx0ZTogZnVuY3Rpb24gbHRlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPD0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIGNvbmRpdGlvbiAoYSA+IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2d0IDIgM319ICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGd0OiBmdW5jdGlvbiBndCh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID4gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFscyBjb25kaXRpb24gKGEgPj0gYikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZ3RlOiBmdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA+PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciB0byBpbWl0YXRlIHRoZSB0ZXJuYXJ5IGNvbmRpdGlvbmFsIG9wZXJhdG9yID86XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICAgICAqICAgICAge3tpZnggZmFsc2UgJ0ZvbycgJ0Jhcid9fSAgID0+IEZvb1xuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmRpdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZTEgICAgVmFsdWUgdG8gcmV0dXJuIHdoZW4gdGhlIGNvbmRpdGlvbiBob2xkcyB0cnVlXG4gICAgICogQHBhcmFtIHZhbHVlMiAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlIChPcHRpb25hbClcbiAgICAgKiBAcmV0dXJucyBtaXhlZFxuICAgICAqL1xuICAgIGlmeDogZnVuY3Rpb24gaWZ4KGNvbmRpdGlvbiwgdmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgb21pdHRlZCB0aGUgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgLy8gaWYgdGhhdCdzIHRoZSBjYXNlLCBpdCB3b3VsZCBiZSB0aGUgaGFuZGxlYmFycydzIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgIC8vIHdoaWNoIGl0IHNlbmRzIGFsd2F5cyBhcyB0aGUgbGFzdCBwYXJhbWV0ZXIuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KSh2YWx1ZTIpICYmIHZhbHVlMi5uYW1lID09PSAnaWZ4JyAmJiB2YWx1ZTIuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBtZWFucyB0aGUgdXNlciBoYXMgc2tpcHBlZCB0aGUgbGFzdCBwYXJhbWV0ZXIsXG4gICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyAoJycpIGluIHRoZSBlbHNlIGNhc2UgaW5zdGVhZC5cbiAgICAgICAgICAgIHZhbHVlMiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dpY2FsIE5PVCBvZiBhbnkgZXhwcmVzc2lvbi5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gICAgICogICAgICB7e25vdCBmYWxzZX19ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbm90OiBmdW5jdGlvbiBub3QoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gIWV4cHJlc3Npb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2VtcHR5IGFycmF5fX0gPT4gdHJ1ZSB8IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA9PT0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcnJheVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAgICAgKi9cbiAgICBjb3VudDogZnVuY3Rpb24gY291bnQoYXJyYXkpIHtcbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYm9vbGVhbiBBTkQgb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gICAgICogaXQgaXMgdHJ1ZSBpZmYgYWxsIHRoZSBwYXJhbWV0ZXJzIGFyZSB0cnVlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IHZhbHVlMiA9IHRydWU7XG4gICAgICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IGZhbHNlLCB2YWx1ZTIgPSB0cnVlO1xuICAgICAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgYW5kOiBmdW5jdGlvbiBhbmQoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghcGFyYW1zW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvb2xlYW4gT1Igb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gICAgICogaXQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIHBhcmFtZXRlcnMgaXMgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSB0cnVlLCB2YWx1ZTIgPSBmYWxzZTtcbiAgICAgKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogICAgIHZhciB2YWx1ZSA9IHZhbHVlMiA9IGZhbHNlO1xuICAgICAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBvcjogZnVuY3Rpb24gb3IoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBub24tZmFsc3kgdmFsdWUgZnJvbSB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gICAgICogV29ya3MgcXVpdGUgc2ltaWxhciB0byB0aGUgU1FMJ3MgQ09BTEVTQ0UoKSBmdW5jdGlvbiwgYnV0IHVubGlrZSB0aGlzXG4gICAgICogY2hlY2tzIGZvciB0aGUgZmlyc3Qgbm9uLWZhbHNlIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciBmdWxsTmFtZSA9ICdGb28gQmFyJywgbmlja05hbWUgPSAnZm9vYic7XG4gICAgICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ0ZvbyBCYXInXG4gICAgICpcbiAgICAgKiAgICAgdmFyIGZ1bGxOYW1lID0gJycsIG5pY2tOYW1lID0gJ2Zvb2InO1xuICAgICAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdmb29iJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEByZXR1cm5zIG1peGVkXG4gICAgICovXG4gICAgY29hbGVzY2U6IGZ1bmN0aW9uIGNvYWxlc2NlKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgICAgICBwYXJhbXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5wb3AoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBib29sZWFuIGlmIHRoZSBhcnJheSBjb250YWlucyB0aGUgZWxlbWVudCBzdHJpY3RseSBvciBub24tc3RyaWN0bHkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIGFycmF5ID0gWzEsIDIsIDMsIDRdO1xuICAgICAqICAgICB2YXIgdmFsdWUxID0gMiwgdmFsdWUyID0gMTAsIHZhbHVlMyA9ICczJztcbiAgICAgKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTF9fSAgICAgICAgPT4gdHJ1ZVxuICAgICAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMn19ICAgICAgICA9PiBmYWxzZVxuICAgICAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlM319ICAgICAgICA9PiBmYWxzZVxuICAgICAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMyBmYWxzZX19ICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFycmF5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHN0cmljdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSB8fCBhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgYXJyYXlbaV0gPT09IHZhbHVlIHx8ICFzdHJpY3QgJiYgYXJyYXlbaV0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICogQSBmb3JtYXREYXRlIGhlbHBlciB0byBmb3JtYXQgZGF0ZSB1c2luZyBtb21lbnQganMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tmb3JtYXREYXRlICdNTS9ERC9ZWVlZJyBkYXRlfX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRTdHJpbmcgYmFzZWQgb24gbW9tZW50LmpzXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGZvcm1hdERhdGU6IGZ1bmN0aW9uIGZvcm1hdERhdGUoZm9ybWF0U3RyaW5nLCBkYXRlKSB7XG5cbiAgICAgICAgdmFyIG1vbWVudCA9ICh3aW5kb3cubW9tZW50KTtcblxuICAgICAgICBpZiAoIW1vbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb21lbnQgSlMgaXMgcmVxdWlyZWQgZm9yIHRoaXMgaGVscGVyLiBNYWtlIHN1cmUgeW91IGhhdmUgbG9hZGVkIG1vbWVudCBqcyBodHRwOi8vbW9tZW50anMuY29tLycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0U3RyaW5nID0gKDAsIF91dGlscy5pc1N0cmluZykoZm9ybWF0U3RyaW5nKSA/IGZvcm1hdFN0cmluZyA6ICcnO1xuXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSB8fCBuZXcgRGF0ZSgpKS5mb3JtYXQoZm9ybWF0U3RyaW5nKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e3Nob3dJZiB0cnVlfX0gICAgID0+ICcnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNob3dJZjogZnVuY3Rpb24gc2hvd0lmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICcnIDogJ2hpZGRlbic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgaGlkZUlmIGhlbHBlciBmb3IgaGlkaW5nIGFueSBodG1sIGVsZW1lbnQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7aGlkZUlmIHRydWV9fSAgICAgPT4gJ2hpZGRlbidcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgaGlkZUlmOiBmdW5jdGlvbiBoaWRlSWYoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ2hpZGRlbicgOiAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd24gYW5kIHJhZGlvIGJveGVzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e3NlbGVjdGVkSWYgdHJ1ZX19ID0+ICAnc2VsZWN0ZWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNlbGVjdGVkSWY6IGZ1bmN0aW9uIHNlbGVjdGVkSWYoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGNoZWNrZWRJZjogZnVuY3Rpb24gY2hlY2tlZElmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25zIGhlbHBlciBmb3IgZ2VuZXJhdGluZyA8b3B0aW9uPiBsaXN0IGZvciA8c2VsZWN0PiBkcm9wZG93bnMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIEEgc2ltcGxlIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgIGxldCBkYXRhID0gW1xuICAgICAqICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vJ1xuICAgICAqICAgICAgICAgIH0sXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICBpZDogMixcbiAgICAgKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXInXG4gICAgICogICAgICAgICAgfSxcbiAgICAgKiAgICAgICAgICB7XG4gICAgICogICAgICAgICAgICAgIGlkOiAzLFxuICAgICAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbyBCYXInXG4gICAgICogICAgICAgICAgfVxuICAgICAqICAgICAgXTtcbiAgICAgKlxuICAgICAqICAgICAge3t7b3B0aW9ucyBkYXRhIHNlbGVjdGVkPVwiMlwifX19XG4gICAgICpcbiAgICAgKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkZvbzwvb3B0aW9uPlxuICAgICAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD5CYXI8L29wdGlvbj5cbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Rm9vIEJhcjwvb3B0aW9uPlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBZb3UgY2FuIGFsc28gb3ZlcnJpZGUgdGhlIGRlZmF1bHQga2V5IG5hbWVzIGZvciAnaWQnICYgJ2Rlc2NyaXB0aW9uJ1xuICAgICAqIHVzaW5nIHRoZSAnaWQnICYgJ3RleHQnIG9wdGlvbnMgaW4gdGhlIGhlbHBlci5cbiAgICAgKlxuICAgICAqICAgICAgbGV0IGRhdGEgPSBbXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgKiAgICAgICAgICAgICAgdGV4dDogJ05ldyBZb3JrJ1xuICAgICAqICAgICAgICAgIH0sXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgKiAgICAgICAgICAgICAgdGV4dDogJ0xvbmRvbidcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICBdO1xuICAgICAqXG4gICAgICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIxXCIgaWQ9XCJ2YWx1ZVwiIHRleHQ9XCJ0ZXh0XCJ9fX1cbiAgICAgKlxuICAgICAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgc2VsZWN0ZWQ+TmV3IFlvcms8L29wdGlvbj5cbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TG9uZG9uPC9vcHRpb24+XG4gICAgICpcbiAgICAgKi9cbiAgICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKGRhdGEsIG9wdHMpIHtcbiAgICAgICAgLy8gVGhlIGlkICYgdGV4dCBmb3IgdGhlIDxvcHRpb24+XG4gICAgICAgIHZhciBpZCA9IG9wdHMuaGFzaC5pZCB8fCAnaWQnO1xuICAgICAgICB2YXIgdGV4dCA9IG9wdHMuaGFzaC50ZXh0IHx8ICdkZXNjcmlwdGlvbic7XG5cbiAgICAgICAgLy8gVGhlIHNlbGVjdGlvbiBcImlkXCIgb2YgdGhlIDxvcHRpb24+XG4gICAgICAgIHZhciBzZWxlY3RlZElkID0gb3B0cy5oYXNoLnNlbGVjdGVkIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtW2lkXSB8fCAnJztcbiAgICAgICAgICAgIHZhciBpbm5lclRleHQgPSBpdGVtW3RleHRdIHx8ICcnO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdmFsdWUgPT0gc2VsZWN0ZWRJZCA/ICcgc2VsZWN0ZWQnIDogJyc7XG5cbiAgICAgICAgICAgIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZSArICdcIicgKyBzZWxlY3RlZCArICc+JyArIGlubmVyVGV4dCArICc8L29wdGlvbj4nO1xuICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICogQSBzdW0gaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBzdW0gb2YgdHdvIG51bWJlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c3VtIDEgMn19ICAgICA9PiAzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIHN1bTogZnVuY3Rpb24gc3VtKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUxKSArIE51bWJlcih2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGRpZmZlcmVuY2UgaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlIG9mIHR3byBudW1iZXJzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2RpZmZlcmVuY2UgNSAyfX0gID0+IDNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgZGlmZmVyZW5jZTogZnVuY3Rpb24gZGlmZmVyZW5jZSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgLSBOdW1iZXIodmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBjZWlsIGhlbHBlciB0byBmaW5kIHRoZSBjZWlsIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2VpbCA1LjZ9fSAgICA9PiA2XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBjZWlsOiBmdW5jdGlvbiBjZWlsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoTnVtYmVyKHZhbHVlKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgZmxvb3IgaGVscGVyIHRvIGZpbmQgdGhlIGZsb29yIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Zmxvb3IgNS42fX0gPT4gNVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgZmxvb3I6IGZ1bmN0aW9uIGZsb29yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBleGNlcnB0OiBmdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2FuaXRpemU6IGZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBcXG4gd2l0aCA8YnI+IHRhZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAge3tuZXdMaW5lVG9CciAnbmV3TGluZVRvQnIgaGVscGVyIFxcbiBpcyB2ZXJ5IFxcbiB1c2VmdWwuJ319ICAgID0+IG5ld0xpbmVUb0JyIGhlbHBlciA8YnI+IGlzIHZlcnkgPGJyPiB1c2VmdWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIG5ld0xpbmVUb0JyOiBmdW5jdGlvbiBuZXdMaW5lVG9CcihzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnPGJyPicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIGVhY2ggbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRWFjaDogZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2goc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IHdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3Q6IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBzcHJpbnRmIGhlbHBlciB0byBiZSB1c2VkIGluIHRoZSBoYW5kbGViYXJzIHRlbXBsYXRlcyB0aGF0IHN1cHBvcnRzIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogTk9URTogVGhpcyBoZWxwZXIgcmVsaWVzIG9uIHNwcmludGYoKSBmdW5jdGlvbiBwcm92aWRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanNcbiAgICAgKiBTbywgbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBzcHJpbnRmLWpzIHBhY2thZ2UgYXZhaWxhYmxlIGVpdGhlciBhcyBhIG5vZGUgbW9kdWxlXG4gICAgICogb3IgaGF2ZSBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9ucyBhdmFpbGFibGUgaW4gdGhlIGdsb2JhbCBzY29wZSBmcm9tIHRoYXQgcGFja2FnZS5cbiAgICAgKlxuICAgICAqIFN5bnRheDpcbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgYXJnMSBhcmcyIGFyZzMuLi4ufX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQgb2JqZWN0fX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQga2V5MT12YWx1ZTEga2V5Mj12YWx1ZTIuLi59fVxuICAgICAqXG4gICAgICogIEBleGFtcGxlXG4gICAgICogICAgICB7e3NwcmludGYgJyVzICVzIScgJ0hlbGxvJyAnS2FiaXInIH19XG4gICAgICogICAgICB7e3NwcmludGYgJyVzICVzICVkICVzICVkJyAnRm9vJyAnQmFyJyA1NSAnQmF6JyAnMjAnfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISBIb3cgYXJlIHlvdT8nIG9iaiB9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhICcgZ3JlZXRpbmc9J0hlbGxvJyBuYW1lPSdLYWJpcid9fVxuICAgICAqXG4gICAgICogQ2hlY2sgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNwcmludGY6IGZ1bmN0aW9uIHNwcmludGYoZm9ybWF0KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdnNwcmludGYgZnVuY3Rpb24gaXMgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSB0aGVuIHRyeSB0byByZXF1aXJlKCkgaXRcbiAgICAgICAgdmFyIF92c3ByaW50ZiA9IGdsb2JhbC52c3ByaW50ZjtcblxuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNGdW5jdGlvbikoX3ZzcHJpbnRmKSkge1xuICAgICAgICAgICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgICAgICAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcpICYmICgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZy5oYXNoKSkge1xuICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5oYXNoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJhbXMucHVzaChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDAgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAge3tsb3dlcmNhc2UgJ0pVU1QgV09XISEhJ319ICAgPT4gJ2p1c3Qgd293ISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gbG93ZXJjYXNlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b0xvd2VyQ2FzZSgpIDogcGFyYW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgdXBwZXJjYXNlOiBmdW5jdGlvbiB1cHBlcmNhc2UocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvVXBwZXJDYXNlKCkgOiBwYXJhbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICAgIHt7Zmlyc3Qgc29tZUFycmF5fX0gICA9PiAnRGF2aWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bMF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICAgIHt7bGFzdCBzb21lQXJyYXl9fSAgID0+ICdKb25lcydcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgbGFzdDogZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bY29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e2NvbmNhdCAnSGVsbG8nICcgd29ybGQnICchISEnfX0gICA9PiAnSGVsbG8gd29ybGQhISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIG1peGVkIC4uLnBhcmFtc1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gICAgICogICAge3tqb2luIHNvbWVBcnJheSAnICYgJ319ICAgPT4gJ0hhbmRzICYgbGVncyAmIGZlZXQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IHBhcmFtc1xuICAgICAqIEBwYXJhbSAgc3RyaW5nIGRlbGltZXRlclxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihwYXJhbXMsIGRlbGltZXRlcikge1xuICAgICAgICBpZiAoIWRlbGltZXRlciB8fCAoMCwgX3V0aWxzLmlzT2JqZWN0KShkZWxpbWV0ZXIpKSB7XG4gICAgICAgICAgICBkZWxpbWV0ZXIgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShwYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oZGVsaW1ldGVyKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNEZWZpbmVkID0gaXNEZWZpbmVkO1xuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZzsiXX0=
