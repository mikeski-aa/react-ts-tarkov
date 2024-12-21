import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { IQuest } from "../interfaces";
import { GlobalContext } from "../App";
import { Locations, Traders } from "../utils/traderData";
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
  const [filteredQuests, setFilteredQuests] = useState<IQuest[]>([]);
  const [activeQuest, setActiveQuest] = useState<IQuest>();
  const [currentLocations, setCurrentLocations] = useState<string[]>([]);
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    setFilteredQuests([]);
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

  useEffect(() => {
    let tempArray: string[] = [];
    for (let x = 0; x < currentQuests.length; x++) {
      if (!tempArray.includes(currentQuests[x].location)) {
        tempArray.push(currentQuests[x].location);
      }
    }

    setCurrentLocations(tempArray);
  }, [currentQuests]);

  const handleQuestClick = (questName: string) => {
    const filteredQuests = currentQuests.filter(
      (item) => item.name === questName
    );
    if (filteredQuests) {
      setActiveQuest(filteredQuests[0]);
    }
  };

  const handleOptionClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    switch (target.value) {
      case "0":
        setFilteredQuests([]);
        break;

      default:
        let filteredQuests = currentQuests.filter(
          (item) => item.location === target.value
        );
        setFilteredQuests(filteredQuests);
        break;
    }
  };

  return (
    <div className="taskHolder">
      <div className="taskHolderHeader">
        <div className="leftHeader">
          <div className="leftHeaderSection">PLACEHOLDER</div>
          <div className="rightHeaderSection">
            <label htmlFor="locationDropdown">Select quest map</label>
            <select onChange={(e) => handleOptionClick(e)}>
              <option value={0}>All</option>
              {currentLocations.map((location, index) => (
                <option value={location} key={index}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="rightHeader">
          <div className="rightHeaderTitle">{activeQuest?.name}</div>{" "}
          <div className="rightHeaderLocation">{activeQuest?.location}</div>
        </div>
      </div>
      <div className="mainTaskWindow">
        <div className="leftMainList">
          {filteredQuests.length === 0
            ? currentQuests.map((quest, index) => (
                <button
                  className={
                    quest.name === activeQuest?.name
                      ? "questButton active"
                      : "questButton"
                  }
                  onClick={() => handleQuestClick(quest.name)}
                  key={index}
                >
                  <div className="xd"></div>
                  <div className="btnInnerDiv">{quest.name}</div>{" "}
                  <div className="questMap">{quest.location}</div>
                </button>
              ))
            : filteredQuests.map((quest, index) => (
                <button
                  className={
                    quest.name === activeQuest?.name
                      ? "questButton active"
                      : "questButton"
                  }
                  onClick={() => handleQuestClick(quest.name)}
                  key={index}
                >
                  <div className="xd"></div>
                  <div className="btnInnerDiv">{quest.name}</div>{" "}
                  <div className="questMap">{quest.location}</div>
                </button>
              ))}
        </div>
        <div className="rightMainQuest">
          <div className="questDetails">
            <img src={palceholderQuestImg} className="questImg"></img>
            <div className="detailsText">{activeQuest?.description}</div>
          </div>
          <div className="questObj">
            {activeQuest?.subTask.map((sub, index) => (
              <div className="taskItem" key={index}>
                <input type="checkbox"></input>
                {sub.text}
              </div>
            ))}
          </div>
          <div className="questRewards">
            <div className="expReward">
              <div className="rewardTxt">+ {activeQuest?.expReward} EXP</div>
            </div>
            <div className="repReward">
              <div className="rewardTxt">
                + {activeQuest?.repReward} REP{" "}
                {activeQuest ? `(${Traders[activeQuest.trader]})` : null}
              </div>
            </div>
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
