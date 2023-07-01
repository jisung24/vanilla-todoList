export default function TodoList({ $target, title, onDelete, onToggle }) {
  const $ul = document.createElement("ul");
  $target.appendChild($ul);

  // 이미 ul은 적용 돼 있음...!
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

  this.render = (state) => {
    $ul.innerHTML = `
      <h2 class="todoList-title">${title}</h2>
      <div class="list-wrapper">
        ${state
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
  };
}