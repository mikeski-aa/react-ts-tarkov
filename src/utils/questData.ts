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
    description:
      "Greetings, warrior. I have a job for you. Long story short, I lost contact with one of my groups, and it's been quite a while ago. When shit hit the fan, I sent them to Woods to pick up some cargo. I'm afraid they got ambushed, the last time I got through, they reported that the USECs were closing in on them from the hills. Investigate it, check if anyone survived. Their convoy had a BRDM, a Bukhanka van, and a truck of some sort, I do not remember what kind exactly. I think that the USECs must have settled somewhere near there too, so stay sharp. Find my convoy and those USECs' camp, if it is really there. Dismissed.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Locate Prapor's missing convoy on Woods",
      },
      {
        completed: true,
        isHandover: false,
        text: "Locate the temporarey USEC camp on woods",
      },
    ],
  },
];
