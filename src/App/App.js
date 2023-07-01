import Header from "../shared/Header/Header.js";
import { setItem } from "../storage.js";
import TodoForm from "../todo/TodoForm.js";
import TodoListBox from "../todo/TodoListBox.js";

export default function App({ $target, initialState }) {
  // $target : <div id="app"></div>
  const header = new Header({
    $target,
  });

  const todoForm = new TodoForm({
    $target,
    onSubmit: (text) => {
      // 1. 글자 수 check
      const length = text.length;
      if (length < 2 || length >= 13) {
        alert("글자수 2 - 12글자 제한입니다.");
      }

      // 2. 중복값 check
      const findValue = todoListBox.state.find((e) => e.text === text);
      if (findValue) {
        alert("이미 추가하였습니다.");
        return;
      }

      // 3. (1,2번 통과 시) 추가
      const nextState = [...todoListBox.state, { text, isCompleted: false }];
      todoListBox.setState(nextState); // 업데이트 되면서, 자식들까지 update됨.
      setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoListBox = new TodoListBox({
    $target,
    initialState,
    onDelete: (text) => {
      const state = todoListBox.state;
      const nextState = state.filter((e) => e.text !== text);
      todoListBox.setState(nextState);
      setItem("todos", JSON.stringify(nextState));
    },
    onToggle: (text) => {
      const state = todoListBox.state;
      const findValue = state.find((e) => e.text === text);
      findValue.isCompleted = !findValue.isCompleted;
      const nextState = state;
      todoListBox.setState(nextState);
    },
  });
}
