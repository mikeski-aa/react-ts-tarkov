import HandShake from "../assets/icons/handbook.svg?react";
import Tasks from "../assets/icons/tasks.svg?react";
import Buy from "../assets/icons/scBuy.svg?react";
import "../styles/headerButtons.css";
import { useContext } from "react";
import { GlobalContext } from "../App";
import { WindowState } from "../utils/traderData";

function HeaderButtons() {
  const globalContext = useContext(GlobalContext);

  const handleTradingClick = () => {
    globalContext.setMainDisplay(WindowState.Trading);
  };

  const handleTasksClick = () => {
    globalContext.setMainDisplay(WindowState.Tasks);
  };
  const handleServicesClick = () => {
    globalContext.setMainDisplay(WindowState.Services);
  };

  if (globalContext.traderSelect === 5) {
    return (
      <div className="headerButtonHolder">
        <button
          className={
            globalContext.mainDisplay == WindowState.Trading
              ? "headerButtons selected"
              : "headerButtons"
          }
          onClick={handleTradingClick}
        >
          <Buy className="headerBtnIcon" />
          Trading
        </button>
        <button className="headerButtons" onClick={handleTasksClick}>
          <Tasks className="headerBtnIcon" />
          Tasks
        </button>
        <button className="headerButtons" onClick={handleServicesClick}>
          <HandShake className="headerBtnIcon" />
          Services
        </button>
      </div>
    );
  }

  return (
    <div className="headerButtonHolder">
      <button className="headerButtons" onClick={handleTradingClick}>
        <Buy className="headerBtnIcon" />
        Trading
      </button>
      <button className="headerButtons">
        <Tasks className="headerBtnIcon" />
        Tasks
      </button>
    </div>
  );
}

export default HeaderButtons;
