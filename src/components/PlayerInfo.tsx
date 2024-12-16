import { useContext } from "react";
import { GlobalContext } from "../App";
import { Traders } from "../utils/traderData";
import ProfilePlaceholder from "../assets/placeholders/profileplaceholder.svg?react";
import "../styles/playerInfo.css";
import RepIcon from "../assets/icons/repicon.svg?react";

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
        <hr className="ppHr"></hr>
        <div className="ppCurrentTrader">
          <div className="currentStanding">
            <div className="currentLevel">
              <span className="textSpan">Trader level:</span>
              <span className="levelSpan">I</span>
            </div>
            <div className="currentRep">
              <RepIcon className="profileIcon" /> 0.78
            </div>
            <div className="currentSpent">
              <span>₽ 715.3k</span>
              <span>{"(spent)"}</span>
            </div>
          </div>
          <div className="nextStanding">
            <div className="nextLevel">
              <span className="textSpan">Next level:</span>
              <span className="levelSpan">II</span>
            </div>
            <div className="nextRep">
              <RepIcon className="profileIcon" /> 1.00
            </div>
            <div className="nextSpent">
              <span>₽ 1000.3k</span>
              <span>{"(required)"}</span>
            </div>
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
