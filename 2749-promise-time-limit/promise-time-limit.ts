type Fn = (...params: any[]) => Promise<any>;
 
function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        return new Promise(async (resolve,reject)=>{

            // the timeLimitInterval is used to reject if the time limit is exceeded
            const timeLimitInterval = setTimeout(()=>{
                reject("Time Limit Exceeded")
                clearInterval(timeLimitInterval)
            },t)

            // As long as the time limit wasn't exceeded yet, wait for fn() to fulfill and  resolve the result come out of it.
            try { resolve( await fn(...args) ) }
            catch (err:unknown) { reject(err) }
            clearInterval(timeLimitInterval)
    
       })
    }
};