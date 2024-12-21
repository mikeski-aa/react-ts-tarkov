import { SyntheticEvent, useContext, useState } from "react";
import { ITraderItem } from "../interfaces";
import { GlobalContext } from "../App";
import WeaponPlaceholder from "../assets/placeholders/weaponplaceholder.png";
import ScBuy from "../assets/icons/scBuy.svg?react";
import Cross from "../assets/icons/cross.svg?react";

function BuyBox({ item }: { item: ITraderItem }) {
  const globalContext = useContext(GlobalContext);

  const [purchaseQuant, setPurchaseQuant] = useState<number>(1);
  const handleCloseClick = () => {
    globalContext.setBuyBox(false);
    setPurchaseQuant(1);
  };

  const handleInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    if (target) {
      setPurchaseQuant(+target.value);
    }
  };
  return (
    <div className={globalContext.buyBox ? "buyBox open" : "buyBox hidden"}>
      <div className="bbUpperHolder">
        <div className="bbHeader">Purchase</div>
        <div className="bbItemName">{item.name}</div>
        <div className="bbImageHolder">
          <img src={WeaponPlaceholder} className="bbImage"></img>
        </div>
        <div className="bbPrice">
          {globalContext.traderCurency}
          {item.price * purchaseQuant}
        </div>
        <div className="bbInputHolder">
          <label htmlFor="bbInput" className="bbLabel">
            Quantity
          </label>
          <input
            className="bbInput"
            type="number"
            onChange={(e) => handleInputChange(e)}
            value={purchaseQuant}
          ></input>
        </div>
      </div>
      <div className="bbButonHolder">
        <button className="bbButtonConfirm" onClick={handleCloseClick}>
          <ScBuy className="buyBoxIcon" />
          Confirm
        </button>
        <button className="bbButtonCancel" onClick={handleCloseClick}>
          <Cross className="buyBoxIcon" />
          Close
        </button>
      </div>
    </div>
  );
}

export default BuyBox;
