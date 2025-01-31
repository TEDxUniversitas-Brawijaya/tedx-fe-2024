import { IOrderDiscount } from "@/types/order-types";

export function getDiscount(
  price: number,
  amount: number,
  event: string,
  type: string,
  dateDiscounts: IOrderDiscount[],
) {
  let discountPercentage = 0;
  let label = undefined;
  let notes = undefined;
  let priceAfter = price * amount;

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();

  const isPropa3 = event.includes("propa3");

  const isDiscountDate =
    currentMonth === 1 && (currentDate === 2 || currentDate === 14);

  if (!isPropa3) {
    if (isDiscountDate) {
      discountPercentage = 10;

      let stock = 0;

      switch (currentDate) {
        case 2:
          label = "Diskon 2.2 (10%)";
          stock = dateDiscounts[0]?.stock || 0;
          break;
        case 14:
          label = "Diskon Valentine (10%)";
          stock = dateDiscounts[1]?.stock || 0;

          break;
      }

      if (amount > stock) {
        notes = `* Kuota diskon hanya tersisa ${stock}. Potongan harga hanya dikenakan pada tiket sejumlah kuota yang tersedia`;

        const discountedAmount = stock;
        const normalAmount = amount - stock;

        const discountedPrice =
          discountedAmount * price * (1 - discountPercentage / 100);
        const normalPrice = normalAmount * price;

        priceAfter = discountedPrice + normalPrice;
      } else {
        priceAfter = price * amount * (1 - discountPercentage / 100);
      }
    } else if (type.includes("normal")) {
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

      priceAfter = price * amount * (1 - discountPercentage / 100);
    }
  }

  return {
    priceBefore: price * amount,
    priceAfter,
    label,
    notes,
  };
}
