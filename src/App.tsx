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
        <ItemTile
          val="X"
          itemDragged={itemDragged}
          itemReplaced={itemReplaced}
          setItemDragged={setItemDragged}
          setItemReplaced={setItemReplaced}
        />
        <ItemTile
          val="X"
          itemDragged={itemDragged}
          itemReplaced={itemReplaced}
          setItemDragged={setItemDragged}
          setItemReplaced={setItemReplaced}
        />
        <ItemTile
          val="Y"
          itemDragged={itemDragged}
          itemReplaced={itemReplaced}
          setItemDragged={setItemDragged}
          setItemReplaced={setItemReplaced}
        />
      </div>
      <div className="gridBlocker">{/* <InventoryGrid /> */}</div>
    </div>
  );
}

export default App;
