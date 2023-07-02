export default function TodoList({
  $target,
  title,
  initialState,
  onDelete,
  onToggle,
}) {
  const $ul = document.createElement("ul");
  $target.appendChild($ul);

  this.state = initialState;
  this.setState = (nextState) => {
    if (nextState !== null) {
      this.state = nextState;
      this.render();
    }
  };
  // 위에서 ul은 이미 그렸기 때문에,
  // render부분에서 event등록해줄 필요없음.
  $ul.addEventListener("click", (e) => {
    const targetElement = e.target;

    if (targetElement.classList.contains("delete-button")) {
      const parentLi = targetElement.closest(".todo-item");
      const findSpan = parentLi.querySelector("span");
      onDelete(findSpan.innerText);
    } else if (e.target.tagName === "SPAN") {
      const liElement = e.target.closest("li");
      const span = liElement.querySelector("span");
      onToggle(span.innerText);
    }
  });

  this.render = () => {
    if (Array.isArray(this.state)) {
      $ul.innerHTML = `
      <h2 class="todoList-title">${title}</h2>
      <div class="list-wrapper">
        ${this.state
          .map(
            ({ text, isCompleted }) =>
              `
                  <li class="todo-item" id="todo">
                    <span style="text-decoration : ${
                      isCompleted ? "line-through" : "none"
                    }">${text}</span>
                    <button class='delete-button'>❎</button>
                  </li>
                `
          )
          .join("")}
        </div>
    `;
    }
  };
}
