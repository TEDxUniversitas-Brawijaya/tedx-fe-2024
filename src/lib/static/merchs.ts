export const merchsData = {
  "t-shirt": [
    {
      name: "T-Shirt 1",
      price: 75000,
      image: "/img/merch-tshirt-1.png",
    },
    {
      name: "T-Shirt 2",
      price: 75000,
      image: "/img/merch-tshirt-2.png",
    },
    {
      name: "T-Shirt 3",
      price: 75000,
      image: "/img/merch-tshirt-3.png",
    },
  ],
  workshirt: [
    {
      name: "Workshirt 1",
      price: 155000,
      image: "/img/merch-workshirt-1.png",
    },
    {
      name: "Workshirt 2",
      price: 165000,
      image: "/img/merch-workshirt-2.png",
    },
    {
      name: "Workshirt 3",
      price: 155000,
      image: "/img/merch-workshirt-3.png",
    },
  ],
  stickers: [
    {
      name: "Sticker 1",
      price: 15000,
      image: "/img/merch-sticker-a.png",
    },
    {
      name: "Sticker 2",
      price: 15000,
      image: "/img/merch-sticker-b.png",
    },
  ],
  bags: [
    {
      name: "Bag 1",
      price: 50000,
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "Bag 2",
      price: 50000,
      image: "/img/dummy-merch-hero-section.png",
    },
  ],
  hats: [
    {
      name: "Hat 1",
      price: 65000,
      image: "/img/merch-cap-1.png",
    },
    {
      name: "Hat 2",
      price: 65000,
      image: "/img/merch-cap-2.png",
    },
  ],
};

export type MerchFilter = keyof typeof merchsData;
