function twoSum(nums: number[], target: number): number[] {
    const res = []
    for (const i in nums) {
        const change = target - nums [i]
        const restOfNums = nums.slice(parseInt(i)+1)

        const isRestOfNumsIncludeChange = restOfNums.includes(change)
        if (!isRestOfNumsIncludeChange) continue
        
        res.push(i,restOfNums.indexOf(change) + parseInt(i) + 1 )
        break
    }
    return res
};