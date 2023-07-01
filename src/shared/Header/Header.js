import Logo from "./Logo.js";
export default function Header({ $target }) {
  // $target : 부모태그
  const $header = document.createElement("header");
  $target.appendChild($header); // $target안에 header컴포넌트가 생성됨.

  // 함수선언은 그냥 만약이라고 생각하면 돼!
  // 아직 안 썼어..! 그냥 등록만.
  // 여기까진 태그만 만들어주고, 아직 내용물 안 채웠어.
  // 태그는 만들어진거야!
  const logo = new Logo({
    $target: $header,
    title: "todo-list",
  });
  this.render = () => {
    logo.render(); // 이미 위에 태그는 다 만들어짐.
    // 내용물만 채우면 돼!
    // logo의 내용물 채워줘 이제
  };
  this.render();
}
