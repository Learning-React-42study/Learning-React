import React from "./myReact.js";
function ExampleComponent({ $element, onRerender }) {
  const [id, setId] = React.useState("Go"); // cursor: 0
  const [count, setCount] = React.useState(0); // cursor: 1
  
  const handleToggle = () => {
    setId((id === "Go") ? "Hyewkim" : "Go");
    onRerender();
  };
  const handleInc = () => {
    setCount(count + 1);
    onRerender();
  };
  
  this.render = () => {
    $element.innerHTML = `
      <h2>${id}</h2>
      <button type="button" class="toggle">toggle id</button>
      <p>${count}</p>
      <button type="button" class="inc">up</button>
    `;
    $element
      .querySelector(".inc")
      .addEventListener("click", handleInc);
    $element
      .querySelector(".toggle")
      .addEventListener("click", handleToggle);
  };

  this.render();
}

export default function App({ $target }) {
  this.$element = document.createElement("div");
  $target.appendChild(this.$element);

  const onRerender = () => {
    React.increaseRenderId(); // 렌더 첫번째인지 체크
    React.initCursor(); // resetting the cursor
    new ExampleComponent({ $element: this.$element, onRerender});
  }
  onRerender();
}



// import ReactSimple from "./ReactSimple.js";
// export default function App({ $target }) {
//   this.$element = document.createElement("div");
//   $target.appendChild(this.$element);

//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount(count() + 1);
//     this.render();
//   };

//   this.render = () => {
//     this.$element.innerHTML = `
//       <p>${count()}</p>
//       <button type="button">up</button>
//     `;

//     this.$element
//       .querySelector("button")
//       .addEventListener("click", handleClick);
//   };
//   this.render();
// }