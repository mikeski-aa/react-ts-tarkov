import { useState } from "react";
import GridLine from "./GridLine";

export interface IBoxObject {
  name: string;
  item: string;
  xindex: number;
  yindex: number;
}

function InventoryGrid() {
  const test: IBoxObject = {
    name: "gridItem",
    item: "empty",
    xindex: 0,
    yindex: 0,
  };
  const [gridArray, setGridArray] = useState(
    Array(14).fill(Array(10).fill(""))
  );

  console.log(gridArray);

  return (
    <div className="gridHolder">
      {gridArray.map((item, originalIndex) =>
        item.map((newItem, index) => (
          <div className={newItem.name} key={index}>
            {originalIndex + index}
          </div>
        ))
      )}
    </div>
  );
}

export default InventoryGrid;
