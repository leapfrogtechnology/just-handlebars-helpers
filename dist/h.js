(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('./helpers.js');

var helpers = _interopRequireWildcard(_helpers);

var _utils = require('./util/utils.js');

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

            // Register all the helper functions to Handlebars
            for (var name in helpers) {
                handlebars.registerHelper(name, helpers[name]);
            }
        }
    }]);

    return H;
}();

if ((0, _utils.isObject)(window)) {
    window.H = H;
}

exports.default = H;

},{"./helpers.js":2,"./util/utils.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.capitalizeFirst = exports.capitalizeEach = exports.selectedIf = exports.checkedIf = exports.dashCase = exports.excerpt = exports.hideIf = exports.showIf = exports.empty = exports.not = exports.ifx = exports.gte = exports.gt = exports.lte = exports.lt = exports.eqw = exports.eq = undefined;

var _utils = require('./util/utils.js');

/**
 * An excerpt helper to extract a few characters from a string. Default number of characters is 50.
 *
 * Example usage:
 *      {{excerpt 'Just Wow' 4}}
 *
 * @param string
 * @param length
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
};

/**
 * A dashCase helper to convert a string to dash-case. This helper will also remove
 * special characters and make the string lowercase.
 *
 * Example usage:
 *      {{dashCase 'JuSt #Wow'}}
 *
 * @param string param
 */
function dashCase(param) {
    var string = param.replace(/[^\w\s]/gi, '').trim();

    return string.replace(/\s+/, '-').toLowerCase();
}

/**
 * A capitalizeEach helper to capitalize each letter of a string.
 *
 * Example usage:
 *      {{capitalizeEach 'just wow'}}
 *
 * @param string param
 */
function capitalizeEach(param) {
    if (typeof param === 'string') {
        return param.toLowerCase().replace(/\w\S*/g, function (match) {
            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    }

    return param;
}

/**
 * A capitalizeFirst helper to capitalize the first letter of a string.
 *
 * Example usage:
 *      {{capitalizeFirst 'wow'}}
 *
 * @param string param
 */
function capitalizeFirst(param) {
    if (typeof param === 'string') {
        return param.charAt(0).toUpperCase() + param.slice(1);
    }

    return param;
}

/**
 * A showIf helper for showing any element if the passed parameter holds true.
 *
 * Example usage:
 *      {{showIf itShouldBeVisible}}
 *
 * @param param value to be checked
 */
function showIf(param) {
    return !!param ? '' : 'hidden';
}

/**
 * A hideIf helper for hiding any element if the passed parameter holds true.
 *
 * Example usage:
 *      {{hideIf directLease}}
 *
 * @param param value to be checked
 */
function hideIf(param) {
    return !!param ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdowns and radio boxes.
 *
 * Example usage:
 *      {{selectedIf booleanValue}}
 *      {{selectedIf eq(value 3)}}
 *
 * @param value
 */
function selectedIf(value) {
    return !!value ? 'selected' : '';
}

/**
 * A checkedIf helper for checkboxes.
 *
 * Example usage:
 *      {{checkedIf booleanValue}}
 *      {{checkedIf eq(value 3)}}
 *
 * @param value
 */
function checkedIf(value) {
    return !!value ? 'checked' : '';
}

/**
 * Returns boolean to determine whether or not two values are equal (===)
 * TODO: Move this to separate file conditionals.js or something like that
 *
 * Example usage:
 *      {{eq value 3}}
 *
 * @param value1
 * @param value2
 */
function eq(value1, value2) {
    return value1 === value2;
}

/**
 * Returns boolean to determine whether or not two values are equal (==) i.e weak checking
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{eqw '3' 3}}   => true
 *
 * @param value1
 * @param value2
 */
function eqw(value1, value2) {
    return value1 == value2;
}

/**
 * Returns boolean to check for Less Than condition (a < b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{lt 2 3}}   => true
 *
 * @param value1
 * @param value2
 */
function lt(value1, value2) {
    return value1 < value2;
}

/**
 * Returns boolean to check for Less Than Or Equals condition (a <= b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{lte 2 3}}   => true
 *
 * @param value1
 * @param value2
 */
function lte(value1, value2) {
    return value1 <= value2;
}

/**
 * Returns boolean to check for Greater Than condition (a > b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{gt 2 3}}   => false
 *
 * @param value1
 * @param value2
 */
function gt(value1, value2) {
    return value1 > value2;
}

/**
 * Returns boolean to check for Greater Than Or Equals condition (a >= b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{gte 3 3}}   => true
 *
 * @param value1
 * @param value2
 */
function gte(value1, value2) {
    return value1 >= value2;
}

/**
 * Helper to imitate the ternary conditional operator ?:
 *
 * Example usage:
 *      {{ifx true 'Foo' 'Bar'}}   => Foo
 *      {{ifx false 'Foo' 'Bar'}}   => Foo
 *
 * @param condition
 * @param value1
 * @param value2
 */
function ifx(condition, value1, value2) {
    return !!condition ? value1 : value2;
}

/**
 * Returns the Logical NOT of any expression
 *
 * Example usage:
 *      {{not true}}    => false
 *      {{not false}}   => true
 */
function not(expression) {
    return !expression;
}

/**
 * Checks if an array is empty
 *
 * Example usage:
 *      {{empty array}}         => true or false
 */
function empty(array) {
    if (!(0, _utils.isArray)(array)) {
        return true;
    }

    return array.length === 0;
}

exports.eq = eq;
exports.eqw = eqw;
exports.lt = lt;
exports.lte = lte;
exports.gt = gt;
exports.gte = gte;
exports.ifx = ifx;
exports.not = not;
exports.empty = empty;
exports.showIf = showIf;
exports.hideIf = hideIf;
exports.excerpt = excerpt;
exports.dashCase = dashCase;
exports.checkedIf = checkedIf;
exports.selectedIf = selectedIf;
exports.capitalizeEach = capitalizeEach;
exports.capitalizeFirst = capitalizeFirst;

},{"./util/utils.js":3}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

function isFunction(thing) {
    return typeof thing === 'function';
}

function isUndefined(thing) {
    return typeof thing === 'undefined';
}

function isDefined(thing) {
    return !isUndefined(thing);
}

function isObject(thing) {
    return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
}

function isArray(thing) {
    return Object.prototype.toString.call(thing) === '[object Array]';
}

exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.isArray = isArray;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQ1k7Ozs7Ozs7O0lBR047Ozs7Ozs7MENBQ3FEO2dCQUFoQyxtRUFBYSxPQUFPLFVBQVAsZ0JBQW1COzs7QUFFbkQsZ0JBQUksQ0FBQyxVQUFELEVBQWE7QUFDYixzQkFBTSxJQUFJLEtBQUosQ0FBVSx1QkFBVixDQUFOLENBRGE7YUFBakI7OztBQUZtRCxpQkFPOUMsSUFBSSxJQUFKLElBQVksT0FBakIsRUFBMEI7QUFDdEIsMkJBQVcsY0FBWCxDQUEwQixJQUExQixFQUFnQyxRQUFRLElBQVIsQ0FBaEMsRUFEc0I7YUFBMUI7Ozs7V0FSRjs7O0FBY04sSUFBSSxXQWhCSSxTQWdCSixDQUFTLE1BQVQsQ0FBSixFQUFzQjtBQUNsQixXQUFPLENBQVAsR0FBVyxDQUFYLENBRGtCO0NBQXRCOztrQkFJZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGYsU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDO0FBQzdCLGFBQVMsU0FBUyxNQUFULEtBQW9CLEVBQXBCLENBRG9COztBQUc3QixRQUFJLE9BQVEsTUFBUixLQUFvQixRQUFwQixJQUFnQyxPQUFRLE1BQVIsS0FBb0IsUUFBcEIsRUFBOEI7QUFDOUQsZUFBTyxNQUFQLENBRDhEO0tBQWxFOztBQUlBLFFBQUksT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEVBQXdCO0FBQ3hCLGVBQU8sTUFBUCxDQUR3QjtLQUE1Qjs7QUFJQSxXQUFPLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsTUFBaEIsSUFBMEIsS0FBMUIsQ0FYc0I7Q0FBakM7Ozs7Ozs7Ozs7O0FBdUJBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixRQUFJLFNBQVMsTUFBTSxPQUFOLENBQWMs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QUFpQjtBQUNqQixlQUFPLElBQVAsQ0FEaUI7S0FBckI7O0FBSUEsV0FBUSxNQUFNLE1BQU4sS0FBaUIsQ0FBakIsQ0FMVTtDQUF0Qjs7UUFTSTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7OztBQ3hRSixTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDdkIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsVUFBakIsQ0FEZTtDQUEzQjs7QUFJQSxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDeEIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsV0FBakIsQ0FEZ0I7Q0FBNUI7O0FBSUEsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLFdBQU8sQ0FBQyxZQUFZLEtBQVosQ0FBRCxDQURlO0NBQTFCOztBQUlBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixXQUFRLFFBQU8scURBQVAsS0FBaUIsUUFBakIsQ0FEYTtDQUF6Qjs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDcEIsV0FBUSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsTUFBMEMsZ0JBQTFDLENBRFk7Q0FBeEI7O1FBSVE7UUFBWTtRQUFhO1FBQVc7UUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vdXRpbC91dGlscy5qcyc7XG5cbmNsYXNzIEgge1xuICAgIHN0YXRpYyByZWdpc3RlckhlbHBlcnMoaGFuZGxlYmFycyA9IHdpbmRvdy5IYW5kbGViYXJzKSB7XG5cbiAgICAgICAgaWYgKCFoYW5kbGViYXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHRvIEhhbmRsZWJhcnNcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBoZWxwZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcnNbbmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pZiAoaXNPYmplY3Qod2luZG93KSkge1xuICAgIHdpbmRvdy5IID0gSDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSDtcbiIsImltcG9ydCB7aXNBcnJheX0gZnJvbSAnLi91dGlsL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBbiBleGNlcnB0IGhlbHBlciB0byBleHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2V4Y2VycHQgJ0p1c3QgV293JyA0fX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGV4Y2VycHQoc3RyaW5nLCBsZW5ndGgpIHtcbiAgICBsZW5ndGggPSBwYXJzZUludChsZW5ndGgpIHx8IDUwO1xuXG4gICAgaWYgKHR5cGVvZiAoc3RyaW5nKSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIChsZW5ndGgpICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsZW5ndGgpICsgJy4uLic7XG59O1xuXG4vKipcbiAqIEEgZGFzaENhc2UgaGVscGVyIHRvIGNvbnZlcnQgYSBzdHJpbmcgdG8gZGFzaC1jYXNlLiBUaGlzIGhlbHBlciB3aWxsIGFsc28gcmVtb3ZlXG4gKiBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1ha2UgdGhlIHN0cmluZyBsb3dlcmNhc2UuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tkYXNoQ2FzZSAnSnVTdCAjV293J319XG4gKlxuICogQHBhcmFtIHN0cmluZyBwYXJhbVxuICovXG5mdW5jdGlvbiBkYXNoQ2FzZShwYXJhbSkge1xuICAgIHZhciBzdHJpbmcgPSBwYXJhbS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogQSBjYXBpdGFsaXplRWFjaCBoZWxwZXIgdG8gY2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fVxuICpcbiAqIEBwYXJhbSBzdHJpbmcgcGFyYW1cbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2gocGFyYW0pIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyYW0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG59XG5cbi8qKlxuICogQSBjYXBpdGFsaXplRmlyc3QgaGVscGVyIHRvIGNhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnd293J319XG4gKlxuICogQHBhcmFtIHN0cmluZyBwYXJhbVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3QocGFyYW0pIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyYW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwYXJhbS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG59XG5cbi8qKlxuICogQSBzaG93SWYgaGVscGVyIGZvciBzaG93aW5nIGFueSBlbGVtZW50IGlmIHRoZSBwYXNzZWQgcGFyYW1ldGVyIGhvbGRzIHRydWUuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tzaG93SWYgaXRTaG91bGRCZVZpc2libGV9fVxuICpcbiAqIEBwYXJhbSBwYXJhbSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKi9cbmZ1bmN0aW9uIHNob3dJZihwYXJhbSkge1xuICAgIHJldHVybiAhIXBhcmFtID8gJycgOiAnaGlkZGVuJztcbn1cblxuLyoqXG4gKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgZWxlbWVudCBpZiB0aGUgcGFzc2VkIHBhcmFtZXRlciBob2xkcyB0cnVlLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7aGlkZUlmIGRpcmVjdExlYXNlfX1cbiAqXG4gKiBAcGFyYW0gcGFyYW0gdmFsdWUgdG8gYmUgY2hlY2tlZFxuICovXG5mdW5jdGlvbiBoaWRlSWYocGFyYW0pIHtcbiAgICByZXR1cm4gISFwYXJhbSA/ICdoaWRkZW4nIDogJyc7XG59XG5cbi8qKlxuICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd25zIGFuZCByYWRpbyBib3hlcy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e3NlbGVjdGVkSWYgYm9vbGVhblZhbHVlfX1cbiAqICAgICAge3tzZWxlY3RlZElmIGVxKHZhbHVlIDMpfX1cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0ZWRJZih2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlID8gJ3NlbGVjdGVkJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgY2hlY2tlZElmIGhlbHBlciBmb3IgY2hlY2tib3hlcy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2NoZWNrZWRJZiBib29sZWFuVmFsdWV9fVxuICogICAgICB7e2NoZWNrZWRJZiBlcSh2YWx1ZSAzKX19XG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrZWRJZih2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlID8gJ2NoZWNrZWQnIDogJyc7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KVxuICogVE9ETzogTW92ZSB0aGlzIHRvIHNlcGFyYXRlIGZpbGUgY29uZGl0aW9uYWxzLmpzIG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2VxIHZhbHVlIDN9fVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA9PT0gdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJvb2xlYW4gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmdcbiAqIFRPRE86IE1vdmUgdGhpcyB0byBzZXBhcmF0ZSBmaWxlIGNvbmRpdGlvbmFscy5qcyBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA9PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiB0byBjaGVjayBmb3IgTGVzcyBUaGFuIGNvbmRpdGlvbiAoYSA8IGIpXG4gKiBUT0RPOiBNb3ZlIHRoaXMgdG8gc2VwYXJhdGUgZmlsZSBjb25kaXRpb25hbHMuanMgb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2x0IDIgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqL1xuZnVuY3Rpb24gbHQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA8IHZhbHVlMik7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIHRvIGNoZWNrIGZvciBMZXNzIFRoYW4gT3IgRXF1YWxzIGNvbmRpdGlvbiAoYSA8PSBiKVxuICogVE9ETzogTW92ZSB0aGlzIHRvIHNlcGFyYXRlIGZpbGUgY29uZGl0aW9uYWxzLmpzIG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcblxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA8PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiB0byBjaGVjayBmb3IgR3JlYXRlciBUaGFuIGNvbmRpdGlvbiAoYSA+IGIpXG4gKiBUT0RPOiBNb3ZlIHRoaXMgdG8gc2VwYXJhdGUgZmlsZSBjb25kaXRpb25hbHMuanMgb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2d0IDIgM319ICAgPT4gZmFsc2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKi9cbmZ1bmN0aW9uIGd0KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPiB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiB0byBjaGVjayBmb3IgR3JlYXRlciBUaGFuIE9yIEVxdWFscyBjb25kaXRpb24gKGEgPj0gYilcbiAqIFRPRE86IE1vdmUgdGhpcyB0byBzZXBhcmF0ZSBmaWxlIGNvbmRpdGlvbmFscy5qcyBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Z3RlIDMgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqL1xuZnVuY3Rpb24gZ3RlKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuICh2YWx1ZTEgPj0gdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7aWZ4IHRydWUgJ0ZvbycgJ0Jhcid9fSAgID0+IEZvb1xuICogICAgICB7e2lmeCBmYWxzZSAnRm9vJyAnQmFyJ319ICAgPT4gRm9vXG4gKlxuICogQHBhcmFtIGNvbmRpdGlvblxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBpZngoY29uZGl0aW9uLCB2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiAhIWNvbmRpdGlvbiA/IHZhbHVlMSA6dmFsdWUyO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIG5vdChleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuICFleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBhcnJheSBpcyBlbXB0eVxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZW1wdHkgYXJyYXl9fSAgICAgICAgID0+IHRydWUgb3IgZmFsc2VcbiAqL1xuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoYXJyYXkubGVuZ3RoID09PSAwKTtcbn1cblxuZXhwb3J0IHtcbiAgICBlcSxcbiAgICBlcXcsXG4gICAgbHQsXG4gICAgbHRlLFxuICAgIGd0LFxuICAgIGd0ZSxcbiAgICBpZngsXG4gICAgbm90LFxuICAgIGVtcHR5LFxuICAgIHNob3dJZixcbiAgICBoaWRlSWYsXG4gICAgZXhjZXJwdCxcbiAgICBkYXNoQ2FzZSxcbiAgICBjaGVja2VkSWYsXG4gICAgc2VsZWN0ZWRJZixcbiAgICBjYXBpdGFsaXplRWFjaCxcbiAgICBjYXBpdGFsaXplRmlyc3Rcbn07XG4iLCJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnKTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJyk7XG59XG5cbmV4cG9ydCB7aXNGdW5jdGlvbiwgaXNVbmRlZmluZWQsIGlzRGVmaW5lZCwgaXNPYmplY3QsIGlzQXJyYXl9O1xuIl19
