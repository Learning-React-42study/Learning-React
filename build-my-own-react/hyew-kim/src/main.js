import CustomReact from "./CustomReact";
import App from "./App";
/*import React from "react";
import ReactDOM from "react-dom/client";

//In jsx version
//const element = <h1 title="foo">Hello</h1>;

//const element = React.createElement("h1", { title: "foo" }, "Hello");
//ReactDom.createRoot(document.getElementById("root")).render(element);*/

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

const container = document.getElementById("root");
const node = document.createElement(element.type);
node["title"] = element.props.title;
const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
console.log(CustomReact.createElement("p", null, "hello"));
