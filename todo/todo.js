const inputelement = document.getElementById('new-todo');
const addbtn = document.getElementById('btn');
const todolist = document.getElementById('todo-list');


addbtn.addEventListener("click", () => {
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