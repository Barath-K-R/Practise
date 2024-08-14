let operator = "";
let firstvalue = "";
let secondvlaue = "";
let result = "";

function setvalue(value) {

    reset()
    if (operator === "")
        firstvalue = firstvalue + value;
    else
        secondvlaue = secondvlaue + value;

    document.getElementById("input").value = firstvalue + operator + secondvlaue


}

function setoperator(value) {
    operator = value;
    document.getElementById("input").value = firstvalue + operator + secondvlaue
}

function finaloperation() {
    if (operator === "+")
        result = parseInt(firstvalue) + parseInt(secondvlaue)
    else if (operator === "-") {
        result = parseInt(firstvalue) - parseInt(secondvlaue)
    }
    else if (operator === "*") {
        result = parseInt(firstvalue) * parseInt(secondvlaue)
    }
    else if (operator === "/") {
        result = parseInt(firstvalue) / parseInt(secondvlaue)
    }

    document.getElementById("input").value = result
}

function reset() {
    if (result != "") {
        
        result = ""
        firstvalue = ""
        secondvlaue = ""
        operator = ""
        
    }

}