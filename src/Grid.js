import React, { useState } from "react";

const Grid = () => {
  const gridSize = 3;
  const [boxes, setBoxes] = useState(Array(gridSize * gridSize).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (boxes[index] !== "white") return;
    
    const newBoxes = [...boxes];
    newBoxes[index] = "green";
    setBoxes(newBoxes);
    setClickOrder([...clickOrder, index]);

    if (clickOrder.length + 1 === gridSize * gridSize) {
      replaySequence([...clickOrder, index]);
    }
  };

  const replaySequence = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setBoxes((prev) => {
          const updated = [...prev];
          updated[idx] = "orange";
          return updated;
        });
      }, i * 500);
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${gridSize}, 100px)`, gap: "5px" }}>
      {boxes.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{ width: "100px", height: "100px", backgroundColor: color, border: "1px solid black", cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default Grid;
