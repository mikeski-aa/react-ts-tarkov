import { useContext, useEffect, useState } from "react";
import { IQuest } from "../interfaces";
import { GlobalContext } from "../App";
import { Traders } from "../utils/traderData";
import {
  peacekeeperQuests,
  praporQuests,
  ragmanQuests,
  skierQuests,
  therapistQuests,
} from "../utils/questData";
import "../styles/taskWindow.css";

function TaskWindow() {
  const [currentQuests, setCurrentQuests] = useState<IQuest[]>([]);
  const [activeQuest, setActiveQuest] = useState<IQuest>();
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    switch (globalContext.traderSelect) {
      case Traders.Prapor:
        setCurrentQuests(praporQuests);
        setActiveQuest(praporQuests[0]);
        break;
      case Traders.Peacekeeper:
        setCurrentQuests(peacekeeperQuests);
        setActiveQuest(peacekeeperQuests[0]);
        break;
      case Traders.Therapist:
        setCurrentQuests(therapistQuests);
        setActiveQuest(therapistQuests[0]);
        break;
      case Traders.Ragman:
        setCurrentQuests(ragmanQuests);
        setActiveQuest(ragmanQuests[0]);
        break;
      case Traders.Skier:
        setCurrentQuests(skierQuests);
        setActiveQuest(skierQuests[0]);
        break;
    }
  }, [globalContext.traderSelect]);

  return (
    <div className="taskHolder">
      <div className="taskHolderHeader">
        <div className="leftHeader">PLACEHOLDER COMPLETE</div>
        <div className="rightHeader">{activeQuest?.name}</div>
      </div>
      <div className="mainTaskWindow">
        <div className="leftMainList">
          {currentQuests.map((quest) => (
            <div>{quest.name}</div>
          ))}
        </div>
        <div className="rightMainQuest"></div>
      </div>
    </div>
  );
}

export default TaskWindow;
