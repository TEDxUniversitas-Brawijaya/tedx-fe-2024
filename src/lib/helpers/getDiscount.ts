export function getDiscount(
  price: number,
  amount: number,
  event: string,
  type: string,
) {
  let discountPercentage = 0;
  let label = null;

  if (!event.includes("propa3") && type.includes("normal")) {
    switch (amount) {
      case 2:
        discountPercentage = 5;
        label = "Diskon Couple (5%)";
        break;
      case 5:
        discountPercentage = 10;
        label = "Diskon Hi-Five (10%)";

        break;
      case 10:
        discountPercentage = 20;
        label = "Diskon TeamX (20%)";

        break;
    }
  }

  return {
    priceBefore: price,
    priceAfter: price - price * (discountPercentage / 100),
    label,
  };
}
