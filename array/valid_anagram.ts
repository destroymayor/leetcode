/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length) {
    return false
  }

  const result1 = s.split('').sort().join('')
  const result2 = t.split('').sort().join('')

  return result1 === result2
}

console.log(isAnagram('anagram', 'nagaram'))
