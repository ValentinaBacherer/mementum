// Don repeat const names
const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';

let toDosArr = [];
 
function saveToDos() {
    // updates local IP browser storage
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr));
}

function paintToDo(text){ 
    //creates element to insert in html
    const li = document.createElement("li"); 
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDosArr.length + 1;
    delBtn.addEventListener("click", deleteToDo)
    delBtn.innerHTML = "X";
    span.innerText = text;
    // prepare element under li tag
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    // insert element in html
    toDoList.appendChild(li);
    // creates object to insert in array
    const toDoObj = {
        text: text,
        id : newId 
    }
    // inserts object in (local) array
    toDosArr.push(toDoObj);
    // updated "array" in local browser storage
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // vacia el contenido de input 
    toDoInput.value = "";   
} 

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDosArr.filter(function(toDo){
        return toDo.id !== parseInt(li.id) ;
    });
    toDosArr = cleanToDos;
    saveToDos();
    
} 

function printTodo(toDo){
    // porque no puede estar en loaded forEach?
    paintToDo(toDo.text);
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
 
    if (loadedToDos !== null){
        // format data into iterable object, a dictionary array¿?
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(printTodo); //sends self as argument
 
    } else {
        // if null then nothing, the form is always showing 
    } 
}

function init(){
    
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);

}    

init();