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

  const allTodos = new TodoList({
    $target: $div,
    title: "all",
    onDelete,
    onToggle,
  });

  const completedTodos = new TodoList({
    $target: $div,
    title: "done",
  });

  const notCompletedTodos = new TodoList({
    $target: $div,
    title: "not",
  });

  this.render = () => {
    allTodos.render(this.state);
    completedTodos.render(this.state.filter(({ isCompleted }) => isCompleted));
    notCompletedTodos.render(
      this.state.filter(({ isCompleted }) => !isCompleted)
    );
  };
  this.render();
}
