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
     * 	{{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
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
     * 	{{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
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
     * 	var someArray = ['David', 'Miller', 'Jones'];
     *  	{{first someArray}}   => 'David'
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
     * 	var someArray = ['David', 'Miller', 'Jones'];
     *  	{{last someArray}}   => 'Jones'
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
     * 	{{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
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
     * 	var someArray = ['Hands', 'legs', 'feet'];
     *   	{{join someArray ' & '}}   => 'Hands & legs & feet'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9odG1sLmpzIiwibGliL2hlbHBlcnMvbWF0aC5qcyIsImxpYi9oZWxwZXJzL3N0cmluZ3MuanMiLCJsaWIvdXRpbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuLy8gVXRpbHNcblxuXG4vLyBIZWxwZXJzXG5cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbC91dGlscycpO1xuXG52YXIgX2h0bWwgPSByZXF1aXJlKCcuL2hlbHBlcnMvaHRtbCcpO1xuXG52YXIgX2h0bWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHRtbCk7XG5cbnZhciBfbWF0aCA9IHJlcXVpcmUoJy4vaGVscGVycy9tYXRoJyk7XG5cbnZhciBfbWF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRoKTtcblxudmFyIF9zdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0cmluZ3MnKTtcblxudmFyIF9zdHJpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ3MpO1xuXG52YXIgX2RhdGV0aW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL2RhdGV0aW1lJyk7XG5cbnZhciBfZGF0ZXRpbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZXRpbWUpO1xuXG52YXIgX2NvbmRpdGlvbmFscyA9IHJlcXVpcmUoJy4vaGVscGVycy9jb25kaXRpb25hbHMnKTtcblxudmFyIF9jb25kaXRpb25hbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZGl0aW9uYWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhILCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdyZWdpc3RlckhlbHBlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXJzKGhhbmRsZWJhcnMpIHtcblxuICAgICAgICAgICAgaGFuZGxlYmFycyA9IGhhbmRsZWJhcnMgfHwgZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgICAgICAgICAgIGlmICghKDAsIF91dGlscy5pc09iamVjdCkoaGFuZGxlYmFycykpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGdsb2JhbCBuYW1lc3BhY2UgYXMgd2VsbCB0aHJvdyB0aGUgZXJyb3IgYW5kIGhhbHQuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGViYXJzIG5vdCBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGVscGVycyBsaXN0XG4gICAgICAgICAgICB2YXIgaGVscGVycyA9IFtfbWF0aDIuZGVmYXVsdCwgX2h0bWwyLmRlZmF1bHQsIF9zdHJpbmdzMi5kZWZhdWx0LCBfY29uZGl0aW9uYWxzMi5kZWZhdWx0LCBfZGF0ZXRpbWUyLmRlZmF1bHRdO1xuXG4gICAgICAgICAgICBoZWxwZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcikge1xuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGFsbCB0aGUgaGVscGVyIGZ1bmN0aW9ucyB0byBIYW5kbGViYXJzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEg7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pLlxuICAgICogQGV4YW1wbGVcbiAgICAqICAgICAge3tlcSAnMycgM319ICAgID0+IGZhbHNlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZXE6IGZ1bmN0aW9uIGVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZy5cbiAgICAqIEBleGFtcGxlXG4gICAgKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZXF3OiBmdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA9PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT09KS5cbiAgICAqIEBleGFtcGxlXG4gICAgKiAgICAgIHt7bmVxIDQgM319ICAgID0+IHRydWVcbiAgICAqXG4gICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgKi9cbiAgICBuZXE6IGZ1bmN0aW9uIG5lcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxICE9PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT0pIHdlYWsgY2hlY2tpbmcuXG4gICAgKiBAZXhhbXBsZVxuICAgICogICAgICB7e25lcXcgJzMnIDN9fSAgICA9PiBmYWxzZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIG5lcXc6IGZ1bmN0aW9uIG5lcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSAhPSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBjb25kaXRpb24gKGEgPCBiKS5cbiAgICAqIEBleGFtcGxlXG4gICAgKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgbHQ6IGZ1bmN0aW9uIGx0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPCB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICAgICogQGV4YW1wbGVcbiAgICAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgbHRlOiBmdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA8PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBjb25kaXRpb24gKGEgPiBiKS5cbiAgICAqIEBleGFtcGxlXG4gICAgKiAgICAgIHt7Z3QgMiAzfX0gICA9PiBmYWxzZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGd0OiBmdW5jdGlvbiBndCh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID4gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAgICAqIEBleGFtcGxlXG4gICAgKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGd0ZTogZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPj0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEhlbHBlciB0byBpbWl0YXRlIHRoZSB0ZXJuYXJ5IGNvbmRpdGlvbmFsIG9wZXJhdG9yID86XG4gICAgKiBAZXhhbXBsZVxuICAgICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gICAgKiAgICAgIHt7aWZ4IGZhbHNlICdGb28nICdCYXInfX0gICA9PiBGb29cbiAgICAqXG4gICAgKiBAcGFyYW0gY29uZGl0aW9uXG4gICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgKiBAcmV0dXJucyB2YWx1ZTEgfCB2YWx1ZTJcbiAgICAqL1xuICAgIGlmeDogZnVuY3Rpb24gaWZ4KGNvbmRpdGlvbiwgdmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuICEhY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICAgICogQGV4YW1wbGVcbiAgICAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gICAgKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIG5vdDogZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICFleHByZXNzaW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICAgICogQGV4YW1wbGVcbiAgICAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICAgICpcbiAgICAqIEBwYXJhbSBhcnJheVxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA9PT0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAgICAqIEBleGFtcGxlXG4gICAgKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAgICAqXG4gICAgKiBAcGFyYW0gYXJyYXlcbiAgICAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAgICAqL1xuICAgIGNvdW50OiBmdW5jdGlvbiBjb3VudChhcnJheSkge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICAgIC8qKlxuICAgICAqIEEgZm9ybWF0RGF0ZSBoZWxwZXIgdG8gZm9ybWF0IGRhdGUgdXNpbmcgbW9tZW50IGpzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Zm9ybWF0RGF0ZSAnTU0vREQvWVlZWScgZGF0ZX19XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbiBmb3JtYXREYXRlKGZvcm1hdFN0cmluZywgZGF0ZSkge1xuXG4gICAgICAgIHZhciBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG5cbiAgICAgICAgaWYgKCFtb21lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9tZW50IEpTIGlzIHJlcXVpcmVkIGZvciB0aGlzIGhlbHBlci4gTWFrZSBzdXJlIHlvdSBoYXZlIGxvYWRlZCBtb21lbnQganMgaHR0cDovL21vbWVudGpzLmNvbS8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdFN0cmluZyA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUgfHwgbmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdFN0cmluZyk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzaG93SWYgdHJ1ZX19ICAgICA9PiAnJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzaG93SWY6IGZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnJyA6ICdoaWRkZW4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2hpZGVJZiB0cnVlfX0gICAgID0+ICdoaWRkZW4nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGhpZGVJZjogZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzZWxlY3RlZElmOiBmdW5jdGlvbiBzZWxlY3RlZElmKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBjaGVja2VkSWYgaGVscGVyIGZvciBjaGVja2JveGVzLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NoZWNrZWRJZiB0cnVlfX0gID0+ICdjaGVja2VkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBjaGVja2VkSWY6IGZ1bmN0aW9uIGNoZWNrZWRJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbiAgICB9XG5cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIHN1bSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIHN1bSBvZiB0d28gbnVtYmVycy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzdW0gMSAyfX0gICAgID0+IDNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgc3VtOiBmdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZTEpICsgTnVtYmVyKHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgZGlmZmVyZW5jZSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIG51bWJlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZGlmZmVyZW5jZSA1IDJ9fSAgPT4gM1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUxKSAtIE51bWJlcih2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNlaWwgaGVscGVyIHRvIGZpbmQgdGhlIGNlaWwgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjZWlsIDUuNn19ICAgID0+IDZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIGNlaWw6IGZ1bmN0aW9uIGNlaWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChOdW1iZXIodmFsdWUpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBmbG9vcjogZnVuY3Rpb24gZmxvb3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBleGNlcnB0OiBmdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byB1cmwgZnJpZW5kbHkgZGFzaC1jYXNlIHN0cmluZyByZW1vdmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2FuaXRpemU6IGZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjYXBpdGFsaXplRWFjaCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCBXb3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUVhY2g6IGZ1bmN0aW9uIGNhcGl0YWxpemVFYWNoKHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0OiBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3Qoc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc3ByaW50ZiBoZWxwZXIgdG8gYmUgdXNlZCBpbiB0aGUgaGFuZGxlYmFycyB0ZW1wbGF0ZXMgdGhhdCBzdXBwb3J0cyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaGVscGVyIHJlbGllcyBvbiBzcHJpbnRmKCkgZnVuY3Rpb24gcHJvdmlkZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzXG4gICAgICogU28sIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgc3ByaW50Zi1qcyBwYWNrYWdlIGF2YWlsYWJsZSBlaXRoZXIgYXMgYSBub2RlIG1vZHVsZVxuICAgICAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gICAgICpcbiAgICAgKiBTeW50YXg6XG4gICAgICogICAgICB7e3NwcmludGYgZm9ybWF0IGFyZzEgYXJnMiBhcmczLi4uLn19XG4gICAgICogICAgICB7e3NwcmludGYgZm9ybWF0IG9iamVjdH19XG4gICAgICogICAgICB7e3NwcmludGYgZm9ybWF0IGtleTE9dmFsdWUxIGtleTI9dmFsdWUyLi4ufX1cbiAgICAgKlxuICAgICAqICBAZXhhbXBsZVxuICAgICAqICAgICAge3tzcHJpbnRmICclcyAlcyEnICdIZWxsbycgJ0thYmlyJyB9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclcyAlcyAlZCAlcyAlZCcgJ0ZvbycgJ0JhcicgNTUgJ0JheicgJzIwJ319XG4gICAgICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgSG93IGFyZSB5b3U/JyBvYmogfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJShncmVldGluZylzICUobmFtZSlzISAnIGdyZWV0aW5nPSdIZWxsbycgbmFtZT0nS2FiaXInfX1cbiAgICAgKlxuICAgICAqIENoZWNrIHRoaXMgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybWF0XG4gICAgICogQHBhcmFtIC4uLmFyZ3NcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzcHJpbnRmOiBmdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZzcHJpbnRmIGZ1bmN0aW9uIGlzIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAvLyBpZiBpdCdzIG5vdCBhdmFpbGFibGUgdGhlbiB0cnkgdG8gcmVxdWlyZSgpIGl0XG4gICAgICAgIHZhciBfdnNwcmludGYgPSBnbG9iYWwudnNwcmludGY7XG5cbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzRnVuY3Rpb24pKF92c3ByaW50ZikpIHtcbiAgICAgICAgICAgIF92c3ByaW50ZiA9ICh7c3ByaW50Zjogd2luZG93LnNwcmludGYsIHZzcHJpbnRmOiB3aW5kb3cudnNwcmludGZ9KS52c3ByaW50ZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBhbGwgdGhlIHBhcmFtZXRlcnMgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlXG4gICAgICAgIC8vIHNwcmludGYvdnNwcmludGYgZnVuY3Rpb25cbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuXG4gICAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkoYXJnKSAmJiAoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcuaGFzaCkpIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmcuaGFzaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gX3ZzcHJpbnRmKGZvcm1hdCwgcGFyYW1zKSA6IGZvcm1hdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIFx0e3tsb3dlcmNhc2UgJ0pVU1QgV09XISEhJ319ICAgPT4gJ2p1c3Qgd293ISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gbG93ZXJjYXNlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b0xvd2VyQ2FzZSgpIDogcGFyYW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHN0cmluZyB0byB1cHBlcmNhc2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBcdHt7dXBwZXJjYXNlICdqdXN0IHdvdyEhISd9fSAgID0+ICdKVVNUIFdPVyEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uIHVwcGVyY2FzZShwYXJhbSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9VcHBlckNhc2UoKSA6IHBhcmFtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogXHR2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAgICAgKiAgXHR7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmaXJzdDogZnVuY3Rpb24gZmlyc3QoY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBcdHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqICBcdHt7bGFzdCBzb21lQXJyYXl9fSAgID0+ICdKb25lcydcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgbGFzdDogZnVuY3Rpb24gbGFzdChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShjb2xsZWN0aW9uKSB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bY29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBcdHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgbWl4ZWQgLi4ucGFyYW1zXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEpvaW4gdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IHVzaW5nIGEgZGVsaW1ldGVyLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBcdHZhciBzb21lQXJyYXkgPSBbJ0hhbmRzJywgJ2xlZ3MnLCAnZmVldCddO1xuICAgICAqICAgXHR7e2pvaW4gc29tZUFycmF5ICcgJiAnfX0gICA9PiAnSGFuZHMgJiBsZWdzICYgZmVldCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgcGFyYW1zXG4gICAgICogQHBhcmFtICBzdHJpbmcgZGVsaW1ldGVyXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHBhcmFtcywgZGVsaW1ldGVyKSB7XG4gICAgICAgIGlmICghZGVsaW1ldGVyIHx8ICgwLCBfdXRpbHMuaXNPYmplY3QpKGRlbGltZXRlcikpIHtcbiAgICAgICAgICAgIGRlbGltZXRlciA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKHBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuam9pbihkZWxpbWV0ZXIpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQodGhpbmcpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcbiAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRoaW5nKSkgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRoaW5nKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0RlZmluZWQgPSBpc0RlZmluZWQ7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nOyJdfQ==
