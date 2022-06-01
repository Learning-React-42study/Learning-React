import ButtonsComp from "./components/ButtonsComp.js";
import React from "./myReact.js";

export default function App({ $target }) {
  this.$buttons = document.createElement("div");
  $target.appendChild(this.$buttons);
  const onRerender = () => {
    React.increaseRenderId(); 
    React.initCursor(); 
    new ButtonsComp({ $element: this.$buttons, onRerender });
  };
  onRerender();
}