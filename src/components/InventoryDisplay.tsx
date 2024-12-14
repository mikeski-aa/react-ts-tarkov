import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { ITraderItem } from "../interfaces";
import { tradersData } from "../utils/traderData";
import "../styles/inventoryDisplay.css";
import BuyIcon from "../assets/icons/scBuy.svg?react";
import SellIcon from "../assets/icons/scSell.svg?react";

function InventoryDisplay() {
  const globalContext = useContext(GlobalContext);
  const [loadedItems, setLoadedItems] = useState<ITraderItem[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ITraderItem[]>([]);
  const [inventoryState, setInventoryState] = useState<boolean>(false);

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

  const handleBuyClick = () => {
    setInventoryState(false);
  };

  const handleSellClick = () => {
    setInventoryState(true);
  };

  return (
    <div className="traderInventoryContainer">
      <div className="inventoryHeader">
        <button
          className={inventoryState ? "inventoryBtn" : "inventoryBtn active"}
          onClick={handleBuyClick}
        >
          <BuyIcon className="footerIcon" />
          BUY
        </button>
        <button
          className={inventoryState ? "inventoryBtn active" : "inventoryBtn"}
          onClick={handleSellClick}
        >
          <SellIcon className="footerIcon" />
          SELL
        </button>
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
