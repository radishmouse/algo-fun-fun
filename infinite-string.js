/*
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, 
find and print the number of letter a's in the first n letters of the infinite string.
*/

const assert = require('assert');
const TO_MATCH = 'a';

// Only finishes for "relatively small" values of MAX
function repeatedStringFinite(s, MAX) {
    let c = 0; // how many 'a' chars we have seen
    let littleCounter = 0; // my counter that resets
    let bigCounter = 0; // my "true" counter that never exceeds MAX

    let len = s.length;
    while (bigCounter < MAX) {

        if (s[littleCounter] === TO_MATCH) c++;
        
        littleCounter++;
        if (littleCounter === len) littleCounter = 0;

        bigCounter++;
    }
    
    return c;
}

function repeatedString(s, MAX) {
    if (s.length === 1) {
        return s === TO_MATCH ? MAX : 0;
    };
    const howMany = Math.floor(MAX/s.length); // MAX letters contains how many `s` strings?
    const leftOver = MAX % s.length; // Plus how many letters?

    const countForSubString = repeatedStringFinite(s, s.length); // how many times "a" is in `s`
    const countForRemainder = repeatedStringFinite(s, leftOver); // how many times "a" is in part of `s`
    
    return (countForSubString * howMany) + countForRemainder;
}

assert.strictEqual(repeatedString('aba', 10), 7);
// 9007199254740991
// 1000000000000
assert.strictEqual(repeatedString('a', 1000000000000), 1000000000000);