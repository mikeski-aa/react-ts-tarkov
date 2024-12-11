import { SyntheticEvent, useState } from "react";
import "./App.css";
import InventoryGrid from "./components/InventoryGrid";

export interface IGridObject {
  name: string;
  width: number;
  height: number;
}

function App() {
  const handleDropLogic = () => {
    alert("test");
  };

  const handleDragStart = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      console.log(target.innerText);
    }
  };

  return (
    <div className="mainContent">
      <div className="tempBlocker">
        <div
          className="dragboxtest"
          draggable
          onDrop={() => handleDropLogic()}
          onDragStart={(e) => handleDragStart(e)}
          onDragOver={(e) => e.preventDefault()}
        >
          X
        </div>
        <div
          className="dragboxtest"
          draggable
          onDrop={() => handleDropLogic()}
          onDragStart={(e) => handleDragStart(e)}
          onDragOver={(e) => e.preventDefault()}
        >
          Y
        </div>
        <div
          className="dragboxtest"
          draggable
          onDrop={() => handleDropLogic()}
          onDragStart={(e) => handleDragStart(e)}
          onDragOver={(e) => e.preventDefault()}
        >
          Y
        </div>
      </div>
      <div className="gridBlocker">{/* <InventoryGrid /> */}</div>
    </div>
  );
}

export default App;
