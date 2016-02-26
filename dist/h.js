(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _html = require('./helpers/html');

var _html2 = _interopRequireDefault(_html);

var _strings = require('./helpers/strings');

var _strings2 = _interopRequireDefault(_strings);

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

            if (!handlebars && _typeof(global.Handlebars) !== 'object') {
                // In case, handlebars is not provided and it's not available
                // in the global namespace as well throw the error and halt.
                throw new Error('Handlebars not loaded');
            }

            // Helpers list
            var helpers = [_html2.default, _strings2.default, _conditionals2.default];

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

},{"./helpers/conditionals":2,"./helpers/html":3,"./helpers/strings":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../util/utils');

exports.default = {

    /**
    * Determine whether or not two values are equal (===).
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
    *      {{neq '3' 3}}    => false
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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
    * Example usage:
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

},{"../util/utils":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * A showIf helper for showing any html element.
     * Example usage:
     *      {{showIf true}} => ''
     *
     * @param expression
     * @returns string
     */
    showIf: function showIf(expression) {
        return !!expression ? '' : 'hidden';
    },

    /**
     * A hideIf helper for hiding any html element.
     * Example usage:
     *      {{hideIf true}} => 'hidden'
     *
     * @param expression
     * @returns string
     */
    hideIf: function hideIf(expression) {
        return !!expression ? 'hidden' : '';
    },

    /**
     * A selectedIf helper for dropdown and radio boxes.
     * Example usage:
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
     * Example usage:
     *      {{checkedIf true}}  => 'checked'
     *
     * @param expression
     * @returns string
     */
    checkedIf: function checkedIf(expression) {
        return !!expression ? 'checked' : '';
    }

};

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../util/utils');

exports.default = {

    /**
     * Extract a few characters from a string. Default number of characters is 50.
     * Example usage:
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
     * Example usage:
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
     * Example usage:
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
     * Example usage:
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
     *  Syntax:
     *      {{sprintf format arg1 arg2 arg3....}}
     *      {{sprintf format object}}
     *      {{sprintf format key1=value1 key2=value2...}}
     *
     *  Example usage:
     *      {{sprintf '%s %s!' 'Hello' 'Kabir' }}
     *      {{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
     *      {{sprintf '%(greeting)s %(name)s! How are you?' obj }}
     *      {{sprintf '%(greeting)s %(name)s! ' greeting='Hello' name='Kabir'}}
     *
     *  Check this https://github.com/alexei/sprintf.js for more information
     *
     * @param format
     * @param ...args
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
     * Example usage:
     * 		{{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
     *
     * @param  string param
     * @return string
     */
    lowercase: function lowercase(param) {
        return param.toLowerCase();
    },

    /**
     * Changes the string to uppercase.
     * Example usage:
     * 		{{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
     *
     * @param  string param
     * @return string
     */
    uppercase: function uppercase(param) {
        return param.toUpperCase();
    },

    /**
     * Get the first element of a collection/array.
     * Example usage:
     * 		{{first ['David', 'Miller', 'Jones']}}   => 'David'
     *
     * @param  array collection
     * @return string
     */
    first: function first(collection) {
        return collection[0];
    },

    /**
     * Get the last element of a collection/array.
     * Example usage:
     * 		{{last ['David', 'Miller', 'Jones']}}   => 'Jones'
     *
     * @param  array collection
     * @return string
     */
    last: function last(collection) {
        return collection[collection.length - 1];
    },

    /**
     * Concat two or more strings.
     * Example usage:
     * 	    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
     *
     * @param  mixed ...params
     * @return string
     */
    concat: function concat() {
        for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
        }

        var resultString = '';
        for (var i in params) {
            resultString += params[i];
        }

        return resultString;
    },

    /**
     * Join the elements of an array using a delimeter.
     * Example usage:
     * 	    {{join ['Hands', 'legs', 'feet'] ' & '}}   => 'Hands & legs & feet'
     *
     * @param  array params
     * @param  string delimeter
     * @return string
     */
    join: function join() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var delimeter = arguments[1];

        var resultString = '';
        if (params !== null) {
            for (var i = 0; i < params.length; i++) {
                if (i === params.length - 1) {
                    resultString += params[i];
                } else {
                    resultString += params[i] + delimeter;
                }
            }
        }

        return resultString;
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":5}],5:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzL2NvbmRpdGlvbmFscy5qcyIsInNyYy9oZWxwZXJzL2h0bWwuanMiLCJzcmMvaGVscGVycy9zdHJpbmdzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLTTs7Ozs7Ozt3Q0FFcUIsWUFBWTs7QUFFL0IsZ0JBQUksQ0FBQyxVQUFELElBQWUsUUFBTyxPQUFPLFVBQVAsQ0FBUCxLQUE2QixRQUE3QixFQUF1Qzs7O0FBR3RELHNCQUFNLElBQUksS0FBSixDQUFVLHVCQUFWLENBQU4sQ0FIc0Q7YUFBMUQ7OztBQUYrQixnQkFTM0IsVUFBVSwyREFBVixDQVQyQjs7QUFXL0Isb0JBQVEsT0FBUixDQUFnQixrQkFBVTs7QUFFdEIscUJBQUssSUFBSSxJQUFKLElBQVksTUFBakIsRUFBeUI7QUFDckIsK0JBQVcsY0FBWCxDQUEwQixJQUExQixFQUFnQyxPQUFPLElBQVAsQ0FBaEMsRUFEcUI7aUJBQXpCO2FBRlksQ0FBaEIsQ0FYK0I7Ozs7V0FGakM7OztrQkFzQlM7Ozs7Ozs7Ozs7Ozs7a0JDeEJBOzs7Ozs7Ozs7OztBQVdYLFFBQUksWUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUNwQixlQUFRLFdBQVcsTUFBWCxDQURZO0tBQXBCOzs7Ozs7Ozs7OztBQWFKLFNBQUssYUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUNyQixlQUFRLFVBQVUsTUFBVixDQURhO0tBQXBCOzs7Ozs7Ozs7OztBQWFMLFNBQUssYUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUNyQixlQUFRLFdBQVcsTUFBWCxDQURhO0tBQXBCOzs7Ozs7Ozs7OztBQWFMLFVBQU0sY0FBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUN0QixlQUFRLFVBQVUsTUFBVixDQURjO0tBQXBC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NEI7QUFDeEIsU0FBUSxPQUFPLEtBQVAsS0FBaUIsV0FBakIsQ0FEZ0I7Q0FBNUI7Ozs7Ozs7O0FBVUEsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU8sQ0FBQyxZQUFZLEtBQVosQ0FBRCxDQURlO0NBQTFCOzs7Ozs7OztBQVVBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixTQUFRLFFBQU8scURBQVAsS0FBaUIsUUFBakIsQ0FEYTtDQUF6Qjs7Ozs7Ozs7QUFVQSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDcEIsU0FBUSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsTUFBMEMsZ0JBQTFDLENBRFk7Q0FBeEI7O1FBSVE7UUFBWTtRQUFhO1FBQVc7UUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCBodG1sIGZyb20gJy4vaGVscGVycy9odG1sJztcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4vaGVscGVycy9zdHJpbmdzJztcbmltcG9ydCBjb25kaXRpb25hbHMgZnJvbSAnLi9oZWxwZXJzL2NvbmRpdGlvbmFscyc7XG5cbmNsYXNzIEgge1xuXG4gICAgc3RhdGljIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzKSB7XG5cbiAgICAgICAgaWYgKCFoYW5kbGViYXJzICYmIHR5cGVvZiBnbG9iYWwuSGFuZGxlYmFycyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2UsIGhhbmRsZWJhcnMgaXMgbm90IHByb3ZpZGVkIGFuZCBpdCdzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGFzIHdlbGwgdGhyb3cgdGhlIGVycm9yIGFuZCBoYWx0LlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGViYXJzIG5vdCBsb2FkZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhlbHBlcnMgbGlzdFxuICAgICAgICBsZXQgaGVscGVycyA9IFtodG1sLCBzdHJpbmdzLCBjb25kaXRpb25hbHNdO1xuXG4gICAgICAgIGhlbHBlcnMuZm9yRWFjaChoZWxwZXIgPT4ge1xuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHRvIEhhbmRsZWJhcnNcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gaGVscGVyKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJbbmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEg7XG4iLCJcbmltcG9ydCB7aXNBcnJheX0gZnJvbSAnLi4vdXRpbC91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tlcSAnMycgM319ICAgID0+IGZhbHNlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZXE6ICh2YWx1ZTEsIHZhbHVlMikgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlMSA9PT0gdmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZy5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZXF3OiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZTEgPT0gdmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPT0pLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tuZXEgNCAzfX0gICAgPT4gdHJ1ZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIG5lcTogKHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUxICE9PSB2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9KSB3ZWFrIGNoZWNraW5nLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tuZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIG5lcXc6ICh2YWx1ZTEsIHZhbHVlMikgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlMSAhPSB2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGx0OiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZTEgPCB2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENoZWNrIGZvciBsZXNzIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKS5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7bHRlIDIgM319ICAgPT4gdHJ1ZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGx0ZTogKHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUxIDw9IHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBjb25kaXRpb24gKGEgPiBiKS5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7Z3QgMiAzfX0gICA9PiBmYWxzZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGd0OiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZTEgPiB2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICAgICpcbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGd0ZTogKHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUxID49IHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogSGVscGVyIHRvIGltaXRhdGUgdGhlIHRlcm5hcnkgY29uZGl0aW9uYWwgb3BlcmF0b3IgPzpcbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7aWZ4IHRydWUgJ0ZvbycgJ0Jhcid9fSAgICA9PiBGb29cbiAgICAqICAgICAge3tpZnggZmFsc2UgJ0ZvbycgJ0Jhcid9fSAgID0+IEZvb1xuICAgICpcbiAgICAqIEBwYXJhbSBjb25kaXRpb25cbiAgICAqIEBwYXJhbSB2YWx1ZTFcbiAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAqIEByZXR1cm5zIHZhbHVlMSB8IHZhbHVlMlxuICAgICovXG4gICAgaWZ4OiAoY29uZGl0aW9uLCB2YWx1ZTEsIHZhbHVlMikgPT4ge1xuICAgICAgICByZXR1cm4gISFjb25kaXRpb24gPyB2YWx1ZTEgOnZhbHVlMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBMb2dpY2FsIE5PVCBvZiBhbnkgZXhwcmVzc2lvbi5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7bm90IHRydWV9fSAgICA9PiBmYWxzZVxuICAgICogICAgICB7e25vdCBmYWxzZX19ICAgPT4gdHJ1ZVxuICAgICpcbiAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgKi9cbiAgICBub3Q6IGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiAhZXhwcmVzc2lvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBDaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eS5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSA9PiB0cnVlIHwgZmFsc2VcbiAgICAqXG4gICAgKiBAcGFyYW0gYXJyYXlcbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIGVtcHR5OiAoYXJyYXkpID0+IHtcbiAgICAgICAgaWYgKCFpc0FycmF5KGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGFycmF5Lmxlbmd0aCA9PT0gMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG4gICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICogICAgICB7e2NvdW50IGFycmF5fX0gPT4gIGZhbHNlIHwgYXJyYXkubGVuZ3RoXG4gICAgKlxuICAgICogQHBhcmFtIGFycmF5XG4gICAgKiBAcmV0dXJucyBib29sZWFuIHwgbnVtYmVyXG4gICAgKi9cbiAgICBjb3VudDogKGFycmF5KSA9PiB7XG4gICAgICAgIGlmICghaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG4gICAgfVxufTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e3Nob3dJZiB0cnVlfX0gPT4gJydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2hvd0lmOiAoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBoaWRlSWYgaGVscGVyIGZvciBoaWRpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3toaWRlSWYgdHJ1ZX19ID0+ICdoaWRkZW4nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGhpZGVJZjogKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzZWxlY3RlZElmOiAoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGNoZWNrZWRJZjogKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xuICAgIH1cblxufTtcbiIsIlxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7ZXhjZXJwdCAnSnVzdCBXb3cnIDR9fSAgICA9PiAnSnVzdCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZXhjZXJwdDogKHN0cmluZywgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICAgICAgaWYgKHR5cGVvZihzdHJpbmcpICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YobGVuZ3RoKSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tzYW5pdGl6ZSAnSnVTdCAjV293J319ICAgID0+ICdqdXN0LXdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzYW5pdGl6ZTogKHN0cmluZykgPT4ge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tjYXBpdGFsaXplRWFjaCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCBXb3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUVhY2g6IChzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0OiAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc3ByaW50ZiBoZWxwZXIgdG8gYmUgdXNlZCBpbiB0aGUgaGFuZGxlYmFycyB0ZW1wbGF0ZXMgdGhhdCBzdXBwb3J0cyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaGVscGVyIHJlbGllcyBvbiBzcHJpbnRmKCkgZnVuY3Rpb24gcHJvdmlkZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzXG4gICAgICogU28sIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgc3ByaW50Zi1qcyBwYWNrYWdlIGF2YWlsYWJsZSBlaXRoZXIgYXMgYSBub2RlIG1vZHVsZVxuICAgICAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gICAgICpcbiAgICAgKiAgU3ludGF4OlxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBhcmcxIGFyZzIgYXJnMy4uLi59fVxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBvYmplY3R9fVxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBrZXkxPXZhbHVlMSBrZXkyPXZhbHVlMi4uLn19XG4gICAgICpcbiAgICAgKiAgRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMhJyAnSGVsbG8nICdLYWJpcicgfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMgJWQgJXMgJWQnICdGb28nICdCYXInIDU1ICdCYXonICcyMCd9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhIEhvdyBhcmUgeW91Pycgb2JqIH19XG4gICAgICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgJyBncmVldGluZz0nSGVsbG8nIG5hbWU9J0thYmlyJ319XG4gICAgICpcbiAgICAgKiAgQ2hlY2sgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIHNwcmludGY6IChmb3JtYXQsIC4uLmFyZ3MpID0+IHtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdnNwcmludGYgZnVuY3Rpb24gaXMgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSB0aGVuIHRyeSB0byByZXF1aXJlKCkgaXRcbiAgICAgICAgdmFyIF92c3ByaW50ZiA9IGdsb2JhbC52c3ByaW50ZjtcblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oX3ZzcHJpbnRmKSkge1xuICAgICAgICAgICAgX3ZzcHJpbnRmID0gcmVxdWlyZSgnc3ByaW50Zi1qcycpLnZzcHJpbnRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgICAgICAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSAmJiBpc09iamVjdChhcmcuaGFzaCkpIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmcuaGFzaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChwYXJhbXMubGVuZ3RoID4gMCkgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHRcdHt7bG93ZXJjYXNlICdKVVNUIFdPVyEhISd9fSAgID0+ICdqdXN0IHdvdyEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBsb3dlcmNhc2U6IChwYXJhbSkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW0udG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIHVwcGVyY2FzZS5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqIFx0XHR7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBwYXJhbVxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgdXBwZXJjYXNlOiAocGFyYW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmFtLnRvVXBwZXJDYXNlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiBcdFx0e3tmaXJzdCBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddfX0gICA9PiAnRGF2aWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGZpcnN0OiAoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvblswXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHRcdHt7bGFzdCBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddfX0gICA9PiAnSm9uZXMnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGxhc3Q6IChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uW2NvbGxlY3Rpb24ubGVuZ3RoIC0gMV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHQgICAge3tjb25jYXQgJ0hlbGxvJyAnIHdvcmxkJyAnISEhJ319ICAgPT4gJ0hlbGxvIHdvcmxkISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBtaXhlZCAuLi5wYXJhbXNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGNvbmNhdDogKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICB2YXIgcmVzdWx0U3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFyYW1zW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSm9pbiB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgdXNpbmcgYSBkZWxpbWV0ZXIuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiBcdCAgICB7e2pvaW4gWydIYW5kcycsICdsZWdzJywgJ2ZlZXQnXSAnICYgJ319ICAgPT4gJ0hhbmRzICYgbGVncyAmIGZlZXQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFycmF5IHBhcmFtc1xuICAgICAqIEBwYXJhbSAgc3RyaW5nIGRlbGltZXRlclxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgam9pbjogKHBhcmFtcyA9IFtdLCBkZWxpbWV0ZXIpID0+IHtcbiAgICAgICAgdmFyIHJlc3VsdFN0cmluZyA9ICcnO1xuICAgICAgICBpZiAocGFyYW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAocGFyYW1zLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBwYXJhbXNbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IHBhcmFtc1tpXSArIGRlbGltZXRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGhpbmcpIHtcbiAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEFycmF5XScpO1xufVxuXG5leHBvcnQge2lzRnVuY3Rpb24sIGlzVW5kZWZpbmVkLCBpc0RlZmluZWQsIGlzT2JqZWN0LCBpc0FycmF5fVxuIl19
