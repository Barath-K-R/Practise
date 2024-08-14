let a = [1, 2, 3, 4]

//writing function separately
let b = a.map(add)
function add(val) {
    return val * 5;
}
console.log("b= " + b)

//we can use arrow function
let c = a.map((val) => val * 6)
console.log("c= " + c)

//--------
//filter function
let d = [2, 3, 4, 5, 6]

let f = d.filter((val) => val > 4)
console.log(f)

//----------
//reduce
let res = d.reduce((total, val, index, array) => total = total + val, 100)//100 initialise the total as 100
console.log(res)

let arr = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

//here we are initialising accumulator as empty object
//flat makes 2d array to 1d array
let accumulator=arr.flat().reduce((accumulator, currval) => {
    if (accumulator[currval])
        accumulator[currval]=accumulator[currval]+1;
    else
      accumulator[currval]=1;
     return accumulator;
}, {})
console.log(accumulator)
