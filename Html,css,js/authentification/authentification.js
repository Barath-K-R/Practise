let users = JSON.parse(localStorage.getItem("users"))||[]
let user = {
    name: "",
    email: "",
    password: ""
}
let currusername = ""
let curremail = ""
let currpassword = ""
let currconfirmpassord = ""

let signup = true
function setvalue(e) {
    console.log("changing happens"+currpassword+" "+e.target.value)
    if (e.target.name === "username")
        currusername = e.target.value
    else if (e.target.name === "email")
        curremail = e.target.value
    else if (e.target.name === "password")
        currpassword = e.target.value
    else if (e.target.name === "confirmpassword")
    {
        console.log("setting "+e.target.value)
        currconfirmpassord = e.target.value
    }
}
function handlesubmit() {
    
    if (signup === true)
        registeruser()
    else
        login()

}
function registeruser() {
    if(currconfirmpassord!==currpassword)
    {
        console.log(currpassword+" "+currconfirmpassord)
        currpassword = "";
        currconfirmpassord = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmpassword").value = "";
        alert("retype your password")
        return;
    }
   
    user = {
        name: currusername,
        email: curremail,
        password: currpassword
    }
    
    if (finduser(user.email) == null) {
        console.log("user not found so creating");
         reset();
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        alert("user successfully registered")
    }
    else
        alert("user already regitered")
      user = {
        name: "",
        email: "",
        password: ""
    }

    console.log(users)
}
function login() {

    
    let curruser = finduser(curremail)
    if (curruser) {
        if (curruser.password === currpassword) {
            reset();
            alert("user successfully logged in")
        }
        else
           alert("wrong password")

    }
    else
        alert("user not found")

    user = {
        name: "",
        email: "",
        password: ""
    }

}
function finduser(email) {

    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email)
            return users[i]
    }
    return null;
}

function hide() {


    signup = !signup
    reset();
    let confirmpassword = document.getElementById("confirmpassword")
    let username = document.getElementById("username")
    if (signup === false) {
        confirmpassword.style.display = "none"
        username.style.display = "none"
        document.getElementById("login").innerText = "*dont have an account signup"
        document.getElementById("heading").innerHTML="Login"
    }
    else {
        confirmpassword.style.display = "block"
        username.style.display = "block"
        document.getElementById("login").innerText = "*already have an account login"
        document.getElementById("heading").innerHTML="Register"
    }
}

function reset() {
    currusername = "";
    curremail = "";
    currpassword = "";
    currconfirmpassord = "";

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";
}