// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
const assert = require('assert');

var isValid1 = function(s) {
    if (s.length % 2 !== 0) return false;
    // const arr = s.split('');
    // we have an array of strings
    // we can't compare arr[i] === arr[i+1] because this won't pass: {[]}
    // we can't do palindrome, because sometimes, they're not nested

    // clever solution: loop, removing matching pairs
    while (s.length !== 0) {
        const original = s;
        console.log(s);
        s = s.replace('()', '');
        console.log(s);
        s = s.replace('[]', '');
        console.log(s);
        s = s.replace('{}', '');
        console.log(s);
        
        const didNotChange = s === original;
        // did s change at all? if not, we need to return false;
        if (didNotChange) {
            return false;
        }
    }
    return true;

};

// Shorter, but less readable: uses RegEx for
// matching the brace characters
const isValid = (s) => {
    while (s.length !== 0) {
        const o = s;
        s = s.replace(/\(\)|\[\]|\{\}/, '');
        if (o === s) {
            return false;
        }
    }
    return true;
}

assert.strictEqual(true, isValid("[][]()()()()[]"));
assert.strictEqual(true, isValid("{[({})]}"));
assert.strictEqual(false, isValid("[(])"));
