const toDoForm = document.querySelector('#todo-form');
const toDoinput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
const toDos = [];

const TODOS_KEY = "todos";

function saveToDos(newTodo) {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

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
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos(newTodo);
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const myTodos = localStorage.getItem(TODOS_KEY);

if (myTodos) {
    const parsedToDos = JSON.parse(myTodos);
    parsedToDos.forEach((item) => {
        console.log("My Item", item);
    });
}