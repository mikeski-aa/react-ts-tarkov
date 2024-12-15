import { Dispatch, SetStateAction, useCallback, useContext } from "react";
import { ITraderItem } from "../interfaces";
import { GlobalContext } from "../App";

function BuyBox({ item }: { item: ITraderItem }) {
  const globalContext = useContext(GlobalContext);
  const handleCloseClick = () => {
    globalContext.setBuyBox(false);
  };
  return (
    <div className={globalContext.buyBox ? "buyBox open" : "buyBox hidden"}>
      <p className="bbHeader">Purchase {item.name}</p>
      <input className="bbInput" type="number"></input>
      <button className="bbButton">Confirm</button>
      <button className="bbButton" onClick={handleCloseClick}>
        Close
      </button>
    </div>
  );
}

export default BuyBox;
