// import React from "./React.js";
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

import { useState, increaseRenderId } from "./myReact.js";

// Our component code that uses hooks
function RenderFunctionComponent() {
  const [firstName, setFirstName] = useState("Rudi"); // cursor: 0
  const [lastName, setLastName] = useState("Yardley"); // cursor: 1

  // return (
  //   <div>
  //     <Button onClick={() => setFirstName("Richard")}>Richard</Button>
  //     <Button onClick={() => setFirstName("Fred")}>Fred</Button>
  //   </div>
  // );
}

// This is sort of simulating Reacts rendering cycle
export default function App() {
  increaseRenderId(); // 렌더 첫번째인지 체크위함
  cursor = 0; // resetting the cursor
  // new RenderFunctionComponent;
  // return <RenderFunctionComponent />; // render
}
