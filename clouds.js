const assert = require('assert');
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    // we always start on index-0
    // we want to stop on the last value-0
    // along the way, we count the number of hops
    // we can hop by 1 or 2
    // we cannot ever land on a value-1
    // let isFound = false;
    let hops = -1;
    let i=0;
    while (i<c.length) { // ?? is this really the condition?!
        // look at c[i+1] and c[i+2], prefer c[i+2] if it's not === 1
        // console.log(`Currently visiting ${i}, which is ${c[i]}`);
        const hop2InBounds = i+2 <= c.length - 1;
        const hop2IsValid = c[i+2] !== 1;
        if (hop2InBounds && hop2IsValid) {
            i = i+2;
        } else {
            i++;
        }
        hops++;
    }
    return hops;
}

// const c = [0, 0, 1, 0, 0, 1, 0];
// const h = jumpingOnClouds(c);
// console.log(h);
// console.log('that was the number of hops');
assert.equal(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
assert.equal(jumpingOnClouds([0, 0, 0, 1, 0, 0]), 3);