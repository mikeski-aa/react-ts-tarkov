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

enum WindowState {
  Trading,
  Tasks,
  Services,
}

const tradersData: ITraders[] = [
  {
    name: "Prapor",
    image: "prapor.webp",
    reputation: 0.78,
    resetTimer: 6000,
    trader: Traders.Prapor,
    items: [
      {
        name: "AK-74N",
        price: 40000,
        quantity: 10,
      },
      {
        name: "5.45x39mm PS",
        price: 200,
        quantity: 1000,
      },
      {
        name: "RGD-5 Grenade",
        price: 3000,
        quantity: 50,
      },
      {
        name: "AK-74M",
        price: 42000,
        quantity: 8,
      },
      {
        name: "6B23-1 Body Armor",
        price: 25000,
        quantity: 5,
      },
      {
        name: "Makarov PM",
        price: 7000,
        quantity: 20,
      },
      {
        name: "9x18mm PM SP7",
        price: 150,
        quantity: 2000,
      },
      {
        name: "VOG-25 Grenade",
        price: 4500,
        quantity: 30,
      },
      {
        name: "Bayonet",
        price: 5000,
        quantity: 15,
      },
      {
        name: "AK-74 Wooden Stock",
        price: 8000,
        quantity: 10,
      },
      {
        name: "PM Pistol Magazine",
        price: 1000,
        quantity: 50,
      },
      {
        name: "Military Battery",
        price: 120000,
        quantity: 3,
      },
      {
        name: "GP-25 Grenade Launcher",
        price: 70000,
        quantity: 7,
      },
      {
        name: "AK-74 Polymer Handguard",
        price: 12000,
        quantity: 15,
      },
      {
        name: "AK-12",
        price: 55000,
        quantity: 6,
      },
      {
        name: "6B47 Helmet",
        price: 20000,
        quantity: 8,
      },
      {
        name: "Grach Pistol",
        price: 9000,
        quantity: 20,
      },
      {
        name: "5.45x39mm BP",
        price: 300,
        quantity: 1500,
      },
      {
        name: "Zarya Flashbang",
        price: 4000,
        quantity: 25,
      },
      {
        name: "AK-74 Buffer Tube",
        price: 6000,
        quantity: 30,
      },
      {
        name: "Army Bandage",
        price: 500,
        quantity: 100,
      },
      {
        name: "Zenit B-33 Dust Cover",
        price: 13000,
        quantity: 10,
      },
      {
        name: "6Sh112 Vest",
        price: 25000,
        quantity: 7,
      },
      {
        name: "TT-33 Tokarev",
        price: 8000,
        quantity: 10,
      },
      {
        name: "AK-74 Zenit B-10 Handguard",
        price: 9000,
        quantity: 15,
      },
      {
        name: "5.45x39mm T",
        price: 200,
        quantity: 2000,
      },
      {
        name: "Kolpak-1S Headset",
        price: 5000,
        quantity: 12,
      },
      {
        name: "AKS-74U",
        price: 35000,
        quantity: 7,
      },
      {
        name: "AK-74 Gas Block",
        price: 6000,
        quantity: 10,
      },
      {
        name: "5.45x39mm PP",
        price: 250,
        quantity: 1000,
      },
      {
        name: "SPOSN Backpack",
        price: 15000,
        quantity: 10,
      },
      {
        name: "VSS Vintorez",
        price: 70000,
        quantity: 4,
      },
      {
        name: "AS VAL",
        price: 75000,
        quantity: 4,
      },
      {
        name: "SV-98",
        price: 60000,
        quantity: 6,
      },
      {
        name: "PSO-1 Scope",
        price: 12000,
        quantity: 15,
      },
      {
        name: "AK-74 Muzzle Brake",
        price: 4000,
        quantity: 30,
      },
      {
        name: "Saiga-12",
        price: 30000,
        quantity: 10,
      },
      {
        name: "SPP Ammo",
        price: 500,
        quantity: 1500,
      },
      {
        name: "AK-74 Picatinny Rail",
        price: 8000,
        quantity: 20,
      },
      {
        name: "GPNVG-18 Night Vision",
        price: 90000,
        quantity: 5,
      },
    ],
  },
  {
    name: "Therapist",
    image: "therapist.webp",
    reputation: 0.5,
    resetTimer: 60000,
    trader: Traders.Therpist,
    items: [
      {
        name: "Salewa First Aid Kit",
        price: 10000,
        quantity: 20,
      },
      {
        name: "Morphine Injector",
        price: 3000,
        quantity: 100,
      },
      {
        name: "Golden Star Balm",
        price: 8000,
        quantity: 15,
      },
      {
        name: "AI-2 Medkit",
        price: 1500,
        quantity: 50,
      },
      {
        name: "Esmarch Tourniquet",
        price: 1200,
        quantity: 40,
      },
      {
        name: "Car First Aid Kit",
        price: 7000,
        quantity: 30,
      },
      {
        name: "Bandage",
        price: 500,
        quantity: 200,
      },
      {
        name: "Propital",
        price: 4000,
        quantity: 50,
      },
      {
        name: "IFAK Personal Tactical First Aid Kit",
        price: 9000,
        quantity: 10,
      },
      {
        name: "Splint",
        price: 600,
        quantity: 70,
      },
    ],
  },
  {
    name: "Skier",
    image: "skier.webp",
    reputation: 1.09,
    resetTimer: 5432,
    trader: Traders.Skier,
    items: [
      {
        name: "VSS Vintorez",
        price: 70000,
        quantity: 5,
      },
      {
        name: "6B43 Armor",
        price: 50000,
        quantity: 7,
      },
      {
        name: "PSO-1 Scope",
        price: 12000,
        quantity: 20,
      },
      {
        name: "P226R Pistol",
        price: 30000,
        quantity: 15,
      },
      {
        name: "9x19mm PBP gzh",
        price: 250,
        quantity: 1500,
      },
      {
        name: "SV-98 Sniper Rifle",
        price: 65000,
        quantity: 6,
      },
      {
        name: "Balaclava",
        price: 2000,
        quantity: 30,
      },
      {
        name: "Saiga-12",
        price: 35000,
        quantity: 10,
      },
      {
        name: "Saiga 12 Gauge Magazine",
        price: 500,
        quantity: 100,
      },
      {
        name: "Night Vision Goggles",
        price: 20000,
        quantity: 8,
      },
    ],
  },
  {
    name: "Peacekeeper",
    image: "peacekeeper.webp",
    reputation: 1.53,
    resetTimer: 513513,
    trader: Traders.Peacekeeper,
    items: [
      {
        name: "M4A1",
        price: 80000,
        quantity: 8,
      },
      {
        name: "5.56x45mm M855A1",
        price: 500,
        quantity: 800,
      },
      {
        name: "AN/PVS-14 Night Vision",
        price: 60000,
        quantity: 10,
      },
      {
        name: "M9A3 Pistol",
        price: 25000,
        quantity: 12,
      },
      {
        name: "M67 Grenade",
        price: 3500,
        quantity: 40,
      },
      {
        name: "M4 Suppressor",
        price: 15000,
        quantity: 5,
      },
      {
        name: "Helmet FAST MT",
        price: 70000,
        quantity: 7,
      },
      {
        name: "Glock 17",
        price: 20000,
        quantity: 15,
      },
      {
        name: "Glock 17 Magazine",
        price: 700,
        quantity: 200,
      },
      {
        name: "MRE Lunch",
        price: 1000,
        quantity: 60,
      },
    ],
  },
  {
    name: "Mechanic",
    image: "mechanic.webp",
    reputation: 0.2,
    resetTimer: 2311,
    trader: Traders.Mechanic,
    items: [
      {
        name: "MP5",
        price: 45000,
        quantity: 10,
      },
      {
        name: "9x19mm AP 6.3",
        price: 400,
        quantity: 1200,
      },
      {
        name: "Weapon Repair Kit",
        price: 25000,
        quantity: 5,
      },
      {
        name: "TT Pistol",
        price: 15000,
        quantity: 30,
      },
      {
        name: "TT 7.62x25mm",
        price: 100,
        quantity: 3000,
      },
      {
        name: "AK-74 Handguard",
        price: 8000,
        quantity: 25,
      },
      {
        name: "AR-15 Lower Receiver",
        price: 22000,
        quantity: 10,
      },
      {
        name: "Foregrip",
        price: 5000,
        quantity: 20,
      },
      {
        name: "Picatinny Rail",
        price: 3000,
        quantity: 50,
      },
      {
        name: "Pistol Suppressor",
        price: 12000,
        quantity: 10,
      },
    ],
  },
  {
    name: "Ragman",
    image: "ragman.webp",
    reputation: 0.1,
    resetTimer: 1231,
    trader: Traders.Ragman,
    items: [
      {
        name: "BlackRock Chest Rig",
        price: 20000,
        quantity: 15,
      },
      {
        name: "Tactical Sling Bag",
        price: 7000,
        quantity: 30,
      },
      {
        name: "UNTAR Helmet",
        price: 25000,
        quantity: 10,
      },
      {
        name: "6Sh118 Raid Backpack",
        price: 35000,
        quantity: 5,
      },
      {
        name: "Scav Vest",
        price: 5000,
        quantity: 40,
      },
      {
        name: "Maska-1SCh Helmet",
        price: 45000,
        quantity: 7,
      },
      {
        name: "LBT-2670 Slim Field Med Pack",
        price: 15000,
        quantity: 20,
      },
      {
        name: "Fleece Balaclava",
        price: 2000,
        quantity: 50,
      },
      {
        name: "HighCom Trooper Armor",
        price: 60000,
        quantity: 6,
      },
      {
        name: "Crye Precision Jumpable Plate Carrier",
        price: 80000,
        quantity: 4,
      },
    ],
  },
  {
    name: "Jaeger",
    image: "jaeger.webp",
    reputation: 0.45,
    resetTimer: 3333,
    trader: Traders.Jaeger,
    items: [
      {
        name: "SV-98",
        price: 60000,
        quantity: 6,
      },
      {
        name: "7.62x54mmR 7N1",
        price: 300,
        quantity: 900,
      },
      {
        name: "Hunter Knife",
        price: 5000,
        quantity: 40,
      },
      {
        name: "Pilgrim Tourist Backpack",
        price: 22000,
        quantity: 12,
      },
      {
        name: "Sniper Scarf",
        price: 3000,
        quantity: 25,
      },
      {
        name: "PP-91 Kedr",
        price: 25000,
        quantity: 15,
      },
      {
        name: "APB Pistol",
        price: 18000,
        quantity: 20,
      },
      {
        name: "MP-153 Shotgun",
        price: 20000,
        quantity: 18,
      },
      {
        name: "Hunting Vest",
        price: 9000,
        quantity: 30,
      },
      {
        name: "SP-6 Ammo",
        price: 200,
        quantity: 1500,
      },
    ],
  },
  {
    name: "Ref",
    image: "ref.webp",
    reputation: 0.33,
    resetTimer: 3123156,
    trader: Traders.Ref,
    items: [
      {
        name: "Mosin Rifle",
        price: 35000,
        quantity: 10,
      },
      {
        name: "7.62x54mmR LPS Gzh",
        price: 250,
        quantity: 1000,
      },
      {
        name: "Flare Gun",
        price: 15000,
        quantity: 5,
      },
      {
        name: "SV-98 Scope",
        price: 20000,
        quantity: 12,
      },
      {
        name: "Tactical Gloves",
        price: 5000,
        quantity: 30,
      },
      {
        name: "Military Battery",
        price: 120000,
        quantity: 3,
      },
      {
        name: "Heavy Duty Backpack",
        price: 40000,
        quantity: 8,
      },
      {
        name: "Night Vision Goggles",
        price: 60000,
        quantity: 7,
      },
      {
        name: "Camouflage Net",
        price: 8000,
        quantity: 15,
      },
      {
        name: "Emergency Water Ration",
        price: 2000,
        quantity: 50,
      },
    ],
  },
  {
    name: "Fence",
    image: "fence.webp",
    reputation: -0.58,
    resetTimer: 1313,
    trader: Traders.Fence,
    items: [
      { name: "Random Scav Item", price: 10000, quantity: 100 },
      { name: "Mystery Box", price: 50000, quantity: 10 },
      { name: "Stolen Goods", price: 20000, quantity: 20 },
      { name: "Damaged Hard Drive", price: 5000, quantity: 50 },
      { name: "Rusty AK-47", price: 30000, quantity: 8 },
      { name: "Broken iPhone", price: 10000, quantity: 30 },
      { name: "Contraband Cigarettes", price: 15000, quantity: 25 },
      { name: "Black Market Keycard", price: 60000, quantity: 5 },
      { name: "Unmarked Ammunition Box", price: 25000, quantity: 12 },
      { name: "Worn Military Uniform", price: 40000, quantity: 7 },
    ],
  },
];

export { tradersData, Traders, WindowState };
