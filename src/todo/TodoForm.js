// 마찬가지로 부모는 App
export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $target.appendChild($form);

  let isInit = false;
  this.render = () => {
    $form.innerHTML = `
      <input type="text" placeholder="todo >> " id="todo-list"/>
    `;
    if (!isInit) {
      const $input = $form.querySelector("input#todo-list");
      $input.focus();
      $form.addEventListener("submit", (e) => {
        e.preventDefault();
        onSubmit($input.value);
        $input.value = "";
      });

      isInit = true;
    }
  };
  this.render();
}
