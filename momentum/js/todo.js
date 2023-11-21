const toDoForm = document.querySelector('#todo-form');
const toDoinput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(newTodo) {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    li.remove();
    saveToDos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const btn = document.createElement("button");
    btn.innerText = "❌"
    btn.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(btn);

    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos(newTodo);
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const myTodos = localStorage.getItem(TODOS_KEY);

if (myTodos) {
    const parsedToDos = JSON.parse(myTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
