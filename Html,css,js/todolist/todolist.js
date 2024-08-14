let input = document.getElementById("input");
let button = document.getElementById("button");
let todolist = document.getElementById("todolist");
let todos = [];
let currtodo = "";


window.onload = () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];


    for (let i = 0; i < todos.length; ++i) {
        console.log(todos[i])
        addtodo(todos[i]);
    }
}
function handleadd() {
    currtodo = document.getElementById("input").value;

    todos.push(currtodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    addtodo(currtodo);
    document.getElementById("input").value = "";
    console.log(todos);
}

function addtodo(currtodo) {

    let para = document.createElement("p");
    para.innerText = currtodo;
    document.getElementById("todolist").appendChild(para)

    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through";
        removetodo(currtodo);
    })
    
    para.addEventListener("dblclick", () => {
        document.getElementById("todolist").removeChild(para)
        removetodo(currtodo);
    })

    
}

function removetodo(todo) {
    console.log("todo=" + todo)
    let index = todos.indexOf(todo);
    console.log("index=" + index)
    if (index > -1) {
        todos.splice(index, 1);
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}