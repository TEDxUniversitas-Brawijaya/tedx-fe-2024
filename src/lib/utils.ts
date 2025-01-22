import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface IFormatPriceOptions {
  useSymbol?: boolean; // Include 'Rp' symbol
  useSpacing?: boolean; // Space between symbol and number
  decimals?: number; // Number of decimal places
  useDecimal?: boolean; // Show/hide decimal places
  compactNumber?: boolean; // Use compact format (e.g., 1.5jt for 1,500,000)
}

export const formatToRupiah = (
  amount: number | string,
  options: IFormatPriceOptions = {},
): string => {
  const {
    useSymbol = true,
    useSpacing = true,
    decimals = 0,
    useDecimal = false,
    compactNumber = false,
  } = options;

  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) {
    return "Invalid amount";
  }

  if (compactNumber) {
    if (numAmount >= 1000000000) {
      return `${(numAmount / 1000000000).toFixed(1)}M`;
    }
    if (numAmount >= 1000000) {
      return `${(numAmount / 1000000).toFixed(1)}jt`;
    }
    if (numAmount >= 1000) {
      return `${(numAmount / 1000).toFixed(1)}rb`;
    }
  }

  const formatted = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: useDecimal ? decimals : 0,
    maximumFractionDigits: useDecimal ? decimals : 0,
  }).format(numAmount);

  const symbol = useSymbol ? "Rp" : "";
  const spacing = useSpacing && useSymbol ? " " : "";

  return `${symbol}${spacing}${formatted}`;
};
