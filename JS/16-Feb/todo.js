const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoContainer = document.getElementById("todo-container");

addBtn.addEventListener("click", () => {
  const value = todoInput.value;
  const li = document.createElement("li");
  li.innerText = value;

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("", () => {
    li.remove();
  });

  li.appendChild(delBtn);

  todoContainer.appendChild(li);
  todoInput.value = "";
});
