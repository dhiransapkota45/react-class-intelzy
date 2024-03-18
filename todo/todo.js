const inputelement = document.getElementById('new-todo');
const addbtn = document.getElementById('btn');
const todolist = document.getElementById('todo-list');


addbtn.addEventListener("click", () => {
    if (inputelement.value === "") {
        alert("Please enter a todo")
        return;
    }
    // console.log(inputelement.value)
    const useinput = inputelement.value;

    const newli = document.createElement('li');

    const tododata = document.createElement("div")
    tododata.textContent = useinput;

    const deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete";

    const editbtn = document.createElement("button")
    editbtn.textContent = "Edit";

    newli.appendChild(tododata);
    newli.appendChild(deletebtn);
    newli.appendChild(editbtn);
    newli.style.display = "flex";
    console.log(newli)

    todolist.appendChild(newli);

})

document.addEventListener("click", (e) => {
    if (e.target.textContent === "Delete") {
        const bool = confirm("Are you sure you want to delete this?")

        if (bool === true) {
            e.target.parentElement.remove();
        }
    }


    if (e.target.textContent === "Edit") {
        const newtodo = prompt("Emter new todo")
        e.target.parentElement.firstChild.textContent = newtodo;
    }
})



// alert("Hello World")

// confirm("Are you sure you want to delete this?")

// const val = prompt("Enter your name")
// console.log(val)