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

    // ⚪️ allTodos state수정
    allTodos.setState(nextState);

    // ⚪️ completedTodos state수정
    completedTodos.setState(nextState.filter(({ isCompleted }) => isCompleted)); // 재랜더링

    // ⚪️ notCompletedTodos state수정
    notCompletedTodos.setState(
      nextState.filter(({ isCompleted }) => !isCompleted)
    );

    // ⚪️ countOfElements state수정
    countOfElements.setState({
      all: nextState.length,
      completed: nextState.filter(({ isCompleted }) => isCompleted).length,
      notCompleted: nextState.filter(({ isCompleted }) => !isCompleted).length,
    });
    this.render();
  };

  // 등록된 모든 todoList
  const allTodos = new TodoList({
    $target: $div,
    title: "all",
    initialState: this.state,
    onDelete,
    onToggle,
  });

  // 완성된 todoList
  const completedTodos = new TodoList({
    $target: $div,
    title: "done",
    initialState: this.state.filter(({ isCompleted }) => isCompleted),
  });

  // 완성되지 않은 todoList
  const notCompletedTodos = new TodoList({
    $target: $div,
    title: "not",
    initialState: this.state.filter(({ isCompleted }) => !isCompleted),
  });

  // 요소의 개수.
  const countOfElements = new TodoCount({
    $target: $div,
    initialState: {
      all: this.state.length,
      completed: this.state.filter(({ isCompleted }) => isCompleted).length,
      notCompleted: this.state.filter(({ isCompleted }) => !isCompleted).length,
    },
  });
  this.render = () => {
    allTodos.render();
    completedTodos.render();
    notCompletedTodos.render();
    countOfElements.render();
  };
  this.render();
}
