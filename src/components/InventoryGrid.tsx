import { useState } from "react";
import "../styles/inventoryGrid.css";

export interface IBoxObject {
  name: string;
  item: string;
  xindex: number | null;
  yindex: number | null;
}

function InventoryGrid() {
  const test: IBoxObject = {
    name: "gridItem",
    item: "empty",
    xindex: null,
    yindex: null,
  };
  const [gridArray, setGridArray] = useState(
    Array(28)
      .fill(null)
      .map((_, yIndex) =>
        Array(10)
          .fill(null)
          .map((_, xIndex) => ({ ...test, xindex: xIndex, yindex: yIndex }))
      )
  );

  console.log(gridArray);

  return (
    <div className="gridHolder">
      {gridArray.map((row, yIndex) => (
        <div className={`gridRow ${yIndex}`} key={yIndex}>
          {row.map((_, xIndex) => (
            <div
              className={`gridItem ${yIndex} ${xIndex}`}
              key={xIndex}
              draggable
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default InventoryGrid;
