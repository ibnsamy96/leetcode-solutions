/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(nums) {

    const n = nums.length
    const tempArr = JSON.parse(JSON.stringify(nums))
    
    for (let row=0; row<n; row++){
        for (let col=0; col<n ; col++ ) {
            const newRow = col
            const newCol = (n-1)-row
            const pastPosVal = tempArr[row][col]
            nums[newRow][newCol] = pastPosVal
        }
    }
  return nums

};