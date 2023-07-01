export default function Logo({ $target, title }) {
  // 부모타겟은 header가 됨.!
  const $h1 = document.createElement("h1");
  $target.appendChild($h1); // 부모안에다가 넣어줌.!

  this.render = () => {
    // 태그 넣어줬으니 이제 태그안에 내용채워준다.
    $h1.innerText = title; // 단순 props를 받아서 화면에 보여줌.
  };
}
