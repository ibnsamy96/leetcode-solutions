function pivotIndex(nums: number[]): number {
    for(const indexStr in nums) {
        const index = parseInt(indexStr)

        const left = nums.slice(0,index)
        const right = nums.slice(index+1,nums.length)
        
        if(sum(left) == sum(right)) return index
    }
    
    return -1
};

function sum(arr:number[]){
  return arr.reduce((acc,curr)=>acc+curr,0)
}