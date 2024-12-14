import { useContext } from "react";
import { GlobalContext } from "../App";
import { ITraders } from "../interfaces";
import { Traders } from "../utils/traderData";

function TraderTab({ trader }: { trader: ITraders }) {
  const globalContext = useContext(GlobalContext);

  const handleTraderClick = () => {
    globalContext.setSelectTrader(trader.trader);
  };

  return (
    <button
      className={
        globalContext.traderSelect === trader.trader
          ? "traderBox active"
          : "traderBox"
      }
      onClick={handleTraderClick}
    >
      <div className="traderImageHolder">
        <div className="repIcon">RI</div>
        <div className="notificHolder">
          <div className="dailyNotification">Daily</div>
          <div className="completeNotification">Comp</div>
        </div>
      </div>
      <div className="traderName">{trader.name}</div>
      <div className="traderRep">{trader.reputation}</div>
      <div className="traderReset">{trader.resetTimer}</div>
    </button>
  );
}

export default TraderTab;
