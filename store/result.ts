import type { cointype } from "@/lib/types";
import { create } from "zustand";

type ResultState = {
  result: cointype[] | null;
  setResult: (result: cointype[] | null) => void;
  totalAmount: number;
};

export const useCoinResultStore = create<ResultState>((set) => ({
  result: null,
  setResult: (result) => set({ result }),
  totalAmount: 0,
}));

export const useTotalAmount = () => {
  return useCoinResultStore((state) => {
    const { result } = state;
    if (!result) return 0;

    return result.reduce((total, coin) => total + coin.amount, 0);
  });
};
