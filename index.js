const refs = {
  inputEl: document.querySelector(".todo__input"),
  ulEl: document.querySelector("ul.todo__list"),
  saveBtn: document.querySelector(".save"),
  clearBtn: document.querySelector(".clear"),
}

function onPageLoaded() {
  function createTodo() {
    const li = document.createElement("li");
    li.classList.add("todo__item");
    const todoTaskText = document.createElement("span");
    todoTaskText.classList.add("todo__item-span");
    const newTodo = refs.inputEl.value;
    todoTaskText.append(newTodo);

    const deleteTaskBtn = document.createElement("span");
    deleteTaskBtn.classList.add("todo__trash");
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-alt");
    deleteTaskBtn.appendChild(icon);

    refs.ulEl.appendChild(li).append(todoTaskText, deleteTaskBtn);
    refs.inputEl.value = "";
    listenDeleteTodo(deleteTaskBtn);
  }

  function onItemClick(e) {
    console.log("hi");
    console.log(e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
  }

  function listenDeleteTodo(el) {
    el.addEventListener("click", (e) => {
      el.parentElement.remove();
      e.stopPropagation();
    });
  }

  function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
      refs.ulEl.innerHTML = data;
    }

    const deleteButtons = document.querySelectorAll("span.todo-trash");
    for (button of deleteButtons) {
      listenDeleteTodo(button);
    }
  }

  refs.ulEl.addEventListener("click", onItemClick);
  refs.inputEl.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
      createTodo();
    }
  });

  refs.saveBtn.addEventListener("click", () =>
    localStorage.setItem("todos", refs.ulEl.innerHTML)
  );
  refs.clearBtn.addEventListener("click", () => {
    refs.ulEl.innerHTML = "";
    localStorage.removeItem("todos", refs.ulEl.innerHTML);
  });

  loadTodos();
}

window.addEventListener("DOMContentLoaded", onPageLoaded);
