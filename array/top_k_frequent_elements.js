/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const result = {}
  for (const n of nums) {
    result[n] = (result[n] || 0) + 1
  }

  const arr = Object.entries(result).map(([key, value]) => [value, parseFloat(key)])
  arr.sort((a, b) => b[0] - a[0])

  return arr.slice(0, k).map((pair) => pair[1])
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)) // [2,3];
console.log(topKFrequent([7, 7], 1)) // [7]
