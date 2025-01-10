/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s: string) => {
  const stack = []
  const maps: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let item of s) {
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item)
    } else {
      if (stack.pop() !== maps[item]) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
