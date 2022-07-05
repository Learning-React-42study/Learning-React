import React from "react";
import Menu from "./Menu";
import recipes from "./recipes.json";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Menu recipes={recipes} title="맛있는 조리법" />
);
