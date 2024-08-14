try{
    num=prompt('enter a number')
    if(num==='')
    throw 'number cannot be empty'
}
catch(error){
    console.log(error)
}
finally{
    console.log("bye")
}