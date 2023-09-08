type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    const start = Date.now()
	return async function(...args) {
        return new Promise((resolve,reject)=>{
            let result : unknown
            fn(...args).then(data=>result = data).catch(err=>reject(err))

            const interval = 1
            let elapsedTime =  Date.now() - start
            const intervalHolder = setInterval(()=>{
                if(result) {
                    resolve(result) 
                    clearInterval(intervalHolder)
                }
                else if(elapsedTime>=t) {
                    reject("Time Limit Exceeded")
                    clearInterval(intervalHolder)
                }
                elapsedTime =  Date.now() - start
            },interval)
        })
    }
};