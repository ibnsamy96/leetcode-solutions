
var maxProfit = function(prices:number[]) : number {
   let minPrice = Infinity
   let maxDiff = 0

    for (let i =0; i<prices.length;i++){
        if (minPrice > prices[i])
        {
            minPrice = prices[i]
        }
        else if ( maxDiff < prices[i] - minPrice )   {
            maxDiff = prices[i] - minPrice
        }
    }

   return maxDiff
};