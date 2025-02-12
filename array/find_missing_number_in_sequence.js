/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  numbers.sort((a, b) => a - b)

  if (numbers[numbers.length - 1] !== numbers.length) {
    return numbers.length
  }

  if (numbers[0] !== 0) {
    return 0
  }

  for (let i = 1; i < numbers.length; i++) {
    const expectedNum = numbers[i - 1] + 1
    if (numbers[i] !== expectedNum) {
      return expectedNum
    }
  }

  return -1
}

findMissingNumberInSequence([1,3,0]) // 2
findMissingNumberInSequence([3,0,4,2,1]) // 5
