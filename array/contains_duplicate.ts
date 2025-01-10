/**
 * @param {number[]} nums
 * @return {boolean}
 */
const hasDuplicate = (nums: Array<number>) => {
    const arr = new Set();
    for (let num of nums) {
        if (arr.has(num)) {
            return true
        }

        arr.add(num)
    }
    return false;
}

console.log(hasDuplicate([1,2,3,3])); // true
console.log(hasDuplicate([1,2,3,4])); // false
