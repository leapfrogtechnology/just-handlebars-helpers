
function isFunction(thing) {
    return (typeof thing === 'function');
}

function isUndefined(thing) {
    return (typeof thing === 'undefined');
}

function isDefined(thing) {
    return !isUndefined(thing);
}

function isObject(thing) {
    return (typeof thing === 'object');
}

function isArray(thing) {
    return (Object.prototype.toString.call(thing) === '[object Array]');
}

export {isFunction, isUndefined, isDefined, isObject, isArray};
