import { useContext } from "react";
import { GlobalContext } from "../App";
import { ITraders } from "../interfaces";
import { Traders, WindowState } from "../utils/traderData";

function TraderTab({ trader }: { trader: ITraders }) {
  const globalContext = useContext(GlobalContext);

  const handleTraderClick = () => {
    if (
      globalContext.mainDisplay === WindowState.Services &&
      globalContext.traderSelect === Traders.Ragman
    ) {
      globalContext.setMainDisplay(0);
    }

    globalContext.setSelectTrader(trader.trader);
    globalContext.setBuyBox(false);

    if (trader.trader === Traders.Peacekeeper) {
      globalContext.setTraderCurrency("$");
    } else {
      globalContext.setTraderCurrency("₽");
    }
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
      <div className={`traderImageHolder ${trader.name}`}>
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
