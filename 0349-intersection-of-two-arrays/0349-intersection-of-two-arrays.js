/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const uniqueNums1 = [... new Set(nums1)]
    const uniqueNums2 = [... new Set(nums2)]
    const intersection = []
    
    const arr1Obj = uniqueNums1.reduce((acc,num)=> ({...acc, [num] : true}) ,{})

    uniqueNums2.forEach(num=>{
        if(arr1Obj[num]) intersection.push(num)
    })

    return intersection

};