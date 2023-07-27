function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

     const res = []

    for (const num of nums1) {
        const indexInNums2 = nums2.indexOf(num)
        const restOfNums2 = nums2.slice(indexInNums2+1) // to minimize the values to search in

        if(restOfNums2.length == 0 ) res.push(-1)
      
        for (const j in restOfNums2) {
            if (restOfNums2[j] > num) {
                res.push(restOfNums2[j])
                break
            } else if(j == `${restOfNums2.length-1}`) {
              res.push(-1)
            }
        }
    }
    
    return res
};