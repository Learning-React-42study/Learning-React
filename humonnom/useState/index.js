import App from "./App.js";

// new App({ $target: document.querySelector(".App") });
// console.log(state); // Pre-render: []
App(); // first render
// console.log(state); // First-render: ['Rudi', 'Yardley']
// App(); // second render
// console.log(state); // Subsequent-render: ['Rudi', 'Yardley']

// click the 'Fred' button

// console.log(state); // After-click: ['Fred', 'Yardley']
