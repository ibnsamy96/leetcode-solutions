function topKFrequent(nums: number[], k: number): number[] {
    const friqsArr = new FrequanciesArray()

    nums.sort((a,b)=>a-b)

    let tempFriq = 0
    for (const i in nums) {

        const prev = nums[Number(i)-1]
        const curr = nums[Number(i)]
         const next = nums[Number(i)+1]

        if (Number(i) == 0  || curr != prev) tempFriq = 1
        else  tempFriq += 1
         
        if (curr != next) friqsArr.push(curr,tempFriq)
    }

    return friqsArr.getArr(k)
};

class FrequanciesArray {
    #friquancies : {num:number,friq:number}[] = []
    constructor(){}

    push(num:number,friq:number){
        const pair = {num,friq}
        
        if (this.#friquancies.length == 0) {
            this.#friquancies.push(pair)
            return
        }

        for (let i in this.#friquancies){
            if( this.#friquancies[i].friq < friq ) {
                this.#friquancies.splice(Number(i),0,pair)
                break
                }
            else if (this.#friquancies.length-1 == Number(i)) {
                this.#friquancies.push(pair)
                break
                }
        }
    }

    getArr( k:number ){
        return this.#friquancies.slice(0,k).map(p=>p.num)
    }


}

