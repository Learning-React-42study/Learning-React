import React from "react";
import { useColors } from "./context";
import Color from "./Color";

export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed. (Add a color)</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
