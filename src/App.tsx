import { useState } from "react";
import "./App.css";
import InventoryGrid from "./components/InventoryGrid";

function App() {
  const handleDropLogic = () => {
    alert("test");
  };

  const handleDragStart = () => {};

  return (
    <div className="mainContent">
      <div className="tempBlocker">
        <div
          className="dragboxtest"
          draggable
          onDrop={() => handleDropLogic()}
          onDragStart={() => handleDragStart()}
        >
          X
        </div>
        <div className="dragboxtest" draggable>
          Y
        </div>
        <div className="dragboxtest" draggable>
          Y
        </div>
      </div>
      <div className="gridBlocker">{/* <InventoryGrid /> */}</div>
    </div>
  );
}

export default App;
