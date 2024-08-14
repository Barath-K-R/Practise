//the Promise object represents the eventual completion or failure of an asynchronous operation
function tatkalbook() {
    return new Promise((resolve, reject) => {
        let bookingsuccess = true
        if (bookingsuccess)
            resolve(850)
        else
            reject()
    })
}

tatkalbook().then((amount) => console.log(`thanks for booking ticket Rs.${amount}`)).
    catch(() => console.log("Dont worry,I will book a bus"))

//------------------------------
function tosscoin() {
    return new Promise(() => {
        let toss = Math.ceil(Math.random()* 2)

        if (toss == 0)
            resolve()
        else
            reject()
    })
}

tosscoin().then(()=>console.log("you win the match"))
.catch(()=>console.log("you lose the match"))

//-------------------------------------
let reachA=new Promise((resolve,reject)=>{
         const reached=true
         if(reached)
         setTimeout(resolve,3000,"barath is reached")//third parameter is for resolve function
        else
        reject()
})

let reachB=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
    setTimeout(resolve,2000,"arun is reached")//third parameter is for resolve function
   else
   reject()
})

let reachC=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
    setTimeout(resolve,1000,"dinesh is reached")//third parameter is for resolve function
   else
   reject()
})

//static methods in promise

Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.any([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))


Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))