/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs: string[]) => {
    const result = {};
    for (let i in strs) {
        const r = strs[i]?.split('')?.sort()?.join('');
        if (result[r]) {
            result[r].push(strs[i])
        } else {
            result[r] = [strs[i]]
        }
        
    }

    return Object.values(result);
}


console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"])) // [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(["x"]); // [["x"]]
