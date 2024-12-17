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
        text: "Locate the temporary USEC camp on Woods",
      },
    ],
  },
  {
    name: "Lost Goods",
    trader: Traders.Prapor,
    completed: false,
    repReward: 0.03,
    expReward: 30000,
    items: ["Military Cable", "Secure Flash Drive"],
    currencyReward: { name: "Roubles", amount: 250000 },
    description:
      "Comrade, we have a problem. A shipment of crucial supplies was intercepted by the enemy. Your mission is to recover a Military Cable and a Secure Flash Drive from the Customs area. Be cautious; the area is heavily patrolled. Complete the mission and you will be handsomely rewarded.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Retrieve the Military Cable from Customs",
      },
      {
        completed: false,
        isHandover: false,
        text: "Retrieve the Secure Flash Drive from Customs",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Military Cable to Prapor",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Secure Flash Drive to Prapor",
      },
    ],
  },
  {
    name: "Enemy Intelligence",
    trader: Traders.Prapor,
    completed: false,
    repReward: 0.04,
    expReward: 32000,
    items: ["Intelligence Folder", "Encrypted Data Key"],
    currencyReward: { name: "Roubles", amount: 270000 },
    description:
      "We need to gather intelligence on enemy movements. Your mission is to infiltrate the enemy base on Reserve and secure an Intelligence Folder and an Encrypted Data Key. This information is vital for our operations. Proceed with caution and ensure you are not detected.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Obtain the Intelligence Folder from Reserve",
      },
      {
        completed: false,
        isHandover: false,
        text: "Obtain the Encrypted Data Key from Reserve",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Intelligence Folder to Prapor",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Encrypted Data Key to Prapor",
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
  {
    name: "Winter Collection",
    trader: Traders.Ragman,
    completed: false,
    repReward: 0.03,
    expReward: 18000,
    items: ["Fleece Jacket", "Thermal Pants"],
    currencyReward: { name: "Roubles", amount: 120000 },
    description:
      "Hey there, trendsetter. Winter is coming and I need some warm gear to showcase in my new collection. Find a Fleece Jacket and Thermal Pants. The weather's rough, and so are the streets, so be prepared for anything. Bring them back in good condition.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Fleece Jacket",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Thermal Pants",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Fleece Jacket to Ragman",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Thermal Pants to Ragman",
      },
    ],
  },
  {
    name: "Urban Explorer",
    trader: Traders.Ragman,
    completed: false,
    repReward: 0.04,
    expReward: 20000,
    items: ["Urban Backpack", "Sneakers"],
    currencyReward: { name: "Roubles", amount: 150000 },
    description:
      "Time to gear up for some urban exploration. I need an Urban Backpack and a pair of sturdy Sneakers. These items need to be in top condition for my next showcase. The city isn't what it used to be, so keep your eyes peeled and stay safe.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Urban Backpack",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 pair of Sneakers",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Urban Backpack to Ragman",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 pair of Sneakers to Ragman",
      },
    ],
  },
  {
    name: "Camouflage Craze",
    trader: Traders.Ragman,
    completed: false,
    repReward: 0.03,
    expReward: 22000,
    items: ["Camouflage Jacket", "Camouflage Pants"],
    currencyReward: { name: "Roubles", amount: 130000 },
    description:
      "Blending in is the new black. I need a full set of camouflage gear for my new line. Find a Camouflage Jacket and Camouflage Pants. The hostile environment might make this a bit tricky, but I trust you can handle it. Stay sharp.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Camouflage Jacket",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 pair of Camouflage Pants",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Camouflage Jacket to Ragman",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 pair of Camouflage Pants to Ragman",
      },
    ],
  },
  {
    name: "Retro Revival",
    trader: Traders.Ragman,
    completed: false,
    repReward: 0.04,
    expReward: 25000,
    items: ["Leather Jacket", "Vintage Sunglasses"],
    currencyReward: { name: "Roubles", amount: 170000 },
    description:
      "What's old is new again. I'm looking to add some retro flair to my collection. I need a Leather Jacket and a pair of Vintage Sunglasses. These items are rare, so keep an eye out and bring them back safely. Style never goes out of fashion.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Leather Jacket",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 pair of Vintage Sunglasses",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Leather Jacket to Ragman",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 pair of Vintage Sunglasses to Ragman",
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
  {
    name: "Circuit Breaker",
    trader: Traders.Mechanic,
    completed: false,
    repReward: 0.05,
    expReward: 24000,
    items: ["Circuit Board", "Wires"],
    currencyReward: { name: "Dollars", amount: 2100 },
    description:
      "We need to upgrade our power systems, and for that, I'll need some Circuit Boards and Wires. Search the abandoned factories and secure these components. The place is risky, but I trust you can handle it. Bring them back in one piece.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 2 Circuit Boards",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 5 Wires",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 2 Circuit Boards to Mechanic",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 5 Wires to Mechanic",
      },
    ],
  },
  {
    name: "Weapon Calibration",
    trader: Traders.Mechanic,
    completed: false,
    repReward: 0.04,
    expReward: 23000,
    items: ["Sniper Rifle Scope", "Adjustable Wrench"],
    currencyReward: { name: "Dollars", amount: 1900 },
    description:
      "Our marksmen need their weapons calibrated for upcoming missions. I need you to get a high-quality Sniper Rifle Scope and an Adjustable Wrench. Check the warehouses and bring these items back. Precision is key.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Sniper Rifle Scope",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Adjustable Wrench",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Sniper Rifle Scope to Mechanic",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 1 Adjustable Wrench to Mechanic",
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
  {
    name: "Operation Lifeline",
    trader: Traders.Therapist,
    completed: false,
    repReward: 0.04,
    expReward: 25000,
    items: ["IFAK Medkit", "Bandage"],
    currencyReward: { name: "Roubles", amount: 180000 },
    description:
      "A group of civilians is trapped in the Interchange mall and desperately needs medical attention. Your mission is to provide them with essential medical supplies. Gather IFAK Medkits and Bandages from the area and ensure their safe delivery. Time is of the essence. Move quickly and carefully.",
    subTask: [
      { completed: false, isHandover: false, text: "Collect 2 IFAK Medkits" },
      { completed: false, isHandover: false, text: "Collect 5 Bandages" },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 2 IFAK Medkits to Therapist",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 5 Bandages to Therapist",
      },
    ],
  },
  {
    name: "Antidote Search",
    trader: Traders.Therapist,
    completed: false,
    repReward: 0.05,
    expReward: 27000,
    items: ["Antidote Sample", "Morphine Injector"],
    currencyReward: { name: "Roubles", amount: 200000 },
    description:
      "We've received reports of a new type of toxin being used by hostile forces. I need you to find an antidote sample and Morphine Injectors from the laboratory in The Lab. This mission is critical to ensure we can treat and save those affected. Proceed with caution.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Antidote Sample in The Lab",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 3 Morphine Injectors in The Lab",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Antidote Sample to Therapist",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over 3 Morphine Injectors to Therapist",
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
  {
    name: "Recon Mission",
    trader: Traders.Peacekeeper,
    completed: false,
    repReward: 0.04,
    expReward: 28000,
    items: ["Tactical Vest", "Night Vision Goggles"],
    currencyReward: { name: "Dollars", amount: 2200 },
    description:
      "We need intel on enemy troop movements in the Forest. Your task is to conduct a recon mission and gather information on their positions. This mission is critical for planning our next operations. Stay undetected and bring back valuable data. Good luck.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Scout the enemy positions in the Forest",
      },
      {
        completed: false,
        isHandover: true,
        text: "Report back to Peacekeeper with the intel",
      },
    ],
  },
  {
    name: "Operation Silent Night",
    trader: Traders.Peacekeeper,
    completed: false,
    repReward: 0.05,
    expReward: 32000,
    items: ["Suppressed Pistol", "Night Vision Scope"],
    currencyReward: { name: "Dollars", amount: 3000 },
    description:
      "We have a high-priority target that needs to be eliminated silently. Your mission is to infiltrate the target's base at night and execute the target without raising any alarms. Use the suppressed weapons provided and make sure to stay hidden. This is a zero-failure mission.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Infiltrate the target's base at night",
      },
      {
        completed: false,
        isHandover: false,
        text: "Eliminate the target without raising alarms",
      },
      {
        completed: false,
        isHandover: true,
        text: "Report back to Peacekeeper with mission success",
      },
    ],
  },
  {
    name: "Supply Drop Retrieval",
    trader: Traders.Peacekeeper,
    completed: false,
    repReward: 0.03,
    expReward: 25000,
    items: ["Medical Kit", "Ammunition Box"],
    currencyReward: { name: "Dollars", amount: 2000 },
    description:
      "A supply drop intended for our allies has been intercepted by enemy forces. Your mission is to recover the supplies and ensure they reach their intended destination. The drop contains essential medical supplies and ammunition. Be swift and precise.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Locate the intercepted supply drop",
      },
      {
        completed: false,
        isHandover: false,
        text: "Retrieve the medical supplies and ammunition",
      },
      {
        completed: false,
        isHandover: true,
        text: "Deliver the supplies to Peacekeeper",
      },
    ],
  },
  {
    name: "Hostage Rescue Operation",
    trader: Traders.Peacekeeper,
    completed: false,
    repReward: 0.06,
    expReward: 35000,
    items: ["Rescue Harness", "Flashbang Grenade"],
    currencyReward: { name: "Dollars", amount: 3500 },
    description:
      "We have intel that a group of hostages is being held by enemy forces. Your mission is to infiltrate the enemy camp, rescue the hostages, and ensure their safe return. Use the provided rescue harness and flashbang grenades to assist in the operation. Time is of the essence.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Infiltrate the enemy camp",
      },
      {
        completed: false,
        isHandover: false,
        text: "Rescue the hostages",
      },
      {
        completed: false,
        isHandover: true,
        text: "Ensure the hostages' safe return to Peacekeeper",
      },
    ],
  },
];

const jaegerQuests: IQuest[] = [
  {
    name: "Nature's Bounty",
    trader: Traders.Jaeger,
    completed: false,
    repReward: 0.03,
    expReward: 20000,
    items: ["Medical Bloodset", "Survival Kit"],
    currencyReward: { name: "Roubles", amount: 100000 },
    description:
      "Greetings, hunter. We need to gather some natural supplies to aid our survival in the wild. Your mission is to collect a Medical Bloodset and a Survival Kit from the woods. These items are essential for our continued survival. Keep your wits about you and stay sharp.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Medical Bloodset",
      },
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Survival Kit",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Medical Bloodset to Jaeger",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Survival Kit to Jaeger",
      },
    ],
  },
  {
    name: "Big Game Hunt",
    trader: Traders.Jaeger,
    completed: false,
    repReward: 0.04,
    expReward: 25000,
    items: ["Hunter's Rifle", "Box of Ammo"],
    currencyReward: { name: "Roubles", amount: 150000 },
    description:
      "We've got a big one on the loose. Your task is to track and take down a dangerous predator in the forest. You'll need a Hunter's Rifle and a Box of Ammo for this mission. Be careful—this one's not going down without a fight. Good hunting.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Hunter's Rifle",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Box of Ammo",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Hunter's Rifle to Jaeger",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Box of Ammo to Jaeger",
      },
    ],
  },
  {
    name: "Wilderness Survival",
    trader: Traders.Jaeger,
    completed: false,
    repReward: 0.05,
    expReward: 30000,
    items: ["Water Filter", "Firestarter Kit"],
    currencyReward: { name: "Roubles", amount: 200000 },
    description:
      "Surviving in the wilderness isn't easy. We need some essential items to ensure we can make it through. Your mission is to find a Water Filter and a Firestarter Kit. These items are vital for our survival. Stay vigilant and move quietly.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Water Filter",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Firestarter Kit",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Water Filter to Jaeger",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Firestarter Kit to Jaeger",
      },
    ],
  },
  {
    name: "Foraging Expedition",
    trader: Traders.Jaeger,
    completed: false,
    repReward: 0.03,
    expReward: 22000,
    items: ["Herbal Mix", "Antibiotics"],
    currencyReward: { name: "Roubles", amount: 120000 },
    description:
      "It's time to gather some medicinal herbs and supplies. Head into the wilderness and collect a Herbal Mix and Antibiotics. These natural remedies are crucial for treating our wounded and sick. Keep an eye out for any dangers and return safely.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Herbal Mix",
      },
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Antibiotics",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Herbal Mix to Jaeger",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Antibiotics to Jaeger",
      },
    ],
  },
  {
    name: "Wildlife Preservation",
    trader: Traders.Jaeger,
    completed: false,
    repReward: 0.04,
    expReward: 28000,
    items: ["Tranquilizer Gun", "Animal Trap"],
    currencyReward: { name: "Roubles", amount: 170000 },
    description:
      "We've noticed a decline in local wildlife. Your mission is to help preserve the wildlife by capturing and relocating endangered animals. You'll need a Tranquilizer Gun and an Animal Trap. Be gentle and ensure the safety of these creatures.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Tranquilizer Gun",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Animal Trap",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Tranquilizer Gun to Jaeger",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Animal Trap to Jaeger",
      },
    ],
  },
];

const refQuests: IQuest[] = [
  {
    name: "Gladiator Trials",
    trader: Traders.Ref,
    completed: false,
    repReward: 0.04,
    expReward: 28000,
    items: ["Combat Knife", "Adrenaline Shot"],
    currencyReward: { name: "Roubles", amount: 150000 },
    description:
      "Welcome to the arena, warrior. Your first task is to survive the Gladiator Trials. Prove your worth by bringing back a Combat Knife and an Adrenaline Shot from your fallen opponents. This will be a test of your strength and survival skills. Fight with honor.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Combat Knife",
      },
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Adrenaline Shot",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Combat Knife to Referee",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Adrenaline Shot to Referee",
      },
    ],
  },
  {
    name: "Champion's Challenge",
    trader: Traders.Ref,
    completed: false,
    repReward: 0.05,
    expReward: 32000,
    items: ["Champion's Trophy", "Survival Kit"],
    currencyReward: { name: "Roubles", amount: 180000 },
    description:
      "Prove that you are the true champion of the arena by defeating the reigning champion. Bring back the Champion's Trophy as proof of your victory and a Survival Kit to demonstrate your resourcefulness. Only the strongest will succeed.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Defeat the reigning champion and collect the Champion's Trophy",
      },
      {
        completed: false,
        isHandover: false,
        text: "Find 1 Survival Kit",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Champion's Trophy to Referee",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Survival Kit to Referee",
      },
    ],
  },
  {
    name: "Arena Survival",
    trader: Traders.Ref,
    completed: false,
    repReward: 0.03,
    expReward: 26000,
    items: ["Medical Kit", "Energy Drink"],
    currencyReward: { name: "Roubles", amount: 140000 },
    description:
      "Survival in the arena requires quick thinking and swift action. Your mission is to gather a Medical Kit and an Energy Drink to ensure you can withstand the challenges ahead. These items are essential for surviving the relentless combat in the arena.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Medical Kit",
      },
      {
        completed: false,
        isHandover: false,
        text: "Collect 1 Energy Drink",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Medical Kit to Referee",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Energy Drink to Referee",
      },
    ],
  },
  {
    name: "Weapon Mastery",
    trader: Traders.Peacekeeper,
    completed: false,
    repReward: 0.06,
    expReward: 35000,
    items: ["AK-74N Assault Rifle", "5.45x39mm Ammo Box"],
    currencyReward: { name: "Dollars", amount: 3000 },
    description:
      "Warrior, it is time to prove your prowess with a variety of weapons. Your mission is to showcase your mastery by eliminating enemies using specific weapons. This operation will test your versatility and combat skills. Return successful, and you'll be richly rewarded. Good luck, soldier.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Eliminate 10 enemies using an AK-74N Assault Rifle",
      },
      {
        completed: false,
        isHandover: false,
        text: "Eliminate 5 enemies using a shotgun",
      },
      {
        completed: false,
        isHandover: false,
        text: "Eliminate 3 enemies using a sniper rifle",
      },
      {
        completed: false,
        isHandover: true,
        text: "Report back to Peacekeeper with your success",
      },
    ],
  },
];

const fenceQuests: IQuest[] = [
  {
    name: "Scavenger's Trade",
    trader: Traders.Fence,
    completed: false,
    repReward: 0.04,
    expReward: 25000,
    items: ["Rare Loot Item", "Valuable Artifact"],
    currencyReward: { name: "Roubles", amount: 120000 },
    description:
      "Listen up, wanderer. The time has come to prove your worth as a Scav. Your mission is to head into the wilds and bring back some rare loot that only a seasoned scavenger can find. Play smart, avoid unnecessary fights, and return with valuable items for trade. This is your chance to make a name for yourself in the Scav community.",
    subTask: [
      {
        completed: false,
        isHandover: false,
        text: "Play as a Scav and obtain a Rare Loot Item",
      },
      {
        completed: false,
        isHandover: false,
        text: "Play as a Scav and obtain a Valuable Artifact",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Rare Loot Item to Fence",
      },
      {
        completed: false,
        isHandover: true,
        text: "Hand over the Valuable Artifact to Fence",
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
  jaegerQuests,
  refQuests,
  fenceQuests,
};
