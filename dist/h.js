(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _html = require('./helpers/html');

var html = _interopRequireWildcard(_html);

var _strings = require('./helpers/strings');

var strings = _interopRequireWildcard(_strings);

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
        value: function registerHelpers() {
            var handlebars = arguments.length <= 0 || arguments[0] === undefined ? window.Handlebars : arguments[0];


            if (!handlebars) {
                throw new Error('Handlebars not loaded');
            }

            // Helpers list
            var helpers = [html, strings, conditionals];

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

if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    window.H = H;
}

exports.default = H;

},{"./helpers/conditionals":2,"./helpers/html":3,"./helpers/strings":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.count = exports.empty = exports.not = exports.ifx = exports.gte = exports.gt = exports.lte = exports.lt = exports.eqw = exports.eq = undefined;

var _utils = require('../util/utils');

/**
 * Determine whether or not two values are equal (===).
 * Example usage:
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
 * Example usage:
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
 * Check for less than condition (a < b).
 * Example usage:
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
 * Example usage:
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
 * Example usage:
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
 * Example usage:
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
 * Example usage:
 *      {{ifx true 'Foo' 'Bar'}}    => Foo
 *      {{ifx false 'Foo' 'Bar'}}   => Foo
 *
 * @param condition
 * @param value1
 * @param value2
 * @returns value1 | value2
 */
function ifx(condition, value1, value2) {
    return !!condition ? value1 : value2;
}

/**
 * Logical NOT of any expression.
 * Example usage:
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
 * Example usage:
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
 * Example usage:
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

/* Export */
exports.eq = eq;
exports.eqw = eqw;
exports.lt = lt;
exports.lte = lte;
exports.gt = gt;
exports.gte = gte;
exports.ifx = ifx;
exports.not = not;
exports.empty = empty;
exports.count = count;

},{"../util/utils":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A showIf helper for showing any html element.
 * Example usage:
 *      {{showIf true}} => ''
 *
 * @param expression
 * @returns string
 */
function showIf(expression) {
  return !!expression ? '' : 'hidden';
}

/**
 * A hideIf helper for hiding any html element.
 * Example usage:
 *      {{hideIf true}} => 'hidden'
 *
 * @param expression
 * @returns string
 */
function hideIf(expression) {
  return !!expression ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdown and radio boxes.
 * Example usage:
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
 * Example usage:
 *      {{checkedIf true}}  => 'checked'
 *
 * @param expression
 * @returns string
 */
function checkedIf(expression) {
  return !!expression ? 'checked' : '';
}

/* Export */
exports.showIf = showIf;
exports.hideIf = hideIf;
exports.checkedIf = checkedIf;
exports.selectedIf = selectedIf;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Extract a few characters from a string. Default number of characters is 50.
 * Example usage:
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
 * Example usage:
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
 * Capitalize each letter of a string.
 * Example usage:
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
 * Example usage:
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

/* Export */
exports.excerpt = excerpt;
exports.sanitize = sanitize;
exports.capitalizeEach = capitalizeEach;
exports.capitalizeFirst = capitalizeFirst;

},{}],5:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzL2NvbmRpdGlvbmFscy5qcyIsInNyYy9oZWxwZXJzL2h0bWwuanMiLCJzcmMvaGVscGVycy9zdHJpbmdzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBWTs7OztJQUNBOzs7O0lBQ0E7Ozs7OztJQUVOOzs7Ozs7OzBDQUNxRDtnQkFBaEMsbUVBQWEsT0FBTyxVQUFQLGdCQUFtQjs7O0FBRW5ELGdCQUFJLENBQUMsVUFBRCxFQUFhO0FBQ2Isc0JBQU0sSUFBSSxLQUFKLENBQVUsdUJBQVYsQ0FBTixDQURhO2FBQWpCOzs7QUFGbUQsZ0JBTy9DLFVBQVUsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixZQUFoQixDQUFWLENBUCtDOztBQVNuRCxvQkFBUSxPQUFSLENBQWdCLGtCQUFVOztBQUV0QixxQkFBSyxJQUFJLElBQUosSUFBWSxNQUFqQixFQUF5QjtBQUNyQiwrQkFBVyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLE9BQU8sSUFBUCxDQUFoQyxFQURxQjtpQkFBekI7YUFGWSxDQUFoQixDQVRtRDs7OztXQURyRDs7O0FBbUJOLElBQUksUUFBTyx1REFBUCxLQUFrQixRQUFsQixFQUE0QjtBQUM1QixXQUFPLENBQVAsR0FBVyxDQUFYLENBRDRCO0NBQWhDOztrQkFJZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJmLFNBQVMsRUFBVCxDQUFZLE1BQVosRUFBb0IsTUFBcEIsRUFBNEI7QUFDeEIsV0FBUSxXQUFXLE1BQVgsQ0FEZ0I7Q0FBNUI7Ozs7Ozs7Ozs7O0FBYUEsU0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QjtBQUN6QixXQUFRLFVBQVUsTUFBVixDQURpQjtDQUE3Qjs7Ozs7Ozs7Ozs7QUFhQSxTQUFTLEVBQVQsQ0FBWSxNQUFaLEVBQW9CLE1B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QUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLEtBQS9CLE1BQTBDLGdCQUExQyxDQURZO0NBQXhCOztRQUlRO1FBQVk7UUFBYTtRQUFXO1FBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2hlbHBlcnMvaHRtbCc7XG5pbXBvcnQgKiBhcyBzdHJpbmdzIGZyb20gJy4vaGVscGVycy9zdHJpbmdzJztcbmltcG9ydCAqIGFzIGNvbmRpdGlvbmFscyBmcm9tICcuL2hlbHBlcnMvY29uZGl0aW9uYWxzJztcblxuY2xhc3MgSCB7XG4gICAgc3RhdGljIHJlZ2lzdGVySGVscGVycyhoYW5kbGViYXJzID0gd2luZG93LkhhbmRsZWJhcnMpIHtcblxuICAgICAgICBpZiAoIWhhbmRsZWJhcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWxwZXJzIGxpc3RcbiAgICAgICAgbGV0IGhlbHBlcnMgPSBbaHRtbCwgc3RyaW5ncywgY29uZGl0aW9uYWxzXTtcblxuICAgICAgICBoZWxwZXJzLmZvckVhY2goaGVscGVyID0+IHtcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGFsbCB0aGUgaGVscGVyIGZ1bmN0aW9ucyB0byBIYW5kbGViYXJzXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIGluIGhlbHBlcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyW25hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICB3aW5kb3cuSCA9IEg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEg7XG4iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA9PT0gdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA9PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA8IHZhbHVlMik7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA8PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gY29uZGl0aW9uIChhID4gYikuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2d0IDIgM319ICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPiB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPj0gdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gKlxuICogQHBhcmFtIGNvbmRpdGlvblxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgdmFsdWUxIHwgdmFsdWUyXG4gKi9cbmZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICEhY29uZGl0aW9uID8gdmFsdWUxIDp2YWx1ZTI7XG59XG5cbi8qKlxuICogTG9naWNhbCBOT1Qgb2YgYW55IGV4cHJlc3Npb24uXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e25vdCB0cnVlfX0gICAgPT4gZmFsc2VcbiAqICAgICAge3tub3QgZmFsc2V9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBub3QoZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAhZXhwcmVzc2lvbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSA9PiB0cnVlIHwgZmFsc2VcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoYXJyYXkubGVuZ3RoID09PSAwKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAqL1xuZnVuY3Rpb24gY291bnQoYXJyYXkpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xufVxuXG4vKiBFeHBvcnQgKi9cbmV4cG9ydCB7ZXEsIGVxdywgbHQsIGx0ZSwgZ3QsIGd0ZSwgaWZ4LCBub3QsIGVtcHR5LCBjb3VudH1cbiIsIi8qKlxuICogQSBzaG93SWYgaGVscGVyIGZvciBzaG93aW5nIGFueSBodG1sIGVsZW1lbnQuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e3Nob3dJZiB0cnVlfX0gPT4gJydcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNob3dJZihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICcnIDogJ2hpZGRlbic7XG59XG5cbi8qKlxuICogQSBoaWRlSWYgaGVscGVyIGZvciBoaWRpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7aGlkZUlmIHRydWV9fSA9PiAnaGlkZGVuJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ2hpZGRlbicgOiAnJztcbn1cblxuLyoqXG4gKiBBIHNlbGVjdGVkSWYgaGVscGVyIGZvciBkcm9wZG93biBhbmQgcmFkaW8gYm94ZXMuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e3NlbGVjdGVkSWYgdHJ1ZX19ID0+ICAnc2VsZWN0ZWQnXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzZWxlY3RlZElmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgY2hlY2tlZElmIGhlbHBlciBmb3IgY2hlY2tib3hlcy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjaGVja2VkSWYoZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbn1cblxuLyogRXhwb3J0ICovXG5leHBvcnQge3Nob3dJZiwgaGlkZUlmLCBjaGVja2VkSWYsIHNlbGVjdGVkSWZ9O1xuIiwiLyoqXG4gKiBFeHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXhjZXJwdCAnSnVzdCBXb3cnIDR9fSAgICA9PiAnSnVzdCdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbGVuZ3RoXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZXhjZXJwdChzdHJpbmcsIGxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG5cbiAgICBpZiAodHlwZW9mIChzdHJpbmcpICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGxlbmd0aCkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUVhY2ggJ2p1c3Qgd293J319ICAgPT4gJ0p1c3QgV293J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tjYXBpdGFsaXplRmlyc3QgJ2p1c3Qgd293J319ICAgPT4gJ0p1c3Qgd293J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3Qoc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuLyogRXhwb3J0ICovXG5leHBvcnQge2V4Y2VycHQsIHNhbml0aXplLCBjYXBpdGFsaXplRWFjaCwgY2FwaXRhbGl6ZUZpcnN0fVxuIiwiLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodGhpbmcpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRoaW5nKSB7XG4gICAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBBcnJheV0nKTtcbn1cblxuZXhwb3J0IHtpc0Z1bmN0aW9uLCBpc1VuZGVmaW5lZCwgaXNEZWZpbmVkLCBpc09iamVjdCwgaXNBcnJheX1cbiJdfQ==
