import { Dispatch, SetStateAction } from "react";
import { Traders } from "./utils/traderData";

export interface IGridObject {
  name: string;
  width: number;
  height: number;
}

export interface ITraders {
  name: string;
  image: string;
  reputation: number;
  resetTimer: number;
  trader: Traders;
}

export interface IGlobalContext {
  traderSelect: Traders;
  setSelectTrader: Dispatch<SetStateAction<Traders>>;
}