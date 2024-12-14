import { ITraders } from "../utils/traderData";

function TraderTab({ trader }: { trader: ITraders }) {
  return (
    <button className="traderBox">
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
