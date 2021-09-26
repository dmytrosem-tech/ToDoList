// const refs = {
//   todoDivEl: document.querySelector(".todo"),
//   form: document.querySelector(".todo__form"),
//   inputEl: document.querySelector(".todo__input"),
//   ulEl: document.querySelector("ul.todo__list"),
//   saveBtn: document.querySelector(".save"),
//   clearBtn: document.querySelector(".clear"),
// };

// function onPageLoaded() {
//   function createTodo() {
//     const li = document.createElement("li");
//     li.classList.add("todo__item");
//     const todoTaskText = document.createElement("span");
//     todoTaskText.classList.add("todo__item-span");
//     const newTodo = refs.inputEl.value;
//     todoTaskText.append(newTodo);

//     const deleteTaskBtn = document.createElement("span");
//     deleteTaskBtn.classList.add("todo__trash");
//     const icon = document.createElement("i");
//     icon.classList.add("fas", "fa-trash-alt");
//     deleteTaskBtn.appendChild(icon);

//     refs.ulEl.appendChild(li).append(todoTaskText, deleteTaskBtn);
//     refs.inputEl.value = "";
//     listenDeleteTodo(deleteTaskBtn);
//   }

//   function onItemClick(e) {
//     console.log("hi");
//     console.log(e.target);
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//     }
//   }

//   function listenDeleteTodo(el) {
//     el.addEventListener("click", (e) => {
//       el.parentElement.remove();
//       e.stopPropagation();
//     });
//   }

//   function loadTodos() {
//     const data = localStorage.getItem("todos");
//     if (data) {
//       refs.ulEl.innerHTML = data;
//     }

//     const deleteButtons = document.querySelectorAll("span.todo-trash");
//     for (button of deleteButtons) {
//       listenDeleteTodo(button);
//     }
//   }

//   refs.ulEl.addEventListener("click", onItemClick);
//   refs.inputEl.addEventListener("keypress", (keyPressed) => {
//     const keyEnter = 13;
//     if (keyPressed.which == keyEnter) {
//       createTodo();
//     }
//   });

//   refs.saveBtn.addEventListener("click", () =>
//     localStorage.setItem("todos", refs.ulEl.innerHTML)
//   );
//   refs.clearBtn.addEventListener("click", () => {
//     refs.ulEl.innerHTML = "";
//     localStorage.removeItem("todos", refs.ulEl.innerHTML);
//   });

//   loadTodos();
// }

// window.addEventListener("DOMContentLoaded", onPageLoaded);

// const toDo = {
//   addTask() {
//     const li = document.createElement("li").classList.add("todo__item");
//     const task = document
//       .createElement("span")
//       .classList.add("todo__item-span");
//     return task.append(refs.inputEl.value);
//   },
//   removeTask() {
//     const deleteTaskBtn = document
//       .createElement("span")
//       .classList.add("todo__trash");
//     const icon = document
//       .createElement("i")
//       .classList.add("fas", "fa-trash-alt");
//     return deleteTaskBtn.appendChild(icon);
//   },
//   render() {
//     refs.ulEl.appendChild(this.addTask);
//   },
//   onClick(e) {
//     e.preventDefault();
//     console.log(refs.inputEl.value);
//   },
// };

// refs.form.addEventListener("submit", toDo.onClick);
// refs.saveBtn.addEventListener('click', toDo.render);

// function addTask() {
//   const li = document.createElement("li").classList.add("todo__item");
//   const task = document
//     .createElement("span")
//     .classList.add("todo__item-span");
//     console.log(task);
//     console.log(refs.inputEl.value);
//     refs.ulEl.appendChild(li)
//   // return task.append(refs.inputEl.value);
// };

// function createTodo() {
//       const li = document.createElement("li");
//       li.classList.add("todo__item");
//       const todoTaskText = document.createElement("span");
//       todoTaskText.classList.add("todo__item-span");
//       const newTodo = refs.inputEl.value;
//       todoTaskText.append(newTodo);

//       const deleteTaskBtn = document.createElement("span");
//       deleteTaskBtn.classList.add("todo__trash");
//       const icon = document.createElement("i");
//       icon.classList.add("fas", "fa-trash-alt");
//       deleteTaskBtn.appendChild(icon);

//       refs.ulEl.appendChild(li).append(todoTaskText, deleteTaskBtn);
//       refs.inputEl.value = "";
//       listenDeleteTodo(deleteTaskBtn);
//     }

//     refs.inputEl.addEventListener("keypress", (keyPressed) => {
//           const keyEnter = 13;
//           if (keyPressed.which == keyEnter) {
//             createTodo();
//           }
//         });

// refs.saveBtn.addEventListener('click', createTodo);
// const booksApp = {
//   books: [
//     { id: "1", name: "Название книги", completed: false },
//     { id: "2", name: "Название книги", completed: false },
//     { id: "3", name: "Название книги", completed: false },
//   ],
//   addBook() {},
//   removeBook() {},
//   editBook() {},
// };

const toDo = {
  refs: {
    todoDivEl: document.querySelector(".todo"),
    form: document.querySelector(".todo__form"),
    inputEl: document.querySelector(".todo__input"),
    ulEl: document.querySelector("ul.todo__list"),
    saveBtn: document.querySelector(".save"),
    clearBtn: document.querySelector(".clear"),
  },

  tasks: [
    { id: "", name: "wash face", completed: false },
    { id: "", name: "brrr", completed: true },
    { id: "", name: "cry", completed: false },
  ],

  addTask(task) {
    this.tasks.push(task);
  },

  createIdByNameOfTask(nameOfTask) {
    toDo.tasks.map((item) => {
      if (item.name === nameOfTask) {
        item.id = toDo.tasks.indexOf(item) + 1;
      }
      return;
    });
  },

  editTask() {
    const nameOfTask = 'shit'
    console.log(nameOfTask);
    
    const task = {
      id: 9,
      name: nameOfTask,
      completed: false,
    };
    console.log(task);
    console.log(this.tasks.bind(toDo));
    this.tasks.push(task);
  },

  render(tasks) {
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("todo__item");
      li.innerHTML = `${task.name}<span class="todo-trash"><i class="fas fa-trash-alt"></i></span>`;
      this.refs.ulEl.appendChild(li);
    });
  },

  removeTask(e) {
    if (e.target.nodeName === "I") {
      e.target.parentElement.parentElement.remove();
      e.stopPropagation();
    }
  },

  completeTask() {},
};

toDo.createIdByNameOfTask("cry");
console.log(toDo.tasks[2]);
toDo.render(toDo.tasks);
toDo.completeTask();
toDo.refs.ulEl.addEventListener("click", toDo.removeTask);
document.querySelector('.save').addEventListener('click', toDo.editTask)
function onClearClick(){
  console.log(toDo.refs.inputEl.value);
}
document.querySelector('.clear').addEventListener('click', onClearClick)

// function onClick() {
//   console.log('lol');
//   // while (toDo.refs.ulEl.firstChild) toDo.refs.ulEl.removeChild(toDo.refs.ulEl.firstChild);
//   const li = document.createElement('li');
//       li.innerHTML = `
//       hi1`;
//       toDo.refs.ulEl.appendChild(li)
// }
// document.querySelector('.save').addEventListener('click', onClick)
