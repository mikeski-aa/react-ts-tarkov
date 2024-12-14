import "../styles/traderDiv.css";
import { tradersData } from "../utils/traderData";
import TraderTab from "./TraderTab";

function TradersDiv() {
  return (
    <div className="tradersHolder">
      {tradersData.map((item, index) => (
        <TraderTab trader={item} key={index} />
      ))}
    </div>
  );
}

export default TradersDiv;
