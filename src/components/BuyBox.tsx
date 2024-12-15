import { ITraderItem } from "../interfaces";

function BuyBox({ item, buyBox }: { item: ITraderItem; buyBox: boolean }) {
  return (
    <div className={buyBox ? "buyBox open" : "buyBox hidden"}>
      <h3>Purchase {item.name}</h3>
      <input type="number"></input>
      <button>Confirm</button>
    </div>
  );
}

export default BuyBox;
