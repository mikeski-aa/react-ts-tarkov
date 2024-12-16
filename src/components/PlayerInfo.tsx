import { useContext } from "react";
import { GlobalContext } from "../App";
import { Traders } from "../utils/traderData";
import ProfilePlaceholder from "../assets/placeholders/profileplaceholder.svg?react";

function PlayerInfo() {
  const globalContext = useContext(GlobalContext);

  return (
    <div className="playerProfileContainer">
      <div className="ppLeft">
        <div className="ppName">TarkovPlayer</div>
        <div className="ppCurrencyHolder">
          <div className="ppRub">₽ 7.094.431</div>
          <div className="ppUsd">$ 781</div>
          <div className="ppEur">€ 223</div>
        </div>
        <div className="ppCurrentTrader">
          <div className="currentStanding">
            <div className="currentLevel">Trader level: I</div>
            <div className="currentRep">RepIcon: 0.78</div>
            <div className="currentSpent">{"₽ 715.3k (spent)"}</div>
          </div>
          <div className="nextStanding">
            <div className="nextLevel">Trader level: II</div>
            <div className="nextRep">RepIcon: 1.00</div>
            <div className="nextSpent">{"₽ 1000.3k"}</div>
          </div>
        </div>
      </div>
      <div className="ppRight">
        <div className="ppLevel">44</div>
        <ProfilePlaceholder className="ppImage" />
      </div>
    </div>
  );
}

export default PlayerInfo;
