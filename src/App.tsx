import { SyntheticEvent, useState } from "react";
import "./App.css";
import InventoryGrid, { IBoxObject } from "./components/InventoryGrid";
import ItemTile from "./components/ItemTile";

export interface IGridObject {
  name: string;
  width: number;
  height: number;
}

function App() {
  const [itemDragged, setItemDragged] = useState<string>("");
  const [itemReplaced, setItemReplaced] = useState<string>("");
  const [sucDrop, setSucDrop] = useState<boolean>(false);

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

  return (
    <div className="mainContent">
      <div className="tempBlocker">
        {/* <ItemTile
          val="X"
          itemDragged={itemDragged}
          itemReplaced={itemReplaced}
          setItemDragged={setItemDragged}
          setItemReplaced={setItemReplaced}
          setSucDrop={setSucDrop}
          sucDrop={sucDrop}
        />
        <ItemTile
          val=""
          itemDragged={itemDragged}
          itemReplaced={itemReplaced}
          setItemDragged={setItemDragged}
          setItemReplaced={setItemReplaced}
          setSucDrop={setSucDrop}
          sucDrop={sucDrop}
        />
        <ItemTile
          val="Y"
          itemDragged={itemDragged}
          itemReplaced={itemReplaced}
          setItemDragged={setItemDragged}
          setItemReplaced={setItemReplaced}
          setSucDrop={setSucDrop}
          sucDrop={sucDrop}
        /> */}
      </div>
      <div className="gridBlocker">
        <button onClick={() => console.log(gridArray)}>cccc</button>
        <div className="gridHolder">
          {gridArray.map((row, yIndex) => (
            <div className={`gridRow ${yIndex}`} key={yIndex}>
              {row.map((item, xIndex) => (
                <ItemTile
                  key={xIndex}
                  val={item.item}
                  itemDragged={itemDragged}
                  itemReplaced={itemReplaced}
                  setItemDragged={setItemDragged}
                  setItemReplaced={setItemReplaced}
                  setSucDrop={setSucDrop}
                  sucDrop={sucDrop}
                  inputCoord={[xIndex, yIndex]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
