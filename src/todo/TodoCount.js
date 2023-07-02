export default function TodoCount({ $target, initialState }) {
  const $countBox = document.createElement("div");
  $target.appendChild($countBox);
  $countBox.className = "todoCnt-box";

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { all, completed, notCompleted } = this.state;
    const completedPercent = parseInt((completed / all) * 100);
    $countBox.innerHTML = `
      <P>전체 : <span>${all}</span></P>
      <P>완성 : <span style="color : ${
        completedPercent >= 80 ? "red" : "gray"
      }">${completed}</span></P>
      <P>미완성 : <span>${notCompleted}</span></P>
    `;
  };
}
