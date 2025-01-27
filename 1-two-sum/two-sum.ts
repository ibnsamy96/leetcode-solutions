function twoSum(nums: number[], target: number): number[] {
    const indexes = {};
    
    for (const stringI in nums) {
           const i = parseInt(stringI)
           const current = nums[i]
           
           const reminder = target - current
           if(indexes.hasOwnProperty(reminder)){
                return [ indexes[reminder] , i ]
           }else {
                indexes[current] = i   
           }
    }
};
