import { IQuest } from "../interfaces";
import { Traders } from "./traderData";

const allQuests: IQuest[] = [
  {
    name: "Search Mission",
    trader: Traders.Prapor,
    completed: false,
    repReward: 0.02,
    expReward: 28000,
    items: ["EYE MK2 Professional hand held compass", "Woods plan map"],
    currencyReward: { name: "Roubles", amount: 220000 },
  },
];
