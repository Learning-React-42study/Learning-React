import { createContext, useState, useContext } from "react";
import colorsObj from "./color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();
const useColors = () => useContext(ColorContext);
const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorsObj.colors);

  const addColors = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ];
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider
      value={{ addColors, removeColor, rateColor, colors }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export { useColors };
export default ColorProvider;
