console.log('Best time To Buy and sell stock')


var maxProfit = function (prices) {
    // step 1: suppose your minimum price is infinity and maxProfit is 0
    let minPrice = Infinity, maxProfit = 0;

    // step 2 :  Loop through each price in the prices array
    for (let i = 0;i < prices.length;i++) {

        // step 3: If we find a new minimum price, update minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        // step 4: If selling at current price gives a higher profit, update maxProfit
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }

    //  step 5: Return the maximum profit
    return maxProfit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))