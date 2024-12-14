import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { ITraderItem, ITraders } from "../interfaces";
import { tradersData } from "../utils/traderData";
import "../styles/inventoryDisplay.css";

function InventoryDisplay() {
  const globalContext = useContext(GlobalContext);
  const [loadedItems, setLoadedItems] = useState<ITraderItem[]>([]);

  useEffect(() => {
    const shallowCopy = tradersData;
    const filtered = shallowCopy.filter(
      (item) => item.trader === globalContext.traderSelect
    );

    setLoadedItems(filtered[0].items);
  }, [globalContext.traderSelect]);

  return (
    <div className="traderInventoryContainer">
      <div className="inventoryHeader">
        <button>BUY</button>
        <button>SELL</button>
      </div>
      <div className="inventoryMain">
        <ul>
          {loadedItems.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InventoryDisplay;
