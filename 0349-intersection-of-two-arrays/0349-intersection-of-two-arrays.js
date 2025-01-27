function intersection(nums1: number[], nums2: number[]): number[] {
  
    const intersectionArr = []
    
    const [smallerArr, largerArr] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1]
    
    for (const num of smallerArr){
        if(intersectionArr.includes(num)){
           continue
        }
        
        if(largerArr.includes(num)){
            intersectionArr.push(num)   
        }
        
    }
    
    return intersectionArr
};
