import { Dispatch, SetStateAction } from "react";
import {
  Locations,
  QuestStatus,
  Traders,
  WindowState,
} from "./utils/traderData";

export interface IGridObject {
  name: string;
  width: number;
  height: number;
}

export interface ITraderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface ITraders {
  name: string;
  image: string;
  reputation: number;
  resetTimer: number;
  trader: Traders;
  items: ITraderItem[];
}

export interface IGlobalContext {
  traderSelect: Traders;
  setSelectTrader: Dispatch<SetStateAction<Traders>>;
  traderCurency: string;
  setTraderCurrency: Dispatch<SetStateAction<string>>;
  buyBox: boolean;
  setBuyBox: Dispatch<SetStateAction<boolean>>;
  mainDisplay: WindowState;
  setMainDisplay: Dispatch<SetStateAction<WindowState>>;
}

export interface IQuestRewardItem {
  name: string;
}

export interface ICurrReward {
  name: string;
  amount: number;
}

export interface ISubQuestTask {
  completed: boolean;
  isHandover: boolean;
  text: string;
}

export interface IQuest {
  name: string;
  trader: Traders;
  questStatus: QuestStatus;
  repReward: number;
  expReward: number;
  items: string[];
  currencyReward: ICurrReward;
  description: string;
  subTask: ISubQuestTask[];
  location: Locations;
}
