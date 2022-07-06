import React from "react";
import Menu from "./Menu";
import recipes from "./recipes.json";
import * as ReactDOMClient from "react-dom/client";

ReactDOMClient.hydrateRoot(
  document.getElementById("root"),
  <Menu recipes={recipes} title="맛있는 조리법" />
);
