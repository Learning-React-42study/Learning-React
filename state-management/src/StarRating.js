import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ styles = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(2);
  return (
    <div style={{ padding: "5px", ...styles }} {...props}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
}
