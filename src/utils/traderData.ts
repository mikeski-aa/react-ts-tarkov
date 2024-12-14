import { ITraders } from "../interfaces";

enum Traders {
  Prapor,
  Therpist,
  Skier,
  Peacekeeper,
  Mechanic,
  Ragman,
  Jaeger,
  Ref,
  Fence,
}

const tradersData: ITraders[] = [
  {
    name: "Prapor",
    image: "prapor.webp",
    reputation: 0.78,
    resetTimer: 6000,
    trader: Traders.Prapor,
  },
  {
    name: "Therapist",
    image: "therapist.webp",
    reputation: 0.5,
    resetTimer: 60000,
    trader: Traders.Therpist,
  },
  {
    name: "Skier",
    image: "skier.webp",
    reputation: 1.09,
    resetTimer: 5432,
    trader: Traders.Skier,
  },
  {
    name: "Peacekeeper",
    image: "peacekeeper.webp",
    reputation: 1.53,
    resetTimer: 513513,
    trader: Traders.Peacekeeper,
  },
  {
    name: "Mechanic",
    image: "mechanic.webp",
    reputation: 0.2,
    resetTimer: 2311,
    trader: Traders.Mechanic,
  },
  {
    name: "Ragman",
    image: "ragman.webp",
    reputation: 0.1,
    resetTimer: 1231,
    trader: Traders.Ragman,
  },
  {
    name: "Jaeger",
    image: "jaeger.webp",
    reputation: 0.45,
    resetTimer: 3333,
    trader: Traders.Jaeger,
  },
  {
    name: "Ref",
    image: "ref.webp",
    reputation: 0.33,
    resetTimer: 3123156,
    trader: Traders.Ref,
  },
  {
    name: "Fence",
    image: "fence.webp",
    reputation: -0.58,
    resetTimer: 1313,
    trader: Traders.Fence,
  },
];

export { tradersData, Traders };
