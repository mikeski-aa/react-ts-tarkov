import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { ITraderItem } from "../interfaces";
import { tradersData } from "../utils/traderData";
import "../styles/inventoryDisplay.css";
import BuyIcon from "../assets/icons/scBuy.svg?react";
import SellIcon from "../assets/icons/scSell.svg?react";
import IndividualTraderItem from "./IndividualTraderItem";

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

  const [gridArray, setGridArray] = useState(
    Array(28)
      .fill(null)
      .map((_, yIndex) => Array(10).fill(null))
  );

  return (
    <div className="traderInventoryContainer">
      <div className="inventoryHeader">
        <button
          className={
            inventoryState ? "inventoryBtn first" : "inventoryBtn active first"
          }
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
      {inventoryState ? (
        <div className="playerInventory">
          <h1>Player Inventory</h1>
          <div className="testHolder">
            {gridArray.map((row, yIndex) => (
              <div className="gridRow" key={yIndex}>
                {row.map((item) => (
                  <div className="gridItem"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : inputText.length < 1 ? (
        <div className="inventoryMain">
          <h1>Trader Inventory</h1>
          <div className="traderItemHolder">
            {loadedItems.map((item, index) => (
              <IndividualTraderItem key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="inventoryMain">
          <div className="traderItemHolder">
            {filteredItems.map((item, index) => (
              <IndividualTraderItem key={index} item={item} />
            ))}
          </div>
          {filteredItems.length === 0 ? <div>No items found</div> : null}
        </div>
      )}
    </div>
  );
}

export default InventoryDisplay;
