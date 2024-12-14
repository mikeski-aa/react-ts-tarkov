import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { ITraderItem, ITraders } from "../interfaces";
import { tradersData } from "../utils/traderData";
import "../styles/inventoryDisplay.css";

function InventoryDisplay() {
  const globalContext = useContext(GlobalContext);
  const [loadedItems, setLoadedItems] = useState<ITraderItem[]>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const shallowCopy = tradersData;
    const filtered = shallowCopy.filter(
      (item) => item.trader === globalContext.traderSelect
    );

    setLoadedItems(filtered[0].items);
  }, [globalContext.traderSelect]);

  const handleInputSearch = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    console.log(target.value);
  };

  return (
    <div className="traderInventoryContainer">
      <div className="inventoryHeader">
        <button className="inventoryBtn">BUY</button>
        <button className="inventoryBtn">SELL</button>
        <input
          className="searchItems"
          placeholder="ITEM NAME"
          onChange={(e) => handleInputSearch(e)}
        ></input>
      </div>
      <div className="inventoryMain">
        <ul>
          {loadedItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InventoryDisplay;
