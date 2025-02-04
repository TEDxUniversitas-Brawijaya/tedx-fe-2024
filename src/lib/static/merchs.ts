import { IMerchBundlingData } from "@/types/merch-types";

export const merchsData = {
  tshirt: [
    {
      name: "T-Shirt 1",
      price: 75000,
      image: "/img/merch-tshirt-1.png",
      hasSize: true,
    },
    {
      name: "T-Shirt 2",
      price: 75000,
      image: "/img/merch-tshirt-2.png",
      hasSize: true,
    },
    {
      name: "T-Shirt 3",
      price: 75000,
      image: "/img/merch-tshirt-3.png",
      hasSize: true,
    },
  ],
  workshirt: [
    {
      name: "Workshirt 1",
      price: 160_000,
      image: "/img/merch-workshirt-1.png",
      hasSize: true,
    },
    {
      name: "Workshirt 2",
      price: 160_000,
      image: "/img/merch-workshirt-2.png",
      hasSize: true,
    },
  ],
  sticker: [
    {
      name: "Sticker 1",
      price: 15000,
      image: "/img/merch-sticker-1.png",
      hasSize: false,
    },
    {
      name: "Sticker 2",
      price: 15000,
      image: "/img/merch-sticker-2.png",
      hasSize: false,
    },
  ],
  totebag: [
    {
      name: "Totebag 1",
      price: 50000,
      image: "/img/merch-totebag-1.png",
      hasSize: false,
    },
  ],
  hat: [
    {
      name: "Hat 1",
      price: 65000,
      image: "/img/merch-hat-1.png",
      hasSize: false,
    },
    {
      name: "Hat 2",
      price: 65000,
      image: "/img/merch-hat-2.png",
      hasSize: false,
    },
  ],
};

export const merchBundlingData: IMerchBundlingData[] = [
  {
    name: "Bundling 1",
    price: 130000,
    image: "/img/merch-bundling-1.png",
    hasSize: true,
    items: ["tshirt", "hat"],
  },
  {
    name: "Bundling 2",
    price: 80000,
    image: "/img/merch-bundling-2.png",
    hasSize: true,
    items: ["tshirt", "sticker"],
  },
  {
    name: "Bundling 3",
    price: 115000,
    image: "/img/merch-bundling-3.png",
    hasSize: true,
    items: ["tshirt", "totebag"],
  },
  {
    name: "Bundling 4",
    price: 210000,
    image: "/img/merch-bundling-4.png",
    hasSize: true,
    items: ["workshirt", "hat"],
  },
  {
    name: "Bundling 5",
    price: 170000,
    image: "/img/merch-bundling-5.png",
    hasSize: true,
    items: ["workshirt", "sticker"],
  },
  {
    name: "Bundling 6",
    price: 195000,
    image: "/img/merch-bundling-6.png",
    hasSize: true,
    items: ["workshirt", "totebag"],
  },
  {
    name: "Bundling 7",
    price: 105000,
    image: "/img/merch-bundling-7.png",
    hasSize: false,
    items: ["totebag", "hat"],
  },
  {
    name: "Bundling 8",
    price: 55000,
    image: "/img/merch-bundling-8.png",
    hasSize: false,
    items: ["totebag", "sticker"],
  },
  {
    name: "Bundling 9",
    price: 70000,
    image: "/img/merch-bundling-9.png",
    hasSize: false,
    items: ["hat", "sticker"],
  },
];

export type MerchFilter = keyof typeof merchsData;
