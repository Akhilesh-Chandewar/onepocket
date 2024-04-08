
function sumArrayIntegers(nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(sumArrayIntegers(numbers)); // Output: 15