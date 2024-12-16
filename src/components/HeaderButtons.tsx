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
    console.log(globalContext.mainDisplay === WindowState.Trading);
  };

  const handleTasksClick = () => {
    globalContext.setMainDisplay(WindowState.Tasks);
    console.log(globalContext.mainDisplay);
  };
  const handleServicesClick = () => {
    globalContext.setMainDisplay(WindowState.Services);
  };

  if (globalContext.traderSelect === 5) {
    return (
      <div className="headerButtonHolder">
        <button
          className={
            globalContext.mainDisplay === 0
              ? "headerButtons selected"
              : "headerButtons"
          }
          onClick={handleTradingClick}
        >
          <Buy className="headerBtnIcon" />
          Trading
        </button>
        <button
          className={
            globalContext.mainDisplay === 1
              ? "headerButtons selected"
              : "headerButtons"
          }
          onClick={handleTasksClick}
        >
          <Tasks className="headerBtnIcon" />
          Tasks
        </button>
        <button
          className={
            globalContext.mainDisplay === 2
              ? "headerButtons selected"
              : "headerButtons"
          }
          onClick={handleServicesClick}
        >
          <HandShake className="headerBtnIcon" />
          Services
        </button>
      </div>
    );
  }

  return (
    <div className="headerButtonHolder">
      <button
        className={
          globalContext.mainDisplay === 0
            ? "headerButtons selected"
            : "headerButtons"
        }
        onClick={handleTradingClick}
      >
        <Buy className="headerBtnIcon" />
        Trading
      </button>
      <button
        className={
          globalContext.mainDisplay === 1
            ? "headerButtons selected"
            : "headerButtons"
        }
        onClick={handleTasksClick}
      >
        <Tasks className="headerBtnIcon" />
        Tasks
      </button>
    </div>
  );
}

export default HeaderButtons;
