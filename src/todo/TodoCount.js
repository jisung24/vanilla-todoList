export default function TodoCount({ $target, initialState }) {
  const $countBox = document.createElement("div");
  $target.appendChild($countBox);

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  const { all, completed, notCompleted } = this.state;
  this.render = () => {
    $countBox.innerHTML = `
      <P>전체 : ${all}</P>
      <P>완성 : ${completed}</P>
      <P>미완성 : ${notCompleted}</P>
    `;
  };
  this.render();
}
