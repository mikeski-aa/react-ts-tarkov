import { SyntheticEvent, useState } from "react";
import "./App.css";
import InventoryGrid from "./components/InventoryGrid";

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
      <div className="tempBlocker"></div>
      <div className="gridBlocker">{/* <InventoryGrid /> */}</div>
    </div>
  );
}

export default App;
