const todoInput = document.querySelector(".todo-input");

const todoButton = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteAndCheck);

function addTodo(event) {
  event.preventDefault();

  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-list");
  todoLi.innerText = todoInput.value;

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "✔";
  completedButton.classList.add("completed-btn");
  todoLi.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "X";
  trashButton.classList.add("trash-btn");
  todoLi.appendChild(trashButton);
  if (todoInput.value !== "") {
    todoList.appendChild(todoLi);
  }
  todoInput.value = "";
}

function deleteAndCheck(e) {}
