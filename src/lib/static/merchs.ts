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

export type MerchFilter = keyof typeof merchsData;
