import MyReact from "./MyReact.js";

const element = MyReact.createElement(
  "div",
  { id: "test" },
  MyReact.createElement(
    "h1",
    null,
    "h1 child of root",
    MyReact.createElement("p", null, "p child of h1"),
    MyReact.createElement("a", null, "a sibling of p")
  ),
  MyReact.createElement("h2", { style: "color: #00ff00" }, "h2 sibling of h1")
);

const container = document.getElementById("root");

MyReact.render(element, container);
