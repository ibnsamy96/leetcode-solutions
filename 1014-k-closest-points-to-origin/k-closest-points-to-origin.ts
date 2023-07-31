function kClosest(points: number[][], k: number): number[][] {

const distancesArray = new DistancesArray()

points.forEach(p=>{
    // for simplification, distanceIndicator is an indicator that helps in the comparison between points distances but it isn't the actual distance as I removed the square root from the equation
    const distanceIndicator = p[0]*p[0] + p[1]*p[1]
    distancesArray.push(p,distanceIndicator)
})

return distancesArray.getResult(k)
};

class DistancesArray {
    results:{
        p:number[]
        d:number
    }[] = []
    
    constructor(){}

    push(pair:number[],distance:number){
        const resObject = {p:pair,d:distance}
        if (this.results.length==0) {
          this.results.push(resObject)
          return
        }
        for (let i in this.results){
            let res = this.results[Number(i)]
            if (res.d > distance) {
              this.results.splice(Number(i),0,resObject)
              return
            }
            else if (Number(i) == this.results.length-1) this.results.push(resObject)
        }
    }

    getResult(k:number){
        return this.results.slice(0,k).map(res=>res.p)
    }
}