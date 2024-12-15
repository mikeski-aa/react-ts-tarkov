import { Dispatch, SetStateAction } from "react";
import { Traders } from "./utils/traderData";

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
}
