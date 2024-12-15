import { ITraderItem } from "../interfaces";

function BuyBox({ item, buyBox }: { item: ITraderItem; buyBox: boolean }) {
  return (
    <div className={buyBox ? "buyBox open" : "buyBox hidden"}>
      <p className="bbHeader">Purchase {item.name}</p>
      <input className="bbInput" type="number"></input>
      <button className="bbButton">Confirm</button>
    </div>
  );
}

export default BuyBox;
