const maxProfit = (prices) => {
  let maxPrice = 0
  let buy = prices[0]
  for (let sell of prices) {
    maxPrice = Math.max(maxPrice, sell - buy)
    console.log('maxPrice', Math.max(maxPrice, sell - buy))
    buy = Math.min(buy, sell)
  }

  return maxPrice
}

console.log(maxProfit([10, 1, 5, 6, 7, 1])) // 6
console.log(maxProfit([10, 8, 7, 5, 2])) // 0
