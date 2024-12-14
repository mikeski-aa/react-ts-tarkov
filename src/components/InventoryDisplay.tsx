import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { ITraderItem, ITraders } from "../interfaces";
import { tradersData } from "../utils/traderData";
import "../styles/inventoryDisplay.css";

function InventoryDisplay() {
  const globalContext = useContext(GlobalContext);
  const [loadedItems, setLoadedItems] = useState<ITraderItem[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ITraderItem[]>([]);

  useEffect(() => {
    const shallowCopy = tradersData;
    const filtered = shallowCopy.filter(
      (item) => item.trader === globalContext.traderSelect
    );

    setLoadedItems(filtered[0].items);
    setFilteredItems([]);
    setInputText("");
  }, [globalContext.traderSelect]);

  const handleInputSearch = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setInputText(target.value.toUpperCase());

    const filtered = loadedItems.filter((item) =>
      item.name.toUpperCase().includes(target.value.toUpperCase())
    );
    setFilteredItems(filtered);

    console.log(target.value.toUpperCase().length);
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
          value={inputText}
        ></input>
      </div>

      {inputText.length < 1 ? (
        <div className="inventoryMain">
          <ul>
            {loadedItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="inventoryMain">
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
            {filteredItems.length === 0 ? <li>No items found</li> : null}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InventoryDisplay;
