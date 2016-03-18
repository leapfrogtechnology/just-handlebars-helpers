(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./helpers/conditionals":2,"./helpers/datetime":3,"./helpers/html":4,"./helpers/math":5,"./helpers/strings":6,"./util/utils":7}],2:[function(require,module,exports){
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

},{"../util/utils":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../util/utils');

exports.default = {

    /**
     * A formatDate helper to format date using moment js.
     *
     * Example usage:
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

},{"../util/utils":7}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * A sum helper calculating the sum of two numbers.
     * Example usage:
     *      {{sum 1 2}} => 3
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
     * Example usage:
     *      {{difference 5 2}} => 3
     *
     * @param value1
     * @param value2
     * @returns number
     */
    difference: function difference(value1, value2) {
        return Number(value1) - Number(value2);
    },

    /**
     * A ceil helper to find the ceil value of the number
     * Example usage:
     *      {{ceil 5.6}} => 6
     *
     * @param value
     * @returns number
     */
    ceil: function ceil(value) {
        return Math.ceil(Number(value));
    },

    /**
     * A floor helper to find the floor value of the number
     * Example usage:
     *      {{floor 5.6}} => 5
     *
     * @param value
     * @returns number
     */
    floor: function floor(value) {
        return Math.floor(Number(value));
    }

};

},{}],6:[function(require,module,exports){
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
        return (0, _utils.isString)(param) ? param.toLowerCase() : param;
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
        return (0, _utils.isString)(param) ? param.toUpperCase() : param;
    },

    /**
     * Get the first element of a collection/array.
     * Example usage:
     * 		var someArray = ['David', 'Miller', 'Jones'];
     * 		{{first someArray}}   => 'David'
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
     * Example usage:
     * 		var someArray = ['David', 'Miller', 'Jones'];
     * 		{{last someArray}}   => 'Jones'
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

        // Ignore the object appended by handlebars.
        if ((0, _utils.isObject)(params[params.length - 1])) {
            params.pop();
        }

        return params.join('');
    },

    /**
     * Join the elements of an array using a delimeter.
     * Example usage:
     * 		var someArray = ['Hands', 'legs', 'feet'];
     * 	    {{join someArray ' & '}}   => 'Hands & legs & feet'
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

},{"../util/utils":7}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzL2NvbmRpdGlvbmFscy5qcyIsInNyYy9oZWxwZXJzL2RhdGV0aW1lLmpzIiwic3JjL2hlbHBlcnMvaHRtbC5qcyIsInNyYy9oZWxwZXJzL21hdGguanMiLCJzcmMvaGVscGVycy9zdHJpbmdzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0VBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU07Ozs7Ozs7d0NBRXFCLFlBQVk7O0FBRS9CLHlCQUFhLGNBQWMsT0FBTyxVQUFQLENBRkk7O0FBSS9CLGdCQUFJLENBQUMscUJBQVMsVUFBVCxDQUFELEVBQXVCOzs7QUFHdkIsc0JBQU0sSUFBSSxLQUFKLENBQVUsdUJBQVYsQ0FBTixDQUh1QjthQUEzQjs7O0FBSitCLGdCQVczQixVQUFVLCtGQUFWLENBWDJCOztBQWEvQixvQkFBUSxPQUFSLENBQWdCLGtCQUFVOztBQUV0QixxQkFBSyxJQUFJLElBQUosSUFBWSxNQUFqQixFQUF5QjtBQUNyQiwrQkFBVyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLE9BQU8sSUFBUCxDQUFoQyxFQURxQjtpQkFBekI7YUFGWSxDQUFoQixDQWIrQjs7OztXQUZqQzs7O2tCQXdCUzs7Ozs7Ozs7Ozs7QUNsQ2Y7O2tCQUVlOzs7Ozs7Ozs7OztBQVdYLFFBQUksWUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUNwQixlQUFRLFdBQVcsTUFBWCxDQURZO0tBQXBCOzs7Ozs7Ozs7OztBQWFKLFNBQUssYUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUNyQixlQUFRLFVBQVUsTUFBVixDQURhO0tBQXBCOzs7Ozs7Ozs7OztBQWFMLFNBQUssYUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUNyQixlQUFRLFdB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QVAsS0FBaUIsVUFBakIsQ0FEZTtDQUEzQjs7Ozs7Ozs7QUFVQSxTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDckIsU0FBUSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsQ0FEYTtDQUF6Qjs7Ozs7Ozs7QUFVQSxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDeEIsU0FBUSxPQUFPLEtBQVAsS0FBaUIsV0FBakIsQ0FEZ0I7Q0FBNUI7Ozs7Ozs7O0FBVUEsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU8sQ0FBQyxZQUFZLEtBQVosQ0FBRCxDQURlO0NBQTFCOzs7Ozs7OztBQVVBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixTQUFRLFFBQU8scURBQVAsS0FBaUIsUUFBakIsQ0FEYTtDQUF6Qjs7Ozs7Ozs7QUFVQSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDcEIsU0FBUSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsTUFBMEMsZ0JBQTFDLENBRFk7Q0FBeEI7O1FBSVE7UUFBWTtRQUFhO1FBQVc7UUFBVTtRQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gVXRpbHNcbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vdXRpbC91dGlscyc7XG5cbi8vIEhlbHBlcnNcbmltcG9ydCBodG1sIGZyb20gJy4vaGVscGVycy9odG1sJztcbmltcG9ydCBtYXRoIGZyb20gJy4vaGVscGVycy9tYXRoJztcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4vaGVscGVycy9zdHJpbmdzJztcbmltcG9ydCBkYXRldGltZSBmcm9tICcuL2hlbHBlcnMvZGF0ZXRpbWUnO1xuaW1wb3J0IGNvbmRpdGlvbmFscyBmcm9tICcuL2hlbHBlcnMvY29uZGl0aW9uYWxzJztcblxuY2xhc3MgSCB7XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJIZWxwZXJzKGhhbmRsZWJhcnMpIHtcblxuICAgICAgICBoYW5kbGViYXJzID0gaGFuZGxlYmFycyB8fCBnbG9iYWwuSGFuZGxlYmFycztcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGhhbmRsZWJhcnMpKSB7XG4gICAgICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBpbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZSBhcyB3ZWxsIHRocm93IHRoZSBlcnJvciBhbmQgaGFsdC5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWxwZXJzIGxpc3RcbiAgICAgICAgbGV0IGhlbHBlcnMgPSBbbWF0aCwgaHRtbCwgc3RyaW5ncywgY29uZGl0aW9uYWxzLCBkYXRldGltZV07XG5cbiAgICAgICAgaGVscGVycy5mb3JFYWNoKGhlbHBlciA9PiB7XG4gICAgICAgICAgICAvLyBSZWdpc3RlciBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgdG8gSGFuZGxlYmFyc1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcltuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSDtcbiIsIlxuaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuLi91dGlsL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09PSkuXG4gICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICogICAgICB7e2VxICczJyAzfX0gICAgPT4gZmFsc2VcbiAgICAqXG4gICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgKi9cbiAgICBlcTogKHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUxID09PSB2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT0pIGkuZSB3ZWFrIGNoZWNraW5nLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tlcXcgJzMnIDN9fSAgID0+IHRydWVcbiAgICAqXG4gICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgKiBAcGFyYW0gdmFsdWUyXG4gICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgKi9cbiAgICBlcXc6ICh2YWx1ZTEsIHZhbHVlMikgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlMSA9PSB2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICogICAgICB7e25lcSA0IDN9fSAgICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgbmVxOiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZTEgIT09IHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT0pIHdlYWsgY2hlY2tpbmcuXG4gICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICogICAgICB7e25lcSAnMycgM319ICAgID0+IGZhbHNlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgbmVxdzogKHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUxICE9IHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBjb25kaXRpb24gKGEgPCBiKS5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgbHQ6ICh2YWx1ZTEsIHZhbHVlMikgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlMSA8IHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgbHRlOiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZTEgPD0gdmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIGNvbmRpdGlvbiAoYSA+IGIpLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZ3Q6ICh2YWx1ZTEsIHZhbHVlMikgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlMSA+IHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tndGUgMyAzfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZ3RlOiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZTEgPj0gdmFsdWUyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICAgICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gICAgKlxuICAgICogQHBhcmFtIGNvbmRpdGlvblxuICAgICogQHBhcmFtIHZhbHVlMVxuICAgICogQHBhcmFtIHZhbHVlMlxuICAgICogQHJldHVybnMgdmFsdWUxIHwgdmFsdWUyXG4gICAgKi9cbiAgICBpZng6IChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiAhIWNvbmRpdGlvbiA/IHZhbHVlMSA6dmFsdWUyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gICAgKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gICAgKlxuICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAqL1xuICAgIG5vdDogZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuICFleHByZXNzaW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAqICAgICAge3tlbXB0eSBhcnJheX19ID0+IHRydWUgfCBmYWxzZVxuICAgICpcbiAgICAqIEBwYXJhbSBhcnJheVxuICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICovXG4gICAgZW1wdHk6IChhcnJheSkgPT4ge1xuICAgICAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoYXJyYXkubGVuZ3RoID09PSAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAgICAqXG4gICAgKiBAcGFyYW0gYXJyYXlcbiAgICAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAgICAqL1xuICAgIGNvdW50OiAoYXJyYXkpID0+IHtcbiAgICAgICAgaWYgKCFpc0FycmF5KGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbiAgICB9XG59O1xuIiwiXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuLi91dGlsL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgLyoqXG4gICAgICogQSBmb3JtYXREYXRlIGhlbHBlciB0byBmb3JtYXQgZGF0ZSB1c2luZyBtb21lbnQganMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tmb3JtYXREYXRlICdNTS9ERC9ZWVlZJyBkYXRlfX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRTdHJpbmcgYmFzZWQgb24gbW9tZW50LmpzXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGZvcm1hdERhdGU6IChmb3JtYXRTdHJpbmcsIGRhdGUpID0+IHtcblxuICAgICAgICBsZXQgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbiAgICAgICAgaWYgKCFtb21lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9tZW50IEpTIGlzIHJlcXVpcmVkIGZvciB0aGlzIGhlbHBlci4gTWFrZSBzdXJlIHlvdSBoYXZlIGxvYWRlZCBtb21lbnQganMgaHR0cDovL21vbWVudGpzLmNvbS8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdFN0cmluZyA9IGlzU3RyaW5nKGZvcm1hdFN0cmluZykgPyBmb3JtYXRTdHJpbmcgOiAnJztcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUgfHwgbmV3IERhdGUoKSkuZm9ybWF0KGZvcm1hdFN0cmluZyk7XG4gICAgfVxufTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e3Nob3dJZiB0cnVlfX0gPT4gJydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2hvd0lmOiAoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBoaWRlSWYgaGVscGVyIGZvciBoaWRpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3toaWRlSWYgdHJ1ZX19ID0+ICdoaWRkZW4nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGhpZGVJZjogKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tzZWxlY3RlZElmIHRydWV9fSA9PiAgJ3NlbGVjdGVkJ1xuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb25cbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzZWxlY3RlZElmOiAoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGNoZWNrZWRJZjogKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xuICAgIH1cblxufTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIEEgc3VtIGhlbHBlciBjYWxjdWxhdGluZyB0aGUgc3VtIG9mIHR3byBudW1iZXJzLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e3N1bSAxIDJ9fSA9PiAzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUxXG4gICAgICogQHBhcmFtIHZhbHVlMlxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIHN1bTogKHZhbHVlMSwgdmFsdWUyKSA9PiB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUxKSArIE51bWJlcih2YWx1ZTIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGRpZmZlcmVuY2UgaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlIG9mIHR3byBudW1iZXJzLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e2RpZmZlcmVuY2UgNSAyfX0gPT4gM1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlMVxuICAgICAqIEBwYXJhbSB2YWx1ZTJcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBkaWZmZXJlbmNlOiAodmFsdWUxLCB2YWx1ZTIpID0+IHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZTEpIC0gTnVtYmVyKHZhbHVlMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgY2VpbCBoZWxwZXIgdG8gZmluZCB0aGUgY2VpbCB2YWx1ZSBvZiB0aGUgbnVtYmVyXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7Y2VpbCA1LjZ9fSA9PiA2XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBjZWlsOiAodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChOdW1iZXIodmFsdWUpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBmbG9vciBoZWxwZXIgdG8gZmluZCB0aGUgZmxvb3IgdmFsdWUgb2YgdGhlIG51bWJlclxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e2Zsb29yIDUuNn19ID0+IDVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIGZsb29yOiAodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuXG59O1xuIiwiXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNTdHJpbmcsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7ZXhjZXJwdCAnSnVzdCBXb3cnIDR9fSAgICA9PiAnSnVzdCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZXhjZXJwdDogKHN0cmluZywgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICAgICAgaWYgKHR5cGVvZihzdHJpbmcpICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YobGVuZ3RoKSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tzYW5pdGl6ZSAnSnVTdCAjV293J319ICAgID0+ICdqdXN0LXdvdydcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzYW5pdGl6ZTogKHN0cmluZykgPT4ge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAgICAgKiBFeGFtcGxlIHVzYWdlOlxuICAgICAqICAgICAge3tjYXBpdGFsaXplRWFjaCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCBXb3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUVhY2g6IChzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0OiAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgc3ByaW50ZiBoZWxwZXIgdG8gYmUgdXNlZCBpbiB0aGUgaGFuZGxlYmFycyB0ZW1wbGF0ZXMgdGhhdCBzdXBwb3J0cyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaGVscGVyIHJlbGllcyBvbiBzcHJpbnRmKCkgZnVuY3Rpb24gcHJvdmlkZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzXG4gICAgICogU28sIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgc3ByaW50Zi1qcyBwYWNrYWdlIGF2YWlsYWJsZSBlaXRoZXIgYXMgYSBub2RlIG1vZHVsZVxuICAgICAqIG9yIGhhdmUgc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBnbG9iYWwgc2NvcGUgZnJvbSB0aGF0IHBhY2thZ2UuXG4gICAgICpcbiAgICAgKiAgU3ludGF4OlxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBhcmcxIGFyZzIgYXJnMy4uLi59fVxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBvYmplY3R9fVxuICAgICAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBrZXkxPXZhbHVlMSBrZXkyPXZhbHVlMi4uLn19XG4gICAgICpcbiAgICAgKiAgRXhhbXBsZSB1c2FnZTpcbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMhJyAnSGVsbG8nICdLYWJpcicgfX1cbiAgICAgKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMgJWQgJXMgJWQnICdGb28nICdCYXInIDU1ICdCYXonICcyMCd9fVxuICAgICAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhIEhvdyBhcmUgeW91Pycgb2JqIH19XG4gICAgICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgJyBncmVldGluZz0nSGVsbG8nIG5hbWU9J0thYmlyJ319XG4gICAgICpcbiAgICAgKiAgQ2hlY2sgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vYWxleGVpL3NwcmludGYuanMgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtYXRcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIHNwcmludGY6IChmb3JtYXQsIC4uLmFyZ3MpID0+IHtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdnNwcmludGYgZnVuY3Rpb24gaXMgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSB0aGVuIHRyeSB0byByZXF1aXJlKCkgaXRcbiAgICAgICAgdmFyIF92c3ByaW50ZiA9IGdsb2JhbC52c3ByaW50ZjtcblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oX3ZzcHJpbnRmKSkge1xuICAgICAgICAgICAgX3ZzcHJpbnRmID0gcmVxdWlyZSgnc3ByaW50Zi1qcycpLnZzcHJpbnRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGFsbCB0aGUgcGFyYW1ldGVycyBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAgICAgICAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSAmJiBpc09iamVjdChhcmcuaGFzaCkpIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmcuaGFzaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChwYXJhbXMubGVuZ3RoID4gMCkgPyBfdnNwcmludGYoZm9ybWF0LCBwYXJhbXMpIDogZm9ybWF0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHRcdHt7bG93ZXJjYXNlICdKVVNUIFdPVyEhISd9fSAgID0+ICdqdXN0IHdvdyEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBsb3dlcmNhc2U6IChwYXJhbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXNTdHJpbmcocGFyYW0pID8gcGFyYW0udG9Mb3dlckNhc2UoKSA6IHBhcmFtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHRcdHt7dXBwZXJjYXNlICdqdXN0IHdvdyEhISd9fSAgID0+ICdKVVNUIFdPVyEhISdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgc3RyaW5nIHBhcmFtXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICB1cHBlcmNhc2U6IChwYXJhbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXNTdHJpbmcocGFyYW0pID8gcGFyYW0udG9VcHBlckNhc2UoKSA6IHBhcmFtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYSBjb2xsZWN0aW9uL2FycmF5LlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHRcdHZhciBzb21lQXJyYXkgPSBbJ0RhdmlkJywgJ01pbGxlcicsICdKb25lcyddO1xuICAgICAqIFx0XHR7e2ZpcnN0IHNvbWVBcnJheX19ICAgPT4gJ0RhdmlkJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBmaXJzdDogKGNvbGxlY3Rpb24pID0+IHtcbiAgICAgICAgaWYoIWlzQXJyYXkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gICAgICogRXhhbXBsZSB1c2FnZTpcbiAgICAgKiBcdFx0dmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gICAgICogXHRcdHt7bGFzdCBzb21lQXJyYXl9fSAgID0+ICdKb25lcydcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYXJyYXkgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgbGFzdDogKGNvbGxlY3Rpb24pID0+IHtcbiAgICAgICAgaWYoIWlzQXJyYXkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uW2NvbGxlY3Rpb24ubGVuZ3RoIC0gMV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHQgICAge3tjb25jYXQgJ0hlbGxvJyAnIHdvcmxkJyAnISEhJ319ICAgPT4gJ0hlbGxvIHdvcmxkISEhJ1xuICAgICAqXG4gICAgICogQHBhcmFtICBtaXhlZCAuLi5wYXJhbXNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGNvbmNhdDogKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgICAgICBpZiAoaXNPYmplY3QocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEpvaW4gdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IHVzaW5nIGEgZGVsaW1ldGVyLlxuICAgICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAgICogXHRcdHZhciBzb21lQXJyYXkgPSBbJ0hhbmRzJywgJ2xlZ3MnLCAnZmVldCddO1xuICAgICAqIFx0ICAgIHt7am9pbiBzb21lQXJyYXkgJyAmICd9fSAgID0+ICdIYW5kcyAmIGxlZ3MgJiBmZWV0J1xuICAgICAqXG4gICAgICogQHBhcmFtICBhcnJheSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gIHN0cmluZyBkZWxpbWV0ZXJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGpvaW46IChwYXJhbXMsIGRlbGltZXRlcikgPT4ge1xuICAgICAgICBpZiAoIWRlbGltZXRlciB8fCBpc09iamVjdChkZWxpbWV0ZXIpKSB7XG4gICAgICAgICAgICBkZWxpbWV0ZXIgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLmpvaW4oZGVsaW1ldGVyKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGhpbmcpIHtcbiAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEFycmF5XScpO1xufVxuXG5leHBvcnQge2lzRnVuY3Rpb24sIGlzVW5kZWZpbmVkLCBpc0RlZmluZWQsIGlzT2JqZWN0LCBpc0FycmF5LCBpc1N0cmluZ31cbiJdfQ==
