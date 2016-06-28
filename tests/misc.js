
// NOTE: Just to make sure all the tests passes if the Array.prototype is modified.
Array.prototype.someMethod = function() {
    return 'this is just a test';
};

export {Array};
