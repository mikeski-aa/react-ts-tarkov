export interface ITraders {
  name: string;
  image: string;
  reputation: number;
  resetTimer: number;
}

const traders: ITraders[] = [
  { name: "Prapor", image: "prapor.webp", reputation: 0.78, resetTimer: 6000 },
  {
    name: "Therapis",
    image: "therapist.webp",
    reputation: 0.5,
    resetTimer: 60000,
  },
  { name: "Skier", image: "skier.webp", reputation: 1.09, resetTimer: 5432 },
  {
    name: "Peacekeeper",
    image: "peacekeeper.webp",
    reputation: 1.53,
    resetTimer: 513513,
  },
  {
    name: "Mechanic",
    image: "mechanic.webp",
    reputation: 0.2,
    resetTimer: 2311,
  },
  { name: "Ragman", image: "ragman.webp", reputation: 0.1, resetTimer: 1231 },
  { name: "Jaeger", image: "jaeger.webp", reputation: 0.45, resetTimer: 3333 },
  { name: "Ref", image: "ref.webp", reputation: 0.33, resetTimer: 3123156 },
  { name: "Fence", image: "fence.webp", reputation: -0.58, resetTimer: 1313 },
];

export default traders;
