import { createContext, SyntheticEvent, useState } from "react";
import "./App.css";
import InventoryGrid, { IBoxObject } from "./components/InventoryGrid";
import ItemTile from "./components/ItemTile";
import TradersDiv from "./components/TradersDiv";
import FooterBar from "./components/FooterBar";
import { tradersData, Traders } from "./utils/traderData";
import { IGlobalContext } from "./interfaces";
import InventoryDisplay from "./components/InventoryDisplay";
import PlayerInfo from "./components/PlayerInfo";

const defaultContextValue: IGlobalContext = {
  traderSelect: Traders.Prapor,
  setSelectTrader: () => Traders,
  traderCurency: "₽",
  setTraderCurrency: () => "",
  buyBox: false,
  setBuyBox: () => false,
};

export const GlobalContext = createContext<IGlobalContext>(defaultContextValue);

function App() {
  const [itemDragged, setItemDragged] = useState<string>("");
  const [itemReplaced, setItemReplaced] = useState<string>("");
  const [sucDrop, setSucDrop] = useState<boolean>(false);
  const [forceUpdateKey, setForceUpdateKey] = useState<number>(0);
  const [traderSelect, setSelectTrader] = useState<Traders>(Traders.Prapor);
  const [traderCurency, setTraderCurrency] = useState<string>("₽");
  const [buyBox, setBuyBox] = useState<boolean>(false);

  const test: IBoxObject = {
    name: "gridItem",
    item: "",
    xindex: null,
    yindex: null,
  };

  const [gridArray, setGridArray] = useState(
    Array(28)
      .fill(null)
      .map((_, yIndex) =>
        Array(10)
          .fill(null)
          .map((_, xIndex) => ({ ...test, xindex: xIndex, yindex: yIndex }))
      )
  );

  const handleAddItem = () => {
    let gridCopy = [...gridArray];
    gridCopy[0][0].item = "X";
    setGridArray(gridCopy);
    console.log(gridArray[0][0]);
    setForceUpdateKey(forceUpdateKey + 1);
  };

  return (
    <div className="tarkovUiHolder">
      <GlobalContext.Provider
        value={{
          traderSelect,
          setSelectTrader,
          traderCurency,
          setTraderCurrency,
          buyBox,
          setBuyBox,
        }}
      >
        <div className="headerContent">
          <TradersDiv />
          <PlayerInfo />
        </div>
        <div className="mainContent">
          <InventoryDisplay />
        </div>
      </GlobalContext.Provider>
      <FooterBar />
    </div>
  );
}

export default App;

{
  /* <div className="tempBlocker"></div>
        <div className="gridBlocker">
          <button onClick={() => handleAddItem()}>cccc</button>
          <div className="gridHolder" key={forceUpdateKey}>
            {gridArray.map((row, yIndex) => (
              <div className={`gridRow ${yIndex}`} key={yIndex}>
                {row.map((item, xIndex) => (
                  <ItemTile
                    key={xIndex}
                    val={item.item}
                    itemDragged={itemDragged}
                    itemReplaced={itemReplaced}
                    setItemDragged={setItemDragged}
                    setItemReplaced={setItemReplaced}
                    setSucDrop={setSucDrop}
                    sucDrop={sucDrop}
                    inputCoord={[xIndex, yIndex]}
                  />
                ))}
              </div>
            ))}
          </div>
        </div> */
}
