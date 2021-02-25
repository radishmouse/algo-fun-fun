const nums = [
    3,
    -2,
    21,
    19,
    1,
    -5
];

console.log(nums);

// A sorting callback looks like this: 
// (a, b) => { /*  return -1, 0, 1 */ } 
const numerical = (a, b) => {
    if (a < b) {
        return -1;          // signal that a comes before b
    } else if (a > b) {
        return 1;           // signal that a comes after b
    } else {
        return 0;           // signal that a and b are equivalent
    }
};

// sort them!
// Array.prototype.sort mutates the array in-place.
console.log('original array:');
nums.sort();
console.log('after alphabetical sorting, we have:');
console.log(nums);
nums.sort(numerical);
console.log('after numerical sorting, we have:');
console.log(nums);