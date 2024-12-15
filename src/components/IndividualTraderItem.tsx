import { ITraderItem } from "../interfaces";

function IndividualTraderItem({
  item,
  currency,
}: {
  item: ITraderItem;
  currency: string;
}) {
  return (
    <div className="individualItem">
      <div className="individualItemName">{item.name}</div>
      <div className="bottomPart">
        <div className="individualItemPrice">
          {currency}
          {item.price}
        </div>
        <div className="individualItemQuant">{item.quantity}</div>
      </div>
    </div>
  );
}

export default IndividualTraderItem;
