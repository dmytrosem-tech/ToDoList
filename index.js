import refs from "../js/refs.js";

function onPageLoaded() {
  
  function createTodo() {
    const li = document.createElement("li");
    const todoTaskText = document.createElement("span");
    todoTaskText.classList.add("todo__item");
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
      console.log('hi');
      console.log(e.target);
    if (e.target.tagName === "LI") {
        console.log('hi');
    //   e.target.classList.toggle("checked");
    //   console.log('lol');
    }
  }

  function listenDeleteTodo(el) {
    el.addEventListener("click", (e) => {
      el.parentElement.remove();
      e.stopPropagation();
    });
  }

  refs.ulEl.addEventListener('click', onItemClick)
  refs.inputEl.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
      createTodo();
    }
  });
  
}

window.addEventListener("DOMContentLoaded", onPageLoaded);
