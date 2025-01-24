export const merchsData = {
  "t-shirt": [
    {
      name: "T-Shirt 1",
      price: 75000,
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "T-Shirt 2",
      price: 75000,
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "T-Shirt 3",
      price: 75000,
      image: "/img/dummy-merch-hero-section.png",
    },
  ],
  workshirt: [
    {
      name: "Workshirt 1",
      price: 155000,
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "Workshirt 2",
      price: 165000,
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "Workshirt 3",
      price: 155000,
      image: "/img/dummy-merch-hero-section.png",
    },
  ],
  stickers: [
    {
      name: "Sticker 1",
      price: 15000,
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "Sticker 2",
      price: 15000,
      image: "/img/dummy-merch-hero-section.png",
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
      image: "/img/dummy-merch-hero-section.png",
    },
    {
      name: "Hat 2",
      price: 65000,
      image: "/img/dummy-merch-hero-section.png",
    },
  ],
};

export type MerchFilter = keyof typeof merchsData;
