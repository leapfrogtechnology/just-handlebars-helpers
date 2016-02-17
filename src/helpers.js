import {isArray} from './util/utils.js';

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

    if (typeof (string) !== 'string' || typeof (length) !== 'number') {
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
    return (value1 === value2);
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
    return (value1 == value2);
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
    return (value1 < value2);
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
    return (value1 <= value2);
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
    return (value1 > value2);
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
    return (value1 >= value2);
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
    return !!condition ? value1 :value2;
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
    if (!isArray(array)) {
        return true;
    }

    return (array.length === 0);
}

export {
    eq,
    eqw,
    lt,
    lte,
    gt,
    gte,
    ifx,
    not,
    empty,
    showIf,
    hideIf,
    excerpt,
    dashCase,
    checkedIf,
    selectedIf,
    capitalizeEach,
    capitalizeFirst
};
