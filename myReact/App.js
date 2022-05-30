import React from "./myReact.js";
function ButtonsComp({ $element, onRerender }) {
  const [count, setCount] = React.useState(0); // cursor: 0
  const [clover, setClover] = React.useState(false); // cursor: 1
  const [soundOn, setSoundOn] = React.useReducer((soundOn) => !soundOn, false);

  const handleCloverToggle = () => {
    setClover(!clover);
    onRerender();
  };
  const handleInc = () => {
    setCount(count + 1);
    onRerender();
  };
  const handleSoundControl = () => {
    setSoundOn();
    onRerender();
  };

  this.render = () => {
    $element.innerHTML = `
    <p>${count}</p>
    <button type="button" class="inc">up</button>
      <p>${clover ? "안한다" : "한다"}</p>
      <button type="button" class="clover">🍀</button>
      <p>${soundOn ? "🔈" : "🔇"}</p>
      <button type="button" class="soundControl">${
        soundOn ? "turn off" : "turn on"
      }</button>
    `;
    $element.querySelector(".inc").addEventListener("click", handleInc);
    $element
      .querySelector(".clover")
      .addEventListener("click", handleCloverToggle);
    $element
      .querySelector(".soundControl")
      .addEventListener("click", handleSoundControl);
  };
  this.render();
}



export default function App({ $target }) {
  this.$element = document.createElement("div");
  $target.appendChild(this.$element);
  const onRerender = () => {
    React.increaseRenderId(); 
    React.initCursor(); 
    new ButtonsComp({ $element: this.$element, onRerender });
    // new CatsComp({ $element: this.$element, onRerender });
  };
  onRerender();
}