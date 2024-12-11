import { SyntheticEvent, useState } from "react";
import "./App.css";
import InventoryGrid from "./components/InventoryGrid";
import ItemTile from "./components/ItemTile";

export interface IGridObject {
  name: string;
  width: number;
  height: number;
}

function App() {
  const [itemDragged, setItemDragged] = useState<string>("");
  const [itemReplaced, setItemReplaced] = useState<string>("");
  return (
    <div className="mainContent">
      <div className="tempBlocker">
        <ItemTile val="X" />
        <ItemTile val="X" />
        <ItemTile val="Y" />
      </div>
      <div className="gridBlocker">{/* <InventoryGrid /> */}</div>
    </div>
  );
}

export default App;
