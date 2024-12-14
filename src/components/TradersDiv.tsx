import "../styles/traderDiv.css";
import { tradersData } from "../utils/traderData";
import TraderTab from "./TraderTab";

function TradersDiv() {
  return (
    <div className="tradersHolder">
      {tradersData.map((item) => (
        <TraderTab trader={item} />
      ))}
    </div>
  );
}

export default TradersDiv;
