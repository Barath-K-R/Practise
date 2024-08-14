let reachA=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
    setTimeout(resolve,3000,"barath is reached")//third parameter is for resolve function
   else
   reject("barath not reached")
})


async function asyncstatus(){
    try{
        console.log("start")
        let res=await reachA;
        console.log(res)
        console.log("finished")
    }
    catch(error){
        console.log(error)
    }
}

console.log(asyncstatus())