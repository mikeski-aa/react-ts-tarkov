import { SyntheticEvent, useState } from "react";
import "./App.css";
import InventoryGrid, { IBoxObject } from "./components/InventoryGrid";
import ItemTile from "./components/ItemTile";
import TradersDiv from "./components/TradersDiv";

export interface IGridObject {
  name: string;
  width: number;
  height: number;
}

function App() {
  const [itemDragged, setItemDragged] = useState<string>("");
  const [itemReplaced, setItemReplaced] = useState<string>("");
  const [sucDrop, setSucDrop] = useState<boolean>(false);
  const [forceUpdateKey, setForceUpdateKey] = useState<number>(0);

  const test: IBoxObject = {
    name: "gridItem",
    item: "",
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

  const handleAddItem = () => {
    let gridCopy = [...gridArray];
    gridCopy[0][0].item = "X";
    setGridArray(gridCopy);
    console.log(gridArray[0][0]);
    setForceUpdateKey(forceUpdateKey + 1);
  };

  return (
    <div className="tarkovUiHolder">
      <div className="headerContent">
        <TradersDiv />
      </div>
      <div className="mainContent">
        <div className="tempBlocker"></div>
        <div className="gridBlocker">
          <button onClick={() => handleAddItem()}>cccc</button>
          {/* <div className="gridHolder" key={forceUpdateKey}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
