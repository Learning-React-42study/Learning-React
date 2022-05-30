import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

export default function StarRating({
  styles = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {
  return (
    <div style={{ padding: "5px", ...styles }}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
}
