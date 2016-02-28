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
exports.count = exports.empty = exports.not = exports.ifx = exports.gte = exports.gt = exports.lte = exports.lt = exports.neqw = exports.neq = exports.eqw = exports.eq = undefined;

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
 * Determine whether or not two values are not equal (!==).
 * Example usage:
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
 * Example usage:
 *      {{neq '3' 3}}    => false
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

/**
 * Concat two or more strings.
 * Example usage:
 * 	    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
 *
 * @param  mixed ...params
 * @return string
 */
function concat() {
    var resultString = '';

    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    for (var i = 0; i < params.length; i++) {
        resultString += params[i];
    }

    return resultString;
}

/**
 * Join the elements of an array using a delimeter.
 * Example usage:
 * 	    {{join ['Hands', 'legs', 'feet'] ' & '}}   => 'Hands & legs & feet'
 *
 * @param  array params
 * @param  string delimeter
 * @return string
 */
function join() {
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

/* Export */
exports.join = join;
exports.concat = concat;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzL2NvbmRpdGlvbmFscy5qcyIsInNyYy9oZWxwZXJzL2h0bWwuanMiLCJzcmMvaGVscGVycy9zdHJpbmdzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBWTs7OztJQUNBOzs7O0lBQ0E7Ozs7OztJQUVOOzs7Ozs7OzBDQUNxRDtnQkFBaEMsbUVBQWEsT0FBTyxVQUFQLGdCQUFtQjs7O0FBRW5ELGdCQUFJLENBQUMsVUFBRCxFQUFhO0FBQ2Isc0JBQU0sSUFBSSxLQUFKLENBQVUsdUJBQVYsQ0FBTixDQURhO2FBQWpCOzs7QUFGbUQsZ0JBTy9DLFVBQVUsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixZQUFoQixDQUFWLENBUCtDOztBQVNuRCxvQkFBUSxPQUFSLENBQWdCLGtCQUFVOztBQUV0QixxQkFBSyxJQUFJLElBQUosSUFBWSxNQUFqQixFQUF5QjtBQUNyQiwrQkFBVyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLE9BQU8sSUFBUCxDQUFoQyxFQURxQjtpQkFBekI7YUFGWSxDQUFoQixDQVRtRDs7OztXQURyRDs7O0FBbUJOLElBQUksUUFBTyx1REFBUCxLQUFrQixRQUFsQixFQUE0QjtBQUM1QixXQUFPLENBQVAsR0FBVyxDQUFYLENBRDRCO0NBQWhDOztrQkFJZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJmLFNBQVMsRUFBVCxDQUFZLE1BQVosRUFBb0IsTUFBcEIsRUFBNEI7QUFDeEIsV0FBUSxXQUFXLE1BQVgsQ0FEZ0I7Q0FBNUI7Ozs7Ozs7Ozs7O0FBYUEsU0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QjtBQUN6QixXQUFRLFVBQVUsTUFBVixDQURpQjtDQUE3Qjs7Ozs7Ozs7Ozs7QUFjQSxTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLE1B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b24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi9oZWxwZXJzL2h0bWwnO1xuaW1wb3J0ICogYXMgc3RyaW5ncyBmcm9tICcuL2hlbHBlcnMvc3RyaW5ncyc7XG5pbXBvcnQgKiBhcyBjb25kaXRpb25hbHMgZnJvbSAnLi9oZWxwZXJzL2NvbmRpdGlvbmFscyc7XG5cbmNsYXNzIEgge1xuICAgIHN0YXRpYyByZWdpc3RlckhlbHBlcnMoaGFuZGxlYmFycyA9IHdpbmRvdy5IYW5kbGViYXJzKSB7XG5cbiAgICAgICAgaWYgKCFoYW5kbGViYXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGVscGVycyBsaXN0XG4gICAgICAgIGxldCBoZWxwZXJzID0gW2h0bWwsIHN0cmluZ3MsIGNvbmRpdGlvbmFsc107XG5cbiAgICAgICAgaGVscGVycy5mb3JFYWNoKGhlbHBlciA9PiB7XG4gICAgICAgICAgICAvLyBSZWdpc3RlciBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgdG8gSGFuZGxlYmFyc1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcltuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgd2luZG93LkggPSBIO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIO1xuIiwiaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuLi91dGlsL3V0aWxzJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09PSkuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2VxICczJyAzfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPT09IHZhbHVlMik7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmcuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2VxdyAnMycgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPT0gdmFsdWUyKTtcbn1cblxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBub3QgZXF1YWwgKCE9PSkuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e25lcSA0IDN9fSAgICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBuZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSAhPT0gdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPSkgd2VhayBjaGVja2luZy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7bmVxICczJyAzfX0gICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIG5lcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSAhPSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBsZXNzIHRoYW4gY29uZGl0aW9uIChhIDwgYikuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA8IHZhbHVlMik7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA8PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gY29uZGl0aW9uIChhID4gYikuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2d0IDIgM319ICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPiB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPj0gdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tpZnggdHJ1ZSAnRm9vJyAnQmFyJ319ICAgID0+IEZvb1xuICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gKlxuICogQHBhcmFtIGNvbmRpdGlvblxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgdmFsdWUxIHwgdmFsdWUyXG4gKi9cbmZ1bmN0aW9uIGlmeChjb25kaXRpb24sIHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICEhY29uZGl0aW9uID8gdmFsdWUxIDp2YWx1ZTI7XG59XG5cbi8qKlxuICogTG9naWNhbCBOT1Qgb2YgYW55IGV4cHJlc3Npb24uXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e25vdCB0cnVlfX0gICAgPT4gZmFsc2VcbiAqICAgICAge3tub3QgZmFsc2V9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBub3QoZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAhZXhwcmVzc2lvbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSA9PiB0cnVlIHwgZmFsc2VcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoYXJyYXkubGVuZ3RoID09PSAwKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y291bnQgYXJyYXl9fSA9PiAgZmFsc2UgfCBhcnJheS5sZW5ndGhcbiAqXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEByZXR1cm5zIGJvb2xlYW4gfCBudW1iZXJcbiAqL1xuZnVuY3Rpb24gY291bnQoYXJyYXkpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xufVxuXG4vKiBFeHBvcnQgKi9cbmV4cG9ydCB7ZXEsIGVxdywgbmVxLCBuZXF3LCBsdCwgbHRlLCBndCwgZ3RlLCBpZngsIG5vdCwgZW1wdHksIGNvdW50fVxuIiwiLyoqXG4gKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGh0bWwgZWxlbWVudC5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2hvd0lmIHRydWV9fSA9PiAnJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc2hvd0lmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbn1cblxuLyoqXG4gKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3toaWRlSWYgdHJ1ZX19ID0+ICdoaWRkZW4nXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBoaWRlSWYoZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnaGlkZGVuJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3duIGFuZCByYWRpbyBib3hlcy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2VsZWN0ZWRJZiB0cnVlfX0gPT4gICdzZWxlY3RlZCdcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGVkSWYoZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnc2VsZWN0ZWQnIDogJyc7XG59XG5cbi8qKlxuICogQSBjaGVja2VkSWYgaGVscGVyIGZvciBjaGVja2JveGVzLlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tjaGVja2VkSWYgdHJ1ZX19ICA9PiAnY2hlY2tlZCdcbiAqXG4gKiBAcGFyYW0gZXhwcmVzc2lvblxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNoZWNrZWRJZihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbiA/ICdjaGVja2VkJyA6ICcnO1xufVxuXG4vKiBFeHBvcnQgKi9cbmV4cG9ydCB7c2hvd0lmLCBoaWRlSWYsIGNoZWNrZWRJZiwgc2VsZWN0ZWRJZn07XG4iLCIvKipcbiAqIEV4dHJhY3QgYSBmZXcgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLiBEZWZhdWx0IG51bWJlciBvZiBjaGFyYWN0ZXJzIGlzIDUwLlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19ICAgID0+ICdKdXN0J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsZW5ndGhcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBleGNlcnB0KHN0cmluZywgbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcblxuICAgIGlmICh0eXBlb2Yoc3RyaW5nKSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mKGxlbmd0aCkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUVhY2ggJ2p1c3Qgd293J319ICAgPT4gJ0p1c3QgV293J1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnanVzdCB3b3cnfX0gICA9PiAnSnVzdCB3b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIENvbmNhdCB0d28gb3IgbW9yZSBzdHJpbmdzLlxuICogRXhhbXBsZSB1c2FnZTpcbiAqIFx0ICAgIHt7Y29uY2F0ICdIZWxsbycgJyB3b3JsZCcgJyEhISd9fSAgID0+ICdIZWxsbyB3b3JsZCEhISdcbiAqXG4gKiBAcGFyYW0gIG1peGVkIC4uLnBhcmFtc1xuICogQHJldHVybiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLnBhcmFtcykge1xuICAgIHZhciByZXN1bHRTdHJpbmcgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFyYW1zW2ldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRTdHJpbmc7XG59XG5cbi8qKlxuICogSm9pbiB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgdXNpbmcgYSBkZWxpbWV0ZXIuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogXHQgICAge3tqb2luIFsnSGFuZHMnLCAnbGVncycsICdmZWV0J10gJyAmICd9fSAgID0+ICdIYW5kcyAmIGxlZ3MgJiBmZWV0J1xuICpcbiAqIEBwYXJhbSAgYXJyYXkgcGFyYW1zXG4gKiBAcGFyYW0gIHN0cmluZyBkZWxpbWV0ZXJcbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGpvaW4ocGFyYW1zID0gW10sIGRlbGltZXRlcikge1xuICAgIHZhciByZXN1bHRTdHJpbmcgPSAnJztcbiAgICBpZiAocGFyYW1zICE9PSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gKHBhcmFtcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBwYXJhbXNbaV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBwYXJhbXNbaV0gKyBkZWxpbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xufVxuXG4vKiBFeHBvcnQgKi9cbmV4cG9ydCB7XG4gICAgam9pbixcbiAgICBjb25jYXQsXG4gICAgZXhjZXJwdCxcbiAgICBzYW5pdGl6ZSxcbiAgICBjYXBpdGFsaXplRWFjaCxcbiAgICBjYXBpdGFsaXplRmlyc3QsXG59XG4iLCIvKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgbm90IHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGhpbmcpIHtcbiAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEFycmF5XScpO1xufVxuXG5leHBvcnQge2lzRnVuY3Rpb24sIGlzVW5kZWZpbmVkLCBpc0RlZmluZWQsIGlzT2JqZWN0LCBpc0FycmF5fVxuIl19
