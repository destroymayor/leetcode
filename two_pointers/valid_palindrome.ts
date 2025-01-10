/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s: string) => {
  const str = s.replace(/[^\w\u4e00-\u9fa5\s]/g, '').replace(/\s+/g, '').toLowerCase()
  return str.split('').reverse().every((item, i)=> str[i] === item)
}

console.log(isPalindrome('Was it a car or a cat i saw?')); // true
console.log(isPalindrome('tab a cat')) // false
