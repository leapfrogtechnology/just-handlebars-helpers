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

        for (var index in array) {
            if (strict && array[index] === value || !strict && array[index] == value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9odG1sLmpzIiwibGliL2hlbHBlcnMvbWF0aC5qcyIsImxpYi9oZWxwZXJzL3N0cmluZ3MuanMiLCJsaWIvdXRpbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuLy8gVXRpbHNcblxuXG4vLyBIZWxwZXJzXG5cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbC91dGlscycpO1xuXG52YXIgX2h0bWwgPSByZXF1aXJlKCcuL2hlbHBlcnMvaHRtbCcpO1xuXG52YXIgX2h0bWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHRtbCk7XG5cbnZhciBfbWF0aCA9IHJlcXVpcmUoJy4vaGVscGVycy9tYXRoJyk7XG5cbnZhciBfbWF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRoKTtcblxudmFyIF9zdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0cmluZ3MnKTtcblxudmFyIF9zdHJpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ3MpO1xuXG52YXIgX2RhdGV0aW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL2RhdGV0aW1lJyk7XG5cbnZhciBfZGF0ZXRpbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZXRpbWUpO1xuXG52YXIgX2NvbmRpdGlvbmFscyA9IHJlcXVpcmUoJy4vaGVscGVycy9jb25kaXRpb25hbHMnKTtcblxudmFyIF9jb25kaXRpb25hbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZGl0aW9uYWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhILCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdyZWdpc3RlckhlbHBlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXJzKGhhbmRsZWJhcnMpIHtcblxuICAgICAgICAgICAgaGFuZGxlYmFycyA9IGhhbmRsZWJhcnMgfHwgZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgICAgICAgICAgIGlmICghKDAsIF91dGlscy5pc09iamVjdCkoaGFuZGxlYmFycykpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGdsb2JhbCBuYW1lc3BhY2UgYXMgd2VsbCB0aHJvdyB0aGUgZXJyb3IgYW5kIGhhbHQuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGViYXJzIG5vdCBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGVscGVycyBsaXN0XG4gICAgICAgICAgICB2YXIgaGVscGVycyA9IFtfbWF0aDIuZGVmYXVsdCwgX2h0bWwyLmRlZmF1bHQsIF9zdHJpbmdzMi5kZWZhdWx0LCBfY29uZGl0aW9uYWxzMi5kZWZhdWx0LCBfZGF0ZXRpbWUyLmRlZmF1bHRdO1xuXG4gICAgICAgICAgICBoZWxwZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcikge1xuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGFsbCB0aGUgaGVscGVyIGZ1bmN0aW9ucyB0byBIYW5kbGViYXJzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEg7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09PSkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZXE6IGZ1bmN0aW9uIGVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBlcXc6IGZ1bmN0aW9uIGVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT09KS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tuZXEgNCAzfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbmVxOiBmdW5jdGlvbiBuZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSAhPT0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPSkgd2VhayBjaGVja2luZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tuZXF3ICczJyAzfX0gICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG5lcXc6IGZ1bmN0aW9uIG5lcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSAhPSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBsdDogZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA8IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2x0ZSAyIDN9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGx0ZTogZnVuY3Rpb24gbHRlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPD0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIGNvbmRpdGlvbiAoYSA+IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2d0IDIgM319ICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGd0OiBmdW5jdGlvbiBndCh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID4gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFscyBjb25kaXRpb24gKGEgPj0gYikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZ3RlOiBmdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA+PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciB0byBpbWl0YXRlIHRoZSB0ZXJuYXJ5IGNvbmRpdGlvbmFsIG9wZXJhdG9yID86XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICAgICAqICAgICAge3tpZnggZmFsc2UgJ0ZvbycgJ0Jhcid9fSAgID0+IEZvb1xuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmRpdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZTEgICAgVmFsdWUgdG8gcmV0dXJuIHdoZW4gdGhlIGNvbmRpdGlvbiBob2xkcyB0cnVlXG4gICAgICogQHBhcmFtIHZhbHVlMiAgICBWYWx1ZSB0byByZXR1cm4gd2hlbiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlIChPcHRpb25hbClcbiAgICAgKiBAcmV0dXJucyBtaXhlZFxuICAgICAqL1xuICAgIGlmeDogZnVuY3Rpb24gaWZ4KGNvbmRpdGlvbiwgdmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgb21pdHRlZCB0aGUgbGFzdCBwYXJhbWV0ZXJcbiAgICAgICAgLy8gaWYgdGhhdCdzIHRoZSBjYXNlLCBpdCB3b3VsZCBiZSB0aGUgaGFuZGxlYmFycydzIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgIC8vIHdoaWNoIGl0IHNlbmRzIGFsd2F5cyBhcyB0aGUgbGFzdCBwYXJhbWV0ZXIuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KSh2YWx1ZTIpICYmIHZhbHVlMi5uYW1lID09PSAnaWZ4JyAmJiB2YWx1ZTIuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBtZWFucyB0aGUgdXNlciBoYXMgc2tpcHBlZCB0aGUgbGFzdCBwYXJhbWV0ZXIsXG4gICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyAoJycpIGluIHRoZSBlbHNlIGNhc2UgaW5zdGVhZC5cbiAgICAgICAgICAgIHZhbHVlMiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dpY2FsIE5PVCBvZiBhbnkgZXhwcmVzc2lvbi5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gICAgICogICAgICB7e25vdCBmYWxzZX19ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbm90OiBmdW5jdGlvbiBub3QoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gIWV4cHJlc3Npb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2VtcHR5IGFycmF5fX0gPT4gdHJ1ZSB8IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA9PT0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcnJheVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAgICAgKi9cbiAgICBjb3VudDogZnVuY3Rpb24gY291bnQoYXJyYXkpIHtcbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYm9vbGVhbiBBTkQgb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gICAgICogaXQgaXMgdHJ1ZSBpZmYgYWxsIHRoZSBwYXJhbWV0ZXJzIGFyZSB0cnVlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IHZhbHVlMiA9IHRydWU7XG4gICAgICogICAgIHt7YW5kIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IGZhbHNlLCB2YWx1ZTIgPSB0cnVlO1xuICAgICAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgYW5kOiBmdW5jdGlvbiBhbmQoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoIXBhcmFtc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYm9vbGVhbiBPUiBvZiB0d28gb3IgbW9yZSBwYXJhbWV0ZXJzIHBhc3NlZCBpLmVcbiAgICAgKiBpdCBpcyB0cnVlIGlmIGFueSBvZiB0aGUgcGFyYW1ldGVycyBpcyB0cnVlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IHRydWUsIHZhbHVlMiA9IGZhbHNlO1xuICAgICAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiAgICAgdmFyIHZhbHVlID0gdmFsdWUyID0gZmFsc2U7XG4gICAgICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG9yOiBmdW5jdGlvbiBvcigpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3Qgbm9uLWZhbHN5IHZhbHVlIGZyb20gdGhlIHBhcmFtZXRlciBsaXN0LlxuICAgICAqIFdvcmtzIHF1aXRlIHNpbWlsYXIgdG8gdGhlIFNRTCdzIENPQUxFU0NFKCkgZnVuY3Rpb24sIGJ1dCB1bmxpa2UgdGhpc1xuICAgICAqIGNoZWNrcyBmb3IgdGhlIGZpcnN0IG5vbi1mYWxzZSBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICB2YXIgZnVsbE5hbWUgPSAnRm9vIEJhcicsIG5pY2tOYW1lID0gJ2Zvb2InO1xuICAgICAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdGb28gQmFyJ1xuICAgICAqXG4gICAgICogICAgIHZhciBmdWxsTmFtZSA9ICcnLCBuaWNrTmFtZSA9ICdmb29iJztcbiAgICAgKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnZm9vYidcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBtaXhlZFxuICAgICAqL1xuICAgIGNvYWxlc2NlOiBmdW5jdGlvbiBjb2FsZXNjZSgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgICAgcGFyYW1zW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMucG9wKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBpZiB0aGUgYXJyYXkgY29udGFpbnMgdGhlIGVsZW1lbnQgc3RyaWN0bHkgb3Igbm9uLXN0cmljdGx5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciBhcnJheSA9IFsxLCAyLCAzLCA0XTtcbiAgICAgKiAgICAgdmFyIHZhbHVlMSA9IDIsIHZhbHVlMiA9IDEwLCB2YWx1ZTMgPSAnMyc7XG4gICAgICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUxfX0gICAgICAgID0+IHRydWVcbiAgICAgKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTJ9fSAgICAgICAgPT4gZmFsc2VcbiAgICAgKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTN9fSAgICAgICAgPT4gZmFsc2VcbiAgICAgKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTMgZmFsc2V9fSAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcnJheVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBzdHJpY3QgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkgfHwgYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBhcnJheSkge1xuICAgICAgICAgICAgaWYgKHN0cmljdCAmJiBhcnJheVtpbmRleF0gPT09IHZhbHVlIHx8ICFzdHJpY3QgJiYgYXJyYXlbaW5kZXhdID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIEEgZm9ybWF0RGF0ZSBoZWxwZXIgdG8gZm9ybWF0IGRhdGUgdXNpbmcgbW9tZW50IGpzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Zm9ybWF0RGF0ZSAnTU0vREQvWVlZWScgZGF0ZX19XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbiBmb3JtYXREYXRlKGZvcm1hdFN0cmluZywgZGF0ZSkge1xuXG4gICAgICAgIHZhciBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG5cbiAgICAgICAgaWYgKCFtb21lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9tZW50IEpTIGlzIHJlcXVpcmVkIGZvciB0aGlzIGhlbHBlci4gTWFrZSBzdXJlIHlvdSBoYXZlIGxvYWRlZCBtb21lbnQganMgaHR0cDovL21vbWVudGpzLmNvbS8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdFN0cmluZyA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUgfHwgbmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdFN0cmluZyk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzaG93SWYgdHJ1ZX19ICAgICA9PiAnJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzaG93SWY6IGZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnJyA6ICdoaWRkZW4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2hpZGVJZiB0cnVlfX0gICAgID0+ICdoaWRkZW4nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGhpZGVJZjogZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzZWxlY3RlZElmOiBmdW5jdGlvbiBzZWxlY3RlZElmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBjaGVja2VkSWYgaGVscGVyIGZvciBjaGVja2JveGVzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NoZWNrZWRJZiB0cnVlfX0gID0+ICdjaGVja2VkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjaGVja2VkSWY6IGZ1bmN0aW9uIGNoZWNrZWRJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9ucyBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgPG9wdGlvbj4gbGlzdCBmb3IgPHNlbGVjdD4gZHJvcGRvd25zLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBBIHNpbXBsZSBleGFtcGxlOlxuICAgICAqXG4gICAgICogICAgICBsZXQgZGF0YSA9IFtcbiAgICAgKiAgICAgICAgICB7XG4gICAgICogICAgICAgICAgICAgIGlkOiAxLFxuICAgICAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbydcbiAgICAgKiAgICAgICAgICB9LFxuICAgICAqICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmFyJ1xuICAgICAqICAgICAgICAgIH0sXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICBpZDogMyxcbiAgICAgKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28gQmFyJ1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKiAgICAgIF07XG4gICAgICpcbiAgICAgKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjJcIn19fVxuICAgICAqXG4gICAgICogd2lsbCBnZW5lcmF0ZSBodG1sIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Gb288L29wdGlvbj5cbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIgc2VsZWN0ZWQ+QmFyPC9vcHRpb24+XG4gICAgICogICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkZvbyBCYXI8L29wdGlvbj5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogWW91IGNhbiBhbHNvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGtleSBuYW1lcyBmb3IgJ2lkJyAmICdkZXNjcmlwdGlvbidcbiAgICAgKiB1c2luZyB0aGUgJ2lkJyAmICd0ZXh0JyBvcHRpb25zIGluIHRoZSBoZWxwZXIuXG4gICAgICpcbiAgICAgKiAgICAgIGxldCBkYXRhID0gW1xuICAgICAqICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICogICAgICAgICAgICAgIHRleHQ6ICdOZXcgWW9yaydcbiAgICAgKiAgICAgICAgICB9LFxuICAgICAqICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICAgdmFsdWU6IDIsXG4gICAgICogICAgICAgICAgICAgIHRleHQ6ICdMb25kb24nXG4gICAgICogICAgICAgICAgfVxuICAgICAqICAgICAgXTtcbiAgICAgKlxuICAgICAqICAgICAge3t7b3B0aW9ucyBkYXRhIHNlbGVjdGVkPVwiMVwiIGlkPVwidmFsdWVcIiB0ZXh0PVwidGV4dFwifX19XG4gICAgICpcbiAgICAgKiB3aWxsIGdlbmVyYXRlIGh0bWwgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHNlbGVjdGVkPk5ldyBZb3JrPC9vcHRpb24+XG4gICAgICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkxvbmRvbjwvb3B0aW9uPlxuICAgICAqXG4gICAgICovXG4gICAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhkYXRhLCBvcHRzKSB7XG4gICAgICAgIC8vIFRoZSBpZCAmIHRleHQgZm9yIHRoZSA8b3B0aW9uPlxuICAgICAgICB2YXIgaWQgPSBvcHRzLmhhc2guaWQgfHwgJ2lkJztcbiAgICAgICAgdmFyIHRleHQgPSBvcHRzLmhhc2gudGV4dCB8fCAnZGVzY3JpcHRpb24nO1xuXG4gICAgICAgIC8vIFRoZSBzZWxlY3Rpb24gXCJpZFwiIG9mIHRoZSA8b3B0aW9uPlxuICAgICAgICB2YXIgc2VsZWN0ZWRJZCA9IG9wdHMuaGFzaC5zZWxlY3RlZCB8fCBudWxsO1xuXG4gICAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaXRlbVtpZF0gfHwgJyc7XG4gICAgICAgICAgICB2YXIgaW5uZXJUZXh0ID0gaXRlbVt0ZXh0XSB8fCAnJztcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHZhbHVlID09IHNlbGVjdGVkSWQgPyAnIHNlbGVjdGVkJyA6ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUgKyAnXCInICsgc2VsZWN0ZWQgKyAnPicgKyBpbm5lclRleHQgKyAnPC9vcHRpb24+JztcbiAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIEEgc3VtIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgc3VtIG9mIHR3byBudW1iZXJzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e3N1bSAxIDJ9fSAgICAgPT4gM1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBzdW06IGZ1bmN0aW9uIHN1bSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgKyBOdW1iZXIodmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBkaWZmZXJlbmNlIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gbnVtYmVycy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tkaWZmZXJlbmNlIDUgMn19ICA9PiAzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uIGRpZmZlcmVuY2UodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZTEpIC0gTnVtYmVyKHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgY2VpbCBoZWxwZXIgdG8gZmluZCB0aGUgY2VpbCB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NlaWwgNS42fX0gICAgPT4gNlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgY2VpbDogZnVuY3Rpb24gY2VpbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKE51bWJlcih2YWx1ZSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGZsb29yIGhlbHBlciB0byBmaW5kIHRoZSBmbG9vciB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2Zsb29yIDUuNn19ID0+IDVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIGZsb29yOiBmdW5jdGlvbiBmbG9vcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZXhjZXJwdCAnSnVzdCBXb3cnIDR9fSAgICA9PiAnSnVzdCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZXhjZXJwdDogZnVuY3Rpb24gZXhjZXJwdChzdHJpbmcsIGxlbmd0aCkge1xuICAgICAgICBsZW5ndGggPSBwYXJzZUludChsZW5ndGgpIHx8IDUwO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsZW5ndGgpICsgJy4uLic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gdXJsIGZyaWVuZGx5IGRhc2gtY2FzZSBzdHJpbmcgcmVtb3Zpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e3Nhbml0aXplICdKdVN0ICNXb3cnfX0gICAgPT4gJ2p1c3Qtd293J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNhbml0aXplOiBmdW5jdGlvbiBzYW5pdGl6ZShzdHJpbmcpIHtcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpLnRyaW0oKTtcblxuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgXFxuIHdpdGggPGJyPiB0YWdzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHt7bmV3TGluZVRvQnIgJ25ld0xpbmVUb0JyIGhlbHBlciBcXG4gaXMgdmVyeSBcXG4gdXNlZnVsLid9fSAgICA9PiBuZXdMaW5lVG9CciBoZWxwZXIgPGJyPiBpcyB2ZXJ5IDxicj4gdXNlZnVsLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBuZXdMaW5lVG9CcjogZnVuY3Rpb24gbmV3TGluZVRvQnIoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgJzxicj4nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjYXBpdGFsaXplRWFjaCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCBXb3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUVhY2g6IGZ1bmN0aW9uIGNhcGl0YWxpemVFYWNoKHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0OiBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3Qoc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc3ByaW50ZiBoZWxwZXIgdG8gYmUgdXNlZCBpbiB0aGUgaGFuZGxlYmFycyB0ZW1wbGF0ZXMgdGhhdCBzdXBwb3J0cyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaGVscGVyIHJlbGllcyBvbiBzcHJpbnRmKCkgZnVuY3Rpb24gcHJvdmlkZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzXG4gICAgICogU28sIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgc3ByaW50Zi1qcyBwYWNrYWdlIGF2YWlsYWJsZSBlaXRoZXIgYXMgYSBub2RlIG1vZHVsZVxuICAgICAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gICAgICpcbiAgICAgKiBTeW50YXg6XG4gICAgICogICAgICB7e3NwcmludGYgZm9ybWF0IGFyZzEgYXJnMiBhcmczLi4uLn19XG4gICAgICogICAgICB7e3NwcmludGYgZm9ybWF0IG9iamVjdH19XG4gICAgICogICAgICB7e3NwcmludGYgZm9ybWF0IGtleTE9dmFsdWUxIGtleTI9dmFsdWUyLi4ufX1cbiAgICAgKlxuICAgICAqICBAZXhhbXBsZVxuICAgICAqICAgICAge3tzcHJpbnRmICclcyAlcyEnICdIZWxsbycgJ0thYmlyJyB9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclcyAlcyAlZCAlcyAlZCcgJ0ZvbycgJ0JhcicgNTUgJ0JheicgJzIwJ319XG4gICAgICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgSG93IGFyZSB5b3U/JyBvYmogfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISAnIGdyZWV0aW5nPSdIZWxsbycgbmFtZT0nS2FiaXInfX1cbiAgICAgKlxuICAgICAqIENoZWNrIHRoaXMgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybWF0XG4gICAgICogQHBhcmFtIC4uLmFyZ3NcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzcHJpbnRmOiBmdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZzcHJpbnRmIGZ1bmN0aW9uIGlzIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAvLyBpZiBpdCdzIG5vdCBhdmFpbGFibGUgdGhlbiB0cnkgdG8gcmVxdWlyZSgpIGl0XG4gICAgICAgIHZhciBfdnNwcmludGYgPSBnbG9iYWwudnNwcmludGY7XG5cbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzRnVuY3Rpb24pKF92c3ByaW50ZikpIHtcbiAgICAgICAgICAgIF92c3ByaW50ZiA9ICh7c3ByaW50Zjogd2luZG93LnNwcmludGYsIHZzcHJpbnRmOiB3aW5kb3cudnNwcmludGZ9KS52c3ByaW50ZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBhbGwgdGhlIHBhcmFtZXRlcnMgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlXG4gICAgICAgIC8vIHNwcmludGYvdnNwcmludGYgZnVuY3Rpb25cbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuXG4gICAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkoYXJnKSAmJiAoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcuaGFzaCkpIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmcuaGFzaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gX3ZzcHJpbnRmKGZvcm1hdCwgcGFyYW1zKSA6IGZvcm1hdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHt7bG93ZXJjYXNlICdKVVNUIFdPVyEhISd9fSAgID0+ICdqdXN0IHdvdyEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBsb3dlcmNhc2U6IGZ1bmN0aW9uIGxvd2VyY2FzZShwYXJhbSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9Mb3dlckNhc2UoKSA6IHBhcmFtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAge3t1cHBlcmNhc2UgJ2p1c3Qgd293ISEhJ319ICAgPT4gJ0pVU1QgV09XISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gdXBwZXJjYXNlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b1VwcGVyQ2FzZSgpIDogcGFyYW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAgICAgKiAgICB7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmaXJzdDogZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAgICAgKiAgICB7e2xhc3Qgc29tZUFycmF5fX0gICA9PiAnSm9uZXMnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGxhc3Q6IGZ1bmN0aW9uIGxhc3QoY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uW2NvbGxlY3Rpb24ubGVuZ3RoIC0gMV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAge3tjb25jYXQgJ0hlbGxvJyAnIHdvcmxkJyAnISEhJ319ICAgPT4gJ0hlbGxvIHdvcmxkISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBtaXhlZCAuLi5wYXJhbXNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBwYXJhbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSm9pbiB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgdXNpbmcgYSBkZWxpbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHZhciBzb21lQXJyYXkgPSBbJ0hhbmRzJywgJ2xlZ3MnLCAnZmVldCddO1xuICAgICAqICAgIHt7am9pbiBzb21lQXJyYXkgJyAmICd9fSAgID0+ICdIYW5kcyAmIGxlZ3MgJiBmZWV0J1xuICAgICAqXG4gICAgICogQHBhcmFtICBhcnJheSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBkZWxpbWV0ZXJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4ocGFyYW1zLCBkZWxpbWV0ZXIpIHtcbiAgICAgICAgaWYgKCFkZWxpbWV0ZXIgfHwgKDAsIF91dGlscy5pc09iamVjdCkoZGVsaW1ldGVyKSkge1xuICAgICAgICAgICAgZGVsaW1ldGVyID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkocGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5qb2luKGRlbGltZXRlcik7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBub3QgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0RlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGhpbmcpKSA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7Il19
