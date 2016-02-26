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

    if (typeof(string) !== 'string' || typeof(length) !== 'number') {
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
        return string.toLowerCase().replace(/\w\S*/g, function(match) {
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
function concat(...params) {
    var resultString = '';
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
function join(params = [], delimeter) {
    var resultString = '';
    if (params !== null) {
        for (var i = 0; i < params.length; i++) {
            if (i === (params.length - 1)) {
                resultString += params[i];
            } else {
                resultString += params[i] + delimeter;
            }
        }
    }

    return resultString;
}

/* Export */
export {
    join,
    concat,
    excerpt,
    sanitize,
    capitalizeEach,
    capitalizeFirst,
}
