export default function TodoCount({ $target }) {
  const $countBox = document.createElement("div");
  $target.appendChild($countBox);
  $countBox.className = "todoCnt-box";

  // Q1. 이런식으로 render받아도 되는지!
  this.render = (all, completed, notCompleted) => {
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
