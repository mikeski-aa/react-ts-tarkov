import { IQuest } from "../interfaces";
import { Traders } from "./traderData";

const praporQuests: IQuest[] = [
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

const ragmanQuests: IQuest[] = [
  {
    name: "Fashion Statement",
    trader: Traders.Ragman,
    completed: false,
    repReward: 0.02,
    expReward: 15000,
    items: ["Beanie", "Gzhel-K armor"],
    currencyReward: { name: "Roubles", amount: 100000 },
    description:
      "Yo, fashionista. I need some gear that's as stylish as it is functional. Head out and bring me a Beanie and a Gzhel-K armor. Don't worry about scuffs—I'll fix them up. And hey, watch your back out there. The streets aren't what they used to be.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Beanie",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Gzhel-K armor",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Beanie to Ragman",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Gzhel-K armor to Ragman",
      },
    ],
  },
];

const skierQuests: IQuest[] = [
  {
    name: "Blackmailing",
    trader: Traders.Skier,
    completed: false,
    repReward: 0.05,
    expReward: 25000,
    items: ["SDS Drill", "GP Coin"],
    currencyReward: { name: "Euros", amount: 1000 },
    description:
      "Listen up, weasel. Got a delicate situation that needs your expertise. There's some dirty laundry on the PMCs that I'd like to air out. Retrieve some compromising documents from the office building at Customs. Be discreet and get out clean. Failure is not an option.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Obtain the confidential documents from Customs",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the documents to Skier",
      },
    ],
  },
  {
    name: "Silent Partner",
    trader: Traders.Skier,
    completed: false,
    repReward: 0.04,
    expReward: 23000,
    items: ["SilencerCo Osprey 9", "M4A1 Tactical Grip"],
    currencyReward: { name: "Euros", amount: 800 },
    description:
      "Hey, shadow. I've got a job that requires your knack for subtlety. We need some high-quality suppressors for a little project I've got going. Head to the secret weapon stash on Interchange and retrieve a SilencerCo Osprey 9 and an M4A1 Tactical Grip. Keep it quiet and clean.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Retrieve the SilencerCo Osprey 9 from Interchange",
      },
      {
        completed: false,
        isHandover: false,
        text: "Retrieve the M4A1 Tactical Grip from Interchange",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the SilencerCo Osprey 9 to Skier",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the M4A1 Tactical Grip to Skier",
      },
    ],
  },
  {
    name: "Market Manipulation",
    trader: Traders.Skier,
    completed: false,
    repReward: 0.06,
    expReward: 27000,
    items: ["Bitcoin", "Chainlet"],
    currencyReward: { name: "Roubles", amount: 200000 },
    description:
      "Alright, here's the deal. I need you to get your hands on some high-value items to disrupt the market a bit. Head over to the financial district and grab a Bitcoin and a Chainlet. This one's risky, but I trust you can handle it. Don't mess this up.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find a Bitcoin in the financial district",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find a Chainlet in the financial district",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Bitcoin to Skier",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Chainlet to Skier",
      },
    ],
  },
  {
    name: "Corporate Espionage",
    trader: Traders.Skier,
    completed: false,
    repReward: 0.05,
    expReward: 26000,
    items: ["SSD Drive", "Intel Folder"],
    currencyReward: { name: "Dollars", amount: 1500 },
    description:
      "I've got a juicy job for you. We need to gather some intel on a rival corporation. Sneak into their office at The Lab and secure an SSD Drive and an Intel Folder. Watch out for security—this one's going to be heavily guarded. You're not to be seen, understood?",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Obtain the SSD Drive from The Lab",
      },
      {
        completed: false,
        isHandover: false,
        text: "Obtain the Intel Folder from The Lab",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the SSD Drive to Skier",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Intel Folder to Skier",
      },
    ],
  },
];

const mechanicQuests: IQuest[] = [
  {
    name: "Tech Retrieval",
    trader: Traders.Mechanic,
    completed: false,
    repReward: 0.04,
    expReward: 22000,
    items: ["Military Power Filter", "Electric Drill"],
    currencyReward: { name: "Dollars", amount: 1800 },
    description:
      "Hey, techie. Got a special request for you. I need specific high-tech components from the industrial sector. The place is crawling with Scavs and PMCs, so it's not going to be a walk in the park. Your objective is to retrieve a Military Power Filter and an Electric Drill. These items are crucial for my ongoing projects. Don't disappoint me.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Military Power Filter",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Electric Drill",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Military Power Filter to Mechanic",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Electric Drill to Mechanic",
      },
    ],
  },
];

const therapistQuests: IQuest[] = [
  {
    name: "Medical Supplies Run",
    trader: Traders.Therapist,
    completed: false,
    repReward: 0.03,
    expReward: 20000,
    items: ["Salewa Kit", "Pile of Meds"],
    currencyReward: { name: "Roubles", amount: 150000 },
    description:
      "We are running dangerously low on medical supplies, and our wounded won't make it without immediate care. Head over to the Health Resort on Shoreline and gather as many supplies as you can find. The area is crawling with hostiles, so be prepared for a fight. Remember, lives depend on your success. Stay safe out there.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Collect 3 Salewa Kits",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 3 Salewa Kits to Therapist",
      },
    ],
  },
];

const peacekeeperQuests: IQuest[] = [
  {
    name: "Operation Aquatic Freedom",
    trader: Traders.Peacekeeper,
    completed: false,
    repReward: 0.05,
    expReward: 30000,
    items: ["M4A1 assault rifle", "5.56x45 NATO ammo pack"],
    currencyReward: { name: "Dollars", amount: 2500 },
    description:
      "Greetings, contractor. We have an urgent operation that requires your skill set. An important shipment of military supplies has been lost in the harbor area. Your mission is to retrieve these supplies and ensure they do not fall into the wrong hands. Be prepared for heavy resistance, as enemy forces have been reported in the area. Your efforts will be well-compensated. Good luck.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Locate the lost shipment in the harbor",
      },
      {
        completed: false,
        isHandover: false,
        text: "Secure the area from enemy forces",
      },
      {
        completed: false,
        isHandover: true,
        text: "Retrieve the military supplies for Peacekeeper",
      },
    ],
  },
];

export {
  praporQuests,
  ragmanQuests,
  skierQuests,
  therapistQuests,
  mechanicQuests,
  peacekeeperQuests,
};
