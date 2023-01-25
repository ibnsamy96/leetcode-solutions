/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const problemBoundries = {min:1,max:10000}

    let minInteger1 = problemBoundries.max
    let minInteger2 = problemBoundries.max
    let maxInteger1 = problemBoundries.min
    let maxInteger2 = problemBoundries.min

    nums.forEach(num=>{
        let [ min , max ] = minInteger1<minInteger2 ? [minInteger1,minInteger2] : [minInteger2,minInteger1]
        if ( num <= max ){
            if ( num < min ) [max,min] = [min,num]
            else max = num
        }
        [minInteger1,minInteger2] = [max,min]


        let [ min2 , max2 ] = maxInteger1<maxInteger2 ? [maxInteger1,maxInteger2] : [maxInteger2,maxInteger1]
        if ( num >= min2 ){
            if ( num > max2 ) [max2,min2] = [num,max2]
            else min2 = num
        }
        [maxInteger1,maxInteger2] = [max2,min2]

    })

    return (maxInteger1 * maxInteger2) - (minInteger1 * minInteger2)
};