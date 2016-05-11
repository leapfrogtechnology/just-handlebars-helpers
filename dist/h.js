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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9odG1sLmpzIiwibGliL2hlbHBlcnMvbWF0aC5qcyIsImxpYi9oZWxwZXJzL3N0cmluZ3MuanMiLCJsaWIvdXRpbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gTm90ZTogRVM2IGV4cG9ydCBkZWZhdWx0IHdvdWxkIGV4cG9ydCB0aGUgSCBjbGFzcyBpbiAnZGVmYXVsdCcga2V5IHNvIHdlIGhhdmUgdG8gdXNlIHRoYXRcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvSC5qcycpLmRlZmF1bHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcbi8vIFV0aWxzXG5cblxuLy8gSGVscGVyc1xuXG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWwvdXRpbHMnKTtcblxudmFyIF9odG1sID0gcmVxdWlyZSgnLi9oZWxwZXJzL2h0bWwnKTtcblxudmFyIF9odG1sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h0bWwpO1xuXG52YXIgX21hdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvbWF0aCcpO1xuXG52YXIgX21hdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0aCk7XG5cbnZhciBfc3RyaW5ncyA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHJpbmdzJyk7XG5cbnZhciBfc3RyaW5nczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdzKTtcblxudmFyIF9kYXRldGltZSA9IHJlcXVpcmUoJy4vaGVscGVycy9kYXRldGltZScpO1xuXG52YXIgX2RhdGV0aW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGV0aW1lKTtcblxudmFyIF9jb25kaXRpb25hbHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvY29uZGl0aW9uYWxzJyk7XG5cbnZhciBfY29uZGl0aW9uYWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmRpdGlvbmFscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEgoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAncmVnaXN0ZXJIZWxwZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzKSB7XG5cbiAgICAgICAgICAgIGhhbmRsZWJhcnMgPSBoYW5kbGViYXJzIHx8IGdsb2JhbC5IYW5kbGViYXJzO1xuXG4gICAgICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmplY3QpKGhhbmRsZWJhcnMpKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSwgaGFuZGxlYmFycyBpcyBub3QgcHJvdmlkZWQgYW5kIGl0J3Mgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGFzIHdlbGwgdGhyb3cgdGhlIGVycm9yIGFuZCBoYWx0LlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhlbHBlcnMgbGlzdFxuICAgICAgICAgICAgdmFyIGhlbHBlcnMgPSBbX21hdGgyLmRlZmF1bHQsIF9odG1sMi5kZWZhdWx0LCBfc3RyaW5nczIuZGVmYXVsdCwgX2NvbmRpdGlvbmFsczIuZGVmYXVsdCwgX2RhdGV0aW1lMi5kZWZhdWx0XTtcblxuICAgICAgICAgICAgaGVscGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgdG8gSGFuZGxlYmFyc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVscGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyW25hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBIO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2VxICczJyAzfX0gICAgPT4gZmFsc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGVxOiBmdW5jdGlvbiBlcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT0pIGkuZSB3ZWFrIGNoZWNraW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2VxdyAnMycgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZXF3OiBmdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA9PSB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bmVxIDQgM319ICAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG5lcTogZnVuY3Rpb24gbmVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgIT09IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT0pIHdlYWsgY2hlY2tpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bmVxdyAnMycgM319ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBuZXF3OiBmdW5jdGlvbiBuZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgIT0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgbGVzcyB0aGFuIGNvbmRpdGlvbiAoYSA8IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgbHQ6IGZ1bmN0aW9uIGx0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPCB2YWx1ZTI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBsZXNzIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBsdGU6IGZ1bmN0aW9uIGx0ZSh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUxIDw9IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBjb25kaXRpb24gKGEgPiBiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBndDogZnVuY3Rpb24gZ3QodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMSA+IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2d0ZSAzIDN9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGd0ZTogZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTEgPj0gdmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2lmeCB0cnVlICdGb28nICdCYXInfX0gICAgPT4gRm9vXG4gICAgICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyB2YWx1ZTEgfCB2YWx1ZTJcbiAgICAgKi9cbiAgICBpZng6IGZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiAhIWNvbmRpdGlvbiA/IHZhbHVlMSA6IHZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9naWNhbCBOT1Qgb2YgYW55IGV4cHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7bm90IHRydWV9fSAgICA9PiBmYWxzZVxuICAgICAqICAgICAge3tub3QgZmFsc2V9fSAgID0+IHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIG5vdDogZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICFleHByZXNzaW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFycmF5XG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGVtcHR5OiBmdW5jdGlvbiBlbXB0eShhcnJheSkge1xuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheS5sZW5ndGggPT09IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGFuIGFycmF5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2NvdW50IGFycmF5fX0gPT4gIGZhbHNlIHwgYXJyYXkubGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIHwgbnVtYmVyXG4gICAgICovXG4gICAgY291bnQ6IGZ1bmN0aW9uIGNvdW50KGFycmF5KSB7XG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvb2xlYW4gQU5EIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICAgICAqIGl0IGlzIHRydWUgaWZmIGFsbCB0aGUgcGFyYW1ldGVycyBhcmUgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSB2YWx1ZTIgPSB0cnVlO1xuICAgICAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSBmYWxzZSwgdmFsdWUyID0gdHJ1ZTtcbiAgICAgKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGFuZDogZnVuY3Rpb24gYW5kKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCFwYXJhbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvb2xlYW4gT1Igb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gICAgICogaXQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIHBhcmFtZXRlcnMgaXMgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIHZhciB2YWx1ZTEgPSB0cnVlLCB2YWx1ZTIgPSBmYWxzZTtcbiAgICAgKiAgICAge3tvciB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICAgICAqXG4gICAgICogICAgIHZhciB2YWx1ZSA9IHZhbHVlMiA9IGZhbHNlO1xuICAgICAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiBmYWxzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtc1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBvcjogZnVuY3Rpb24gb3IoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IG5vbi1mYWxzeSB2YWx1ZSBmcm9tIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgKiBXb3JrcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBTUUwncyBDT0FMRVNDRSgpIGZ1bmN0aW9uLCBidXQgdW5saWtlIHRoaXNcbiAgICAgKiBjaGVja3MgZm9yIHRoZSBmaXJzdCBub24tZmFsc2UgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgdmFyIGZ1bGxOYW1lID0gJ0ZvbyBCYXInLCBuaWNrTmFtZSA9ICdmb29iJztcbiAgICAgKiAgICAge3tjb2FsZXNjZSBmdWxsTmFtZSBuaWNrTmFtZSAnVW5rbm93bid9fSAgICA9PiAnRm9vIEJhcidcbiAgICAgKlxuICAgICAqICAgICB2YXIgZnVsbE5hbWUgPSAnJywgbmlja05hbWUgPSAnZm9vYic7XG4gICAgICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ2Zvb2InXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMgbWl4ZWRcbiAgICAgKi9cbiAgICBjb2FsZXNjZTogZnVuY3Rpb24gY29hbGVzY2UoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICAgIHBhcmFtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLnBvcCgpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIGZvcm1hdERhdGUgaGVscGVyIHRvIGZvcm1hdCBkYXRlIHVzaW5nIG1vbWVudCBqcy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2Zvcm1hdERhdGUgJ01NL0REL1lZWVknIGRhdGV9fVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1hdFN0cmluZyBiYXNlZCBvbiBtb21lbnQuanNcbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZm9ybWF0RGF0ZTogZnVuY3Rpb24gZm9ybWF0RGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUpIHtcblxuICAgICAgICB2YXIgbW9tZW50ID0gKHdpbmRvdy5tb21lbnQpO1xuXG4gICAgICAgIGlmICghbW9tZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vbWVudCBKUyBpcyByZXF1aXJlZCBmb3IgdGhpcyBoZWxwZXIuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBsb2FkZWQgbW9tZW50IGpzIGh0dHA6Ly9tb21lbnRqcy5jb20vJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXRTdHJpbmcgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKShmb3JtYXRTdHJpbmcpID8gZm9ybWF0U3RyaW5nIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlIHx8IG5ldyBEYXRlKCkpLmZvcm1hdChmb3JtYXRTdHJpbmcpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICogQSBzaG93SWYgaGVscGVyIGZvciBzaG93aW5nIGFueSBodG1sIGVsZW1lbnQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c2hvd0lmIHRydWV9fSAgICAgPT4gJydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2hvd0lmOiBmdW5jdGlvbiBzaG93SWYoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBoaWRlSWYgaGVscGVyIGZvciBoaWRpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3toaWRlSWYgdHJ1ZX19ICAgICA9PiAnaGlkZGVuJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBoaWRlSWY6IGZ1bmN0aW9uIGhpZGVJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnaGlkZGVuJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdGVkSWYgaGVscGVyIGZvciBkcm9wZG93biBhbmQgcmFkaW8gYm94ZXMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c2VsZWN0ZWRJZiB0cnVlfX0gPT4gICdzZWxlY3RlZCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2VsZWN0ZWRJZjogZnVuY3Rpb24gc2VsZWN0ZWRJZihleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgY2hlY2tlZElmIGhlbHBlciBmb3IgY2hlY2tib3hlcy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjaGVja2VkSWYgdHJ1ZX19ICA9PiAnY2hlY2tlZCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2hlY2tlZElmOiBmdW5jdGlvbiBjaGVja2VkSWYoZXhwcmVzc2lvbikge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbnMgaGVscGVyIGZvciBnZW5lcmF0aW5nIDxvcHRpb24+IGxpc3QgZm9yIDxzZWxlY3Q+IGRyb3Bkb3ducy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogQSBzaW1wbGUgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgICAgbGV0IGRhdGEgPSBbXG4gICAgICogICAgICAgICAge1xuICAgICAqICAgICAgICAgICAgICBpZDogMSxcbiAgICAgKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGb28nXG4gICAgICogICAgICAgICAgfSxcbiAgICAgKiAgICAgICAgICB7XG4gICAgICogICAgICAgICAgICAgIGlkOiAyLFxuICAgICAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JhcidcbiAgICAgKiAgICAgICAgICB9LFxuICAgICAqICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vIEJhcidcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICBdO1xuICAgICAqXG4gICAgICogICAgICB7e3tvcHRpb25zIGRhdGEgc2VsZWN0ZWQ9XCIyXCJ9fX1cbiAgICAgKlxuICAgICAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Rm9vPC9vcHRpb24+XG4gICAgICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIHNlbGVjdGVkPkJhcjwvb3B0aW9uPlxuICAgICAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5Gb28gQmFyPC9vcHRpb24+XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIFlvdSBjYW4gYWxzbyBvdmVycmlkZSB0aGUgZGVmYXVsdCBrZXkgbmFtZXMgZm9yICdpZCcgJiAnZGVzY3JpcHRpb24nXG4gICAgICogdXNpbmcgdGhlICdpZCcgJiAndGV4dCcgb3B0aW9ucyBpbiB0aGUgaGVscGVyLlxuICAgICAqXG4gICAgICogICAgICBsZXQgZGF0YSA9IFtcbiAgICAgKiAgICAgICAgICB7XG4gICAgICogICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAqICAgICAgICAgICAgICB0ZXh0OiAnTmV3IFlvcmsnXG4gICAgICogICAgICAgICAgfSxcbiAgICAgKiAgICAgICAgICB7XG4gICAgICogICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAqICAgICAgICAgICAgICB0ZXh0OiAnTG9uZG9uJ1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKiAgICAgIF07XG4gICAgICpcbiAgICAgKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjFcIiBpZD1cInZhbHVlXCIgdGV4dD1cInRleHRcIn19fVxuICAgICAqXG4gICAgICogd2lsbCBnZW5lcmF0ZSBodG1sIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD5OZXcgWW9yazwvb3B0aW9uPlxuICAgICAqICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Mb25kb248L29wdGlvbj5cbiAgICAgKlxuICAgICAqL1xuICAgIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoZGF0YSwgb3B0cykge1xuICAgICAgICAvLyBUaGUgaWQgJiB0ZXh0IGZvciB0aGUgPG9wdGlvbj5cbiAgICAgICAgdmFyIGlkID0gb3B0cy5oYXNoLmlkIHx8ICdpZCc7XG4gICAgICAgIHZhciB0ZXh0ID0gb3B0cy5oYXNoLnRleHQgfHwgJ2Rlc2NyaXB0aW9uJztcblxuICAgICAgICAvLyBUaGUgc2VsZWN0aW9uIFwiaWRcIiBvZiB0aGUgPG9wdGlvbj5cbiAgICAgICAgdmFyIHNlbGVjdGVkSWQgPSBvcHRzLmhhc2guc2VsZWN0ZWQgfHwgbnVsbDtcblxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1baWRdIHx8ICcnO1xuICAgICAgICAgICAgdmFyIGlubmVyVGV4dCA9IGl0ZW1bdGV4dF0gfHwgJyc7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSB2YWx1ZSA9PSBzZWxlY3RlZElkID8gJyBzZWxlY3RlZCcgOiAnJztcblxuICAgICAgICAgICAgcmV0dXJuICc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlICsgJ1wiJyArIHNlbGVjdGVkICsgJz4nICsgaW5uZXJUZXh0ICsgJzwvb3B0aW9uPic7XG4gICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvKipcbiAgICAgKiBBIHN1bSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIHN1bSBvZiB0d28gbnVtYmVycy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzdW0gMSAyfX0gICAgID0+IDNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgc3VtOiBmdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZTEpICsgTnVtYmVyKHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgZGlmZmVyZW5jZSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIG51bWJlcnMuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7ZGlmZmVyZW5jZSA1IDJ9fSAgPT4gM1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUxKSAtIE51bWJlcih2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNlaWwgaGVscGVyIHRvIGZpbmQgdGhlIGNlaWwgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjZWlsIDUuNn19ICAgID0+IDZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIGNlaWw6IGZ1bmN0aW9uIGNlaWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChOdW1iZXIodmFsdWUpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBmbG9vcjogZnVuY3Rpb24gZmxvb3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWwvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYSBmZXcgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLiBEZWZhdWx0IG51bWJlciBvZiBjaGFyYWN0ZXJzIGlzIDUwLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgICB7e2V4Y2VycHQgJ0p1c3QgV293JyA0fX0gICAgPT4gJ0p1c3QnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHBhcmFtIGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGV4Y2VycHQ6IGZ1bmN0aW9uIGV4Y2VycHQoc3RyaW5nLCBsZW5ndGgpIHtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcblxuICAgICAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tzYW5pdGl6ZSAnSnVTdCAjV293J319ICAgID0+ICdqdXN0LXdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzYW5pdGl6ZTogZnVuY3Rpb24gc2FuaXRpemUoc3RyaW5nKSB7XG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHMrLywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIFxcbiB3aXRoIDxicj4gdGFncy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICB7e25ld0xpbmVUb0JyICduZXdMaW5lVG9CciBoZWxwZXIgXFxuIGlzIHZlcnkgXFxuIHVzZWZ1bC4nfX0gICAgPT4gbmV3TGluZVRvQnIgaGVscGVyIDxicj4gaXMgdmVyeSA8YnI+IHVzZWZ1bC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ31cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgbmV3TGluZVRvQnI6IGZ1bmN0aW9uIG5ld0xpbmVUb0JyKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICc8YnI+Jyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhcGl0YWxpemUgZWFjaCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7Y2FwaXRhbGl6ZUVhY2ggJ2p1c3Qgd293J319ICAgPT4gJ0p1c3QgV293J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVFYWNoOiBmdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAge3tjYXBpdGFsaXplRmlyc3QgJ2p1c3Qgd293J319ICAgPT4gJ0p1c3Qgd293J1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVGaXJzdDogZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIHNwcmludGYgaGVscGVyIHRvIGJlIHVzZWQgaW4gdGhlIGhhbmRsZWJhcnMgdGVtcGxhdGVzIHRoYXQgc3VwcG9ydHMgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBOT1RFOiBUaGlzIGhlbHBlciByZWxpZXMgb24gc3ByaW50ZigpIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZWkvc3ByaW50Zi5qc1xuICAgICAqIFNvLCBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIHNwcmludGYtanMgcGFja2FnZSBhdmFpbGFibGUgZWl0aGVyIGFzIGEgbm9kZSBtb2R1bGVcbiAgICAgKiBvciBoYXZlIHNwcmludGYvdnNwcmludGYgZnVuY3Rpb25zIGF2YWlsYWJsZSBpbiB0aGUgZ2xvYmFsIHNjb3BlIGZyb20gdGhhdCBwYWNrYWdlLlxuICAgICAqXG4gICAgICogU3ludGF4OlxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBhcmcxIGFyZzIgYXJnMy4uLi59fVxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBvYmplY3R9fVxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBrZXkxPXZhbHVlMSBrZXkyPXZhbHVlMi4uLn19XG4gICAgICpcbiAgICAgKiAgQGV4YW1wbGVcbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMhJyAnSGVsbG8nICdLYWJpcicgfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMgJWQgJXMgJWQnICdGb28nICdCYXInIDU1ICdCYXonICcyMCd9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhIEhvdyBhcmUgeW91Pycgb2JqIH19XG4gICAgICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgJyBncmVldGluZz0nSGVsbG8nIG5hbWU9J0thYmlyJ319XG4gICAgICpcbiAgICAgKiBDaGVjayB0aGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZWkvc3ByaW50Zi5qcyBmb3IgbW9yZSBpbmZvcm1hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1hdFxuICAgICAqIEBwYXJhbSAuLi5hcmdzXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc3ByaW50ZjogZnVuY3Rpb24gc3ByaW50Zihmb3JtYXQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB2c3ByaW50ZiBmdW5jdGlvbiBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlIHRoZW4gdHJ5IHRvIHJlcXVpcmUoKSBpdFxuICAgICAgICB2YXIgX3ZzcHJpbnRmID0gZ2xvYmFsLnZzcHJpbnRmO1xuXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc0Z1bmN0aW9uKShfdnNwcmludGYpKSB7XG4gICAgICAgICAgICBfdnNwcmludGYgPSAoe3NwcmludGY6IHdpbmRvdy5zcHJpbnRmLCB2c3ByaW50Zjogd2luZG93LnZzcHJpbnRmfSkudnNwcmludGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3JtYWxpemUgYWxsIHRoZSBwYXJhbWV0ZXJzIGJlZm9yZSBwYXNzaW5nIGl0IHRvIHRoZVxuICAgICAgICAvLyBzcHJpbnRmL3ZzcHJpbnRmIGZ1bmN0aW9uXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcblxuICAgICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKGFyZykgJiYgKDAsIF91dGlscy5pc09iamVjdCkoYXJnLmhhc2gpKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnLmhhc2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGFyZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID4gMCA/IF92c3ByaW50Zihmb3JtYXQsIHBhcmFtcykgOiBmb3JtYXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB7e2xvd2VyY2FzZSAnSlVTVCBXT1chISEnfX0gICA9PiAnanVzdCB3b3chISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgbG93ZXJjYXNlOiBmdW5jdGlvbiBsb3dlcmNhc2UocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHBhcmFtKSA/IHBhcmFtLnRvTG93ZXJDYXNlKCkgOiBwYXJhbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIHVwcGVyY2FzZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHt7dXBwZXJjYXNlICdqdXN0IHdvdyEhISd9fSAgID0+ICdKVVNUIFdPVyEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uIHVwcGVyY2FzZShwYXJhbSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykocGFyYW0pID8gcGFyYW0udG9VcHBlckNhc2UoKSA6IHBhcmFtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gICAgICogICAge3tmaXJzdCBzb21lQXJyYXl9fSAgID0+ICdEYXZpZCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGNvbGxlY3Rpb24pIHx8IGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvblswXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gICAgICogICAge3tsYXN0IHNvbWVBcnJheX19ICAgPT4gJ0pvbmVzJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBsYXN0OiBmdW5jdGlvbiBsYXN0KGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGNvbGxlY3Rpb24pIHx8IGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbltjb2xsZWN0aW9uLmxlbmd0aCAtIDFdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb25jYXQgdHdvIG9yIG1vcmUgc3RyaW5ncy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgbWl4ZWQgLi4ucGFyYW1zXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgcGFyYW1zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEpvaW4gdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IHVzaW5nIGEgZGVsaW1ldGVyLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICB2YXIgc29tZUFycmF5ID0gWydIYW5kcycsICdsZWdzJywgJ2ZlZXQnXTtcbiAgICAgKiAgICB7e2pvaW4gc29tZUFycmF5ICcgJiAnfX0gICA9PiAnSGFuZHMgJiBsZWdzICYgZmVldCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgcGFyYW1zXG4gICAgICogQHBhcmFtICBzdHJpbmcgZGVsaW1ldGVyXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHBhcmFtcywgZGVsaW1ldGVyKSB7XG4gICAgICAgIGlmICghZGVsaW1ldGVyIHx8ICgwLCBfdXRpbHMuaXNPYmplY3QpKGRlbGltZXRlcikpIHtcbiAgICAgICAgICAgIGRlbGltZXRlciA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKHBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuam9pbihkZWxpbWV0ZXIpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQodGhpbmcpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcbiAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRoaW5nKSkgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRoaW5nKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0RlZmluZWQgPSBpc0RlZmluZWQ7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nOyJdfQ==
