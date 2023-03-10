/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, midIndex) {
    const left = nums.slice(0,midIndex)
    const right = nums.slice(midIndex)
    
    const result = []
    for (const i in left) {
        result.push(left[i])
        result.push(right[i])
    }

    return result

};