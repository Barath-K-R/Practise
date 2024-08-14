let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let ampm = document.getElementById("ampm")

function addzero(num) {
    if (num < 10)
        num = "0" + num
    return num;
}
setInterval(()=>{
    let datetime = new Date()
    let h = datetime.getHours()
    let m = addzero(datetime.getMinutes())
    let s = addzero(datetime.getSeconds())

    if (h > 12) {
        h = h - 12;
        ampm.innerHTML = " PM "
    }
    else
        ampm.innerHTML = " AM "

    hours.innerHTML = addzero(h)
    minutes.innerHTML = m
    seconds.innerHTML = s
}, 1000)

