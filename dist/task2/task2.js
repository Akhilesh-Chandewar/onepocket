"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumArrayIntegers(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayIntegers(numbers)); // Output: 15
