export interface ITraders {
  name: string;
  image: string;
  reputation: number;
  resetTimer: number;
}

const traders: ITraders[] = [
  { name: "Prapor", image: "prapor.webp", reputation: 0.78, resetTimer: 6000 },
];
