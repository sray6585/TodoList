class Todo {
  constructor() {
    this.list = [];
  }
  add(val) {
    const element = {
      id: parseInt(Math.random() * 1000),
      item: val,
    };
    this.list.push(element);
  }
  delete(id) {
    this.list = this.list.filter((val) => val.id != id);
  }
  update(id, val) {
    this.list = this.list.map((item) => {
      if (item.id == id) return { id: id, item: val };
      return item;
    });
  }
  isEmpty() {
    return this.list.length === 0;
  }
  getTodos() {
    return this.list;
  }
}
function make_empty(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
const todo = new Todo();
const val = document.querySelector("#content");
const ui = document.querySelector("#todo-container");
function render() {
  make_empty(ui);
  todo.getTodos().map((todo) => {
    const Div = document.createElement("div");
    const Input = document.createElement("input");
    const Button = document.createElement("button");
    const Li = document.createElement("li");
    Div.classList.add("todo-list");
    Input.type = "text";
    Input.value = todo.item;
    Button.innerText = "X";
    Button.setAttribute("id", todo.id);
    Div.appendChild(Input);
    Div.appendChild(Button);
    Li.appendChild(Div);
    ui.appendChild(Li);
  });
}
function addToDo() {
  console.log(val.value, "pol");
  if (val.value === undefined || val.value.length === 0) {
    alert("add valid ToDo");
    return;
  }
  const item = val.value;
  todo.add(item);
  console.log("todo list", todo);
  render();
}
function removeText() {
  if (document.querySelector("#content").value.length === 0) {
    alert("there is nothing to remove");
    return;
  }
  document.querySelector("#content").value = "";
  console.log(document.getElementById("content").value);
}
