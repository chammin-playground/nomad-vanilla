const TODOS_KEY = "todos";

const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-form input");

let todos = [];

const paintTodo = (newTodo) => {
  const liEl = document.createElement("li");
  liEl.id = newTodo.id;

  const spanEl = document.createElement("span");
  spanEl.innerText = newTodo.text;

  const buttonEl = document.createElement("button");
  buttonEl.innerText = "❌";
  buttonEl.addEventListener("click", deleteTodo);

  liEl.appendChild(spanEl);
  liEl.appendChild(buttonEl);
  todoList.appendChild(liEl);
};

const deleteTodo = (e) => {
  const liEl = e.target.parentElement;
  liEl.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(liEl.id));
  console.log(todos);
  saveTodos();
};

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const handleTodoSubmit = (e) => {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
