import { useState } from "react";
import "./App.css";
import InventoryGrid from "./components/InventoryGrid";

function App() {
  return (
    <div className="mainContent">
      <div className="tempBlocker"></div>
      <div className="gridBlocker">
        <InventoryGrid />
      </div>
    </div>
  );
}

export default App;
