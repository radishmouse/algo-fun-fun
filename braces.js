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
const isValid2 = (s) => {
    while (s.length !== 0) {
        const o = s;
        s = s.replace(/\(\)|\[\]|\{\}/, '');
        if (o === s) {
            return false;
        }
    }
    return true;
};

const isValid = (s) => {
    if (s.length %2 !== 0) return false;
    const stack = []; // has push, pop, and length
    for (let c of s) {
        console.log(stack);
        if (/\[|\(|\{/.test(c)) {
            stack.push(c);
        } else {
            // get last pushed
            const last = stack[stack.length - 1];
            switch (c) {
                case '}':
                    if (last === '{') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case ')':
                    if (last === '(') {
                        stack.pop();
                    } else {
                        return false;
                    }                 
                    break;
                case ']':
                    if (last === '[') {                        
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                default:
                    return false;                    
            }
        }
    }
    
    return stack.length === 0;

};

assert.strictEqual(true, isValid("[][]()()()()[]"));
assert.strictEqual(true, isValid("{[({})]}"));
assert.strictEqual(false, isValid("[(])"));
assert.strictEqual(true, isValid("()[]{}"));
assert.strictEqual(false, isValid("([}}])"));
