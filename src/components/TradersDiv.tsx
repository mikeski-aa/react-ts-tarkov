import "../styles/traderDiv.css";
import traders from "../utils/traderData";
import TraderTab from "./TraderTab";

function TradersDiv() {
  return (
    <div className="tradersHolder">
      {traders.map((item) => (
        <TraderTab trader={item} />
      ))}
    </div>
  );
}

export default TradersDiv;
