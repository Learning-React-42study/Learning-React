import React, { useState } from "react";
import ColorList from "./ColorList.js";
import colorData from "./color-data.json";
import AddColorForm from "./AddColorForm.js";
import { v4 } from "uuid";

export default function App() {
  const [colors, setColors] = useState(colorData.colors);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  );
}
