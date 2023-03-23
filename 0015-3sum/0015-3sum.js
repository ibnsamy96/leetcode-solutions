/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function binary_search(arr, target, L = 0, R = arr.length - 1) {
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);
        arr[mid] < target ? (L = mid + 1) : (R = mid);
    }
    return L === R && arr[L] === target ? L : -Infinity;
}
var threeSum = function (a) {
    let n = a.length;

    a.sort((a, b) => a - b);

    let aa = [];
    let vis = new Set();
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
            let sum = a[i] + a[j];
            let L = binary_search(a, -sum, j + 1, n - 1);
            if (L !== -Infinity) {
                let key = `${a[i]} ${a[j]} ${a[L]}`;
                if (!vis.has(key)) {
                    vis.add(key);
                    aa.push([a[i], a[j], a[L]]);
                }
            }
        }
    return aa;
};


// var threeSum = function(nums) {
//     /*
//         Steps:
//             1. sort the nums arr
//             2. get values for i & j and calculate the value of k
//             3. search for value of k, if exists use the tripute
//     */

//   const result = []
//   const sortedNums = mergeSort(nums)
    
//   for (let i = 0 ; i < sortedNums.length; i++) {
//     for (let j = i+1 ; j < sortedNums.length-1; j++) {
       
//     // calculate the expected sortedNums[k]
//       const thirdValue = 0 - sortedNums[i] - sortedNums[j]
//     // check if the expected value exists, if not continue
//       if ( !binarySearch(sortedNums.slice(j+1), thirdValue) ) continue
             
//     // if the expected value exists, create the triplet
//       const numsArr =  mergeSort([sortedNums[i] , sortedNums[j] , thirdValue])
    
//     // push the triplete to the result only if it wasn't in it
//       if (!JSON.stringify(result).includes(JSON.stringify(numsArr)))
//         result.push(numsArr)
        
//     } 
//   }
  
//   return result
// }



// function binarySearch (arr, value) {
//   if (arr.length < 1) return false
  
//   const mid = Math.floor(arr.length / 2)
//   if (arr[mid] == value) return true

//   const leftArr = arr.slice(0, mid)
//   const rightArr = arr.slice(mid+1, arr.length)
  
//   if (value > arr[mid]) return binarySearch(rightArr, value)
//   else if (value < arr[mid]) return binarySearch(leftArr, value)
// }



// function mergeSort ( arr )  {
//   if (arr.length <= 1) return arr
  
//   const midIndex = Math.floor(arr.length/2)
//   const leftArr = arr.slice(0, midIndex)
//   const rightArr = arr.slice(midIndex, arr.length)
  
//   const sortedLeft = mergeSort(leftArr)
//   const sortedRight = mergeSort(rightArr)
  
//   return merge(sortedLeft, sortedRight)
  
// }

// function merge ( leftArr, rightArr ) {
//   const result = []
  
//   let leftIndex = 0
//   let rightIndex = 0
  
//   while (leftIndex<leftArr.length && rightIndex<rightArr.length) {
//     if (leftArr[leftIndex] <= rightArr[rightIndex]) result.push(leftArr[leftIndex++])
//     else result.push(rightArr[rightIndex++])
//   }
  
//   return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
  
// }