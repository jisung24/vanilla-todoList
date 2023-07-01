import TodoCount from "./TodoCount.js";
import TodoList from "./TodoList.js";

export default function TodoListBox({
  $target,
  initialState,
  onDelete,
  onToggle,
}) {
  const $div = document.createElement("div");
  $div.className = "todoList-box";
  $target.appendChild($div);

  this.state = initialState || [];
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  // 등록된 모든 todoList
  const allTodos = new TodoList({
    $target: $div,
    title: "all",
    onDelete,
    onToggle,
  });

  // 완성된 todoList
  const completedTodos = new TodoList({
    $target: $div,
    title: "done",
  });

  // 완성되지 않은 todoList
  const notCompletedTodos = new TodoList({
    $target: $div,
    title: "not",
  });

  // 요소의 개수.
  const countOfElements = new TodoCount({
    $target: $div,
  });
  this.render = () => {
    allTodos.render(this.state);
    completedTodos.render(this.state.filter(({ isCompleted }) => isCompleted));
    notCompletedTodos.render(
      this.state.filter(({ isCompleted }) => !isCompleted)
    );
    // 길이!
    const allLength = this.state.length;
    const completedLength = this.state.filter(
      ({ isCompleted }) => isCompleted
    ).length;
    const notCompletedLength = this.state.filter(
      ({ isCompleted }) => !isCompleted
    ).length;
    countOfElements.render(allLength, completedLength, notCompletedLength);
  };
  this.render();
}
