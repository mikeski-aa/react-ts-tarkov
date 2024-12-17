import { useContext, useEffect, useState } from "react";
import { IQuest } from "../interfaces";
import { GlobalContext } from "../App";
import { Traders } from "../utils/traderData";
import {
  mechanicQuests,
  peacekeeperQuests,
  praporQuests,
  ragmanQuests,
  skierQuests,
  therapistQuests,
  jaegerQuests,
  refQuests,
  fenceQuests,
} from "../utils/questData";
import "../styles/taskWindow.css";
import palceholderQuestImg from "../assets/placeholders/questimageplaceholder.png";
import placeholderItemImg from "../assets/placeholders/itemplaceholder.png";

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
      case Traders.Mechanic:
        setCurrentQuests(mechanicQuests);
        setActiveQuest(mechanicQuests[0]);
        break;
      case Traders.Jaeger:
        setCurrentQuests(jaegerQuests);
        setActiveQuest(jaegerQuests[0]);
        break;
      case Traders.Ref:
        setCurrentQuests(refQuests);
        setActiveQuest(refQuests[0]);
        break;
      case Traders.Fence:
        setCurrentQuests(fenceQuests);
        setActiveQuest(fenceQuests[0]);
        break;
    }
  }, [globalContext.traderSelect]);

  const handleQuestClick = (questName: string) => {
    const filteredQuests = currentQuests.filter(
      (item) => item.name === questName
    );
    if (filteredQuests) {
      setActiveQuest(filteredQuests[0]);
    }
  };

  return (
    <div className="taskHolder">
      <div className="taskHolderHeader">
        <div className="leftHeader">PLACEHOLDER COMPLETE</div>
        <div className="rightHeader">{activeQuest?.name}</div>
      </div>
      <div className="mainTaskWindow">
        <div className="leftMainList">
          {currentQuests.map((quest) => (
            <button
              className="questButton"
              onClick={() => handleQuestClick(quest.name)}
            >
              {quest.name}
            </button>
          ))}
        </div>
        <div className="rightMainQuest">
          <div className="questDetails">
            <img src={palceholderQuestImg} className="questImg"></img>
            <div className="detailsText">{activeQuest?.description}</div>
          </div>
          <div className="questObj">
            {activeQuest?.subTask.map((sub) => (
              <div className="taskItem">{sub.text}</div>
            ))}
          </div>
          <div className="questRewards">
            <div className="expReward">+ {activeQuest?.expReward} EXP</div>
            <div className="cashReward">
              <img className="placeholderItem" src={placeholderItemImg}></img>
              {activeQuest?.currencyReward.name}{" "}
              {`(${activeQuest?.currencyReward.amount})`}
            </div>
            {activeQuest?.items
              ? activeQuest.items.map((reward) => (
                  <div className="itemReward">
                    <img
                      className="placeholderItem"
                      src={placeholderItemImg}
                    ></img>
                    {reward}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskWindow;
