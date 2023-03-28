/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    /*
        Steps:
            1. sort the nums arr
            2. get values for i, left and right indeces
            3. move through the whole array to find all triputes by updating the right or the left indeces
    */

  const resultSet = new Set()
  const resultArr =  []
  
  const sortedNums = mergeSort(nums)
    
  for (let i = 0 ; i < sortedNums.length-2; i++) {
    // skip the repeated numbers
    if(i > 0 && sortedNums[i] === sortedNums[i-1] ) continue;

    let left = i+1
    let right = sortedNums.length-1
        
    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right]

      if (sum === 0) {
        const tripute = `${sortedNums[i]},${sortedNums[left]},${sortedNums[right]}`
        if (!resultSet.has(tripute)) {
          resultSet.add(tripute)
          resultArr.push([sortedNums[i], sortedNums[left], sortedNums[right]])
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    } 
  }
  
  return resultArr
}



function mergeSort ( arr )  {
  if (arr.length <= 1) return arr
  
  const midIndex = Math.floor(arr.length/2)
  const leftArr = arr.slice(0, midIndex)
  const rightArr = arr.slice(midIndex, arr.length)
  
  const sortedLeft = mergeSort(leftArr)
  const sortedRight = mergeSort(rightArr)
  
  return merge(sortedLeft, sortedRight)
  
}

function merge ( leftArr, rightArr ) {
  const result = []
  
  let leftIndex = 0
  let rightIndex = 0
  
  while (leftIndex<leftArr.length && rightIndex<rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) result.push(leftArr[leftIndex++])
    else result.push(rightArr[rightIndex++])
  }
  
  return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
  
}