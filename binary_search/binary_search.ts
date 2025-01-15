const search = (nums: Array<number>, target: number) => {
  return nums.indexOf(target)
}

console.log(search([-1, 0, 2, 4, 6, 8], 4)) // 3
console.log(search([-1, 0, 2, 4, 6, 8], 3)) // -1
