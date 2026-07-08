/*
all():
------
-Execute all promise in parallel.
-Creates a promise that is resolved with any array of result.
when all of the provided promises resolve or rejected when any promise is rejected.

race():
-------
returns the resolve/reject first finished promise.

allsettled():
--------------
returns result of all promises(resolve/reject)


*/
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task1 is completed");          
    },3000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task2 is completed");
    },1000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task3 is completed");
    },2000);
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
    
}).catch((res)=>{
    console.log(res);
    
})

console.log("----------------------");

let p11 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task1 is completed");
    },3000)
})

let p22=  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("task2 is rejected");
    },4000);
})

let p33 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task3 is completed");
    },2000);
})

Promise.all([p11,p22,p33]).then((res)=>{
    console.log(res);
}).catch((res)=>{
console.log(res);

})

//race():

let ps1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task1 completed");
    },3000);
})

let ps2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task2 completed");
    },1000);
})
let ps3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("task3 completed");
    },1000);
})

Promise.race([ps1,ps2,ps3]).then((res)=>{
console.log(res);
}).catch((res)=>{
console.log(res);
})

//allsettled():

let ps11=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task1 completed");
    },3000);
})

let ps22=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task2 completed");
    }, 1000);
})

let ps33=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("task3 not completed");
    },4000);
})

Promise.allSettled([ps11,ps22,ps33]).then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
})

/*
output:
-------

[
  { status: 'fulfilled', value: 'task1 completed' },
  { status: 'fulfilled', value: 'task2 completed' },
  { status: 'rejected', reason: 'task3 not completed' }
]


*/