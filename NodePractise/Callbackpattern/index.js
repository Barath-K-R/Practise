//synchronous Callbacks
function greet(name)
{
    console.log(`${name}`)
}

function HigherOrderFunction(callback){
    const name='barath'
    callback(name)
}

HigherOrderFunction(greet)

//eg for Asynchronous callbacks
document.getElementById('id').addEventListener('click',callback) //here callback function in delayed until the event occurs